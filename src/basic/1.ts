import { isEqual } from "lodash";
export {};

const v1 = 123;
const v2 = () => console.log('123');

const size: number = 123;
const isBig: boolean = size >= 100;
const msg: string = isBig ? '크다' : '작다';

const values: number[] = [1,2,3];
const valuse2: Array<number> = [1,2,3];
values.push('a');

const data: [string, number] = [msg, size];
data[0].substr(1);
data[1].substr(1);

console.log('typeof 123 =>', typeof 123);
console.log('typeof abc =>', typeof 'abc');
console.log('typeof [1,2,3] =>', typeof [1,2,3]); // javascript array라는 타입은 없고 object로 인식한다.