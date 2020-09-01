export {};

//! type Record<K extends string, T> = { [P in K]: T };
// 내장타입

interface Person {
  name: string;
  age: number;
  language: string;
}

type T1 = Record<"p1" | "p2", Person>;
type T2 = Record<"p1" | "p2", number>;
