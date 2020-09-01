export {};

// ! 타입스크립트는 값 자체의 타입보다는
// ! 값이 가진 내부 구조에 기반해서 타입 호환성을 검사 structural typing

// ! 인터페이스 A가 인터페이스 B로 할당 가능하기 위한 조건
// ! 1. B에 있는 모든 필수 속성의 이름이 A에도 존재해야 한다. (속성의 이름이 같아야함)
// ! 2. 같은 속성 이름에 대해, A의 속성이 B의 속성에 할당 가능해야 한다. (속성의 타입이 같아야함)

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  age: number;
}

// TODO 타입 이름은 다르지만 내부 구조는 같기 때문에, 서로 할당 가능.

const person: Person = { name: "mike", age: 23 };
const product: Product = person;
