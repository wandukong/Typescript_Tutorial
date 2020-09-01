export {};

class Person {
  constructor(public name: string, public age: number) {
    // 타입스크립트에서는 생성자에 접근범위 혹은 readonly를 설정하면 멤버변수로 자동으로 인식.
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log("안녕하세요");
  }
}

const person = new Person("양승완", 27);
console.log(person.name, person.age);
