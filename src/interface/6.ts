export {};

// interface로 함수의 타입을 정의할 수 있다.
interface GetText { 
    (name: string, age: number): string
}

const getText: GetText = function (name,age){
    const nameText = name.substr(0,10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    return `name: ${nameText}, age: ${ageText}`;
}

console.log(getText("dkdk",36))
