export {};

type StringPropertyNames<T> = {
  [K in keyof T]: T[K] extends String ? K : never;
}[keyof T];

interface Person {
  name: string;
  age: number;
  nation: string;
}
type T1 = StringPropertyNames<Person>;

// 아래 과정에 따라 위에 결과가 됨.
// interface Person2 {
//   name: "name";
//   age: never;
//   nation: "nation";
// }
// type T3 = Person2['name' | 'age' | 'nation']

type StringProperties<T> = Pick<T, StringPropertyNames<T>>;
type T2 = StringProperties<Person>;
