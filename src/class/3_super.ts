export {};

class Person {
  name: string;
  age: number = 0;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    console.log(`안녕하세요 저는 ${this.name} 입니다`);
  }
}

class Programer extends Person {
  constructor(name: string) {
    super(name); // super를 호출해주지 않으면 오류가 남.
  }
  sayHello() {
    super.sayHello();
    console.log("저는 프로그래머 입니다.");
  }
}

const programer = new Programer("양승완");
programer.sayHello();
