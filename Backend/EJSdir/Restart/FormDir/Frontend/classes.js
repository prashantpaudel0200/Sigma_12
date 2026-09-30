class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, My name is ${this.name}`);
    }
}
let P1 = new Person("Adam", 22);
let P2 = new Person("Eve", 27);