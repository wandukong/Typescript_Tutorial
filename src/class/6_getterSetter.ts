export {};

class Person {
  private _name: string = "";
  get name(): string {
    console.log("getter called");
    return this._name;
  }
  set name(newName: string) {
    console.log("setter called");
    if (newName.length > 7) {
      throw new Error("최대 길이를 넘었습니다.");
    }
    this._name = newName;
  }
}

let person = new Person();
person.name = "양승완";
console.log(person.name);
person.name = "크리스티아누호날두";
