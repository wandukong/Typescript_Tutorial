import { values } from "lodash";

export {};

// 인터페이스라는 것은 타입을 위한 코드 이기 때문에
// 컴파일 후에는 제거가 된다.
// instanceof 값의 영역에 있기 때문에 컴파일 후에 돌아가는 코드다

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
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

interface Person2 {
  type: "a";
  name: string;
  age: number;
}

interface Product2 {
  type: "b";
  name: string;
  price: number;
}

function print2(value: Person2 | Product2) {
  console.log(value.name);
  if (value.type == "a") {
    // 타입가드
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}

interface Person3 {
  type: "a";
  name: string;
  age: number;
}

interface Product3 {
  type: "b";
  name: string;
  price: number;
}

interface Product4 {
  type: "c";
  name: string;
  price2: number;
}

function print3(value: Person3 | Product3 | Product4) {
  switch (value.type) {
    case "a":
      console.log(value.age);
      break;
    case "b":
      console.log(value.price);
      break;
    case "c":
      console.log(value.price2);
      break;
  }
}
