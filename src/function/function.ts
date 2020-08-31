// function getText(name: string, age: number) : string{
//     const nameText = name.substr(0,10);
//     const ageText = age >= 35 ? 'senior' : 'junior';
//     return 'name: ${nameText}, age : ${ageText}';
// }

// const v01: string = getText('mike', 23);
// const v02: string = getText('mike', '23');
// const v03: number = getText('mike', 23);

// const getText2: (name: string, age: number) => string = function(name,age){  // 화살표 함수로도 선언 가능
//     return '';
// }


// function getText3(name: string, age: number, language?: string) : string{   // ? 를 붙여서 선택 매개변수 선언 가능, 선택 매개변수는 끝에 선언해야 한다.
//     const nameText = name.substr(0,10);
//     const ageText = age >= 35 ? 'senior' : 'junior';
//     const languageText = language ? language.substr(0,10) : '';
//     return 'name: ' + nameText + ', age : ' + ageText + ', language : ' + languageText ;
// }

// console.log(getText3('Mike',23,'ko'));
// console.log(getText3('Mike',23));
// getText3('Mike',23,123);


// function getText4(name: string, age: number = 15, language = 'korean') : string{  // =으로 기본값 지정가능, 타입을 따로 지정 안 해줘도 됨. 기본 값을 지정하면 자동적으로 선택 매개변수가 됨.
//     const nameText = name.substr(0,10);
//     const ageText = age;
//     const languageText = language ? language.substr(0,10) : '';
//     return 'name: ' + nameText + ', age : ' + ageText + ', language : ' + languageText ;
// }

// console.log(getText4('Mike',23,));
// console.log(getText4('Mike'));



// function getText5(name: string, ...rest : number[]) : string{  // ...을 통하여 나머지 매개변수를 나타낸다. rest parameters는 무조건 배열로 선언해야한다.
//     return '';
// }

// console.log(getText5('Mike',1,2,3));

//타입정보 -> 자바스트립트가 됐을 때 타입정보 제거된다.
// function add(a: number, b: number) : number           // 오버로드
// function add(a: string, b: string) : string
// function add(a: string | number, b: string | number) : number | string {
//     if(typeof a === 'number' && typeof b === 'number'){
//         return a+b;
//     } else {
//         const result = Number(a) + Number(b);
//         return result.toString();
//     }
// }

// const addV : number = add(1,2);
//console.log(add(1,'2'));



//매개변수에 이름을 지어주는 named parameters.
// function getText({name, age = 15, language,}: {name: string,age?: number, language?: string}) : string {
//     const nameText = name.substr(0,10);
//     const ageText = age >= 35 ? 'senior' : 'junior';
//     return `name: ${nameText}, age: ${ageText}, language: ${language}`;
// }



//인터페이스로 정의해서 사용 가능
// interface Param{
//     name: string;
//     age?: number;
//     language?: string;
// }


// function getText({name, age = 15, language} : Param) : string {
//     const nameText = name;
//     const ageText = age >= 35 ? 'senior' : 'junior';
//     return `name: ${nameText}, age: ${ageText}, language: ${language}`;
// }

// console.log(getText({name:"양승완"}))



function getText({ name, age = 15, language }: { name: string; age?: number; language?: string; }) : string {
    const nameText = name.substr(0,10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    return `name: ${nameText}, age: ${ageText}, language: ${language}`;
}
