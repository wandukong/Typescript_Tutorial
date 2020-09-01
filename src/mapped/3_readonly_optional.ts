export {};

interface Person {
  name: string;
  age: number;
}

type MakeBoolean<T> = { [p in keyof T]?: boolean };
const pMap: MakeBoolean<Person> = {};
//person의 모든 속성이 optional boolean객체로 바뀜.

pMap.name = true;
pMap.age = false;

type T1 = Person["name"];

//! type Readonly<T> = { readonly [p in keyof T]: T[p] }; // readonly만 하고, 값의 타입을 변화시키지 않겠다는 것.
//! type Partial<T> = { [p in keyof T]?: T[p] }; // optional만 하고, 값의 타입을 변화시키지 않겠다는 것.
// 위에 두 문장은 이미 내장되어 주석처리해도 이용가능

type T2 = Readonly<Person>;
type T3 = Partial<Person>;
