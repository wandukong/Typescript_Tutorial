export {};

function f1(): void {  // 아무값도 반환되지 않는 함수 : void
    console.log('hello');
}
function f2(): never {  // 항상 예외가 발상해서 비정상적으로 종료되거나 무한루프 때문에 종료되지 않는 함수의 반환 타입 : never
    throw new Error('some error')
}
function f3(): never {
   while(true){
       //...
   }
}

