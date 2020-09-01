export {};

// ! type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
// T가 함수 일때, 이 T함수의 반환 타입을 뽑아준다.
// infer 키워드 덕분에 함수의 반환 타입을 R이라는 변수에 담을 수 있다.

type T1 = ReturnType<() => string>;
function f1(s: string): number {
  return s.length;
}
type T2 = ReturnType<typeof f1>;
