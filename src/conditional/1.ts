export {};

//! 조건부 타입
//! T extends U ? X : Y

type IsStringType<T> = T extends string ? "yes" : "no";
type T1 = IsStringType<string>;
type T2 = IsStringType<number>;
