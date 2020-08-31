"use strict";
function getParam(index) {
    const params = this.split(',');
    if (index < 0 || params.length <= index) {
        return '';
    }
    return this.split(',')[index];
}
String.prototype.getParam = getParam;
console.log('asdf, 1234, ok '.getParam(1));
Object.prototype.getShortKeys = function () {
    return Object.keys(this).filter(key => key.length <= 3);
};
const obj = {
    a: 1,
    bb: 2,
    ccc: 3,
    dddd: 4
};
console.log(obj.getShortKeys());
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        const result = Number(a) + Number(b);
        return result.toString();
    }
}
const addV = add(1, 2);
console.log(add(1, '2'));
