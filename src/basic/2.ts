export {};

let v1: undefined = undefined;
let v2: null = null;
v1 = 123;

let v3: number | undefined = undefined;
v3 = 123;

console.log("typeof undefined => ", typeof undefined); // undefined 라는 타입으로 존재.
console.log("typeof null => ", typeof null); // null은 타입으로 존재하지 않고, object로 존재.
