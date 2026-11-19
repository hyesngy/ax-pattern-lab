(() => {
  'use strict';

  const questions = Array.isArray(window.QUIZ_QUESTIONS) ? window.QUIZ_QUESTIONS : [];
  const view = document.getElementById('quiz-view');
  const status = document.getElementById('quiz-status');
  const weekNav = document.getElementById('week-nav');
  const questionNav = document.getElementById('question-nav');

  function renderLearningProgress() {
    let learning;
    try {
      learning = JSON.parse(window.localStorage.getItem('ax-pattern-lab-v2'));
    } catch {
      learning = null;
    }
    const topics = ['oop', 'solid', 'behavior', 'command-observer', 'structure', 'template-factory'];
    const done = topics.filter(id => learning?.lessons?.[id]?.done === true).length;
    document.getElementById('progress-pill').textContent = done + ' / ' + topics.length + '주차 학습 완료';
  }

  renderLearningProgress();
  window.addEventListener('pageshow', renderLearningProgress);
  window.addEventListener('storage', event => {
    if (event.key === 'ax-pattern-lab-v2' || event.key === null) renderLearningProgress();
  });

  function element(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = content;
    return node;
  }

  if (questions.length !== 8) {
    view.append(element('p', 'notice', '문항을 불러오지 못했습니다. 페이지를 새로고침해 주세요.'));
    return;
  }

  const byId = new Map(questions.map((question, index) => [question.id, { ...question, number: index + 1 }]));
  const allIds = [...byId.keys()];
  const storageKey = 'ax-tutoring-review-w1-w4-v1';
  const weekLabels = ['객체지향 · UML', 'SOLID', 'Strategy · State · Singleton', 'Command · Observer'];
  const typeLabels = { single: '객관식', multi: '복수 선택', short: '서술형', 'ox-reason': 'O/X · 근거', trace: '코드 추적' };
  const blank = () => ({ choices: [], text: '' });

  function restoreAnswers(saved) {
    const answers = {};
    for (const [id, question] of byId) {
      const answer = saved?.[id];
      if (!answer || typeof answer !== 'object') continue;
      const optionIds = new Set((question.options || []).map(option => option.id));
      const choices = Array.isArray(answer.choices) ? [...new Set(answer.choices.filter(choice => optionIds.has(choice)))] : [];
      answers[id] = {
        choices: question.type === 'multi' ? choices : choices.slice(0, 1),
        text: typeof answer.text === 'string' ? answer.text.slice(0, 1800) : '',
      };
    }
    return answers;
  }

  function answered(question, answer) {
    if (!answer) return false;
    if (question.type === 'short') return Boolean(answer.text.trim());
    if (question.type === 'ox-reason') return Boolean(answer.choices.length && answer.text.trim());
    return answer.choices.length > 0;
  }

  function restore() {
    let saved;
    try {
      saved = JSON.parse(window.localStorage.getItem(storageKey));
    } catch {
      saved = null;
    }
    const knownIds = (ids) => Array.isArray(ids) ? allIds.filter(id => ids.includes(id)) : [];
    const restoredRound = knownIds(saved?.round);
    const round = restoredRound.length ? restoredRound : allIds;
    const results = restoreAnswers(saved?.results);
    return {
      round,
      active: round.includes(saved?.active) ? saved.active : round[0],
      drafts: restoreAnswers(saved?.drafts),
      results,
      submitted: saved?.submitted === true && round.every(id => answered(byId.get(id), results[id])),
      flagged: knownIds(saved?.flagged),
      reflection: typeof saved?.reflection === 'string' ? saved.reflection.slice(0, 1800) : '',
    };
  }

  const state = restore();

  function save() {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      document.querySelector('.footer span:last-child').textContent = '브라우저 저장소를 사용할 수 없어 현재 탭에만 기록됩니다.';
    }
  }

  function button(label, handler, className = 'button') {
    const node = element('button', className, label);
    node.type = 'button';
    node.addEventListener('click', handler);
    return node;
  }

  function correctOptions(question) {
    return Array.isArray(question.answer) ? question.answer : [question.answer];
  }

  function score(question, answer) {
    if (!answer || question.type === 'short') return null;
    const keys = correctOptions(question);
    return keys.length === answer.choices.length && keys.every(key => answer.choices.includes(key));
  }

  function retryIds() {
    return allIds.filter(id => score(byId.get(id), state.results[id]) === false || state.flagged.includes(id));
  }

  function isComplete(id) {
    const source = state.submitted ? state.results : state.drafts;
    return answered(byId.get(id), source[id]);
  }

  function focusHeading(node) {
    node.tabIndex = -1;
    node.focus({ preventScroll: true });
    node.scrollIntoView({ block: 'nearest' });
  }

  function openQuestion(id, error) {
    state.active = id;
    save();
    render();
    focusHeading(view.querySelector('.question-title'));
    if (error) showError(error);
  }

  function renderProgress() {
    const complete = state.round.filter(isComplete).length;
    const label = state.submitted ? '채점 결과' : state.round.length < allIds.length ? '오답·표시 문항 다시 풀기' : '복습 퀴즈';
    const line = element('div', 'status-line');
    line.append(element('strong', '', label), element('span', '', complete + ' / ' + state.round.length + (state.submitted ? '문항 제출' : '문항 작성')));
    const progress = element('progress');
    progress.max = state.round.length;
    progress.value = complete;
    progress.setAttribute('aria-label', '작성한 문항 수');
    status.replaceChildren(line, progress);
  }

  function renderNav() {
    weekNav.replaceChildren();
    weekLabels.forEach((topic, index) => {
      const week = index + 1;
      const ids = state.round.filter(id => byId.get(id).week === week);
      const complete = ids.filter(isComplete).length;
      const weekButton = button('', () => openQuestion(ids.find(id => !isComplete(id)) || ids[0]), 'week-link');
      weekButton.append(element('span', 'week-number', '0' + week), element('span', 'week-name', topic), element('span', 'week-count', complete + '/' + ids.length));
      weekButton.setAttribute('aria-label', week + '주차 ' + topic + ', ' + complete + '/' + ids.length + '문항 완료');
      if (byId.get(state.active).week === week) weekButton.setAttribute('aria-current', 'true');
      weekButton.disabled = ids.length === 0;
      weekNav.append(weekButton);
    });

    questionNav.replaceChildren();
    for (const id of state.round) {
      const question = byId.get(id);
      const complete = isComplete(id);
      const dot = button(question.number, () => openQuestion(id), 'question-dot');
      dot.dataset.answered = complete;
      dot.setAttribute('aria-label', question.number + '번 문항, ' + (complete ? '답안 작성' : '미작성'));
      if (id === state.active) dot.setAttribute('aria-current', 'step');
      questionNav.append(dot);
    }
  }

  function questionHeader(question) {
    const fragment = document.createDocumentFragment();
    const meta = element('div', 'question-meta');
    for (const text of [question.week + '주차', question.topic]) meta.append(element('span', 'tag', text));
    meta.append(element('span', 'tag type', typeLabels[question.type]));
    fragment.append(meta, element('h2', 'question-title', question.number + '번 문항'), element('p', 'prompt', question.prompt));
    if (question.code) {
      const pre = element('pre');
      pre.tabIndex = 0;
      pre.setAttribute('aria-label', '문제 코드');
      pre.append(element('code', '', question.code));
      fragment.append(pre);
    }
    return fragment;
  }

  function updateDraft(question, change) {
    const previous = state.drafts[question.id] || blank();
    const complete = answered(question, previous);
    state.drafts[question.id] = { ...previous, ...change };
    save();
    if (complete !== isComplete(question.id)) {
      renderProgress();
      renderNav();
    }
    if (isComplete(question.id)) view.querySelector('.notice')?.remove();
  }

  function makeChoices(question, answer) {
    const field = element('fieldset');
    field.append(element('legend', '', question.type === 'multi' ? '해당하는 답을 모두 골라 주세요.' : '답을 하나 골라 주세요.'));
    const list = element('div', 'option-list');
    for (const option of question.options) {
      const label = element('label', 'option');
      const input = element('input');
      input.type = question.type === 'multi' ? 'checkbox' : 'radio';
      input.name = 'choice';
      input.value = option.id;
      input.checked = answer.choices.includes(option.id);
      input.addEventListener('change', () => {
        const choices = [...list.querySelectorAll('input:checked')].map(control => control.value);
        updateDraft(question, { choices });
      });
      label.append(input, element('span', '', option.text));
      list.append(label);
    }
    field.append(list);
    return field;
  }

  function makeTextInput(id, labelText, value, handler, required = false) {
    const group = element('div', 'text-answer');
    const label = element('label', 'text-label', labelText);
    label.htmlFor = id;
    const input = element('textarea');
    input.id = id;
    input.value = value;
    input.rows = 3;
    input.maxLength = 1800;
    input.required = required;
    input.addEventListener('input', () => handler(input.value));
    group.append(label, input);
    return group;
  }

  function showError(message) {
    const form = view.querySelector('form');
    const notice = element('p', 'notice', message);
    notice.role = 'alert';
    form.querySelector('.notice')?.remove();
    form.prepend(notice);
  }

  function submitRound() {
    const missing = state.round.find(id => !isComplete(id));
    if (missing) {
      const question = byId.get(missing);
      const answer = state.drafts[missing] || blank();
      let message = '제출하려면 이 문항의 답을 골라 주세요.';
      if (question.type === 'short') message = '제출하려면 이 문항의 답을 적어 주세요.';
      if (question.type === 'ox-reason') {
        message = answer.choices.length ? '제출하려면 O/X를 고른 근거도 적어 주세요.' : '제출하려면 O/X를 고르고 근거를 적어 주세요.';
      }
      openQuestion(missing, message);
      return;
    }
    for (const id of state.round) state.results[id] = state.drafts[id];
    state.active = state.round[0];
    state.submitted = true;
    save();
    render();
    focusHeading(view.querySelector('.result-summary h2'));
  }

  function stepActions(includeSubmit) {
    const index = state.round.indexOf(state.active);
    const bar = element('div', 'actions');
    const previous = button('이전 문항', () => openQuestion(state.round[index - 1]));
    previous.disabled = index === 0;
    const right = element('div', 'actions-end');
    if (index < state.round.length - 1) {
      right.append(button('다음 문항', () => openQuestion(state.round[index + 1])));
    }
    if (includeSubmit) {
      const submit = element('button', 'button primary', '답안 제출');
      submit.type = 'submit';
      right.append(submit);
    }
    bar.append(previous, right);
    return bar;
  }

  function renderForm(question) {
    view.replaceChildren(questionHeader(question));
    const form = element('form');
    form.noValidate = true;
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      submitRound();
    });
    const answer = state.drafts[question.id] || blank();
    if (question.options?.length) form.append(makeChoices(question, answer));
    if (question.type === 'short' || question.type === 'ox-reason') {
      const label = question.type === 'short' ? '내 답안 (필수)' : 'O/X를 고른 근거 (필수)';
      form.append(makeTextInput('written-answer', label, answer.text, text => updateDraft(question, { text }), true));
    }
    form.append(stepActions(true));
    view.append(form);
  }

  function startRetry() {
    const ids = retryIds();
    if (!ids.length) return;
    state.round = ids;
    state.active = ids[0];
    state.submitted = false;
    state.flagged = state.flagged.filter(id => !ids.includes(id));
    for (const id of ids) delete state.drafts[id];
    save();
    render();
    focusHeading(view.querySelector('.question-title'));
  }

  function resultSummary() {
    const card = element('section', 'result-summary');
    const scores = allIds.map(id => score(byId.get(id), state.results[id])).filter(value => value !== null);
    const correct = scores.filter(Boolean).length;
    const ids = retryIds();
    const actions = element('div', 'actions');
    const retry = button('오답·표시 문항 다시 풀기 (' + ids.length + ')', startRetry, 'button primary');
    retry.disabled = ids.length === 0;
    actions.append(retry);
    if (state.round.length < allIds.length) {
      actions.append(button('전체 결과 보기', () => {
        state.round = allIds;
        openQuestion(state.active);
      }));
    }
    card.append(element('h2', '', '복습 결과'), element('p', '', '자동 채점 ' + correct + ' / ' + scores.length + '문항 정답. 서술형과 O/X 근거는 예시·채점 기준과 비교해 보세요.'), actions);
    return card;
  }

  function optionExplanations(question, answer) {
    const list = element('ul', 'result-answer');
    const keys = correctOptions(question);
    for (const option of question.options) {
      const choice = element('li');
      const isKey = keys.includes(option.id);
      const selected = answer.choices.includes(option.id);
      choice.dataset.key = isKey;
      choice.dataset.wrong = selected && !isKey;
      const title = element('strong', '', option.text);
      if (isKey) title.append(element('span', 'result-label', '정답'));
      if (selected) title.append(element('span', 'result-label' + (isKey ? '' : ' wrong'), '내 선택'));
      choice.append(title, element('p', '', option.explanation));
      list.append(choice);
    }
    return list;
  }

  function reflectionGuide() {
    const section = element('section', 'reflection');
    const list = element('ol');
    for (const prompt of ['처음에 어떤 답을 골랐나요?', '코드의 어느 줄이나 UML의 어떤 표기를 근거로 삼았나요?', '해설을 읽은 뒤 판단이 어떻게 달라졌나요?', '아직 남은 질문은 무엇인가요?']) {
      list.append(element('li', '', prompt));
    }
    section.append(element('h3', '', '풀이 돌아보기'), list, element('p', '', '1분 구두 회고에서 잘한 점과 다음에 보완할 점을 하나씩 말해 보세요.'), makeTextInput('reflection-note', '복습 메모 (선택)', state.reflection, text => {
      state.reflection = text;
      save();
    }));
    return section;
  }

  function renderResult(question) {
    const answer = state.results[question.id];
    const correct = score(question, answer);
    const card = element('section', 'result-card');
    const title = correct === null ? '직접 비교할 답안' : correct ? '정답입니다' : '오답입니다';
    card.append(element('h3', '', title), element('p', '', question.explanation));
    if (question.options?.length) card.append(optionExplanations(question, answer));
    if (answer.text) card.append(element('p', '', '내 답안\n' + answer.text));
    if (question.modelAnswer) card.append(element('p', '', '모범 답안\n' + question.modelAnswer));
    if (question.rubric?.length) {
      card.append(element('p', '', '채점 기준'));
      const rubric = element('ul');
      for (const criterion of question.rubric) rubric.append(element('li', '', criterion));
      card.append(rubric);
    }

    const flag = button('다시 볼 문항', () => {
      state.flagged = state.flagged.includes(question.id) ? state.flagged.filter(id => id !== question.id) : [...state.flagged, question.id];
      flag.setAttribute('aria-pressed', state.flagged.includes(question.id));
      view.querySelector('.result-summary').replaceWith(resultSummary());
      save();
    }, 'button flag-button');
    flag.setAttribute('aria-pressed', state.flagged.includes(question.id));
    const actions = element('div', 'actions');
    actions.append(flag);
    card.append(actions);
    view.replaceChildren(resultSummary(), questionHeader(question), card, stepActions(false), reflectionGuide());
  }

  function render() {
    renderProgress();
    renderNav();
    const question = byId.get(state.active);
    if (state.submitted) renderResult(question);
    else renderForm(question);
  }

  render();
})();
