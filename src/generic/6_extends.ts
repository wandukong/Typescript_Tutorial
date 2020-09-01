export {};

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  liveInSeoul: boolean;
}

// type t1 = keyof Person; // t1 = string | number
function swapProperty<T extends Person, K extends keyof Person>(
  // K가 name이나 age에 할당 가능한 값이어야 한다.
  p1: T,
  p2: T,
  key: K
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}

const p1: Korean = {
  name: "홍길등",
  age: 23,
  liveInSeoul: true,
};
const p2: Korean = {
  name: "심청이",
  age: 31,
  liveInSeoul: false,
};

swapProperty(p1, p2, "age");

console.log(p1, p2);

interface Product {
  name: string;
  price: number;
}

const p3: Product = {
  name: "시계",
  price: 1000,
};
const p4: Product = {
  name: "심청이",
  price: 2000,
};

swapProperty(p3, p4, "name"); // 타입 정의에 맞지 않기 때문에 에러
