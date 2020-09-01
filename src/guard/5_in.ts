export {};
//! in 키워드
//! 속성이 있는지 검사

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

function print(value: Person | Product) {
  if ("age" in value) {
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
