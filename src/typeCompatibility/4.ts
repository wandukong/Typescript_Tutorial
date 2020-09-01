export {};

interface Person {
  name: string;
  age?: number;
}

interface Product {
  name: string;
  age: number;
}

const obj = { name: "mike" };

let person: Person = obj;
let product: Product = obj; // 더 작은 집합인 Person의 age가 선택 속성이면 할당 불가능
