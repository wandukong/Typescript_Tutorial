export {};

//interface는 class로 구현될 수 도 있다.
interface Person {
  name: string;
  age: number;
  isYoungerThan(age: number): boolean;
}

class Seungwan implements Person {
  // 해당 클래스에서 정의하지 않으면 에러가 생긴다.
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  isYoungerThan(age: number) {
    return this.age < age;
  }
}
