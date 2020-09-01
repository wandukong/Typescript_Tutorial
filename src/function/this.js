// function Counter(){   // class에서도 마찬가지.
//     this.value = 0;
//     this.add = amount => {   // 화살표 함수
//         this.value += amount;  // 화살표 함수의 this는 이 화살표 함수가 생성될 때 당시의 this를 가리킨다. -> 정적으로 결정
//         console.log(this === global);
//     };
// }

// const counter = new Counter();
// console.log(counter.value);
// counter.add(5); // this가 가리키는 것이 counter로 고정
// console.log(counter.value);
// const add = counter.add;
// add(5); // // this가 가리키는 것 : counter
// console.log(counter.value);

// function Counter2(){
//     this.value = 0;
//     this.add = function(amount){  // 일반함수
//         this.value += amount;  //  동적으로 결정
//         console.log(this === global);
//     };
// }
// const counter2 = new Counter2();
// console.log(counter2.value);
// counter2.add(5); // 해당 this는 counter2를 가리킨다.
// console.log(counter2.value);
// const add2 = counter2.add;
// add2(5);  // 아무것도 가르키고 있지 않기 때문에 전역(global) 객체.
// console.log(counter2.value);

// const counter3 = { // 객체
//     value : 0,
//     add: function(amount){  // 일반함수
//         this.value += amount;
//     }
// };
// console.log(counter3.value);
// counter3.add(5);
// console.log(counter3.value);
// const add3 = counter3.add;
// add3(5);
// console.log(counter3.value);

// const counter4 = { // 객체
//     value : 0,
//     add : (amount) => {  // 화살표 함수
//         this.value += amount;    // 해당 코드가 실행되어도 이 화살표 함수를 감싸고 있는 함수가 없기 때문에 항상 전역 객체를 가리킨다.
//     }
// };
// console.log(counter4.value);
// counter4.add(5);
// console.log(counter4.value);
// const add4 = counter4.add;
// add4(5);
// console.log(counter4.value);

// var value = 1;

// var obj = {
//   value: 100,
//   foo: function() {
//     console.log("1." + this);  // obj
//     console.log("2." + this.value); // 100
//     function bar() {
//       console.log("3." + this); // window
//       console.log("4." + this.value); // 1
//     }
//     bar();
//   }
// };

// obj.foo();

// var obj1 = {
//     name: 'Lee',
//     sayName: function() {
//       console.log(this.name);
//     }
//   }

//   var obj2 = {
//     name: 'Kim'
//   }

//   obj2.sayName = obj1.sayName;

//   obj1.sayName();
//   obj2.sayName();

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var me = new Person("Lee");
console.log(me.getName());

Person.prototype.name = "Kim";
console.log(Person.prototype.getName());
