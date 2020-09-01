let foo2: number = 10; // 명시적인게 좋다
// Type Alias : primitive type은 그냥 별명으로써 간주한다

type Age = number;

let age: Age = 10;

type Foo = {
  age: number;
  name: string;
};

interface Bar {
  age: number;
  name: string;
}

// 둘이 같아보이지만, 다르다.

const foo: Foo = {
  age: 10,
  name: "kim",
};

const bar: Bar = {
  age: 10,
  name: "kim",
};
