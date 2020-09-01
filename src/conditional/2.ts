export {};

//! 조건부 타입
//! T extends U ? X : Y

type IsStringType<T> = T extends string ? string[] : number[];
type T1 = IsStringType<string | number>;
type T2 = IsStringType<string> | IsStringType<number>;
// 조건부 일때만 stringp[] | number[] 라는 결과가 나온다.

type Array2<T> = Array<T>;
type T3 = Array2<string | number>;
