export {};

// 추상 클래스는 객체를 만들 수 없다.
// 추상 메서드를 선언하면 반드시 상속 받는 쪽에서 이 메서드를 반드시 정의해야 한다.

abstract class Person {
  constructor(public name: string) {}

  sayHello() {
    console.log(`안녕하세요 저는 ${this.name} 입니다`);
  }
  abstract sayHello2(): void;
}

class Programer extends Person {
  constructor(name: string) {
    super(name); // super를 호출해주지 않으면 오류가 남.
  }
  sayHello2() {
    // 추상 메서드 재정의 반드시 필요.
    super.sayHello();
    console.log("저는 프로그래머 입니다.");
  }
}

const person = new Programer("양승완");
person.sayHello2();
