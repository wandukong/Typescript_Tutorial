export {};

// mapped type
// interface에 있는 모든 속성을
//  ptional로 바꾸거나 readonly로 바꿔줄 수 있는 기능

interface Person {
  name: string;
  age: number;
}

interface PersonOptional {
  name?: string;
  age?: number;
}

interface PersonReadOnly {
  readonly name: string;
  readonly age: number;
}
