export {};

// ! 타입 호환성

function func1(a: number, b: number | string) {
  const v1: number | string = a;
  const v2: number = b;
  // 더 큰 타입을 수용하는 b가 number만 수용하는 v2에 대입할 수 없다.
}

function func2(a: 1 | 2) {
  const v1: 1 | 3 = a;
  const v2: 1 | 2 | 3 = a;
}
