"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let value; // any 타입은 모든 값을 포함하는 타입입니다. 숫자나 문자열, 함수도 입력할 수 있다. 
value = 123; // javascript를 typescript로 포팅하는 경우에 유용하게 사용 => 모든 코드의 타입을 한 번에 정의하는 것은 부담되기 때문에 타입 에러가 나는 부분은 임시로 any 타입으로 정의
value = '456';
value = () => { };
