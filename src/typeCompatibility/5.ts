export {};

interface Person {
  name: string;
  age: number;
  gender: string; // 추가 속성이 있으면 이 타입의 값의 집합은 더 작아진다.
}

interface Product {
  name: string;
  age: number | string; // product의 집합이 더 큼.
}

const person: Person = {
  name: "mike",
  age: 23,
  gender: "male",
};

const product: Product = person; // 더 작은 집합인 Person의 age가 선택 속성이면 할당 불가능
