// complete this js code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	greet(){
		console.log(`Hello, my name is ${name}, I am ${age} years old`)
	}
	class Employee extends Person{
		constructor(name,age,jobTitle){
		super(name,age);
		this.name = name;
		this.age = age;
		this.jobTitle = jobTitle;
		}
	jobGreet(){
		console.log(`Hello,my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}`)
	}
	}
}
const person1 = new Person("Alice",25)
person1.greet();
const employee1 = new Employee("Bob",30,"Manager")
employee1.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
