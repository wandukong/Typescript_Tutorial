export {};

interface Person {
    name: string;
    age: number;
}

interface Product {
    name: string;
    price: number;
}


type PP =Person & Product // 교차타입 -> interface에서의 교차타입은  합집합?

const pp: PP = { 
    name:'a',
    age : 23,
    price: 1000
};
