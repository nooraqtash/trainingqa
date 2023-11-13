//importing class 
const Person = require('./basicsjs')

//loops
/* const flag=true;
//if else condition
if(flag){
    console.log("we're good")
} else(
    console.log("nope we're not")
)
// while loop
let i =3
while(i<7){
    i++
    console.log("This is number", i)
}
// do while 
do{
    console.log("hi ", i)
    i++
} while(i<10);

//for loop
for(let k=0; k<10; k++){
 if (k%2==0){
    console.log(k) }
} */


//arrays (i really hate them, always did)
/* 
let score = Array(6)
// a better way of declaring arrays
var count = [23,54,24,65,98,15];
subcount = count.slice(1,4);
//array length name.length()
//array.push add need element at the end of the array 
//array.unshift add to the beginning of the array
console.log(subcount);
let sum=0
/*for(let i = 0; i <count.length; i++){
console.log(count[i])
}*
//reduce instead of a for loop to reduce the complexity by array.reduce((var, anything)=> var+anything, initial value)
let total = count.reduce((sum,counts)=>sum+counts,0)
console.log(total);
// filter is for filter out elements that pass a specific condition array.filter(i=> operation) new array with the elements that satisfy the condition
//map aaray.map(i=>i and the operation you want) redefines values of elements in array 
let mapArray=count.map(i=>i*3-2)
console.log(mapArray);

// sorting arrays => string 
let names = ["noor","amal","sara","khalid","coco","ahmad","khadija"]
console.log(names.sort())

//sorting array numbers
let numbers = [324,34,765,876,9876,124,765,13,546,752,65]
//recursive funtion
let sortedNumbers = numbers.sort((a,b)=>a-b)
console.log(sortedNumbers)
*/


//functions

/*function sum(a,b){
 return a+b
}
//anonymous functions can only be assigned to variables not on their own 
let add = function(c,d){
 return c+d
}
//or even simpler like 
let sumofnumbers= (c,d)=>c+d
console.log(sumofnumbers(3,5));
*/

//scopes var=> block and global scopes can take a value from scope
//let => global and block level doesn't and only takes global
//const => value can't be changed at all 

//STRINGS

/*let day = 'Wednesday' //double or single quotes doens't matter
console.log(day.length)
console.log(day.slice(0,3))
console.log(day[3])
let splitDay= day.split("n")
//console.log(splitDay[1])
//trim for deleting spaces 

/*let date = '23'
let nexrDay= '28'
//convert to integers
let difference = parseInt(nexrDay)- parseInt(date)
console.log(difference)
difference.toString()
*/
//concatination
/*let sentence = day + " is a week day"
console.log(sentence)

let count = 0 
let value = sentence.indexOf("day")
while(value!== -1){
    count++
    value= sentence.indexOf("day", value+1)
}
console.log(count)*/


//adding class onject
// let person1 = new Person("Noor","Importing")
// person1.fullName()

//inheritance = a class inheriting properties from another class
class Pet extends Person{
    constructor(firstName,lastName){
        super(firstName,lastName)
    }
    get location(){
        return "adopting agency"
    }
}
let cat= new Pet ("Coco"," baby")
cat.fullName()
console.log(cat.location)