export {};

// react의 api는 입력 가능한 값의 범위를 제한한다
// 리엑트의 속성값 전체는 객체 타입만 허용한다.
// 이를 위해 타입스크립트는 종류를 제한할 수 있는 기능을 제공한다.
// extends라는 키워드를 이용하면,
// 제네릭 타입으로 이력할 수 있는 타입의 종류를 제한할 수 있다.

function identify<T extends number | string>(p1: T): T {
  // T는 number 또는 string에 할등 가능해야 한다.
  return p1;
}

identify(1);
identify("a");
identify([]);
