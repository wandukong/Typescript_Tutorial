export {};

// Unpacked : 입렵된 T라는 타입이 어떤 값의 배열이면 그 배열의 아이템을 사용하겠다.

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

type T0 = Unpacked<string>;
type T1 = Unpacked<string[]>;
type T2 = Unpacked<() => string>;
type T3 = Unpacked<Promise<string>>;
type T4 = Unpacked<string[]>;
type T5 = Unpacked<Promise<string[]>>;
