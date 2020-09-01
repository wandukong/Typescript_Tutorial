export {};

/*
?     public : 외부에서도 노출하면서 상속받는 쪽에서도 노출.
TODO  protected : 상속받는 쪽에만 노출. 
!     private : 외부 및 상속받는 쪽에서도 노출하지 않는다. # 기호 사용 가능 #name
*/

class Person {
  #name: string;
  constructor(name: string) {
    this.#name = name;
  }
  sayHello() {
    console.log(`안녕하세요 ${this.#name}`);
  }
}
class Programer extends Person {
  constructor(name: string) {
    super(name); // super를 호출해주지 않으면 오류가 남
  }
  sayHello() {
    super.sayHello();
    //console.log(`저는 프로그래머 입니다. ${this.#name}`); // private라서 오류.
  }
}
const person = new Programer("양승완");
person.sayHello();

/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

class Person2 {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    console.log(`안녕하세요 ${this.name}`);
  }
}

class Programer2 extends Person2 {
  constructor(name: string) {
    super(name); // super를 호출해주지 않으면 오류가 남
  }
  sayHello() {
    console.log(`저는 프로그래머 입니다. ${this.name}`);
  }
}

const person2 = new Programer2("양승완");
person2.sayHello();
console.log(person2.name); // protected라서 외부에서 접근 금지.

// constructor에다가 protected를 걸면, 해당 클래스는 객체를 만들 수 없게 된다. 즉, 다른 클래스를 만드는 용도에만(상속) 사용할 수 있다.
// readonly를 사용하면 값을 수정할 수 없게 된다. constructor에서만 변경 가능.
