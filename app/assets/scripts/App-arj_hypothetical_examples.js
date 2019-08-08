var $ = require('jquery');
// var Person = require('./modules/Person');
// require is a part of Node.js but since ES6 js can import modules'
import Person from './modules/Person';

class Adult extends Person{
	payTaxes() {
		console.log(this.name + " now owes $0 in taxes.");
	}


}

alert("abc 54321");

// console.log(Person.exampleProperty);
// Person.exampleFunction();

var john = new Person("John Doe", "blue");
john.greet();



var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();


$("h1").remove();