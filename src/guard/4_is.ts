import { values } from "lodash";

//! is 키워드
//! 오른쪽에 타입 이름을 적어준다. 타입을 예측하는데 사용

export {};

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

function isPerson(x: Person | Product): x is Person {
  return (x as Person).age !== undefined;
}

function print(value: Person | Product) {
  if (isPerson(value)) {
    console.log(`age : ${value.age}`);
  } else {
    console.log(`price : ${value.price}`);
  }
}

const p1: Person = {
  name: "seungwan",
  age: 27,
};

const p2: Product = {
  name: "snoopy",
  price: 2000,
};

print(p1);
print(p2);
