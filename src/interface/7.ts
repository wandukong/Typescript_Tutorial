export {};

// interface로 함수의 타입을 정의할 수 있고, 속성값도 같이 정의할 수 있다.
interface GetText {
  (name: string, age: number): string;
  totalcall?: number;
}

const getText: GetText = function (name, age) {
  if (getText.totalcall !== undefined) {
    getText.totalcall += 1;
    console.log(`totalCall : ${getText.totalcall}`);
  }
  return "";
};
getText.totalcall = 0;
getText("", 0);
getText("", 0);
