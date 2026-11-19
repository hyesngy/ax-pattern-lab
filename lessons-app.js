(() => {
  'use strict';

  const lessons = Array.isArray(window.AX_LESSONS) ? window.AX_LESSONS : [];
  const extras = Array.isArray(window.AX_EXTRAS) ? window.AX_EXTRAS : [];
  const allLessons = [...lessons, ...extras];
  const byId = new Map(allLessons.map(lesson => [lesson.id, lesson]));
  const main = document.getElementById('main');
  const storageKey = 'ax-pattern-lab-v2';
  const legacyMap = { 1: 'oop', 2: 'solid', 3: 'behavior', 4: 'midterm', 5: 'command-observer', 6: 'structure', 7: 'template-factory', 8: 'design-challenge' };
  const challengeFields = [
    ['initial', '처음 설계와 UML 설명'],
    ['obstacle', '막힌 지점'],
    ['hint', '참고한 힌트'],
    ['revised', '수정한 판단과 코드·UML 근거'],
  ];
  const reflectionFields = [
    ['initial', '처음에는 어떻게 판단했나요?'],
    ['final', '최종 판단은 무엇인가요?'],
    ['evidence', '근거가 된 코드 줄이나 UML 연결은 무엇인가요?'],
    ['question', '아직 남은 의문은 무엇인가요?'],
  ];

  function node(tag, className, text) {
    const item = document.createElement(tag);
    if (className) item.className = className;
    if (text !== undefined) item.textContent = text;
    return item;
  }

  function button(text, action, className = 'ghost-btn') {
    const item = node('button', className, text);
    item.type = 'button';
    item.addEventListener('click', action);
    return item;
  }

  function link(text, href, className) {
    const item = node('a', className, text);
    item.href = href;
    return item;
  }

  function object(value) {
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  }

  function text(value) {
    return typeof value === 'string' ? value : '';
  }

  function readStorage(key) {
    try {
      return object(JSON.parse(localStorage.getItem(key)));
    } catch {
      return {};
    }
  }

  function quizSignature(lesson) {
    return JSON.stringify(lesson.quiz || []);
  }

  function blankQuiz(lesson) {
    return { signature: quizSignature(lesson), drafts: {}, results: {}, submitted: false, round: (lesson.quiz || []).map(question => question.id) };
  }

  function restoreChoices(lesson, values) {
    const saved = object(values);
    const choices = {};
    for (const question of lesson.quiz || []) {
      if (question.options.some(option => option.id === saved[question.id])) choices[question.id] = saved[question.id];
    }
    return choices;
  }

  function restoreLesson(lesson, saved) {
    saved = object(saved);
    const quiz = blankQuiz(lesson);
    const previousQuiz = object(saved.quiz);
    if (previousQuiz.signature === quiz.signature) {
      quiz.drafts = restoreChoices(lesson, previousQuiz.drafts);
      quiz.results = restoreChoices(lesson, previousQuiz.results);
      const previousRound = Array.isArray(previousQuiz.round) ? previousQuiz.round : [];
      const round = quiz.round.filter(id => previousRound.includes(id));
      if (round.length) quiz.round = round;
      quiz.submitted = previousQuiz.submitted === true && quiz.round.every(id => quiz.results[id]);
    }
    return {
      challenge: Object.fromEntries(challengeFields.map(([key]) => [key, text(object(saved.challenge)[key])])),
      reflection: Object.fromEntries(reflectionFields.map(([key]) => [key, text(object(saved.reflection)[key])])),
      legacyReflection: text(saved.legacyReflection),
      legacyAnswers: object(saved.legacyAnswers),
      hintsRevealed: Number.isInteger(saved.hintsRevealed) ? Math.max(0, Math.min(saved.hintsRevealed, (lesson.hints || []).length)) : 0,
      done: saved.done === true,
      quiz,
    };
  }

  function restore() {
    const saved = readStorage(storageKey);
    const legacy = readStorage('axPatternLabState');
    const records = {};
    for (const lesson of allLessons) {
      const record = restoreLesson(lesson, object(saved.lessons)[lesson.id]);
      if (saved.schemaVersion !== 2 || !object(saved.lessons)[lesson.id]) {
        const oldId = Object.keys(legacyMap).find(key => legacyMap[key] === lesson.id);
        record.challenge.initial = text(legacy['thought_' + oldId]);
        record.legacyReflection = text(legacy['reflection_' + oldId]);
        record.done = legacy['done_' + oldId] === true;
        for (let index = 0; index < 5; index++) {
          const value = legacy['quiz_' + oldId + '_' + index];
          if (Number.isInteger(value) && value >= 0 && value < 4) record.legacyAnswers[index] = value;
        }
      }
      records[lesson.id] = record;
    }
    return { schemaVersion: 2, lessons: records };
  }

  const state = restore();

  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      document.getElementById('storage-status').textContent = '저장 공간을 사용할 수 없어 현재 탭에서만 내용을 보관합니다.';
    }
    updateProgress();
  }

  function updateProgress() {
    const currentLessons = lessons.filter(lesson => !lesson.planned);
    const done = currentLessons.filter(lesson => state.lessons[lesson.id].done).length;
    document.getElementById('progress-pill').textContent = done + ' / ' + currentLessons.length + '주차 학습 완료';
  }

  function bulletList(items) {
    const list = node('ul');
    for (const item of items || []) list.append(node('li', '', item));
    return list;
  }

  function section(title, kicker, className = 'card glass') {
    const container = node('section', className);
    if (kicker) container.append(node('p', 'section-kicker', kicker));
    container.append(node('h2', '', title));
    return container;
  }

  function lessonCard(lesson) {
    const card = link('', '#lesson/' + lesson.id, 'week-card glass');
    const colors = lesson.colors || ['#AFC8FF', '#B8A8FF'];
    card.style.setProperty('--w1', colors[0]);
    card.style.setProperty('--w2', colors[1] || colors[0]);
    const status = state.lessons[lesson.id].done ? '학습 완료' : lesson.planned ? '예정' : '학습하기';
    card.append(node('span', 'num', lesson.week ? 'WEEK ' + String(lesson.week).padStart(2, '0') : 'EXTRA PRACTICE'));
    card.append(node('span', 'status', status), node('h3', '', lesson.topic), node('p', '', lesson.title));
    return card;
  }

  function renderHome() {
    const home = node('div');
    const hero = node('section', 'hero glass');
    const copy = node('div');
    copy.append(node('span', 'eyebrow', 'Hansung AX Tutoring'));
    const title = node('h1', '', '설계는 직접,');
    title.append(node('br'), node('span', 'gradient-text', '검토는 AI와 함께.'));
    copy.append(title, node('p', 'hero-copy', '요구사항을 읽고 먼저 UML을 그려 보세요. 힌트와 코드 실행으로 판단을 점검하고, 바뀐 생각의 근거를 남깁니다.'));
    const actions = node('div', 'hero-actions');
    actions.append(link('1주차 시작하기 →', '#lesson/oop', 'primary'), link('1~4주차 누적 복습', 'review/', 'secondary'));
    copy.append(actions);
    const art = node('div', 'hero-art');
    art.setAttribute('aria-hidden', 'true');
    const shape = node('div', 'shape-card shape-main');
    shape.append(node('strong', '', 'Think.\nBuild.\nVerify.'), node('span', '', '코드와 UML로 판단의 근거를 찾습니다.'));
    art.append(shape, node('div', 'shape-card shape-small'), node('div', 'shape-card shape-pill'));
    hero.append(copy, art);
    home.append(hero);

    const course = node('section', 'section');
    course.id = 'weeks';
    const heading = node('div', 'section-head');
    const headingCopy = node('div');
    headingCopy.append(node('span', 'eyebrow', 'Learning Journey'), node('h2', '', '주차별 학습'));
    heading.append(headingCopy, node('p', '', '1~6주차 자료를 순서대로 살펴보세요. 7주차에는 Abstract Factory와 패턴 선택을 이어서 다룹니다.'));
    const grid = node('div', 'week-grid');
    lessons.forEach(lesson => grid.append(lessonCard(lesson)));
    course.append(heading, grid);
    home.append(course);

    const review = node('section', 'review-banner glass');
    const reviewText = node('div');
    reviewText.append(node('h2', '', '앞선 개념을 다시 연결해 볼까요?'), node('p', '', '각 주차에서 배운 내용을 두 문제씩 담았습니다. 먼저 풀고, 해설과 비교한 뒤, 다시 볼 문제만 풀 수 있습니다.'));
    review.append(reviewText, link('누적 복습 8문항 →', 'review/', 'primary'));
    home.append(review);

    const practice = node('section', 'section');
    practice.id = 'extras';
    practice.append(node('div', 'section-head'));
    practice.firstChild.append(node('h2', '', '추가 연습'), node('p', '', '중간고사 범위를 복습하거나 여러 패턴을 조합해 설계해 보세요.'));
    const extraGrid = node('div', 'extra-grid');
    extras.forEach(lesson => extraGrid.append(lessonCard(lesson)));
    practice.append(extraGrid);
    home.append(practice);
    main.replaceChildren(home);
  }

  function makeField(lesson, group, key, label) {
    const field = node('div', 'field');
    const input = node('textarea');
    input.id = lesson.id + '-' + group + '-' + key;
    input.value = state.lessons[lesson.id][group][key];
    input.maxLength = 16000;
    const inputLabel = node('label', '', label);
    inputLabel.htmlFor = input.id;
    input.addEventListener('input', () => {
      state.lessons[lesson.id][group][key] = input.value;
      save();
    });
    field.append(inputLabel, input);
    return field;
  }

  function renderChallenge(lesson) {
    const challenge = section('먼저 설계해 보세요', 'CHALLENGE', 'you-first glass');
    challenge.append(node('p', 'lesson-intro', lesson.challenge));
    const fields = node('div', 'field-grid');
    challengeFields.forEach(([key, label]) => fields.append(makeField(lesson, 'challenge', key, label)));
    challenge.append(fields);
    const hints = node('div', 'hints');
    hints.append(node('h3', '', '막히면 힌트를 하나씩 확인하세요'));
    const list = node('ol', 'hint-list');
    const record = state.lessons[lesson.id];
    const allHints = lesson.hints || [];
    const count = node('span', 'hint-count');
    const next = button('다음 힌트 보기', () => {
      record.hintsRevealed = Math.min(record.hintsRevealed + 1, allHints.length);
      save();
      refreshHints();
    });
    function refreshHints() {
      list.replaceChildren(...allHints.slice(0, record.hintsRevealed).map(hint => node('li', '', hint)));
      count.textContent = record.hintsRevealed + ' / ' + allHints.length + '개 확인';
      next.disabled = record.hintsRevealed >= allHints.length;
      next.textContent = next.disabled ? '모든 힌트를 확인했어요' : '다음 힌트 보기';
    }
    refreshHints();
    const actions = node('div', 'hint-actions');
    actions.append(next, count);
    hints.append(list, actions);
    challenge.append(hints);
    return challenge;
  }

  async function copyText(value, trigger) {
    const previous = trigger.textContent;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const input = node('textarea');
        input.value = value;
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.append(input);
        input.select();
        const copied = document.execCommand('copy');
        input.remove();
        trigger.focus();
        if (!copied) throw new Error('Clipboard is unavailable');
      }
      trigger.textContent = '복사했어요';
    } catch {
      trigger.textContent = '본문을 선택해 복사해 주세요';
    }
    window.setTimeout(() => { trigger.textContent = previous; }, 2000);
  }

  function renderPrompts(lesson) {
    const prompts = section('내 설계를 AI와 검토해 보세요', '학습용 프롬프트', 'prompt-card');
    prompts.append(node('p', '', '먼저 적은 설계와 함께 사용하세요. 현재 풀이에서 확인한 어려움을 덧붙이면 더 구체적인 피드백을 받을 수 있습니다.'));
    for (const prompt of lesson.prompts || []) {
      const detail = node('details', 'prompt-details');
      detail.append(node('summary', '', prompt.label));
      const body = node('div', 'details-body');
      body.append(node('div', 'prompt-text', prompt.text), button(prompt.label + ' 프롬프트 복사', event => copyText(prompt.text, event.currentTarget), 'copy-btn'));
      detail.append(body);
      prompts.append(detail);
    }
    return prompts;
  }

  function renderExamples(lesson) {
    const examples = section('코드로 확인하기', 'BUILD & VERIFY');
    examples.append(node('p', '', '내 설계를 적고 힌트를 살펴본 뒤 예제를 열어 보세요. 실행 결과와 비교하며 역할과 호출 순서를 따라갑니다.'));
    const detail = node('details', 'example-details');
    detail.append(node('summary', '', '예제·실행 결과 보기'));
    const body = node('div', 'details-body');
    for (const example of lesson.examples || []) {
      body.append(node('h3', 'example-title', example.title), node('p', 'example-description', example.description));
      if (example.className) body.append(node('p', '', example.className + '.java'));
      body.append(node('pre', 'code', example.code));
      if (typeof example.expectedOutput === 'string') {
        body.append(node('h4', '', '예상 출력'), node('pre', 'code code-output', example.expectedOutput));
      }
    }
    if ((lesson.notes || []).length) {
      body.append(node('h3', 'example-title', '검토할 기준'), bulletList(lesson.notes));
    }
    detail.append(body);
    examples.append(detail);
    return examples;
  }

  function quizQuestion(lesson, question, index) {
    const saved = state.lessons[lesson.id].quiz;
    const fieldset = node('fieldset', 'quiz-question');
    fieldset.dataset.questionId = question.id;
    fieldset.append(node('legend', '', (index + 1) + '. ' + question.question));
    const options = node('div', 'options');
    for (const option of question.options) {
      const label = node('label', 'choice');
      const input = node('input');
      input.type = 'radio';
      input.name = lesson.id + '-' + question.id;
      input.value = option.id;
      input.checked = saved.drafts[question.id] === option.id;
      input.addEventListener('change', () => { saved.drafts[question.id] = option.id; save(); });
      label.append(input, node('span', '', option.text));
      options.append(label);
    }
    fieldset.append(options);
    return fieldset;
  }

  function showQuiz(lesson, container) {
    const saved = state.lessons[lesson.id].quiz;
    const questions = lesson.quiz || [];
    const round = questions.filter(question => saved.round.includes(question.id));
    container.replaceChildren(node('p', 'section-kicker', 'CHECK YOUR UNDERSTANDING'), node('h2', '', '주차 퀴즈 ' + questions.length + '문항'));
    if (!questions.length) {
      container.append(node('p', '', '이 자료에서는 설계와 회고를 중심으로 연습합니다.'));
      return;
    }
    if (!saved.submitted) {
      container.append(node('p', '', round.length < questions.length ? '틀린 문제를 다시 풀어 보세요. 제출하면 해설을 확인할 수 있습니다.' : '모든 문제에 답한 뒤 제출하면 정답과 선택지별 해설을 볼 수 있습니다.'));
      const form = node('form', 'quiz-form');
      form.noValidate = true;
      round.forEach(question => form.append(quizQuestion(lesson, question, questions.indexOf(question))));
      const error = node('p', 'quiz-error');
      error.setAttribute('role', 'alert');
      const actions = node('div', 'quiz-actions');
      const submit = node('button', 'primary', '퀴즈 답안 제출');
      submit.type = 'submit';
      actions.append(submit);
      form.append(error, actions);
      form.addEventListener('submit', event => {
        event.preventDefault();
        const missing = round.find(question => !saved.drafts[question.id]);
        if (missing) {
          error.textContent = (questions.indexOf(missing) + 1) + '번 문항의 답을 골라 주세요.';
          const field = [...form.querySelectorAll('fieldset')].find(item => item.dataset.questionId === missing.id);
          field.querySelector('input').focus();
          return;
        }
        for (const question of round) saved.results[question.id] = saved.drafts[question.id];
        saved.submitted = true;
        save();
        showQuiz(lesson, container);
        focusSection(container);
      });
      container.append(form);
      return;
    }

    const correct = questions.filter(question => saved.results[question.id] === question.answer).length;
    const summary = node('p', 'quiz-status', correct + ' / ' + questions.length + '문항 정답');
    summary.setAttribute('role', 'status');
    container.append(summary);
    const actions = node('div', 'quiz-actions');
    const wrongIds = questions.filter(question => saved.results[question.id] !== question.answer).map(question => question.id);
    const retry = button('오답 다시 풀기 (' + wrongIds.length + ')', () => {
      saved.round = wrongIds;
      saved.submitted = false;
      wrongIds.forEach(id => { delete saved.drafts[id]; });
      save();
      showQuiz(lesson, container);
      focusSection(container);
    }, 'primary');
    retry.disabled = !wrongIds.length;
    actions.append(retry, button('전체 다시 풀기', () => {
      state.lessons[lesson.id].quiz = blankQuiz(lesson);
      save();
      showQuiz(lesson, container);
      focusSection(container);
    }));
    if (round.length < questions.length) actions.append(button('전체 해설 보기', () => {
      saved.round = questions.map(question => question.id);
      save();
      showQuiz(lesson, container);
    }));
    container.append(actions);
    for (const question of round) {
      const result = node('section', 'question-result');
      const number = questions.indexOf(question) + 1;
      const isCorrect = saved.results[question.id] === question.answer;
      result.append(node('h3', '', number + '번 · ' + (isCorrect ? '정답' : '다시 확인하기')), node('h4', '', question.question));
      const list = node('ul', 'answer-explanations');
      for (const option of question.options) {
        const item = node('li');
        const key = question.answer === option.id;
        const selected = saved.results[question.id] === option.id;
        item.dataset.correct = key;
        item.dataset.wrong = selected && !key;
        const label = node('strong', '', option.text);
        if (key) label.append(node('span', 'answer-badge', '정답'));
        if (selected) label.append(node('span', 'answer-badge', '내 선택'));
        item.append(label, node('p', '', option.explanation));
        list.append(item);
      }
      result.append(list);
      container.append(result);
    }
  }

  function renderReflection(lesson) {
    const reflection = section('판단이 바뀐 과정을 남겨 보세요', 'REFLECTION', 'you-first glass');
    const fields = node('div', 'field-grid');
    reflectionFields.forEach(([key, label]) => fields.append(makeField(lesson, 'reflection', key, label)));
    reflection.append(fields);
    const record = state.lessons[lesson.id];
    if (record.legacyReflection) {
      const legacy = node('details', 'legacy-note');
      legacy.append(node('summary', '', '이전에 작성한 회고'), node('p', '', record.legacyReflection));
      reflection.append(legacy);
    }
    reflection.append(node('p', 'oral-guide', '1분 구두 회고 · 이번 풀이에서 잘한 점과 다음에 보완할 점을 한 가지씩 말해 보세요. 판단의 근거가 된 코드나 UML을 함께 짚어 주세요.'));
    const actions = node('div', 'finish-row');
    const done = button(record.done ? '✓ 학습 완료 표시됨' : '학습 완료 표시', () => {
      record.done = !record.done;
      save();
      done.textContent = record.done ? '✓ 학습 완료 표시됨' : '학습 완료 표시';
      done.setAttribute('aria-pressed', String(record.done));
    }, 'done-btn');
    done.setAttribute('aria-pressed', String(record.done));
    actions.append(done, link('주차별 학습으로 돌아가기', '#weeks', 'ghost-btn'));
    if (lesson.week === 5) actions.append(link('1~4주차 누적 복습 →', 'review/', 'secondary'));
    reflection.append(actions);
    return reflection;
  }

  function focusSection(container) {
    const heading = container.querySelector('h1,h2');
    if (heading) {
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }
    container.scrollIntoView({ block: 'start' });
  }

  function renderLesson(lesson) {
    const page = node('article', 'lesson-main');
    page.append(link('← 주차별 학습', '#weeks', 'back-link'));
    const hero = node('header', 'week-hero glass');
    hero.append(node('span', 'eyebrow', lesson.week ? lesson.week + '주차' + (lesson.planned ? ' · 예정' : '') : '추가 연습'), node('h1', '', lesson.title), node('p', 'topic', lesson.topic));
    page.append(hero);
    const overview = node('div', 'content-grid');
    const goals = section('학습 목표', 'LEARNING GOALS');
    goals.append(bulletList(lesson.goals));
    const concepts = section('먼저 짚을 개념', 'KEY CONCEPTS');
    concepts.append(bulletList(lesson.concepts));
    overview.append(goals, concepts);
    page.append(overview, renderChallenge(lesson), renderPrompts(lesson), renderExamples(lesson));
    const quiz = node('section', 'card glass quiz');
    quiz.id = 'lesson-quiz';
    showQuiz(lesson, quiz);
    page.append(quiz, renderReflection(lesson));
    main.replaceChildren(page);
  }

  function route() {
    const hash = window.location.hash.slice(1);
    const lessonId = hash.startsWith('lesson/') ? hash.slice('lesson/'.length) : '';
    document.querySelectorAll('.nav-links a').forEach(item => item.removeAttribute('aria-current'));
    if (byId.has(lessonId)) {
      renderLesson(byId.get(lessonId));
      document.title = byId.get(lessonId).topic + ' · AX Pattern Lab';
      focusSection(main);
      return;
    }
    renderHome();
    document.title = 'AX Pattern Lab · 설계패턴 학습';
    const target = ['weeks', 'extras'].includes(hash) ? document.getElementById(hash) : main;
    if (hash === 'weeks' || hash === 'extras') document.querySelector('.nav-links a[href="#' + hash + '"]').setAttribute('aria-current', 'page');
    requestAnimationFrame(() => {
      if (hash === 'weeks' || hash === 'extras') target.scrollIntoView({ block: 'start' });
      else window.scrollTo({ top: 0 });
    });
  }

  if (!lessons.length) {
    main.append(node('p', 'notice', '학습 자료를 불러오지 못했습니다. 페이지를 새로고침해 주세요.'));
    return;
  }
  save();
  route();
  window.addEventListener('hashchange', route);
  document.querySelector('.skip-link').addEventListener('click', event => {
    event.preventDefault();
    main.focus();
    main.scrollIntoView({ block: 'start' });
  });
})();
