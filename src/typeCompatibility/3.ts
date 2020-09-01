export {};

interface Person {
  name: string;
}

interface Product {
  name: string;
  age: number;
}

const obj = { name: "mike", age: "23", city: "abc" };

let person: Person = obj;
let product: Product = obj; // 속성의 타입이 달라서 불가능
product = person; // person의 타입이 더 작은 집합이기 때문에 불가능
person = product;
