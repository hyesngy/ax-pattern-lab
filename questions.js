window.QUIZ_QUESTIONS = [
  {
    id: "q1",
    week: 1,
    topic: "UML · 집합과 합성",
    type: "single",
    prompt: "주문 상세 항목은 한 주문에만 속하고 다른 주문과 공유할 수 없다. 주문을 없애면 그 주문의 상세 항목도 함께 없앤다. 이 요구사항에 맞는 UML 관계와 표기 위치는?",
    options: [
      { id: "a", text: "합성. 채운 마름모를 주문 쪽에 그린다.", explanation: "주문이 전체이고 상세 항목은 배타적으로 소유되는 부분이다. 채운 마름모는 전체인 주문 쪽에 둔다." },
      { id: "b", text: "집합. 빈 마름모를 주문 쪽에 그린다.", explanation: "빈 마름모는 집합 표기다. 이 사례의 배타적 소유와 생명주기 조건에는 합성이 맞다." },
      { id: "c", text: "합성. 채운 마름모를 상세 항목 쪽에 그린다.", explanation: "관계는 맞지만 표기 위치가 반대다. 마름모는 부분이 아닌 전체 쪽에 둔다." },
      { id: "d", text: "일반화. 빈 삼각형을 주문 쪽에 그린다.", explanation: "상세 항목은 주문의 하위 유형이 아니다. 이 요구사항은 전체와 부분의 관계를 설명한다." }
    ],
    answer: "a",
    explanation: "두 객체가 함께 쓰인다는 사실만으로 합성을 고를 수는 없다. 이 문제에서는 한 주문에만 속한다는 조건과 주문을 없앨 때 함께 없어진다는 조건이 근거다."
  },
  {
    id: "q2",
    week: 1,
    topic: "객체지향 · 인터페이스와 다형성",
    type: "trace",
    prompt: "Java 코드에서 pay의 선언 타입은 Pay다. 두 번의 메서드 호출은 각각 무엇을 출력할까?",
    code: `public class Main {
    interface Pay { String label(); }
    static class Card implements Pay {
        public String label() { return "CARD"; }
    }
    static class Cash implements Pay {
        public String label() { return "CASH"; }
    }
    public static void main(String[] args) {
        Pay pay = new Card();
        System.out.println(pay.label());
        pay = new Cash();
        System.out.println(pay.label());
    }
}`,
    options: [
      { id: "a", text: "CASH → CARD", explanation: "실행 순서가 반대다. Card 객체를 먼저 참조한 뒤 Cash 객체를 참조한다." },
      { id: "b", text: "CARD → CARD", explanation: "두 번째 대입에서 pay가 Cash 객체를 참조한다. 처음 참조한 객체의 구현에 고정되지 않는다." },
      { id: "c", text: "CARD → CASH", explanation: "각 호출에서 pay가 가리키는 실제 객체의 label 구현이 실행된다." },
      { id: "d", text: "컴파일 오류", explanation: "Card와 Cash 모두 Pay를 구현하므로 두 대입과 인터페이스 메서드 호출은 유효하다." }
    ],
    answer: "c",
    explanation: "선언 타입 Pay는 label을 호출할 수 있다는 계약을 보여 준다. 어떤 구현이 실행될지는 호출 시점에 참조하는 객체에 따라 달라진다."
  },
  {
    id: "q3",
    week: 2,
    topic: "SOLID · SRP와 OCP",
    type: "multi",
    prompt: "OrderService가 주문 금액 계산, DB 저장, 메일 발송을 모두 맡는다. 회원 등급별 할인은 applyDiscount 메서드의 if 문으로 나뉘고, 새 등급이 생길 때마다 이 메서드를 수정한다. 코드의 변경 이유를 살펴보고 타당한 판단을 모두 고르자.",
    options: [
      { id: "a", text: "금액 계산과 저장, 발송은 서로 다른 이유로 바뀔 수 있으므로 SRP 관점에서 분리를 검토한다.", explanation: "계산 규칙, 저장 방식, 발송 정책은 독립적으로 변경될 수 있다. 각 책임을 나누면 변경 영향도 좁아진다." },
      { id: "b", text: "applyDiscount를 private으로 바꾸면 새 등급을 추가할 때 OCP 문제가 해소된다.", explanation: "접근 범위만 바뀐다. 새 등급을 추가하려면 기존 분기문을 여전히 고쳐야 한다." },
      { id: "c", text: "저장과 발송을 같은 클래스 안에서 별도 메서드로 나누면 변경 이유도 하나로 줄어든다.", explanation: "메서드를 나눠도 저장 방식이나 발송 정책이 바뀌면 같은 클래스를 수정해야 한다." },
      { id: "d", text: "할인 규칙을 독립된 구현으로 분리하면 새 규칙을 추가할 때 주문 처리 코드를 고치는 일을 줄일 수 있다.", explanation: "주문 처리 코드가 공통 계약에 의존한다면 새 할인 구현과 선택 설정을 추가해 확장할 수 있다." }
    ],
    answer: ["a", "d"],
    explanation: "SRP는 변경 이유가 여럿인지 살피고, OCP는 기능을 늘릴 때 기존 로직의 수정을 줄일 방법을 찾는다. 이 사례에서는 역할 분리와 할인 규칙의 확장 지점을 각각 확인할 수 있다."
  },
  {
    id: "q4",
    week: 2,
    topic: "SOLID · 할인 정책 확장",
    type: "short",
    prompt: "OrderService는 생성자로 DiscountPolicy를 받아 할인 금액을 계산한다. 현재 정액 할인과 정률 할인이 있으며 주문을 만들 때 구성 코드에서 둘 중 하나를 주입한다. 주말 할인을 추가하려면 무엇을 추가하거나 바꿔야 하는가? 그대로 둘 코드와 그 이유도 설명하자.",
    explanation: "주말 여부는 할인 정책 내부에서 확인하거나, 주문을 구성할 때 확인해 적용할 정책을 고를 수 있다. 어느 경우든 주문 서비스는 기존 인터페이스로 계산을 요청하고 할인 종류별로 분기하지 않는다.",
    modelAnswer: "WeekendDiscount를 추가해 DiscountPolicy를 구현한다. 예를 들어 구성 코드에서 주문 날짜가 주말인지 확인해 할인 정책을 주입한다. OrderService는 DiscountPolicy만 호출하므로 주문 처리와 기존 할인 구현을 그대로 둘 수 있다.",
    rubric: [
      "DiscountPolicy를 구현하는 새 주말 할인 클래스를 제안했는가?",
      "새 구현을 선택하고 주입하는 구성 코드나 설정을 구분했는가?",
      "OrderService의 본체를 유지할 수 있는 이유를 인터페이스 의존으로 설명했는가?"
    ]
  },
  {
    id: "q5",
    week: 3,
    topic: "Strategy와 State · 바뀌는 이유",
    type: "short",
    prompt: "배송비 계산에서 사용자가 일반 배송과 빠른 배송 중 계산 방식을 선택한다. 반면 택배는 접수, 배송 중, 완료 상태에 따라 ‘취소’ 요청의 처리 방법이 달라진다. 두 사례에 어울리는 패턴을 각각 고르고 무엇이 동작을 바꾸는지 설명하자.",
    explanation: "두 패턴 모두 인터페이스로 동작을 위임할 수 있다. 이 문제에서는 교체 가능한 계산 방법인지, 생명주기의 현재 상태에 따라 동작이 달라지는지가 구분의 근거다. 상태 전이는 설계에 따라 상태 객체나 Context가 맡을 수 있다.",
    modelAnswer: "배송비에는 Strategy를 적용해 선택한 계산 알고리즘을 교체한다. 취소 처리에는 State를 적용해 택배의 현재 상태가 요청의 처리 방식을 결정하게 한다. 상태는 접수에서 배송 중, 완료로 전이할 수 있다.",
    rubric: [
      "배송비 계산에 Strategy, 상태별 취소 처리에 State를 연결했는가?",
      "첫 사례에서 교체되는 대상이 계산 방법이라고 설명했는가?",
      "두 번째 사례에서 현재 상태와 상태 전이가 동작을 바꾼다는 근거를 제시했는가?"
    ]
  },
  {
    id: "q6",
    week: 3,
    topic: "Singleton · 공유 상태와 동시성",
    type: "ox-reason",
    prompt: "다음 문장은 맞을까? ‘Counter.INSTANCE를 공유하는 두 스레드가 hit()를 호출해도, 인스턴스가 하나이므로 증가 결과를 잃지 않는다.’ O/X를 고르고 코드에서 판단 근거를 찾자.",
    code: `enum Counter {
    INSTANCE;
    private int hits;
    void hit() { hits++; }
}`,
    options: [
      { id: "o", text: "O", explanation: "인스턴스를 공유한다는 점은 hits++를 원자적인 연산으로 만들지 않는다. 여러 스레드가 같은 이전 값을 읽을 수 있다." },
      { id: "x", text: "X", explanation: "두 스레드가 같은 값을 읽고 각각 1을 더해 쓰면 증가가 한 번만 반영될 수 있다." }
    ],
    answer: "x",
    explanation: "이 코드에서는 같은 클래스 로더가 정의한 enum 타입의 INSTANCE 상수를 두 스레드가 공유한다. enum 초기화가 안전해도 hits++는 원자적이지 않다. 증가에 원자성이 필요하면 AtomicInteger를 사용하거나 갱신을 동기화해야 한다.",
    modelAnswer: "X. hits++는 값을 읽고 1을 더해 다시 쓰는 연산이다. 두 스레드의 연산이 겹치면 서로의 갱신을 덮어쓸 수 있다. 인스턴스가 하나라는 점으로는 이를 막을 수 없다.",
    rubric: [
      "인스턴스 수와 가변 상태의 안전성을 구분했는가?",
      "hits++에서 두 스레드의 갱신이 겹칠 수 있다는 코드 근거를 들었는가?"
    ]
  },
  {
    id: "q7",
    week: 4,
    topic: "Command · 실행 취소와 상태 복원",
    type: "trace",
    prompt: "조명이 꺼진 상태에서 같은 켜기 명령을 두 번 실행한다. 매번 조명 상태를 바꾸기 직전에 값을 따로 저장하고, 가장 최근 기록부터 취소한다. 첫 번째 취소 직후와 두 번째 취소 직후의 출력은?",
    code: `import java.util.ArrayDeque;

public class Main {
    static boolean on;
    public static void main(String[] args) {
        var history = new ArrayDeque<Runnable>();
        Runnable turnOn = () -> {
            boolean before = on;
            on = true;
            history.push(() -> on = before);
        };
        turnOn.run();
        turnOn.run();
        history.pop().run();
        System.out.println(on);
        history.pop().run();
        System.out.println(on);
    }
}`,
    options: [
      { id: "a", text: "false → false", explanation: "취소할 때마다 조명을 끈다고 생각한 결과다. 코드는 실행 직전의 상태를 복원한다." },
      { id: "b", text: "true → true", explanation: "가장 최근 실행의 직전 상태만 두 번 쓴 결과다. 스택에는 첫 실행 전의 false도 따로 저장돼 있다." },
      { id: "c", text: "false → true", explanation: "이전 상태를 저장한 순서대로 꺼낸 경우다. push와 pop은 마지막에 넣은 기록부터 꺼낸다." },
      { id: "d", text: "true → false", explanation: "두 번째 켜기 직전에는 이미 켜져 있었고, 첫 번째 켜기 직전에는 꺼져 있었다. 이 상태가 역순으로 복원된다." }
    ],
    answer: "d",
    explanation: "같은 명령을 재사용해도 실행마다 before를 따로 캡처해 복원 작업을 저장한다. 가장 최근 작업을 취소한다고 해서 현재 상태가 항상 바뀌는 것은 아니다."
  },
  {
    id: "q8",
    week: 4,
    topic: "Observer · 알림 도중 구독 변경",
    type: "trace",
    prompt: "단일 스레드에서 알림을 시작할 때마다 현재 구독자 목록을 복사해 그 복사본을 순회한다. 첫 알림 중 A가 B의 구독을 해제하고 C를 등록한다. 첫 알림과 다음 알림을 받는 사람은 각각 누구인가?",
    code: `import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class Main {
    static void notifyAll(List<Consumer<String>> listeners, String event) {
        for (var listener : List.copyOf(listeners)) {
            listener.accept(event);
        }
    }
    public static void main(String[] args) {
        var listeners = new ArrayList<Consumer<String>>();
        Consumer<String> b = event -> System.out.println("B" + event);
        Consumer<String> c = event -> System.out.println("C" + event);
        listeners.add(event -> {
            System.out.println("A" + event);
            if (event.equals("1")) {
                listeners.remove(b);
                listeners.add(c);
            }
        });
        listeners.add(b);
        notifyAll(listeners, "1");
        notifyAll(listeners, "2");
    }
}`,
    options: [
      { id: "a", text: "첫 알림 A·C / 다음 알림 A·C", explanation: "C는 첫 알림의 복사본에 없다. 첫 알림 도중 등록돼 다음 알림부터 호출된다." },
      { id: "b", text: "첫 알림 A·B / 다음 알림 A·C", explanation: "첫 알림은 A와 B가 들어 있는 복사본을 순회한다. 다음 알림은 변경된 목록으로 새 복사본을 만든다." },
      { id: "c", text: "첫 알림 A만 / 다음 알림 A·C", explanation: "B는 원본에서 빠졌어도 첫 알림의 복사본에는 남아 있어 호출된다." },
      { id: "d", text: "첫 알림 A·B / 다음 알림 A·B", explanation: "목록을 한 번만 복사한다고 생각한 결과다. 알림을 시작할 때마다 다시 복사하므로 다음에는 B가 빠지고 C가 들어간다." }
    ],
    answer: "b",
    explanation: "이 코드에서 구독 변경은 다음 알림 대상에 반영된다. 순회용 복사본은 단일 스레드에서 알림 도중 바뀌는 목록을 다루는 방식이며, 콜백 예외나 동시 접근의 안전성까지 보장하지 않는다."
  }
];
