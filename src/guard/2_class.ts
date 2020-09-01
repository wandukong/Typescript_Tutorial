export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {}
}

class Product {
  name: string;
  price: number;
  constructor(name: string, pice: number) {}
}

function print(value: Person | Product) {
  console.log(value.name);
  if (value instanceof Person) {
    console.log(value.age);
    console.log(value.price); // 타입 가드
  } else {
    console.log(value.price);
  }
}
