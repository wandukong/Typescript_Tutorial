export {};

interface Person {
    name: string;
    age: number;
}

interface korean extends Person{
    isLiveInSeoul: boolean;
}

//위에 두개 합친것 과 같음.
interface korean {
    name: string;
    age: number;
    isLiveInSeoul: boolean;
}


interface Programmer{
    favoriteProgrammingLanguage: string;
}


interface korean extends Person, Programmer{
    isLiveInSeoul: boolean;
}
