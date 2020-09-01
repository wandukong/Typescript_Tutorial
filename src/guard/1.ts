export {};

//! 타입 가드는 자동으로 타입의 범위를 좁혀주는 기능

function print(value: number | string) {
  if (typeof value === "number") {
    console.log((value as number).toFixed(2)); // as : 타입을 강요
  } else {
    console.log((value as string).trim());
  }
}

function print2(value: number | string) {
  if (typeof value === "number") {
    console.log(value.toFixed(2)); // 타입스크립드도 value가 number라는 것을 알기 때문에 메소드 사용 가능
  } else {
    console.log(value.trim());
  }
}
