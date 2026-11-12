window.AX_LESSONS = [
  {
    "id": "oop",
    "legacyId": 1,
    "week": 1,
    "title": "Think in Objects",
    "topic": "객체지향 · UML",
    "planned": false,
    "colors": [
      "#AFC8FF",
      "#B8A8FF"
    ],
    "goals": [
      "요구사항에서 객체의 책임과 협력 관계를 찾는다.",
      "소유 관계와 생명주기 조건을 근거로 UML 관계를 고른다.",
      "인터페이스 참조로 실제 객체의 메서드를 호출하는 과정을 설명한다."
    ],
    "concepts": [
      "일반화는 하위 타입과 상위 타입의 관계를 나타낸다.",
      "합성은 부분을 배타적으로 소유하는 전체–부분 관계를 나타낸다.",
      "집합은 공유 가능한 전체–부분 관계를 나타낸다. 독립적으로 존재한다는 조건만으로 집합을 확정하지 않는다.",
      "인터페이스는 호출할 수 있는 동작을 정하고, 실제 객체가 실행할 구현을 제공한다."
    ],
    "challenge": "온라인 쇼핑몰의 주문, 주문 상세, 상품, 결제를 그려 보세요.\n주문 상세는 한 주문에만 속하며 주문이 폐기되면 함께 폐기됩니다. 상품은 여러 주문 상세가 참조하며 주문이 폐기돼도 상품 목록에 남습니다. 결제 방식은 카드 또는 계좌이체로 선택합니다.\n\n주문–주문 상세, 주문 상세–상품, 결제 인터페이스–구체 결제의 관계를 각각 고르고 표기 위치를 적으세요. 이후 주문 상세를 다른 주문과 공유할 수 있다는 조건으로 바꿔, 처음 그림에서 어떤 연결을 다시 판단해야 하는지 설명하세요.",
    "hints": [
      "객체마다 누가 만들고 소유하는지, 다른 객체와 공유할 수 있는지 적어 보세요. 함께 사라지는 범위도 표시하세요.",
      "전체와 부분을 찾은 뒤 마름모가 붙는 쪽을 정하세요. 상품이 주문 상세의 하위 타입인지도 문장으로 확인해 보세요.",
      "주문 상세의 배타적 소유와 폐기 조건은 합성의 근거가 됩니다. 상품 참조와 결제 구현은 각각 다른 관계이므로 같은 기호를 붙이기 전에 요구사항을 다시 읽어 보세요."
    ],
    "prompts": [
      {
        "label": "분석 질문",
        "text": "Java의 클래스와 인터페이스를 배운 대학생이 UML 관계를 연습하려고 해. 주문 상세는 한 주문에만 속하고 주문이 폐기되면 함께 폐기돼. 상품은 여러 주문에서 참조하며 계속 남아 있고, 결제 방식은 카드나 계좌이체로 선택할 수 있어. 정답 UML은 아직 보여주지 말고 소유 관계, 공유 가능성, 생명주기를 확인할 질문을 세 개 만들어 줘. 튜터는 관계 이름보다 요구사항에서 찾은 근거를 보고 있어. 먼저 그린 연결과 나중에 바꾼 연결을 비교할 수 있게 질문해 줘."
      },
      {
        "label": "단계별 힌트",
        "text": "아래에 내가 그린 쇼핑몰 UML과 막힌 부분을 붙일게. 클래스와 인터페이스를 배운 학생에게 소유 관계를 다시 찾는 힌트를 하나만 줘. 다음 요청이 오면 표기 위치, 그다음에는 수정 방향을 설명해 줘. 처음부터 완성된 UML을 제시하지 마. 나는 어느 요구사항을 보고 관계를 바꿨는지 설명할 거야.\n\n내 UML과 막힌 부분\n"
      },
      {
        "label": "코드 리뷰",
        "text": "내 UML 설명과 Java 코드를 읽고 주문 상세의 배타적 소유, 상품 참조의 공유, 결제 인터페이스의 다형성이 맞는지 검토해 줘. UML의 합성 표시만으로 Java가 객체를 자동 삭제한다고 설명하지 않도록 확인해 줘. 문제가 있으면 해당 연결이나 코드 줄을 짚고 첫 수정 힌트만 줘. 마지막에는 처음 판단과 바꾼 판단의 근거를 정리할 질문을 하나 남겨 줘.\n\n내 설계와 코드\n"
      },
      {
        "label": "Gemini 교차 검토",
        "text": "Java와 UML을 공부하는 대학생의 쇼핑몰 설계야. 아래 요구사항, 내 설계, ChatGPT 리뷰를 별도로 검토해 줘. 집합과 합성의 소유 조건, 마름모 위치, 인터페이스 구현 관계를 확인하고 의견이 다르면 어떤 전제에서 달라지는지 설명해 줘. 독립적으로 존재한다는 이유만으로 집합 관계를 단정한 부분도 찾아 줘. 튜터는 최종 관계와 근거가 연결되는지 확인하려고 해.\n\n요구사항·설계·리뷰\n"
      }
    ],
    "examples": [
      {
        "title": "공유 상품과 주문 상세, 결제 다형성",
        "description": "두 주문이 같은 상품을 참조한다. 주문 상세는 각 주문 내부에서 만든다. 마지막 두 호출에서는 인터페이스 참조가 가리키는 객체를 바꿔 출력 차이를 확인한다.",
        "className": "OopDemo",
        "code": "import java.util.ArrayList;\nimport java.util.List;\n\npublic class OopDemo {\n    static final class Product {\n        final String name;\n        final int price;\n\n        Product(String name, int price) {\n            this.name = name;\n            this.price = price;\n        }\n    }\n\n    static final class Order {\n        private static final class OrderLine {\n            final Product product;\n            final int quantity;\n\n            OrderLine(Product product, int quantity) {\n                this.product = product;\n                this.quantity = quantity;\n            }\n        }\n\n        private final List<OrderLine> lines = new ArrayList<>();\n\n        void add(Product product, int quantity) {\n            if (product == null || quantity <= 0) {\n                throw new IllegalArgumentException(\"invalid order line\");\n            }\n            lines.add(new OrderLine(product, quantity));\n        }\n\n        int total() {\n            return lines.stream()\n                    .mapToInt(line -> line.product.price * line.quantity)\n                    .sum();\n        }\n\n        void discard() {\n            lines.clear();\n        }\n    }\n\n    interface Payment {\n        String method();\n    }\n\n    static final class CardPayment implements Payment {\n        public String method() {\n            return \"CARD\";\n        }\n    }\n\n    static final class BankTransferPayment implements Payment {\n        public String method() {\n            return \"BANK\";\n        }\n    }\n\n    public static void main(String[] args) {\n        Product coffee = new Product(\"Coffee\", 3000);\n        Order first = new Order();\n        Order second = new Order();\n        first.add(coffee, 2);\n        second.add(coffee, 1);\n        System.out.println(first.total());\n        first.discard();\n        System.out.println(second.total());\n        System.out.println(coffee.name);\n\n        Payment payment = new CardPayment();\n        System.out.println(payment.method());\n        payment = new BankTransferPayment();\n        System.out.println(payment.method());\n    }\n}",
        "expectedOutput": "6000\n3000\nCoffee\nCARD\nBANK\n"
      }
    ],
    "quiz": [
      {
        "id": "oop-owner",
        "question": "주문 상세는 한 주문에만 속하고, 주문을 폐기하면 함께 폐기된다. 요구사항에 맞는 UML 표기는?",
        "options": [
          {
            "id": "a",
            "text": "주문 상세 쪽에 빈 마름모를 둔다.",
            "explanation": "전체는 주문이다. 빈 마름모도 배타적 소유 조건을 표현하는 합성 표기와 다르다."
          },
          {
            "id": "b",
            "text": "주문 쪽에 채운 마름모를 둔다.",
            "explanation": "주문이 전체이며 주문 상세를 배타적으로 소유한다. 채운 마름모는 전체 쪽에 붙는다."
          },
          {
            "id": "c",
            "text": "주문 쪽에 빈 삼각형을 둔다.",
            "explanation": "빈 삼각형은 일반화 관계에 쓰인다. 주문 상세가 주문의 한 종류라는 요구사항은 없다."
          },
          {
            "id": "d",
            "text": "주문 상세 쪽에 채운 마름모를 둔다.",
            "explanation": "합성 표기는 맞지만 전체와 부분의 위치가 뒤바뀌었다."
          }
        ],
        "answer": "b"
      },
      {
        "id": "oop-shared",
        "question": "상품 모음은 상품을 구성원으로 묶는 전체–부분 관계로 모델링한다. 같은 상품은 여러 모음에 들어가고, 모음을 없애도 상품은 남는다. 공유 집합으로 표현한다면 표기는?",
        "options": [
          {
            "id": "a",
            "text": "상품 모음 쪽에 채운 마름모를 둔다.",
            "explanation": "채운 마름모는 배타적 소유를 뜻한다. 같은 상품을 여러 모음이 공유한다는 조건과 맞지 않는다."
          },
          {
            "id": "b",
            "text": "상품 쪽에 빈 마름모를 둔다.",
            "explanation": "상품 모음이 전체이고 상품은 부분이다. 빈 마름모는 전체 쪽에 둔다."
          },
          {
            "id": "c",
            "text": "상품 모음 쪽에 빈 마름모를 둔다.",
            "explanation": "이 문제는 전체–부분 관계와 공유를 명시했다. 빈 마름모를 상품 모음 쪽에 두면 그 의도를 표현할 수 있다."
          },
          {
            "id": "d",
            "text": "상품에서 상품 모음으로 일반화 화살표를 그린다.",
            "explanation": "상품은 상품 모음의 하위 타입이 아니다. 구성원이라는 관계를 하위 타입 관계로 바꾸면 의미가 달라진다."
          }
        ],
        "answer": "c"
      },
      {
        "id": "oop-product",
        "question": "주문 상세가 상품의 이름과 가격을 읽는다. 같은 상품은 여러 주문 상세에서 참조한다. 가장 직접적인 관계 설명은?",
        "options": [
          {
            "id": "a",
            "text": "주문 상세가 상품을 참조하는 연관이다.",
            "explanation": "주문 상세와 상품은 서로 다른 역할의 객체다. 한쪽이 다른 쪽을 참조한다는 요구사항을 연관으로 표현할 수 있다."
          },
          {
            "id": "b",
            "text": "상품이 주문 상세를 상속한다.",
            "explanation": "상품을 주문 상세의 하위 타입으로 취급할 근거가 없다."
          },
          {
            "id": "c",
            "text": "주문 상세가 상품을 합성하므로 상품을 독점한다.",
            "explanation": "여러 주문 상세가 같은 상품을 참조한다는 조건이 상품의 배타적 소유와 충돌한다."
          },
          {
            "id": "d",
            "text": "참조 필드가 있으면 항상 공유 집합이다.",
            "explanation": "참조 필드만으로 전체–부분 의도를 알 수 없다. 일반 연관도 참조 필드로 구현된다."
          }
        ],
        "answer": "a"
      },
      {
        "id": "oop-dispatch",
        "question": "Payment p = new CardPayment()로 선언한 뒤 p.method()를 호출하고, p = new BankTransferPayment() 후 다시 호출한다. 예제의 출력 순서는?",
        "options": [
          {
            "id": "a",
            "text": "CARD → CARD",
            "explanation": "두 번째 대입으로 참조 대상이 바뀐다. 처음의 구현에 고정되지 않는다."
          },
          {
            "id": "b",
            "text": "BANK → CARD",
            "explanation": "대입과 호출 순서를 반대로 읽은 결과다."
          },
          {
            "id": "c",
            "text": "Payment → Payment",
            "explanation": "인터페이스 이름을 출력하는 코드가 없다. 실제 객체의 method 구현이 실행된다."
          },
          {
            "id": "d",
            "text": "CARD → BANK",
            "explanation": "첫 호출은 CardPayment, 두 번째 호출은 BankTransferPayment의 구현을 실행한다."
          }
        ],
        "answer": "d"
      },
      {
        "id": "oop-java-lifecycle",
        "question": "UML에서 주문과 주문 상세를 합성으로 그렸다. Java 구현을 검토할 때 타당한 설명은?",
        "options": [
          {
            "id": "a",
            "text": "마름모를 그리면 Java가 주문 상세의 삭제 시점을 자동으로 보장한다.",
            "explanation": "UML 표기는 실행 기능을 만들지 않는다. 소유와 폐기 정책은 코드에서 구현하고 검토해야 한다."
          },
          {
            "id": "b",
            "text": "상세의 생성·공유·접근 경로가 소유 조건에 맞는지 살펴야 한다.",
            "explanation": "관계의 의도가 코드에도 반영돼야 한다. 객체의 물리적 메모리 회수는 Java의 가비지 컬렉션과 별개로 다룬다."
          },
          {
            "id": "c",
            "text": "부분 객체를 final로 선언하면 모든 합성 조건이 충족된다.",
            "explanation": "final 참조는 재대입을 제한한다. 다른 객체와 공유되는지나 폐기 정책까지 보장하지 않는다."
          },
          {
            "id": "d",
            "text": "List에 담긴 객체는 모두 합성 관계다.",
            "explanation": "List는 저장 수단이다. 공유 가능한 객체를 참조하는 데도 사용할 수 있다."
          }
        ],
        "answer": "b"
      }
    ],
    "notes": [
      "상품의 독립적인 생명주기만 보고 집합을 확정하지 않는다. 전체–부분으로 표현할 필요가 있는지도 요구사항에서 확인한다.",
      "Java 예제의 discard는 주문 상세 목록을 비우는 논리적 폐기를 보여 준다. UML 합성이 가비지 컬렉션의 실행 시점을 정하지는 않는다.",
      "먼저 그린 UML과 수정한 UML을 나란히 놓고 바뀐 연결에 근거가 된 문장을 적어 본다."
    ]
  },
  {
    "id": "solid",
    "legacyId": 2,
    "week": 2,
    "title": "Design for Change",
    "topic": "SOLID",
    "planned": false,
    "colors": [
      "#B99BFF",
      "#F6A6CF"
    ],
    "goals": [
      "주문 코드가 바뀌는 이유를 찾아 책임을 나눈다.",
      "할인 정책을 추가할 때 바뀌는 코드와 유지할 코드를 구분한다.",
      "SRP·OCP·DIP를 연결해 리팩토링 근거를 설명한다."
    ],
    "concepts": [
      "SRP는 클래스가 바뀌는 이유를 살펴 책임을 나누는 기준이다.",
      "OCP는 예상하는 확장에 대해 기존 처리 로직의 수정을 줄이는 설계 원칙이다.",
      "DIP는 고수준 정책과 세부 구현이 추상화에 의존하게 한다.",
      "한 코드의 문제를 여러 원칙으로 설명할 수 있다. 원칙마다 어떤 변경을 줄이는지 구분한다."
    ],
    "challenge": "개선 전 주문 서비스의 금액 계산, DB 저장, 메일 발송을 읽어 보세요. 새 회원 할인, 저장 방식 변경, 문자 알림 추가가 각각 어느 줄을 바꾸게 하는지 표시하세요.\n\n책임을 나눈 UML을 먼저 그리고 DiscountPolicy를 받는 주문 서비스를 제안하세요. 주말 할인을 추가할 때 필요한 구현과 연결 코드를 적고, 주문 서비스의 어느 부분을 유지할 수 있는지 설명하세요.",
    "hints": [
      "요구사항이 하나 바뀔 때마다 수정할 메서드와 클래스를 표시하세요. 회원 할인 변경과 DB 변경이 같은 이유인지 생각해 보세요.",
      "주문 처리가 계산·저장·알림의 구체 방법을 모두 알아야 하는지 확인하세요. 다른 구현으로 바꿀 부분에 공통 계약을 붙여 보세요.",
      "새 할인 구현을 만드는 일과 그 구현을 주문 서비스에 연결하는 일을 나눠 보세요. OrderService가 DiscountPolicy만 호출하게 하면 할인 종류를 분기하는 코드가 어디에 남는지 확인할 수 있습니다."
    ],
    "prompts": [
      {
        "label": "분석 질문",
        "text": "Java의 인터페이스와 UML을 배운 대학생이 SOLID를 연습하려고 해. 주문 금액 계산, DB 저장, 메일 발송을 한 클래스가 맡고 할인 종류를 if 문으로 나누는 Java 예제를 50줄 안으로 만들어 줘. 어떤 원칙을 위반했는지와 개선 코드는 아직 보여주지 마. 새 할인, 저장 방식 변경, 알림 방식 변경에서 어느 부분을 수정해야 하는지 물어봐 줘. 튜터는 원칙 이름과 실제 변경 이유가 맞는지 볼 거야."
      },
      {
        "label": "단계별 힌트",
        "text": "아래 주문 코드에서 변경 이유를 찾아 책임을 나눠 봤어. Java 인터페이스를 배운 학생에게 우선 한 가지 힌트만 줘. 내가 다시 요청하면 의존 관계, 그다음에는 수정 방향을 짚어 줘. SRP·OCP·DIP를 한꺼번에 정답으로 제시하지 말고 내가 고른 근거를 확인해 줘.\n\n내 분석과 막힌 부분\n"
      },
      {
        "label": "코드 리뷰",
        "text": "아래 UML과 리팩토링한 Java 코드를 검토해 줘. 주문 처리, 할인 계산, 저장, 알림의 변경 이유가 나뉘는지와 고수준 코드가 어떤 타입에 의존하는지 확인해 줘. 주말 할인 구현을 추가할 때 조립 코드가 바뀔 수 있다는 점도 포함해 줘. 문제가 있으면 해당 줄을 짚고 수정 힌트부터 제시해 줘. 마지막에는 처음 설계에서 바뀐 의존 관계와 그 근거를 설명하게 해 줘.\n\n내 UML과 코드\n"
      },
      {
        "label": "Gemini 교차 검토",
        "text": "Java와 UML을 배운 대학생의 SOLID 리팩토링이야. 아래 요구사항과 코드, ChatGPT 리뷰를 따로 검토해 줘. 역할을 메서드로만 나누고 변경 이유는 한 클래스에 남겨 둔 부분, 인터페이스를 만들고도 구체 구현을 직접 선택하는 부분을 확인해 줘. 추상화가 필요한 변경 요구도 함께 짚어 줘. 타당한 설계가 여러 개라면 선택 조건을 비교하고, 최종 판단을 코드 근거와 함께 설명할 질문을 남겨 줘.\n\n요구사항·코드·리뷰\n"
      }
    ],
    "examples": [
      {
        "title": "개선 전 주문 서비스",
        "description": "한 서비스가 할인 분기, 저장, 발송을 맡는다. 출력이 정상이어도 기능이 바뀔 때 수정할 범위가 적절한지 따로 살펴야 한다.",
        "className": "OrderBeforeDemo",
        "code": "public class OrderBeforeDemo {\n    static final class OrderService {\n        int place(String discountType, int amount) {\n            int total = amount;\n            if (\"student\".equals(discountType)) {\n                total = amount - 1000;\n            } else if (\"vip\".equals(discountType)) {\n                total = amount * 90 / 100;\n            }\n            System.out.println(\"DB saved \" + total);\n            System.out.println(\"Email sent \" + total);\n            return total;\n        }\n    }\n\n    public static void main(String[] args) {\n        OrderService service = new OrderService();\n        System.out.println(service.place(\"student\", 10000));\n    }\n}",
        "expectedOutput": "DB saved 9000\nEmail sent 9000\n9000\n"
      },
      {
        "title": "개선 후 할인 정책과 구성 코드",
        "description": "OrderService는 주입받은 계약을 호출한다. 마지막 주문은 주말 할인 구현을 연결해 처리하며, 연결 위치는 main에서 확인할 수 있다.",
        "className": "SolidDemo",
        "code": "import java.util.Objects;\n\npublic class SolidDemo {\n    interface DiscountPolicy {\n        int total(int amount);\n    }\n\n    static final class FixedDiscount implements DiscountPolicy {\n        public int total(int amount) {\n            return Math.max(0, amount - 1000);\n        }\n    }\n\n    static final class WeekendDiscount implements DiscountPolicy {\n        public int total(int amount) {\n            return (int) (amount * 80L / 100);\n        }\n    }\n\n    interface OrderRepository {\n        void save(int total);\n    }\n\n    interface Notifier {\n        void send(int total);\n    }\n\n    static final class ConsoleRepository implements OrderRepository {\n        public void save(int total) {\n            System.out.println(\"Saved \" + total);\n        }\n    }\n\n    static final class EmailNotifier implements Notifier {\n        public void send(int total) {\n            System.out.println(\"Notified \" + total);\n        }\n    }\n\n    static final class OrderService {\n        private final DiscountPolicy discount;\n        private final OrderRepository repository;\n        private final Notifier notifier;\n\n        OrderService(DiscountPolicy discount,\n                     OrderRepository repository,\n                     Notifier notifier) {\n            this.discount = Objects.requireNonNull(discount);\n            this.repository = Objects.requireNonNull(repository);\n            this.notifier = Objects.requireNonNull(notifier);\n        }\n\n        int place(int amount) {\n            if (amount < 0) {\n                throw new IllegalArgumentException(\"negative amount\");\n            }\n            int total = discount.total(amount);\n            repository.save(total);\n            notifier.send(total);\n            return total;\n        }\n    }\n\n    public static void main(String[] args) {\n        OrderRepository repository = new ConsoleRepository();\n        Notifier notifier = new EmailNotifier();\n\n        OrderService regular = new OrderService(\n                new FixedDiscount(), repository, notifier);\n        System.out.println(regular.place(10000));\n\n        OrderService weekend = new OrderService(\n                new WeekendDiscount(), repository, notifier);\n        System.out.println(weekend.place(10000));\n    }\n}",
        "expectedOutput": "Saved 9000\nNotified 9000\n9000\nSaved 8000\nNotified 8000\n8000\n"
      }
    ],
    "quiz": [
      {
        "id": "solid-reasons",
        "question": "OrderService가 금액 계산, DB 저장, 메일 발송을 맡는다. SRP 관점에서 먼저 확인할 것은?",
        "options": [
          {
            "id": "a",
            "text": "클래스 안에 메서드가 세 개 이상인지 확인한다.",
            "explanation": "메서드 수로 책임을 결정할 수 없다. 한 책임에도 여러 메서드가 필요할 수 있다."
          },
          {
            "id": "b",
            "text": "클래스를 세 파일로 나누면 되는지 확인한다.",
            "explanation": "파일 수를 늘려도 변경 이유와 의존 관계가 그대로라면 분리 효과가 작다."
          },
          {
            "id": "c",
            "text": "계산 규칙, 저장 방식, 알림 정책이 서로 다른 이유로 바뀌는지 확인한다.",
            "explanation": "서로 독립적인 변경 이유를 찾으면 어떤 책임을 분리할지 설명할 수 있다."
          },
          {
            "id": "d",
            "text": "모든 메서드가 public인지 확인한다.",
            "explanation": "접근 제어는 변경 이유가 여러 개인 문제를 직접 해결하지 않는다."
          }
        ],
        "answer": "c"
      },
      {
        "id": "solid-extension",
        "question": "새 WeekendDiscount를 추가했다. OrderService가 DiscountPolicy만 호출한다면 다음 설명 중 타당한 것은?",
        "options": [
          {
            "id": "a",
            "text": "새 구현을 연결하는 main이나 설정은 바뀔 수 있다.",
            "explanation": "서비스의 위임 코드와 객체를 선택해 연결하는 구성 코드는 역할이 다르다."
          },
          {
            "id": "b",
            "text": "OCP를 지키려면 프로그램의 모든 파일이 그대로여야 한다.",
            "explanation": "OCP는 예상하는 확장에 대해 기존 핵심 로직의 수정을 줄이려는 원칙이다. 새 구현과 연결 코드는 필요할 수 있다."
          },
          {
            "id": "c",
            "text": "OrderService에도 주말 할인 분기문을 반드시 추가해야 한다.",
            "explanation": "공통 계약으로 새 구현을 호출할 수 있다면 서비스가 할인 종류를 다시 구분할 필요가 없다."
          },
          {
            "id": "d",
            "text": "기존 할인 구현을 모두 상속해 새 클래스를 만들어야 한다.",
            "explanation": "WeekendDiscount는 기존 계약을 구현하면 된다. 모든 할인 구현을 상속할 이유가 없다."
          }
        ],
        "answer": "a"
      },
      {
        "id": "solid-dip",
        "question": "DIP 관점에서 개선된 의존 관계는?",
        "options": [
          {
            "id": "a",
            "text": "OrderService가 생성자 안에서 EmailNotifier를 직접 만든다.",
            "explanation": "고수준 서비스가 구체 알림 구현의 생성과 선택을 계속 맡는다."
          },
          {
            "id": "b",
            "text": "모든 메서드를 static으로 바꾼다.",
            "explanation": "정적 메서드 여부로 의존성의 방향이 달라지는 것은 아니다."
          },
          {
            "id": "c",
            "text": "구체 구현 이름을 짧게 바꾼다.",
            "explanation": "이름의 길이는 고수준 정책과 세부 구현의 의존 관계를 바꾸지 않는다."
          },
          {
            "id": "d",
            "text": "OrderService가 Notifier 계약을 받고 EmailNotifier도 그 계약을 구현한다.",
            "explanation": "서비스와 세부 구현이 공통 추상화에 의존한다. 구성 코드가 둘을 연결할 수 있다."
          }
        ],
        "answer": "d"
      },
      {
        "id": "solid-weekend",
        "question": "주말에만 할인을 적용하려고 한다. 주문 처리 코드의 할인 분기를 줄이는 설계로 타당한 것은?",
        "options": [
          {
            "id": "a",
            "text": "주말 판단은 반드시 OrderService 안에 있어야 한다.",
            "explanation": "정책 선택을 구성 단계에서 하거나 정책이 날짜를 받아 판단하도록 설계할 수 있다."
          },
          {
            "id": "b",
            "text": "정책 구현이 날짜로 판단하거나, 구성 단계가 날짜에 맞는 정책을 선택한다.",
            "explanation": "두 방식 모두 가능하다. 주말 조건을 책임질 곳과 OrderService가 사용하는 계약을 분명히 해야 한다."
          },
          {
            "id": "c",
            "text": "인터페이스가 생겼으므로 날짜 조건을 생략한다.",
            "explanation": "인터페이스는 요구사항을 없애지 않는다. 주말인지 판단할 책임이 필요하다."
          },
          {
            "id": "d",
            "text": "정책 구현마다 OrderService를 복사한다.",
            "explanation": "주문 처리 로직이 중복돼 이후 수정이 여러 곳으로 퍼질 수 있다."
          }
        ],
        "answer": "b"
      },
      {
        "id": "solid-review",
        "question": "리팩토링 후 모든 클래스가 짧아졌다. 추가 검토로 가장 적절한 것은?",
        "options": [
          {
            "id": "a",
            "text": "줄 수가 줄었으므로 설계가 검증됐다고 본다.",
            "explanation": "코드 길이만으로 변경 영향과 책임 분리가 적절한지 알 수 없다."
          },
          {
            "id": "b",
            "text": "인터페이스 개수가 많을수록 좋은 설계로 본다.",
            "explanation": "사용할 변경 요구가 없는 추상화는 읽고 수정하는 부담을 늘릴 수 있다."
          },
          {
            "id": "c",
            "text": "새 할인과 새 저장 방식을 넣어 어디가 바뀌는지 확인한다.",
            "explanation": "변경 시나리오를 적용하면 설계가 줄인 수정 범위를 직접 확인할 수 있다."
          },
          {
            "id": "d",
            "text": "컴파일만 되면 기존 동작 비교는 생략한다.",
            "explanation": "컴파일 성공은 금액 계산과 저장·알림 동작의 보존까지 증명하지 않는다."
          }
        ],
        "answer": "c"
      }
    ],
    "notes": [
      "예제의 금액은 원 단위 정수이며 할인 결과를 간단한 정수 계산으로 보여 준다.",
      "구성 코드에서 어떤 정책을 선택할지 결정하는 변경과 OrderService의 처리 로직 변경을 따로 살펴본다.",
      "저장 실패 뒤 알림을 어떻게 처리할지 같은 운영 요구는 별도로 설계해야 한다. 예제는 책임과 의존 관계를 비교하는 학습 범위를 다룬다."
    ]
  },
  {
    "id": "behavior",
    "legacyId": 3,
    "week": 3,
    "title": "Change the Behavior",
    "topic": "Strategy · State · Singleton",
    "planned": false,
    "colors": [
      "#88DBE8",
      "#7C9DFF"
    ],
    "goals": [
      "패턴의 목적과 동작을 바꾸는 원인을 근거로 Strategy와 State를 구분한다.",
      "새 공격 전략과 잘못된 입력을 처리하면서 위임 코드의 변경 범위를 확인한다.",
      "설정 객체를 인터페이스로 받고 테스트마다 독립된 상태를 사용한다."
    ],
    "concepts": [
      "Strategy는 교체 가능한 알고리즘을 별도 객체에 둔다.",
      "State는 현재 상태에 따라 달라지는 요청 처리와 상태 전이를 표현한다.",
      "동작을 위임하는 UML이 비슷해도 해결하려는 문제가 다를 수 있다.",
      "Singleton의 단일 인스턴스와 그 객체 안의 가변 상태 갱신은 각각 검토한다."
    ],
    "challenge": "게임 캐릭터가 검과 활을 조건문으로 선택하는 구조에서 공격 방식이 추가될 때 바뀌는 곳을 찾으세요. AttackStrategy에 위임하는 UML을 그리고 StaffAttack을 추가할 때 GameCharacter와 main 중 어느 쪽을 수정하는지 적으세요. 잘못된 null 전략을 전달했을 때 기존 전략이 유지돼야 하는 이유도 설명하세요.\n\n자판기는 대기, 결제완료, 품절 상태에서 같은 요청을 다르게 처리합니다. 공격 방식 교체와 자판기 상태 변화를 비교해 각 패턴을 고른 근거를 적으세요. 마지막에는 설정 객체를 주입받는 코드에서 테스트 두 개가 독립된 설정을 갖도록 설계하세요.",
    "hints": [
      "공격 방식에서는 어떤 계산이나 동작을 교체하는지, 자판기에서는 어떤 상태 변화로 요청의 결과가 달라지는지 적어 보세요.",
      "GameCharacter가 알아야 할 공통 동작과 main이 선택할 구체 공격 클래스를 나눠 보세요. 자판기에서는 각 상태에서 허용되는 요청과 다음 상태를 표로 그려 보세요.",
      "전략 교체 전에 입력을 확인하면 교체에 실패해도 기존 전략을 유지할 수 있습니다. 설정은 Settings 계약으로 받고 테스트마다 별도 InMemorySettings를 만들면 공유 상태가 섞이는지 확인할 수 있습니다."
    ],
    "prompts": [
      {
        "label": "분석 질문",
        "text": "Java 인터페이스와 SOLID를 배운 대학생이 Strategy·State·Singleton을 비교하려고 해. 검과 활을 조건문으로 고르는 게임 캐릭터 예제를 만들고, 새 지팡이 공격이 추가될 때 바뀌는 부분을 묻는 질문을 먼저 줘. 완성된 패턴 코드는 아직 보여주지 마. 자판기의 대기·결제완료·품절 상태도 비교해 줘. 튜터는 누가 객체를 바꾸는지뿐 아니라 목적, 변경 원인, 상태 전이를 근거로 패턴을 골랐는지 확인할 거야."
      },
      {
        "label": "단계별 힌트",
        "text": "내가 그린 공격 전략과 자판기 UML을 붙일게. 클래스와 인터페이스를 배운 학생에게 변경 지점을 찾는 힌트 하나부터 줘. 다음 요청이 오면 공통 계약과 상태 전이, 그다음에는 수정 방향을 설명해 줘. 구조가 비슷하다는 이유만으로 같은 패턴이라 판단한 부분을 확인해 줘. 최종 답은 내가 고른 뒤 코드나 UML의 근거를 설명할게.\n\n내 UML과 막힌 부분\n"
      },
      {
        "label": "코드 리뷰",
        "text": "아래 Java 설계를 검토해 줘. StaffAttack 추가 시 GameCharacter의 위임 코드와 main의 구성 코드 중 어디가 바뀌는지, 생성자와 전략 교체가 null을 거부하는지 확인해 줘. 교체 실패 뒤 기존 전략을 계속 쓸 수 있어야 해. Settings 인터페이스를 받는 코드에는 서로 다른 InMemorySettings 두 개를 넣어 값이 섞이지 않는지도 확인해 줘. 정답 코드 전체를 먼저 주지 말고 문제가 생기는 조건과 첫 수정 힌트를 알려 줘.\n\n내 설계와 코드\n"
      },
      {
        "label": "Gemini 교차 검토",
        "text": "Java·SOLID를 배운 대학생을 위한 패턴 비교 자료야. 아래 요구사항, 코드, ChatGPT 리뷰를 별도로 검토해 줘. Strategy와 State를 목적과 변경 원인으로 구분했는지, 상태 전이를 특정 객체만 맡아야 한다고 단정했는지 확인해 줘. enum 상수의 초기화와 가변 상태 갱신의 안전성도 나눠 설명해 줘. 구체 enum 주입만으로 테스트가 격리된다는 설명이 있으면 독립 객체를 만들 수 있는지 확인해 줘. 처음 판단과 수정한 판단의 코드 근거를 정리할 질문을 남겨 줘.\n\n요구사항·코드·리뷰\n"
      }
    ],
    "examples": [
      {
        "title": "조건문으로 공격 방식 선택",
        "description": "검과 활을 문자열로 구분한다. StaffAttack에 해당하는 동작을 넣을 때 어디를 수정해야 하는지 먼저 찾아본다.",
        "className": "AttackBeforeDemo",
        "code": "public class AttackBeforeDemo {\n    static String attack(String weapon) {\n        if (\"sword\".equals(weapon)) {\n            return \"SWORD\";\n        }\n        if (\"bow\".equals(weapon)) {\n            return \"BOW\";\n        }\n        throw new IllegalArgumentException(\"unsupported weapon\");\n    }\n\n    public static void main(String[] args) {\n        System.out.println(attack(\"sword\"));\n        System.out.println(attack(\"bow\"));\n    }\n}",
        "expectedOutput": "SWORD\nBOW\n"
      },
      {
        "title": "공격 전략 추가와 null 교체 거부",
        "description": "SwordAttack, BowAttack, StaffAttack을 같은 계약으로 사용한다. 생성자와 교체 메서드는 null을 거부하며, 실패한 교체 뒤에도 직전 공격 전략을 사용할 수 있다.",
        "className": "StrategyDemo",
        "code": "import java.util.Objects;\n\npublic class StrategyDemo {\n    interface AttackStrategy {\n        String attack();\n    }\n\n    static final class SwordAttack implements AttackStrategy {\n        public String attack() {\n            return \"SWORD\";\n        }\n    }\n\n    static final class BowAttack implements AttackStrategy {\n        public String attack() {\n            return \"BOW\";\n        }\n    }\n\n    static final class StaffAttack implements AttackStrategy {\n        public String attack() {\n            return \"STAFF\";\n        }\n    }\n\n    static final class GameCharacter {\n        private AttackStrategy strategy;\n\n        GameCharacter(AttackStrategy strategy) {\n            this.strategy = Objects.requireNonNull(strategy, \"strategy\");\n        }\n\n        void setStrategy(AttackStrategy next) {\n            strategy = Objects.requireNonNull(next, \"strategy\");\n        }\n\n        String attack() {\n            return strategy.attack();\n        }\n    }\n\n    public static void main(String[] args) {\n        try {\n            new GameCharacter(null);\n            throw new AssertionError(\"null constructor accepted\");\n        } catch (NullPointerException expected) {\n            System.out.println(\"constructor rejected null\");\n        }\n\n        GameCharacter character = new GameCharacter(new SwordAttack());\n        System.out.println(character.attack());\n        character.setStrategy(new BowAttack());\n        System.out.println(character.attack());\n        character.setStrategy(new StaffAttack());\n        System.out.println(character.attack());\n\n        try {\n            character.setStrategy(null);\n            throw new AssertionError(\"null replacement accepted\");\n        } catch (NullPointerException expected) {\n            System.out.println(\"replacement rejected null\");\n        }\n        if (!\"STAFF\".equals(character.attack())) {\n            throw new AssertionError(\"previous strategy was lost\");\n        }\n        System.out.println(character.attack());\n    }\n}",
        "expectedOutput": "constructor rejected null\nSWORD\nBOW\nSTAFF\nreplacement rejected null\nSTAFF\n"
      },
      {
        "title": "자판기의 상태별 요청과 전이",
        "description": "대기 상태에서 결제하면 결제완료가 되고, 환불하면 대기로 돌아간다. 마지막 상품을 꺼낸 뒤에는 품절 상태가 결제를 거부한다. 이 예제에서는 상태 객체가 다음 상태를 정한다.",
        "className": "StateDemo",
        "code": "public class StateDemo {\n    enum MachineState {\n        WAITING {\n            void pay(VendingMachine machine) {\n                machine.state = PAID;\n            }\n\n            void dispense(VendingMachine machine) {\n                throw new IllegalStateException(\"payment required\");\n            }\n\n            void refund(VendingMachine machine) {\n                throw new IllegalStateException(\"nothing to refund\");\n            }\n        },\n        PAID {\n            void pay(VendingMachine machine) {\n                throw new IllegalStateException(\"already paid\");\n            }\n\n            void dispense(VendingMachine machine) {\n                machine.stock--;\n                machine.state = machine.stock == 0 ? SOLD_OUT : WAITING;\n            }\n\n            void refund(VendingMachine machine) {\n                machine.state = WAITING;\n            }\n        },\n        SOLD_OUT {\n            void pay(VendingMachine machine) {\n                throw new IllegalStateException(\"sold out\");\n            }\n\n            void dispense(VendingMachine machine) {\n                throw new IllegalStateException(\"sold out\");\n            }\n\n            void refund(VendingMachine machine) {\n                throw new IllegalStateException(\"nothing to refund\");\n            }\n        };\n\n        abstract void pay(VendingMachine machine);\n        abstract void dispense(VendingMachine machine);\n        abstract void refund(VendingMachine machine);\n    }\n\n    static final class VendingMachine {\n        private int stock;\n        private MachineState state;\n\n        VendingMachine(int stock) {\n            if (stock < 0) {\n                throw new IllegalArgumentException(\"negative stock\");\n            }\n            this.stock = stock;\n            state = stock == 0 ? MachineState.SOLD_OUT : MachineState.WAITING;\n        }\n\n        void pay() {\n            state.pay(this);\n        }\n\n        void dispense() {\n            state.dispense(this);\n        }\n\n        void refund() {\n            state.refund(this);\n        }\n\n        String status() {\n            return state.name();\n        }\n    }\n\n    public static void main(String[] args) {\n        VendingMachine machine = new VendingMachine(1);\n        System.out.println(machine.status());\n        machine.pay();\n        System.out.println(machine.status());\n        machine.refund();\n        System.out.println(machine.status());\n        machine.pay();\n        machine.dispense();\n        System.out.println(machine.status());\n        try {\n            machine.pay();\n            throw new AssertionError(\"payment accepted while sold out\");\n        } catch (IllegalStateException expected) {\n            System.out.println(expected.getMessage());\n        }\n    }\n}",
        "expectedOutput": "WAITING\nPAID\nWAITING\nSOLD_OUT\nsold out\n"
      },
      {
        "title": "운영 설정과 테스트 설정의 상태 격리",
        "description": "사용하는 코드는 Settings에 의존한다. 운영에는 enum 상수를 넣고, 테스트에는 각각 만든 InMemorySettings를 넣어 한쪽의 값 변경이 다른 설정에 영향을 주는지 확인한다.",
        "className": "SettingsDemo",
        "code": "import java.util.HashMap;\nimport java.util.Map;\nimport java.util.Objects;\n\npublic class SettingsDemo {\n    interface Settings {\n        String get(String key);\n        void put(String key, String value);\n    }\n\n    enum ProductionSettings implements Settings {\n        INSTANCE;\n\n        private final Map<String, String> values = new HashMap<>();\n\n        public String get(String key) {\n            return values.get(key);\n        }\n\n        public void put(String key, String value) {\n            values.put(key, value);\n        }\n    }\n\n    static final class InMemorySettings implements Settings {\n        private final Map<String, String> values = new HashMap<>();\n\n        public String get(String key) {\n            return values.get(key);\n        }\n\n        public void put(String key, String value) {\n            values.put(key, value);\n        }\n    }\n\n    static final class Application {\n        private final Settings settings;\n\n        Application(Settings settings) {\n            this.settings = Objects.requireNonNull(settings, \"settings\");\n        }\n\n        String mode() {\n            return settings.get(\"mode\");\n        }\n    }\n\n    public static void main(String[] args) {\n        Settings production = ProductionSettings.INSTANCE;\n        Settings first = new InMemorySettings();\n        Settings second = new InMemorySettings();\n        production.put(\"mode\", \"production\");\n        first.put(\"mode\", \"first\");\n        second.put(\"mode\", \"second\");\n        first.put(\"mode\", \"first-updated\");\n\n        String firstMode = new Application(first).mode();\n        String secondMode = new Application(second).mode();\n        String productionMode = new Application(production).mode();\n        if (!\"first-updated\".equals(firstMode)\n                || !\"second\".equals(secondMode)\n                || !\"production\".equals(productionMode)) {\n            throw new AssertionError(\"settings are not isolated\");\n        }\n        System.out.println(firstMode);\n        System.out.println(secondMode);\n        System.out.println(productionMode);\n    }\n}",
        "expectedOutput": "first-updated\nsecond\nproduction\n"
      }
    ],
    "quiz": [
      {
        "id": "behavior-causes",
        "question": "공격 계산 방식을 바꾸는 경우와 자판기가 상태에 따라 요청을 다르게 처리하는 경우를 구분할 기준은?",
        "options": [
          {
            "id": "a",
            "text": "클래스 이름에 Strategy 또는 State라는 단어가 있는지 본다.",
            "explanation": "이름은 의도를 표현하는 단서지만 실제 책임과 변경 원인을 대신하지 못한다."
          },
          {
            "id": "b",
            "text": "인터페이스로 위임하면 모두 Strategy로 분류한다.",
            "explanation": "State도 인터페이스나 공통 타입으로 동작을 위임할 수 있다."
          },
          {
            "id": "c",
            "text": "사용자가 선택하면 Strategy이고 내부에서 바꾸면 항상 State다.",
            "explanation": "선택 주체 하나로 패턴을 확정할 수 없다. 어떤 문제를 해결하고 무엇 때문에 동작이 바뀌는지 확인해야 한다."
          },
          {
            "id": "d",
            "text": "알고리즘 교체인지, 현재 상태에 따른 동작과 전이를 표현하는지 본다.",
            "explanation": "패턴의 목적과 변경 원인을 보면 비슷한 위임 구조의 차이를 설명할 수 있다."
          }
        ],
        "answer": "d"
      },
      {
        "id": "behavior-staff",
        "question": "GameCharacter가 AttackStrategy만 호출한다. StaffAttack을 추가할 때 타당한 변경 설명은?",
        "options": [
          {
            "id": "a",
            "text": "GameCharacter에 지팡이인지 확인하는 분기를 추가한다.",
            "explanation": "공통 계약으로 호출할 수 있다면 구체 공격 종류를 다시 분기할 필요가 없다."
          },
          {
            "id": "b",
            "text": "StaffAttack과 이를 선택해 연결하는 코드를 추가한다.",
            "explanation": "새 전략 구현과 구성 코드는 필요하지만 GameCharacter의 위임 메서드는 유지할 수 있다."
          },
          {
            "id": "c",
            "text": "SwordAttack과 BowAttack의 메서드를 모두 수정한다.",
            "explanation": "기존 전략의 계약이 유지된다면 새 전략 때문에 기존 구현을 바꿀 이유가 없다."
          },
          {
            "id": "d",
            "text": "OCP를 지키려면 StaffAttack 파일도 추가하면 안 된다.",
            "explanation": "새 구현을 추가하는 확장은 OCP의 취지에 맞는다."
          }
        ],
        "answer": "b"
      },
      {
        "id": "behavior-null",
        "question": "strategy = Objects.requireNonNull(next)로 전략을 교체한다. next가 null일 때의 동작은?",
        "options": [
          {
            "id": "a",
            "text": "예외가 발생하고 기존 strategy 값은 유지된다.",
            "explanation": "오른쪽 식이 예외를 던지면 대입이 실행되지 않는다. 직전 전략을 계속 사용할 수 있다."
          },
          {
            "id": "b",
            "text": "strategy에 null이 저장된 다음 예외가 발생한다.",
            "explanation": "대입은 오른쪽 식의 평가가 성공한 뒤 이뤄진다."
          },
          {
            "id": "c",
            "text": "현재 전략 객체가 자동으로 삭제된다.",
            "explanation": "이 코드는 현재 객체를 삭제하거나 변경하지 않는다."
          },
          {
            "id": "d",
            "text": "null이 전달되면 기본 전략을 자동으로 만든다.",
            "explanation": "requireNonNull은 기본 객체를 생성하지 않고 null에 대해 예외를 던진다."
          }
        ],
        "answer": "a"
      },
      {
        "id": "behavior-singleton",
        "question": "상수가 하나인 enum으로 만든 설정 객체에 가변 Map이 있다. 두 스레드가 동시에 값을 바꿀 때 올바른 설명은?",
        "options": [
          {
            "id": "a",
            "text": "인스턴스가 하나이므로 Map의 모든 연산도 안전하다.",
            "explanation": "인스턴스 수는 가변 자료구조의 동시 갱신 안전성을 보장하지 않는다."
          },
          {
            "id": "b",
            "text": "enum의 상수는 스레드마다 별도로 생성된다.",
            "explanation": "같은 클래스 로더가 정의한 동일 enum 타입의 상수는 스레드별 객체가 아니다."
          },
          {
            "id": "c",
            "text": "enum 초기화와 Map 갱신의 안전성은 각각 검토해야 한다.",
            "explanation": "enum 상수의 초기화 규칙이 내부 Map의 동기화나 복합 연산의 원자성까지 제공하지 않는다."
          },
          {
            "id": "d",
            "text": "Map 필드를 final로 선언하면 내부 값 변경도 금지된다.",
            "explanation": "final은 필드 참조의 재대입을 제한한다. 참조하는 Map의 내용은 여전히 바뀔 수 있다."
          }
        ],
        "answer": "c"
      },
      {
        "id": "behavior-test-isolation",
        "question": "테스트마다 다른 설정을 넣고 싶다. Application 생성자가 구체 ProductionSettings enum 타입만 받는다면 어떤 개선이 필요한가?",
        "options": [
          {
            "id": "a",
            "text": "각 테스트에서 ProductionSettings.INSTANCE를 다시 읽는다.",
            "explanation": "같은 상수를 다시 읽어도 독립된 설정 객체가 생기지 않는다."
          },
          {
            "id": "b",
            "text": "필드 이름을 testSettings로 바꾼다.",
            "explanation": "이름을 바꿔도 참조하는 공유 객체는 같다."
          },
          {
            "id": "c",
            "text": "enum에 테스트용 값을 계속 추가한다.",
            "explanation": "테스트별 독립 객체가 생기는 구조가 아니며 운영 타입에 테스트 구성이 쌓인다."
          },
          {
            "id": "d",
            "text": "Settings 인터페이스를 받고 테스트마다 InMemorySettings를 만든다.",
            "explanation": "호출 계약을 유지하면서 각 테스트에 독립된 저장 상태를 가진 구현을 주입할 수 있다."
          }
        ],
        "answer": "d"
      }
    ],
    "notes": [
      "State의 전이는 설계에 따라 상태 객체나 Context가 맡을 수 있다. 누가 다음 상태를 고르는지만으로 Strategy와 State를 구분하지 않는다.",
      "enum에는 상수마다 인스턴스가 있다. 상수가 하나인 enum을 Singleton으로 쓸 때도 단일성은 해당 클래스를 정의한 클래스 로더의 범위에서 이해한다.",
      "SettingsDemo의 HashMap은 테스트별 상태 격리를 보여 준다. 여러 스레드가 공유하는 운영 설정에는 동시 갱신 요구에 맞는 별도 설계가 필요하다.",
      "StrategyDemo는 생성자의 null 입력, 정상 전략 교체, null 교체 거부와 기존 전략 유지를 실행해서 확인한다."
    ]
  },
  {
    "id": "command-observer",
    "legacyId": 5,
    "week": 4,
    "title": "요청과 알림을 나누기",
    "topic": "Command · Observer",
    "planned": false,
    "colors": [
      "#9E8BFF",
      "#78A8FF"
    ],
    "goals": [
      "리모컨의 직접 호출을 Command로 바꾸고 각 객체의 역할을 UML에 표시한다.",
      "명령을 실행할 때마다 직전 상태를 저장해 역순으로 복원한다.",
      "주문 알림 도중 구독이 바뀌었을 때 현재와 다음 알림 대상을 추적한다."
    ],
    "concepts": [
      "Command는 요청을 객체로 표현하고 Invoker와 실제 작업을 수행하는 Receiver를 연결한다.",
      "Undo에 필요한 상태는 실행마다 달라질 수 있다.",
      "Observer는 공통 인터페이스로 알림 대상을 연결한다.",
      "알림마다 만든 구독 목록의 복사본은 그 알림에 참여할 대상을 정한다."
    ],
    "challenge": "리모컨의 버튼이 light.setOn(true)를 직접 호출한다고 가정하세요. 조명은 처음 꺼져 있고 같은 켜기 버튼을 두 번 누른 뒤 실행을 두 번 취소할 수 있어야 합니다. 리모컨, 요청, 조명의 관계를 UML로 그린 뒤 각 실행에서 남길 값을 적어보세요.\n\n주문 상태가 바뀌면 이메일과 앱에 알림을 보냅니다. 이메일 처리 중 앱 구독을 해제하고 로그 구독을 추가합니다. 이번 알림과 다음 알림의 대상을 어떻게 정할지도 그림에 표시하세요.",
    "hints": [
      "버튼에 새 기능이 생길 때 리모컨의 어떤 코드가 바뀌는지 찾으세요. 켜기 버튼을 두 번 누르면 두 번째 실행 직전의 조명 상태는 무엇인가요?",
      "요청을 맡는 Command와 조명을 다루는 Receiver를 나눠보세요. 같은 명령을 재사용할 때 이전 상태를 한 필드에만 저장하면 어떤 기록을 잃을까요?",
      "실행마다 직전 상태를 따로 캡처한 복원 작업을 스택에 넣어보세요. Observer는 알림을 시작할 때 구독 목록을 복사하고 그 복사본을 끝까지 순회하는 규칙으로 비교하세요."
    ],
    "prompts": [
      {
        "label": "분석 질문",
        "text": "Java와 UML, SOLID, Strategy·State를 배운 대학생이야. 스마트홈 리모컨이 조명을 직접 호출하는 코드와 주문 상태를 이메일·앱에 직접 전달하는 상황을 분석하려고 해. 요청 객체와 알림 대상의 의존 관계, 같은 켜기 명령을 두 번 실행한 뒤 취소하는 상황이 점검할 부분이야. 요구사항과 분석 질문만 먼저 제시해 줘. 내가 UML을 그리기 전에는 정답 설계와 완성 코드를 보여주지 마. 튜터는 변경되는 코드와 이전 상태를 저장하는 시점을 근거로 판단하는지 볼 거야. 마지막에는 처음 판단과 바뀐 판단을 비교하고 코드나 UML에서 근거를 찾게 해 줘."
      },
      {
        "label": "단계별 힌트",
        "text": "내 UML과 막힌 지점을 붙일게. 리모컨의 직접 호출을 Command로 바꾸고 주문 알림에 Observer를 적용하는 과제야. 정답을 바로 제시하지 말고 변경 지점, 객체의 역할, 상태를 저장하거나 알림 대상을 정하는 시점 순서로 힌트를 하나씩 줘. 내가 답한 뒤 다음 힌트를 이어가 줘. 같은 켜기 명령을 두 번 실행하면 두 실행의 직전 상태가 다른지도 확인하게 해 줘."
      },
      {
        "label": "코드 리뷰",
        "text": "내 Java 코드와 UML을 검토해 줘. Command는 실행마다 직전 상태를 보관하고 마지막 실행부터 취소해야 해. Observer는 단일 스레드에서 알림을 시작할 때 구독 목록을 복사하며 알림 도중의 등록·해제는 다음 알림에 반영해. 조건을 어긴 코드 줄을 먼저 짚고 수정할 방향을 힌트로 알려 줘. 불필요한 추상화도 살펴봐 줘. 검증한 동작과 아직 확인하지 않은 동시 접근·콜백 예외·재진입 처리는 구분해 줘."
      },
      {
        "label": "Gemini 교차 검토",
        "text": "Java와 UML을 배운 대학생을 위한 Command·Observer 설계와 ChatGPT의 검토 내용을 붙일게. 독립적으로 실행 순서를 따라가며 직전 상태의 실행별 캡처, LIFO 취소, 알림 시작 시점의 구독 목록을 확인해 줘. 조명이 꺼진 상태에서 켜기를 두 번 실행하고 두 번 취소하면 true, false가 나오는지 검토해 줘. 단일 스레드 목록 복사가 동시 접근까지 안전하게 한다고 설명한 부분이 있는지도 찾아 줘. 다른 결론이 나오면 요구사항과 코드 줄을 근거로 설명해 줘."
      }
    ],
    "examples": [
      {
        "title": "같은 명령을 두 번 실행하고 취소하기",
        "description": "TurnOn 객체를 재사용해도 execute마다 before를 새로 캡처한다. 복원 작업은 마지막에 저장한 것부터 실행한다.",
        "className": "CommandUndoDemo",
        "code": "import java.util.ArrayDeque;\nimport java.util.Deque;\n\npublic class CommandUndoDemo {\n    static final class Light {\n        private boolean on;\n        boolean isOn() { return on; }\n        void setOn(boolean value) { on = value; }\n    }\n\n    interface Command {\n        Runnable execute();\n    }\n\n    static final class TurnOn implements Command {\n        private final Light light;\n        TurnOn(Light light) { this.light = light; }\n        public Runnable execute() {\n            boolean before = light.isOn();\n            light.setOn(true);\n            return () -> light.setOn(before);\n        }\n    }\n\n    static final class Remote {\n        private final Deque<Runnable> history = new ArrayDeque<>();\n        void press(Command command) {\n            history.push(command.execute());\n        }\n        void undo() {\n            if (!history.isEmpty()) history.pop().run();\n        }\n    }\n\n    public static void main(String[] args) {\n        Light light = new Light();\n        Remote remote = new Remote();\n        Command turnOn = new TurnOn(light);\n        remote.press(turnOn);\n        remote.press(turnOn);\n        remote.undo();\n        System.out.println(light.isOn());\n        remote.undo();\n        System.out.println(light.isOn());\n    }\n}",
        "expectedOutput": "true\nfalse\n"
      },
      {
        "title": "주문 알림 중 구독 목록 바꾸기",
        "description": "이메일 A가 첫 알림에서 앱 B를 해제하고 로그 C를 등록한다. 각 알림은 시작 시점의 복사본을 순회한다.",
        "className": "OrderObserverDemo",
        "code": "import java.util.ArrayList;\nimport java.util.LinkedHashSet;\nimport java.util.Set;\n\npublic class OrderObserverDemo {\n    interface Observer {\n        void update(String status, int event);\n    }\n\n    static final class Order {\n        private final Set<Observer> observers = new LinkedHashSet<>();\n        private int event;\n        void subscribe(Observer observer) { observers.add(observer); }\n        void unsubscribe(Observer observer) { observers.remove(observer); }\n        void changeStatus(String status) {\n            int currentEvent = ++event;\n            for (Observer observer : new ArrayList<>(observers)) {\n                observer.update(status, currentEvent);\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        Order order = new Order();\n        Observer app = (status, event) -> System.out.println(\"B\" + event);\n        Observer log = (status, event) -> System.out.println(\"C\" + event);\n        Observer email = (status, event) -> {\n            System.out.println(\"A\" + event);\n            if (event == 1) {\n                order.unsubscribe(app);\n                order.subscribe(log);\n            }\n        };\n        order.subscribe(email);\n        order.subscribe(app);\n        order.changeStatus(\"PAID\");\n        order.changeStatus(\"SHIPPED\");\n    }\n}",
        "expectedOutput": "A1\nB1\nA2\nC2\n"
      }
    ],
    "quiz": [
      {
        "id": "command-roles",
        "question": "리모컨의 버튼은 공통 execute 메서드를 호출하고 Light 객체가 실제 조명 상태를 바꾼다. Light의 역할은 무엇인가?",
        "options": [
          {
            "id": "a",
            "text": "Invoker",
            "explanation": "Invoker는 명령을 호출하는 리모컨이다."
          },
          {
            "id": "b",
            "text": "Receiver",
            "explanation": "Light가 실제 작업과 상태 변경을 담당한다."
          },
          {
            "id": "c",
            "text": "Command",
            "explanation": "Command는 실행할 요청을 표현하고 Receiver에 작업을 위임한다."
          },
          {
            "id": "d",
            "text": "Observer",
            "explanation": "이 예제에서 Light는 알림 구독 역할을 맡지 않는다."
          }
        ],
        "answer": "b"
      },
      {
        "id": "command-undo",
        "question": "꺼진 조명을 같은 켜기 명령으로 두 번 켠다. 매번 직전 상태를 따로 저장했다면 두 번 취소한 직후 상태는 순서대로 무엇인가?",
        "options": [
          {
            "id": "a",
            "text": "false → false",
            "explanation": "두 번째 실행 직전에는 조명이 이미 켜져 있어 첫 취소는 true를 복원한다."
          },
          {
            "id": "b",
            "text": "false → true",
            "explanation": "이는 저장한 순서대로 복원한 결과다. 취소는 마지막 실행부터 처리한다."
          },
          {
            "id": "c",
            "text": "true → true",
            "explanation": "첫 실행 직전의 false 기록도 복원해야 한다."
          },
          {
            "id": "d",
            "text": "true → false",
            "explanation": "두 번째 실행 전의 true를 먼저 복원하고 첫 실행 전의 false를 복원한다."
          }
        ],
        "answer": "d"
      },
      {
        "id": "observer-contract",
        "question": "Order가 EmailSender와 AppNotifier의 구체 메서드를 직접 호출한다. 새 알림 대상을 쉽게 추가하려면 어떤 변경이 적절한가?",
        "options": [
          {
            "id": "a",
            "text": "공통 Observer 계약으로 대상을 등록하고 Order가 그 계약을 호출한다.",
            "explanation": "Order는 구체 알림 종류마다 호출 코드를 추가할 필요가 줄어든다."
          },
          {
            "id": "b",
            "text": "모든 알림 대상을 하나의 Singleton으로 합친다.",
            "explanation": "단일 인스턴스로 합쳐도 구체 대상과 알림 규칙의 결합은 해결되지 않는다."
          },
          {
            "id": "c",
            "text": "Order가 대상 클래스 이름을 문자열로 비교한다.",
            "explanation": "대상이 늘 때마다 Order의 분기와 호출을 함께 고쳐야 한다."
          },
          {
            "id": "d",
            "text": "Order의 모든 메서드에 synchronized를 붙인다.",
            "explanation": "동기화는 상호 배제와 관련되며 구체 알림 대상에 대한 의존을 분리하지 않는다."
          }
        ],
        "answer": "a"
      },
      {
        "id": "observer-snapshot",
        "question": "단일 스레드에서 구독자 [A, B]를 복사해 첫 알림을 보낸다. A가 처리 중 B를 해제하고 C를 등록한다. 다음 알림도 시작할 때 목록을 복사한다면 수신 대상은?",
        "options": [
          {
            "id": "a",
            "text": "첫 알림 A·C, 다음 알림 A·C",
            "explanation": "C는 첫 알림에 사용한 복사본에 들어 있지 않다."
          },
          {
            "id": "b",
            "text": "첫 알림 A만, 다음 알림 A·C",
            "explanation": "B는 원본에서 해제돼도 첫 알림의 복사본에는 남아 있다."
          },
          {
            "id": "c",
            "text": "첫 알림 A·B, 다음 알림 A·C",
            "explanation": "현재 복사본과 다음 알림에서 만든 복사본의 내용이 다르다."
          },
          {
            "id": "d",
            "text": "첫 알림 A·B, 다음 알림 A·B",
            "explanation": "다음 알림의 복사본은 변경된 원본에서 만들므로 B 대신 C를 포함한다."
          }
        ],
        "answer": "c"
      },
      {
        "id": "observer-safety",
        "question": "단일 스레드에서 구독 목록을 복사해 순회하는 코드를 실행했다. 검증 범위에 맞는 설명은?",
        "options": [
          {
            "id": "a",
            "text": "복사본을 쓰므로 모든 다중 스레드 호출도 안전하다.",
            "explanation": "복사 시점의 동시 접근과 공유 상태에는 별도 검토가 필요하다."
          },
          {
            "id": "b",
            "text": "알림 도중 구독 변경을 현재 순회와 분리했으며 동시 접근과 콜백 예외는 따로 검토한다.",
            "explanation": "실행한 조건과 아직 검토하지 않은 조건을 나눠 설명한 것이다."
          },
          {
            "id": "c",
            "text": "한 구독자의 콜백이 예외를 던져도 나머지 알림은 항상 실행된다.",
            "explanation": "예제에는 예외를 잡아 순회를 이어가는 처리가 없다."
          },
          {
            "id": "d",
            "text": "구독자가 다시 알림을 요청해도 중복 호출은 자동으로 막힌다.",
            "explanation": "재진입과 중복 알림을 막는 별도 정책이 필요하다."
          }
        ],
        "answer": "b"
      }
    ],
    "notes": [
      "Undo가 실행 요청을 기억하는 방식과 실행별 이전 상태를 저장하는 방식을 함께 확인하세요. 취소해도 현재 값이 그대로인 경우가 있습니다.",
      "Observer 예제는 단일 스레드를 전제로 합니다. 콜백 예외를 격리하거나 재진입을 제어하는 코드는 포함하지 않았습니다.",
      "알림 대상을 순회용 복사본으로 고정하는 규칙은 이번 예제의 선택입니다. 모든 Observer 구현이 같은 규칙을 쓰는 것은 아닙니다."
    ]
  },
  {
    "id": "structure",
    "legacyId": 6,
    "week": 5,
    "title": "옵션을 감싸고 트리를 묶기",
    "topic": "Decorator · Composite",
    "planned": false,
    "colors": [
      "#8FE3DF",
      "#8DB9F8"
    ],
    "goals": [
      "음료와 옵션이 같은 인터페이스를 쓰는 구조를 UML로 그린다.",
      "파일과 폴더의 크기를 같은 호출로 구하고 중첩 폴더의 합산을 추적한다.",
      "처음 설계에서 바꾼 연결과 그 근거를 코드로 설명한다."
    ],
    "concepts": [
      "Decorator는 같은 계약을 구현한 객체를 감싸 동작을 덧붙인다.",
      "옵션 조합별 하위 클래스를 만드는 대신 필요한 객체를 조합한다.",
      "Composite는 Leaf와 Composite를 공통 Component로 다룬다.",
      "폴더는 자식의 size를 호출하고 그 결과를 합산한다."
    ],
    "challenge": "카페에서 기본 커피에 샷과 시럽을 함께 추가할 수 있습니다. 조합별 클래스를 만드는 UML을 먼저 그리고, 새 옵션을 추가하면 어떤 클래스가 늘어나는지 적어보세요. 음료와 옵션이 같은 price 메서드를 제공하도록 그림을 바꿀 때 수정한 연결을 표시하세요.\n\n파일 한 개의 크기는 100이고 하위 폴더에는 크기가 200, 300인 파일이 있습니다. 파일과 폴더에 같은 size 메서드를 호출하는 UML을 그리고 루트 폴더의 크기를 구하는 호출 순서를 적어보세요.",
    "hints": [
      "샷과 시럽을 동시에 선택할 때 기존 상속 구조에서 어떤 조합 클래스가 필요한가요? 파일과 폴더에서 사용자가 공통으로 요청할 작업도 찾아보세요.",
      "샷 객체가 음료 객체를 보관하고 같은 price 계약을 구현하도록 그려보세요. 폴더의 자식 목록에는 파일뿐 아니라 다른 폴더도 들어가야 합니다.",
      "옵션은 감싼 객체의 price를 호출한 뒤 자신의 금액을 더합니다. 폴더는 각 자식의 size를 호출해 합산합니다. 처음 UML과 비교해 위임과 재귀 호출이 나타나는 연결을 표시하세요."
    ],
    "prompts": [
      {
        "label": "분석 질문",
        "text": "Java와 UML, SOLID, Strategy, Command·Observer를 배운 대학생이야. 샷·시럽을 함께 넣는 카페 음료와 파일·폴더의 크기 계산을 설계하려고 해. 옵션마다 상속 클래스를 늘리는 구조와 파일·폴더를 따로 처리하는 구조에서 어떤 변경이 생기는지 먼저 생각하고 싶어. 요구사항과 분석 질문만 제시해 줘. 내가 UML을 그린 뒤 힌트를 요청할게. 튜터는 공통 인터페이스, 위임 대상, 자식의 계산 결과를 모으는 위치를 근거로 설명하는지 확인할 거야."
      },
      {
        "label": "단계별 힌트",
        "text": "내 카페 음료와 파일·폴더 UML, 막힌 지점을 붙일게. 변경 지점, 공통 계약, 위임과 자식 관계 순서로 힌트를 하나씩 줘. 내가 답하기 전에 완성 UML이나 정답 코드를 먼저 제시하지 마. 샷과 시럽을 함께 추가할 때, 폴더 안에 폴더를 넣을 때 내 그림에서 무엇이 달라지는지 묻고 다음 힌트를 이어가 줘."
      },
      {
        "label": "코드 리뷰",
        "text": "내 Decorator·Composite Java 코드와 UML을 검토해 줘. 기본 커피 3000원에 샷 500원과 시럽 300원을 더하면 3800원이어야 해. 크기 100인 파일과 크기 200, 300인 파일이 든 하위 폴더를 합산하면 600이어야 해. 공통 인터페이스와 위임이 맞는지, 빈 폴더가 0을 반환하는지 확인해 줘. 틀린 부분은 코드 줄과 요구사항을 근거로 짚고 수정 방향을 힌트로 알려 줘. 마지막에는 처음 UML에서 바꾼 연결과 이유를 설명하게 해 줘."
      },
      {
        "label": "Gemini 교차 검토",
        "text": "Decorator·Composite 학습용 Java 코드와 ChatGPT의 리뷰를 붙일게. 음료 옵션을 감싸는 순서대로 호출을 추적하고, 중첩 폴더에서 자식의 크기를 재귀적으로 합산하는지 독립적으로 확인해 줘. 클래스 이름만 보고 판단하지 말고 인터페이스와 객체 참조를 근거로 설명해 줘. 이번 가격 예제가 단순 덧셈이라는 조건을 모든 Decorator에 일반화하지 않았는지도 확인해 줘. 검토 후 처음 판단, 최종 판단, 코드나 UML 근거, 남은 의문을 정리할 질문을 만들어 줘."
      }
    ],
    "examples": [
      {
        "title": "음료에 샷과 시럽 추가하기",
        "description": "Syrup은 Shot을 감싸고 Shot은 기본 Coffee를 감싼다. 각 옵션은 감싼 음료의 가격을 호출한 뒤 추가 금액을 더한다.",
        "className": "CoffeeDecoratorDemo",
        "code": "import java.util.Objects;\n\npublic class CoffeeDecoratorDemo {\n    interface Beverage {\n        int price();\n    }\n\n    static final class Coffee implements Beverage {\n        public int price() { return 3000; }\n    }\n\n    static final class Shot implements Beverage {\n        private final Beverage base;\n        Shot(Beverage base) { this.base = Objects.requireNonNull(base); }\n        public int price() { return base.price() + 500; }\n    }\n\n    static final class Syrup implements Beverage {\n        private final Beverage base;\n        Syrup(Beverage base) { this.base = Objects.requireNonNull(base); }\n        public int price() { return base.price() + 300; }\n    }\n\n    public static void main(String[] args) {\n        Beverage plain = new Coffee();\n        Beverage custom = new Syrup(new Shot(plain));\n        System.out.println(plain.price());\n        System.out.println(custom.price());\n    }\n}",
        "expectedOutput": "3000\n3800\n"
      },
      {
        "title": "중첩 폴더의 크기 합산하기",
        "description": "파일과 폴더는 모두 Entry를 구현한다. 폴더는 자식의 size를 호출하므로 하위 폴더도 같은 계산 흐름에 참여한다.",
        "className": "FolderCompositeDemo",
        "code": "import java.util.List;\n\npublic class FolderCompositeDemo {\n    interface Entry {\n        long size();\n    }\n\n    record FileItem(long size) implements Entry {\n        FileItem {\n            if (size < 0) throw new IllegalArgumentException(\"negative size\");\n        }\n    }\n\n    static final class Folder implements Entry {\n        private final List<Entry> children;\n        Folder(List<Entry> children) {\n            this.children = List.copyOf(children);\n        }\n        public long size() {\n            long total = 0;\n            for (Entry child : children) total += child.size();\n            return total;\n        }\n    }\n\n    public static void main(String[] args) {\n        Entry nested = new Folder(List.of(new FileItem(200), new FileItem(300)));\n        Entry root = new Folder(List.of(new FileItem(100), nested));\n        System.out.println(nested.size());\n        System.out.println(root.size());\n        System.out.println(new Folder(List.of()).size());\n    }\n}",
        "expectedOutput": "500\n600\n0\n"
      }
    ],
    "quiz": [
      {
        "id": "decorator-options",
        "question": "샷과 시럽을 자유롭게 조합해야 한다. 새 옵션을 추가할 때 조합별 하위 클래스가 늘어나는 문제를 줄이는 설계는?",
        "options": [
          {
            "id": "a",
            "text": "모든 조합에 서로 다른 Coffee 하위 클래스를 만든다.",
            "explanation": "옵션 수가 늘면 함께 고려할 조합도 늘어난다."
          },
          {
            "id": "b",
            "text": "커피 객체에 옵션 이름을 전역 변수로 저장한다.",
            "explanation": "여러 주문의 옵션이 서로 영향을 줄 수 있고 조합별 동작도 분리되지 않는다."
          },
          {
            "id": "c",
            "text": "같은 Beverage 계약을 구현하는 옵션 객체로 음료를 감싼다.",
            "explanation": "옵션이 기존 계약을 유지하면서 필요한 동작을 덧붙일 수 있다."
          },
          {
            "id": "d",
            "text": "음료와 옵션을 모두 하나의 Singleton으로 합친다.",
            "explanation": "단일 인스턴스로 만들면 서로 다른 주문의 옵션을 독립적으로 구성하기 어렵다."
          }
        ],
        "answer": "c"
      },
      {
        "id": "decorator-price",
        "question": "Coffee가 3000, Shot이 500, Syrup이 300을 더한다. new Syrup(new Shot(new Coffee())).price()의 결과는?",
        "options": [
          {
            "id": "a",
            "text": "3800",
            "explanation": "안쪽 Coffee의 3000에 Shot의 500, Syrup의 300을 차례로 더한다."
          },
          {
            "id": "b",
            "text": "3300",
            "explanation": "Syrup이 감싼 Shot의 추가 금액도 호출 결과에 포함된다."
          },
          {
            "id": "c",
            "text": "3500",
            "explanation": "가장 바깥 Syrup도 자기 금액 300을 더한다."
          },
          {
            "id": "d",
            "text": "800",
            "explanation": "옵션은 기본 음료의 가격을 포함한 호출 결과에 금액을 더한다."
          }
        ],
        "answer": "a"
      },
      {
        "id": "composite-size",
        "question": "루트 폴더에 크기 100인 파일과 하위 폴더가 있다. 하위 폴더에는 크기 200, 300인 파일이 있다. 루트의 size는?",
        "options": [
          {
            "id": "a",
            "text": "100",
            "explanation": "루트에 직접 들어 있는 파일 외에 하위 폴더의 크기도 더해야 한다."
          },
          {
            "id": "b",
            "text": "500",
            "explanation": "하위 폴더의 크기만 계산한 값이다."
          },
          {
            "id": "c",
            "text": "3",
            "explanation": "자식이나 파일의 개수가 아니라 크기를 합산한다."
          },
          {
            "id": "d",
            "text": "600",
            "explanation": "루트의 파일 100과 하위 폴더의 합계 500을 더한다."
          }
        ],
        "answer": "d"
      },
      {
        "id": "composite-contract",
        "question": "FileItem과 Folder를 Entry로 함께 다룰 때 클라이언트의 크기 계산은 어떻게 작성할 수 있는가?",
        "options": [
          {
            "id": "a",
            "text": "항상 instanceof로 파일과 폴더를 나눠 계산한다.",
            "explanation": "공통 size 계약을 이용하면 클라이언트가 구체 유형별 계산을 맡을 필요가 줄어든다."
          },
          {
            "id": "b",
            "text": "Entry.size()를 호출하고 각 객체가 자기 계산을 수행하게 한다.",
            "explanation": "파일은 자기 크기를 반환하고 폴더는 자식의 계산 결과를 합산한다."
          },
          {
            "id": "c",
            "text": "Folder가 FileItem을 반드시 상속하도록 만든다.",
            "explanation": "공통 인터페이스를 구현하면 되고 폴더를 파일의 하위 유형으로 만들 필요는 없다."
          },
          {
            "id": "d",
            "text": "모든 파일을 static 필드에 넣고 폴더는 이름만 저장한다.",
            "explanation": "자식 관계와 각 폴더의 범위가 사라져 중첩 구조를 표현하기 어렵다."
          }
        ],
        "answer": "b"
      },
      {
        "id": "structure-difference",
        "question": "Decorator와 Composite를 UML과 코드에서 구분할 때 적절한 근거는?",
        "options": [
          {
            "id": "a",
            "text": "Decorator는 언제나 더 빠르고 Composite는 언제나 더 느리다.",
            "explanation": "실행 비용은 구현과 데이터에 따라 달라진다."
          },
          {
            "id": "b",
            "text": "인터페이스를 쓰면 무조건 Decorator다.",
            "explanation": "두 패턴 모두 공통 인터페이스를 사용할 수 있다."
          },
          {
            "id": "c",
            "text": "Decorator는 감싼 객체의 동작에 기능을 더하고 Composite는 자식들을 같은 계약으로 묶는다.",
            "explanation": "의도와 객체 사이의 위임·자식 관계를 함께 살펴본 설명이다."
          },
          {
            "id": "d",
            "text": "클래스 이름에 Folder가 있으면 코드를 볼 필요 없이 Composite다.",
            "explanation": "이름만으로 공통 계약과 자식 처리 방식이 구현됐는지 알 수 없다."
          }
        ],
        "answer": "c"
      }
    ],
    "notes": [
      "카페 음료와 파일·폴더를 예제로 객체가 맡는 역할을 비교합니다.",
      "가격 예제는 정수 금액을 더하므로 샷과 시럽의 순서를 바꿔도 합계가 같습니다. 다른 Decorator에서는 적용 순서가 결과에 영향을 줄 수 있습니다.",
      "폴더 예제는 생성 시 자식 목록을 고정한 트리를 다룹니다. 파일시스템의 링크나 순환 참조는 별도 요구사항입니다.",
      "풀이가 끝나면 누적 복습에서 1~4주차 개념을 다시 확인하고 이번 설계에서 사용한 근거와 연결해 보세요."
    ]
  },
  {
    "id": "template-factory",
    "legacyId": 7,
    "week": 6,
    "title": "처리 순서와 생성을 분리하기",
    "topic": "Template Method · Factory Method",
    "planned": true,
    "colors": [
      "#C5A7FF",
      "#FFD1A7"
    ],
    "goals": [
      "공통 처리 순서와 바꿀 단계를 나눠 Template Method로 표현한다.",
      "객체를 생성하는 결정과 생성된 객체를 사용하는 코드를 구분한다.",
      "앞선 주차의 Strategy와 Template Method를 변경 요구에 따라 비교한다."
    ],
    "concepts": [
      "Template Method는 상위 클래스의 메서드가 처리 순서를 정하고 일부 단계를 하위 클래스에 맡긴다.",
      "Factory Method는 생성 메서드를 재정의해 반환할 제품의 구체 유형을 정한다.",
      "생성된 객체를 사용하는 코드는 공통 제품 인터페이스를 호출한다.",
      "상속으로 단계를 바꾸는 설계와 조합으로 전략을 교체하는 설계를 요구사항에 맞춰 비교한다."
    ],
    "challenge": "커피와 차는 물 끓이기, 재료 우리기, 컵에 붓기, 첨가물 넣기 순서로 만듭니다. 공통으로 유지할 순서와 음료에 따라 바꿀 단계를 표시하세요.\n\n알림 서비스는 생성한 알림 객체에 메시지를 보냅니다. 이메일용 서비스와 앱용 서비스가 서로 다른 알림 객체를 만들도록 UML을 그려보세요. 생성하는 메서드와 제품을 사용하는 메서드를 각각 표시하세요.",
    "hints": [
      "커피와 차에서 단계의 순서는 같은가요? 알림 종류가 바뀔 때 사용하는 코드와 만드는 코드 중 어디가 달라지는지도 찾아보세요.",
      "처리 순서를 정하는 메서드가 하위 클래스의 세부 단계를 호출하도록 그려보세요. 알림 서비스는 어떤 공통 계약의 객체를 반환받으면 될까요?",
      "prepare가 brew와 addCondiments를 호출하고 하위 클래스가 두 단계를 구현하게 해보세요. Factory Method 예제에서는 createNotification을 하위 서비스가 구현하고 notifyUser는 반환된 객체의 send를 호출하게 합니다."
    ],
    "prompts": [
      {
        "label": "분석 질문",
        "text": "Java와 UML, SOLID, Strategy, Command·Observer, Decorator·Composite를 배운 대학생이야. 다음 수업에서 Template Method와 Factory Method를 학습할 예정이야. 커피·차 제조 과정의 공통 순서와 다른 단계, 알림 객체를 생성하고 사용하는 책임을 비교할 분석 질문을 만들어 줘. 내가 UML을 그리기 전에는 완성 설계를 보여주지 마. 튜터는 고정할 순서와 바꿀 단계, 생성 위치를 코드나 UML에서 짚는지 확인할 거야."
      },
      {
        "label": "단계별 힌트",
        "text": "내 UML과 처음 생각한 답을 붙일게. Template Method의 처리 순서와 세부 단계가 섞였는지, Factory Method의 생성 결정과 제품 사용이 섞였는지 살펴봐 줘. 한 번에 힌트 하나만 주고 내가 수정한 뒤 다음 힌트를 줘. 정답 클래스 이름보다 어느 메서드가 무엇을 결정해야 하는지 먼저 묻도록 해 줘."
      },
      {
        "label": "코드 리뷰",
        "text": "내 Java 코드에서 Template Method와 Factory Method가 요구사항을 만족하는지 검토해 줘. 음료 제조 순서는 유지하고 brew와 addCondiments를 바꿀 수 있어야 해. 알림 서비스는 생성한 Notification의 send를 공통으로 호출해야 해. 하위 클래스가 전체 흐름을 복제했거나 사용하는 코드가 구체 제품별로 분기한 부분을 찾아 줘. 코드 줄과 변경 요구를 근거로 힌트를 주고, 처음 설계에서 바뀐 판단을 설명할 질문으로 마무리해 줘."
      },
      {
        "label": "Gemini 교차 검토",
        "text": "Template Method·Factory Method 설계와 ChatGPT의 리뷰를 붙일게. 고정된 처리 순서, 재정의하는 단계, 제품을 만드는 메서드와 제품 인터페이스를 독립적으로 확인해 줘. static 메서드로 객체를 만드는 코드만 보고 Factory Method라고 부르지 않았는지도 검토해 줘. Strategy로 바꾸는 대안이 필요하다면 실제 변경 요구를 근거로 설명하고, 처음 판단과 최종 판단을 비교하고 코드나 UML에서 근거를 찾을 회고 질문을 제시해 줘."
      }
    ],
    "examples": [
      {
        "title": "음료 제조 순서는 유지하고 단계 바꾸기",
        "description": "prepare는 순서를 정한다. CoffeeRecipe와 TeaRecipe는 재료를 우리고 첨가물을 넣는 단계만 구현한다.",
        "className": "DrinkTemplateDemo",
        "code": "public class DrinkTemplateDemo {\n    static abstract class DrinkRecipe {\n        final void prepare() {\n            System.out.println(\"Boil water\");\n            brew();\n            System.out.println(\"Pour into cup\");\n            addCondiments();\n        }\n        protected abstract void brew();\n        protected abstract void addCondiments();\n    }\n\n    static final class CoffeeRecipe extends DrinkRecipe {\n        protected void brew() { System.out.println(\"Brew coffee\"); }\n        protected void addCondiments() { System.out.println(\"Add milk\"); }\n    }\n\n    static final class TeaRecipe extends DrinkRecipe {\n        protected void brew() { System.out.println(\"Steep tea\"); }\n        protected void addCondiments() { System.out.println(\"Add lemon\"); }\n    }\n\n    public static void main(String[] args) {\n        DrinkRecipe recipe = new CoffeeRecipe();\n        recipe.prepare();\n        System.out.println(\"---\");\n        recipe = new TeaRecipe();\n        recipe.prepare();\n    }\n}",
        "expectedOutput": "Boil water\nBrew coffee\nPour into cup\nAdd milk\n---\nBoil water\nSteep tea\nPour into cup\nAdd lemon\n"
      },
      {
        "title": "알림 제품을 만드는 메서드 재정의하기",
        "description": "NotificationService는 제품을 사용하는 흐름을 정하고 하위 서비스가 createNotification을 구현해 구체 제품을 만든다.",
        "className": "NotificationFactoryDemo",
        "code": "public class NotificationFactoryDemo {\n    interface Notification {\n        String send(String message);\n    }\n\n    static final class EmailNotification implements Notification {\n        public String send(String message) { return \"EMAIL \" + message; }\n    }\n\n    static final class AppNotification implements Notification {\n        public String send(String message) { return \"APP \" + message; }\n    }\n\n    static abstract class NotificationService {\n        protected abstract Notification createNotification();\n        final String notifyUser(String message) {\n            Notification notification = createNotification();\n            return notification.send(message);\n        }\n    }\n\n    static final class EmailService extends NotificationService {\n        protected Notification createNotification() { return new EmailNotification(); }\n    }\n\n    static final class AppService extends NotificationService {\n        protected Notification createNotification() { return new AppNotification(); }\n    }\n\n    public static void main(String[] args) {\n        NotificationService email = new EmailService();\n        NotificationService app = new AppService();\n        System.out.println(email.notifyUser(\"ready\"));\n        System.out.println(app.notifyUser(\"ready\"));\n    }\n}",
        "expectedOutput": "EMAIL ready\nAPP ready\n"
      }
    ],
    "quiz": [
      {
        "id": "template-order",
        "question": "커피와 차의 제조 순서는 같고 brew와 addCondiments만 다르다. Template Method에 맞는 설계는?",
        "options": [
          {
            "id": "a",
            "text": "각 하위 클래스가 prepare 전체를 복사한다.",
            "explanation": "공통 순서가 바뀔 때 복사한 코드를 함께 고쳐야 한다."
          },
          {
            "id": "b",
            "text": "상위 prepare가 단계 순서를 정하고 하위 클래스가 두 단계를 구현한다.",
            "explanation": "공통 흐름을 한 곳에 두면서 필요한 단계만 바꿀 수 있다."
          },
          {
            "id": "c",
            "text": "모든 단계를 전역 변수로 선택한다.",
            "explanation": "순서와 단계의 책임을 상위·하위 클래스에 나누는 구조가 아니다."
          },
          {
            "id": "d",
            "text": "음료 인스턴스를 하나만 허용한다.",
            "explanation": "인스턴스 수를 제한하는 문제와 제조 단계의 재사용은 별개다."
          }
        ],
        "answer": "b"
      },
      {
        "id": "template-final",
        "question": "예제에서 prepare를 final로 선언한 이유는?",
        "options": [
          {
            "id": "a",
            "text": "하위 클래스가 제조 순서 전체를 재정의하는 일을 막기 위해서다.",
            "explanation": "바꿀 수 있는 부분은 brew와 addCondiments로 제한했다."
          },
          {
            "id": "b",
            "text": "CoffeeRecipe의 객체를 하나만 만들기 위해서다.",
            "explanation": "메서드의 final은 인스턴스 수를 제한하지 않는다."
          },
          {
            "id": "c",
            "text": "모든 내부 데이터의 동시 접근을 안전하게 하기 위해서다.",
            "explanation": "메서드 재정의 제한만으로 스레드 안전성이 생기지 않는다."
          },
          {
            "id": "d",
            "text": "brew와 addCondiments도 재정의하지 못하게 하기 위해서다.",
            "explanation": "그 메서드는 abstract이며 각 하위 클래스가 구현한다."
          }
        ],
        "answer": "a"
      },
      {
        "id": "factory-method",
        "question": "NotificationService의 createNotification을 EmailService가 재정의해 EmailNotification을 반환한다. Factory Method의 근거는?",
        "options": [
          {
            "id": "a",
            "text": "메서드 이름에 create가 들어간다.",
            "explanation": "이름만으로 생성 책임의 구조를 판단할 수 없다."
          },
          {
            "id": "b",
            "text": "제품을 만드는 코드가 어디든 존재한다.",
            "explanation": "객체를 생성하는 모든 코드를 Factory Method라고 부르지는 않는다."
          },
          {
            "id": "c",
            "text": "제품이 항상 단일 인스턴스다.",
            "explanation": "이 예제는 제품의 인스턴스 수를 제한하지 않는다."
          },
          {
            "id": "d",
            "text": "상위 사용 흐름이 생성 메서드를 호출하고 하위 클래스가 구체 제품을 정한다.",
            "explanation": "생성과 사용을 나누고 하위 클래스가 생성 결정을 재정의하는 구조를 설명했다."
          }
        ],
        "answer": "d"
      },
      {
        "id": "factory-use",
        "question": "새 알림 제품과 이를 만드는 하위 서비스를 추가했다. 기존 notifyUser가 계속 사용할 수 있는 근거는?",
        "options": [
          {
            "id": "a",
            "text": "하위 서비스의 이름을 문자열로 비교하기 때문이다.",
            "explanation": "예제의 notifyUser는 하위 서비스 이름을 비교하지 않는다."
          },
          {
            "id": "b",
            "text": "모든 제품을 같은 구체 클래스로 변환하기 때문이다.",
            "explanation": "구체 클래스로 변환하면 제품 종류에 대한 의존이 커진다."
          },
          {
            "id": "c",
            "text": "반환된 제품이 Notification 계약을 따르기 때문이다.",
            "explanation": "사용 흐름은 구체 제품의 생성 방법 대신 공통 send 계약을 이용한다."
          },
          {
            "id": "d",
            "text": "정적 메서드만 호출하기 때문이다.",
            "explanation": "예제는 생성한 제품 객체의 인스턴스 메서드를 호출한다."
          }
        ],
        "answer": "c"
      },
      {
        "id": "template-strategy",
        "question": "처리 중 계산 알고리즘을 객체 교체로 바꾸는 요구와, 고정 순서의 일부 단계를 상속으로 바꾸는 요구를 비교하면?",
        "options": [
          {
            "id": "a",
            "text": "두 요구 모두 단일 인스턴스가 핵심이다.",
            "explanation": "둘 다 인스턴스 수보다 동작을 바꾸는 위치와 방법을 다룬다."
          },
          {
            "id": "b",
            "text": "앞 요구는 Strategy, 뒤 요구는 Template Method를 먼저 검토할 수 있다.",
            "explanation": "알고리즘 객체의 교체와 상위 흐름의 단계 재정의를 구분한 설명이다."
          },
          {
            "id": "c",
            "text": "둘 다 반드시 Factory Method만 사용해야 한다.",
            "explanation": "Factory Method는 제품 생성 결정을 분리하는 데 초점을 둔다."
          },
          {
            "id": "d",
            "text": "하위 클래스가 있으면 두 패턴을 구분할 필요가 없다.",
            "explanation": "변경 요구와 위임·재정의 방식이 달라질 수 있다."
          }
        ],
        "answer": "b"
      }
    ],
    "notes": [
      "6주차는 다음 수업을 위한 예정 자료입니다. 복습에서 남긴 의문을 도입 문제와 연결해 보세요.",
      "여기서 다루는 Factory Method는 상위 사용 흐름에서 호출하는 생성 메서드를 하위 클래스가 재정의하는 구조입니다.",
      "추가 연습의 종합설계에서는 음료 옵션과 주문 요청에 이번 주 생성 책임을 연결할 수 있습니다."
    ]
  }
];
window.AX_EXTRAS = [
  {
    "id": "midterm",
    "legacyId": 4,
    "week": null,
    "title": "중간고사 복습",
    "topic": "Midterm AI Lab",
    "planned": false,
    "colors": [
      "#FFBE8D",
      "#FF9FBF"
    ],
    "goals": [
      "중간고사 범위 핵심 개념을 구조화한다.",
      "AI가 만든 문제를 강의자료와 대조한다.",
      "오답 원인을 '개념 부족/용어 혼동/코드 해석'으로 분류한다."
    ],
    "concepts": [
      "범위 기반 문제 생성",
      "힌트 우선 요청",
      "오답 원인 분류",
      "패턴 판별 근거 설명"
    ],
    "challenge": "패턴 이름 맞히기에서 끝내지 말고, '왜 다른 패턴은 아닌가'까지 설명해보세요.\n\n상황: 결제 알고리즘을 카드/계좌이체/간편결제로 런타임에 바꿀 수 있다.",
    "hints": [
      "요구사항에서 알고리즘, 상태, 생성, 알림 중 무엇이 달라지는지 표시해 보세요.",
      "바뀌는 부분을 분리했을 때 어떤 객체가 인터페이스에 의존할지 그려 보세요.",
      "작은 변경 하나를 가정하고 수정해야 할 코드와 유지할 코드를 나눠 보세요."
    ],
    "prompts": [
      {
        "label": "분석 질문",
        "text": "Java와 UML을 배운 대학생의 중간고사 복습을 도와줘. 내가 제시한 수업 범위와 요구사항 안에서 먼저 분석할 질문 세 개를 만들어줘. 정답은 내가 판단한 뒤 요청할게. 패턴 이름보다 변경 지점과 의존 관계를 짚게 해줘."
      },
      {
        "label": "단계별 힌트",
        "text": "내 답과 막힌 지점을 읽고 단서 하나를 먼저 줘. 내가 다시 답하면 다음 힌트를 줘. 최종 설계나 정답 코드는 내가 요청할 때 보여줘."
      },
      {
        "label": "코드 리뷰",
        "text": "내 UML과 Java 코드가 요구사항을 충족하는지 검토해줘. 바꿀 조건을 하나 제안하고 영향받는 코드와 그 이유를 짚어줘. 내 판단을 고칠 수 있도록 질문을 먼저 해줘."
      },
      {
        "label": "Gemini 교차 검토",
        "text": "이 설계와 AI 리뷰를 별도로 검토해줘. 요구사항에 없는 추상화, 빠진 전제, 실행으로 확인할 부분을 짚어줘. 처음 판단과 최종 판단을 비교하고 코드나 UML의 근거를 적을 회고 질문도 제시해줘."
      }
    ],
    "examples": [],
    "quiz": [
      {
        "id": "midterm-q1",
        "question": "시험 대비에서 AI에게 가장 먼저 요청하기 좋은 것은?",
        "options": [
          {
            "id": "a",
            "text": "범위를 제한한 문제 생성",
            "explanation": "수업 범위를 알려 주면 출제 범위와 난이도를 검토할 수 있다."
          },
          {
            "id": "b",
            "text": "정답만 요약",
            "explanation": "정답만 보면 판단 과정을 점검하기 어렵다."
          },
          {
            "id": "c",
            "text": "전 범위 무작위 장문 설명",
            "explanation": "범위가 넓어지면 수업에서 다룬 개념과 어긋날 수 있다."
          },
          {
            "id": "d",
            "text": "코드 전체 대필",
            "explanation": "직접 구현할 기회가 줄어든다."
          }
        ],
        "answer": "a"
      },
      {
        "id": "midterm-q2",
        "question": "오답 분석에서 중요한 것은?",
        "options": [
          {
            "id": "a",
            "text": "점수만 기록",
            "explanation": "점수만으로는 판단이 틀어진 지점을 알기 어렵다."
          },
          {
            "id": "b",
            "text": "정답만 외움",
            "explanation": "조건이 달라진 문제에도 답할 수 있는지 확인해야 한다."
          },
          {
            "id": "c",
            "text": "문제를 삭제",
            "explanation": "문제를 지우면 다시 풀면서 판단을 비교하기 어렵다."
          },
          {
            "id": "d",
            "text": "왜 틀렸는지 유형을 분류",
            "explanation": "개념, 용어, 코드 해석 중 어디에서 막혔는지 알아야 복습할 내용을 고를 수 있다."
          }
        ],
        "answer": "d"
      },
      {
        "id": "midterm-q3",
        "question": "AI 문제를 그대로 신뢰하면 안 되는 이유는?",
        "options": [
          {
            "id": "a",
            "text": "항상 너무 쉬움",
            "explanation": "난이도는 요청한 범위와 조건에 따라 달라진다."
          },
          {
            "id": "b",
            "text": "항상 정답이 없음",
            "explanation": "정답이 있는 문제도 전제가 충분한지 검토해야 한다."
          },
          {
            "id": "c",
            "text": "수업 범위와 표현이 다르거나 오류가 있을 수 있음",
            "explanation": "수업자료와 문제의 전제, 정답을 대조해야 한다."
          },
          {
            "id": "d",
            "text": "AI는 문제를 못 만듦",
            "explanation": "AI도 문제를 만들 수 있지만 결과를 검토해야 한다."
          }
        ],
        "answer": "c"
      },
      {
        "id": "midterm-q4",
        "question": "좋은 힌트 요청 방식은?",
        "options": [
          {
            "id": "a",
            "text": "내 답을 무조건 맞다고 해줘",
            "explanation": "검토를 요청할 때는 틀릴 가능성도 열어 둬야 한다."
          },
          {
            "id": "b",
            "text": "정답은 말하지 말고 첫 단서만 줘",
            "explanation": "단서 하나를 받은 뒤 자신의 답을 다시 검토할 수 있다."
          },
          {
            "id": "c",
            "text": "정답만 줘",
            "explanation": "정답을 받으면 먼저 생각할 기회가 줄어든다."
          },
          {
            "id": "d",
            "text": "해설 전부 줘",
            "explanation": "해설을 전부 보면 스스로 해결할 단계를 건너뛰기 쉽다."
          }
        ],
        "answer": "b"
      },
      {
        "id": "midterm-q5",
        "question": "패턴 판별에서 이름보다 중요한 것은?",
        "options": [
          {
            "id": "a",
            "text": "선택 근거와 변경 시나리오",
            "explanation": "어떤 요구사항과 변경 때문에 골랐는지 설명해야 한다."
          },
          {
            "id": "b",
            "text": "철자",
            "explanation": "철자를 알아도 적용할 상황을 이해했다고 볼 수는 없다."
          },
          {
            "id": "c",
            "text": "클래스 개수",
            "explanation": "클래스 개수만으로 적합한 패턴을 결정할 수 없다."
          },
          {
            "id": "d",
            "text": "파일 이름",
            "explanation": "파일 이름은 요구사항을 충족하는지 보여 주지 않는다."
          }
        ],
        "answer": "a"
      }
    ],
    "notes": [
      "추가 연습 자료입니다. 배운 범위에서 문제를 고르고, 풀이를 마친 뒤 판단 근거를 서로 설명해 보세요."
    ]
  },
  {
    "id": "design-challenge",
    "legacyId": 8,
    "week": null,
    "title": "종합설계 연습",
    "topic": "AI Design Challenge",
    "planned": false,
    "colors": [
      "#8FDDE0",
      "#8E9DFF",
      "#F7A8CE"
    ],
    "goals": [
      "요구사항에서 변화 지점을 먼저 찾는다.",
      "여러 패턴을 조합하되 과잉 설계를 피한다.",
      "학생 설계와 AI 설계를 비교·비판한다."
    ],
    "concepts": [
      "패턴 조합",
      "변경 가능성 분석",
      "과잉 설계 경계",
      "설계 근거 설명"
    ],
    "challenge": "먼저 AI를 보지 말고 팀이 직접 설계하세요.\n\n1) 변경이 잦은 부분을 표시한다.\n2) 각 변경 지점에 후보 패턴을 붙인다.\n3) 꼭 필요한 패턴만 남긴다.\n4) 그 다음 AI 설계와 비교한다.",
    "hints": [
      "요구사항에서 알고리즘, 상태, 생성, 알림 중 무엇이 달라지는지 표시해 보세요.",
      "바뀌는 부분을 분리했을 때 어떤 객체가 인터페이스에 의존할지 그려 보세요.",
      "작은 변경 하나를 가정하고 수정해야 할 코드와 유지할 코드를 나눠 보세요."
    ],
    "prompts": [
      {
        "label": "분석 질문",
        "text": "Java와 UML을 배운 대학생의 종합설계 연습을 도와줘. 내가 제시한 수업 범위와 요구사항 안에서 먼저 분석할 질문 세 개를 만들어줘. 정답은 내가 판단한 뒤 요청할게. 패턴 이름보다 변경 지점과 의존 관계를 짚게 해줘."
      },
      {
        "label": "단계별 힌트",
        "text": "내 답과 막힌 지점을 읽고 단서 하나를 먼저 줘. 내가 다시 답하면 다음 힌트를 줘. 최종 설계나 정답 코드는 내가 요청할 때 보여줘."
      },
      {
        "label": "코드 리뷰",
        "text": "내 UML과 Java 코드가 요구사항을 충족하는지 검토해줘. 바꿀 조건을 하나 제안하고 영향받는 코드와 그 이유를 짚어줘. 내 판단을 고칠 수 있도록 질문을 먼저 해줘."
      },
      {
        "label": "Gemini 교차 검토",
        "text": "이 설계와 AI 리뷰를 별도로 검토해줘. 요구사항에 없는 추상화, 빠진 전제, 실행으로 확인할 부분을 짚어줘. 처음 판단과 최종 판단을 비교하고 코드나 UML의 근거를 적을 회고 질문도 제시해줘."
      }
    ],
    "examples": [],
    "quiz": [
      {
        "id": "design-challenge-q1",
        "question": "여러 패턴을 조합할 때 가장 먼저 볼 것은?",
        "options": [
          {
            "id": "a",
            "text": "실제 변경 요구와 문제",
            "explanation": "변경할 기능과 현재 의존 관계를 알아야 필요한 패턴을 고를 수 있다."
          },
          {
            "id": "b",
            "text": "패턴 개수",
            "explanation": "패턴 개수가 많다고 요구사항을 더 잘 충족하지는 않는다."
          },
          {
            "id": "c",
            "text": "클래스 수",
            "explanation": "클래스 수는 설계의 결과이며 선택의 출발점으로 삼기 어렵다."
          },
          {
            "id": "d",
            "text": "최대한 많은 패턴 사용",
            "explanation": "각 추상화가 해결할 요구사항을 먼저 확인해야 한다."
          }
        ],
        "answer": "a"
      },
      {
        "id": "design-challenge-q2",
        "question": "과잉 설계의 징후는?",
        "options": [
          {
            "id": "a",
            "text": "테스트가 있음",
            "explanation": "테스트는 요구사항을 확인하는 데 도움이 된다."
          },
          {
            "id": "b",
            "text": "인터페이스가 있음",
            "explanation": "인터페이스가 어떤 변경을 분리하는지 살펴야 한다."
          },
          {
            "id": "c",
            "text": "클래스 이름이 짧음",
            "explanation": "이름 길이만으로 추상화가 과한지 판단할 수 없다."
          },
          {
            "id": "d",
            "text": "변경 요구가 없는데 추상화 계층만 늘어남",
            "explanation": "현재나 예상되는 변경 요구를 설명할 수 없다면 구조를 단순하게 만들 여지가 있다."
          }
        ],
        "answer": "d"
      },
      {
        "id": "design-challenge-q3",
        "question": "학생 설계와 AI 설계를 비교할 때 핵심 질문은?",
        "options": [
          {
            "id": "a",
            "text": "누가 영어를 많이 썼는가",
            "explanation": "용어를 많이 써도 변경 근거가 빠질 수 있다."
          },
          {
            "id": "b",
            "text": "파일 수가 많은가",
            "explanation": "파일 수보다 의존 관계와 변경 범위를 확인해야 한다."
          },
          {
            "id": "c",
            "text": "어떤 변경을 더 잘 수용하는가",
            "explanation": "같은 변경 요청을 두 설계에 적용해 영향 범위를 비교할 수 있다."
          },
          {
            "id": "d",
            "text": "누가 더 길게 썼는가",
            "explanation": "설명의 길이는 설계가 요구사항에 맞는지 판단하는 기준이 되기 어렵다."
          }
        ],
        "answer": "c"
      },
      {
        "id": "design-challenge-q4",
        "question": "패턴 선택 근거로 가장 좋은 것은?",
        "options": [
          {
            "id": "a",
            "text": "코드 줄 수",
            "explanation": "짧은 코드가 변경에도 유연한지 따로 살펴야 한다."
          },
          {
            "id": "b",
            "text": "요구사항의 변화 지점과 결합도 문제",
            "explanation": "요구사항이 바뀔 때 어느 코드가 영향을 받는지 근거로 설명할 수 있다."
          },
          {
            "id": "c",
            "text": "유명한 패턴인지 여부",
            "explanation": "널리 쓰여도 현재 요구사항에 맞는지 확인해야 한다."
          },
          {
            "id": "d",
            "text": "클래스 이름",
            "explanation": "클래스 이름만으로 역할과 관계를 판단하기 어렵다."
          }
        ],
        "answer": "b"
      },
      {
        "id": "design-challenge-q5",
        "question": "최종 검증 단계에 포함할 것은?",
        "options": [
          {
            "id": "a",
            "text": "강의자료·교재·실행 결과와 비교",
            "explanation": "자료와 실제 실행을 대조해 설명과 동작을 확인한다."
          },
          {
            "id": "b",
            "text": "AI 답만 저장",
            "explanation": "AI 답변은 검토할 대상이다."
          },
          {
            "id": "c",
            "text": "패턴 이름 암기",
            "explanation": "패턴 이름만 알아서는 코드의 동작을 확인할 수 없다."
          },
          {
            "id": "d",
            "text": "코드 삭제",
            "explanation": "코드를 실행하고 변경 요구를 적용해 검증해야 한다."
          }
        ],
        "answer": "a"
      }
    ],
    "notes": [
      "추가 연습 자료입니다. 배운 범위에서 문제를 고르고, 풀이를 마친 뒤 판단 근거를 서로 설명해 보세요."
    ]
  }
];
