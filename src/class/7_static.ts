export {};

// static 정적 변수 및 메서드 선언 가능. 각 객체와 상관없이 고정된 값.
// 그래서 사용할 때, 클래스 이름에 점을 찍어 사용 가능. Person.adultAge 외부에서도 사용 가능.

class Person {
  static adultAge = 20; // 정적 멤버 변수

  constructor(public name: string, public age: number) {}

  sayHello() {
    console.log(`안녕하세요 저는 ${this.name} 입니다`);
    console.log(
      Person.getIsAdult(this.age) ? "저는 성인이 아닙니다." : "저는 성인입니다"
    );
  }
  static getIsAdult(age: number) {
    // 정적 메서드
    return Person.adultAge <= age;
  }
}

const person = new Person("양승완", 23);
person.sayHello();
console.log(`성인 판단 기준 나이 : ${Person.adultAge}`);
