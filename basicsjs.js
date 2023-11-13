/*
// hello world
console.log("Hello World");

//variable
var a=4

//instead oof var =>let and const 
let b=5
console.log(a,b)

let c= "This is getting boring already"
console.log(c,typeof(c));
//other than number, string and boolean. We have null and undefined as well

var d
console.log(d);//will print undefined
var e= a+b
console.log(e);
//we can't redeclare variable with let keyword but we can with var but reassigning values is allowed in both

console.log(a+b)
let boolean= true
console.log(!boolean)
//const is a constant that a value doesn't change at all 
const constant= "fixed";
*/

//JS OBJECTS
// an object is a collection of properties
/*let person = {
    firstName: 'Noor',
    lastName: 'Aqtash',
    fullName: function(){
       console.log (this.firstName+this.lastName)
    }
}
console.log(person.firstName)
// or person[property] as if it's a string instead
// you can change a property globally 
// create new property
person.age=25
console.log(person)
// delete object.property
//checking if a property exists in an object
//  console.log('age' in person)
//print all values in object
for(let key in person){
    console.log(person[key])
}
console.log(person.fullName())*/


//CLASSES
module.exports = class Person{
    //constructor is a method which executes by default when an oobject oof class is created
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }
    age = 25
    //get property
    get location(){
        return "Canada"
    }
    
    fullName(){
        console.log(this.firstName+this.lastName)
    }
}
// let person= new Person("Someone",'Testing')
// person.fullName()