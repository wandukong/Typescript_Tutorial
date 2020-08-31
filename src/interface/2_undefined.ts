export {};

interface Person {
    name: string;
    age: number | undefined;
}

const p1: Person = {name : 'mike', age: 23};
const p2: Person = {name : 'mike'};
const p3: Person = {name : 'mike', age: undefined};