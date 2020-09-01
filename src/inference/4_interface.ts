export {};

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  liveInSeoul: boolean;
}

interface Japanse extends Person {
  liveInTokyo: boolean;
}

const p1: Person = { name: "mike", age: 23 };
const p2: Korean = { name: "hgfsd", age: 25, liveInSeoul: true };
const p3: Japanse = { name: "asd", age: 27, liveInTokyo: false };
const arr1 = [p1, p2, p3]; // Person[] 타입
const arr2 = [p2, p3]; //  Korean[] | Japanse[] 타입
