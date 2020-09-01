export {};

//오버로딩
// 다른 타입이 있을 때마다 새롭게 오버로딩 코드를 추가해야 한다.

function makeArray(defaultValue: number, size: number): number[];
function makeArray(defaultValue: string, size: number): string[];
function makeArray(
  defaultValue: number | string,
  size: number | string
): Array<number | string> {
  const arr: Array<number | string> = [];
  for (let i = 0; i < size; i++) {
    arr.push(defaultValue);
  }
  return arr;
}

const arr1 = makeArray(1, 10);
const arr2 = makeArray("empty", 10);

console.log(arr1);
console.log(arr2);
