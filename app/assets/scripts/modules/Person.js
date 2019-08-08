class Person{
	constructor(fullName, favColor) {
		this.name = fullName;
		this.favouriteColor = favColor;
	}
	
	greet()
	{
		console.log("Hi there, my name is " + this.name + " and my favourite color is " + this.favouriteColor + ".");
	}
}
// module.exports = Person; this is a Node.js way of exporting modules. We will switch to js way that is available since ES6
export default Person;

