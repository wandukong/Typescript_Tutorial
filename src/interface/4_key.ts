export {};

interface Person {
  readonly name: string;
  age: number;
  [key: string]: string | number;
}

const p1: Person = { name: "mike", age: 25, birthday: "1994-07-06" };
