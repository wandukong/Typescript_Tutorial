export {};

//! type Omit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;
// 제거한다.

interface Person {
  name: string;
  age: number;
  nation: string;
}
type T1 = Omit<Person, "nation" | "age">;
