export {};

// generic 타입은 꺾새를 이용해서 원하는 이름을 지어서 사용한다.
// T의 타입은 동적으로 정해진다.
// 제네릭은 데이터의 타입에 다양성을 부여해주기 때문에 자료구조에서 많이 사용된다.

function makeArray<T>(defaultValue: T, size: number): T[] {
  const arr: T[] = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

const arr1 = makeArray<number>(1, 10);
const arr2 = makeArray<string>("empty", 10);
const arr5 = makeArray(true, 10);
const arr6 = makeArray<string | number>("asd", 10);

//타입 지정 안해줘도 됨.
const arr3 = makeArray(1, 10);
const arr4 = makeArray("empty", 10);

console.log(arr1);
console.log(arr2);
console.log(arr5);
console.log(arr3);
console.log(arr4);
