class Person {
   
    constructor(name,age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi, I am ${this.name}!`;
    } 

    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }

    getMajor(){
        return `I am ${this.name} and ${this.age} year old. My major is in ${this.major}.`;
    }
}

const me = new Student('phani kumar',30,'Electronics');
console.log(me);