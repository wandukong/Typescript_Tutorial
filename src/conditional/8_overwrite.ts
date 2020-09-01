export {};

type Overwrite<T, U> = { [P in Exclude<keyof T, keyof U>]: T[P] } & U;
// 먼저 T와 U와 겹치는 것을 제거 한후 U와 교집합한다.

interface Person {
  name: string;
  age: number;
  nation: string;
}
type T1 = Overwrite<Person, { age: string; nation: string }>;
const p: T1 = {
  name: "mike",
  age: "23",
  nation: "korean",
};
