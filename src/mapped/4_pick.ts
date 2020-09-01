export {};

//! type Pick<T, K extends keyof T> = { [P in K]: T[P] };
// 내장 타입이어서 정의 안해도됨.

interface Person {
  name: string;
  age: number;
  language: string;
}

type T1 = Pick<Person, "name" | "language">;
// name과 language만 사용하겠다.

type T2 = Pick<Person, "name" | "age">;
