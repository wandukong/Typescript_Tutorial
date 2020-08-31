enum Fruit{
    Apple,
    Banana = 5,
    Orange
}

enum Language{
    Korean = 'ko',
    English= 'en',
    Japanese = 'jp'
}

const v1: Fruit = Fruit.Apple;
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana;

console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange);

console.log(Fruit.Banana);
console.log(Fruit['Banana']);
console.log(Fruit[5]);


// 각 원소에는 숫자와 문자열을 할당할 수 있다.
// 숫자로 할당할 경우 양방향으로 맵핑
// 문자열로 할당할 경우 단방향으로 맵핑
// enum의 첫 번째 원소에 값을 할당하지 않으면 자동으로 0 할당
// 명시적으로 값을 입력하지 않으면, 이전 원소에서 1만큼 증가한 값이 할당된다.

function getIsValidEnumValue(enumObject: any, value: number | string){
    return Object.keys(enumObject)
    .filter(key=> isNaN(Number(key)))
    .some(key => enumObject[key] === value);
}


console.log('1 in Fruit : ', getIsValidEnumValue(Fruit, 1));
console.log('5 in Fruit : ', getIsValidEnumValue(Fruit, 5));
console.log('Orange in Fruit : ', getIsValidEnumValue(Fruit, 'Orange'));
console.log('ko in Fruit : ', getIsValidEnumValue(Language, 'ko'));
console.log('korean in Fruit : ', getIsValidEnumValue(Language, 'Korean'));



const enum Fruit2{     
    Apple,
    Banana = 5,
    Orange
}

const enum Language2{
    Korean = 'ko',
    English= 'en',
    Japanese = 'jp'
}

// const를 사용하여 enum 선언할 시, enum 객체가 생성되지 않기 때문에, 번들 파일의 크기를 줄일 수 있지만, 유틸리티 함수를 사용할 수 없다.
const fruit : Fruit2 = Fruit2.Banana;
const lang : Language2 = Language2.Korean;