export {};

interface Person {
  readonly name: string;
  age?: number;
}

const p1: Person = { name: "mike", age: 23 };
p1.name = "john";
