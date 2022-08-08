console.log("Hello Javascript");
//DAY-1
//Q1.Difference between “ == “ and “ === “ operators.
// 1."==" and "===" both are comparison operators.
// 2.in "==" operators check the value only.
// 3.in "===" operators check both value first and  2nd datatype like string or not .then 
// this operator give results true or false . 
//datatypes are number,string ,and boolean type.
// let suppose a number string like "5" and  numeric value 5 if we compare both of them 
//  with "==" operatores it show me  "true" . because both are same value 
//  it just checking only value.
//  but in case of "==="  operators it checks both value first and 2nd datatype of variable 
//   if value is same then 
//  it goes to check datatype if one value is string like "5" and 2nd value like numeric 
//  value 5 then it show me false because value is same but datetype is not same ,one is 
//  string and 2nd is value.
console.log(0==0);//true
console.log(0=='0');//true
console.log(5=='5');//true
console.log(5==='5');//false
console.log('5'==='5');//True
console.log('5'!=='5');//false
// let obj = [1];
// let obj1 = [2];
// console.log(console.log(obj)==console.log(obj1));
 //= is used for assigning values to a variable in JavaScript.
//== is used for comparison between two variables irrespective of the datatype of variable.
//=== is used for comparision between two variables but this will check strict type,
// which means it will check datatype and compare two values.
//
//var number = 100;  // Here number variable assigned using =
// if (number == 100)  // Here Comparision between two values using ==. 
// //It will compare irrespective of datatype of variable
//    alert("Both are equal");    
// else    
//    alert("Both are not equal");   
// if (number === 100)  // Here Comparision between two values using ===. 
// It will compare strict check means it will check datatype as well.
//    alert("Both are equal");      
// else      
//    alert("Both are not equal");     
//variable type
//number - integer(25) ,float(25.25);
//string - ""/'';//"sanjay","5","2,wetkines lane hsbvhudk -711101"//'5',
//'2,wetkines lane hsbvhudk -711101'
//boolean//true/false
//----------------------------------------------------------------------------------------
//Q2.What is the spread operator?
//The JavaScript spread operator ( ... ) allows us to quickly copy all or part of 
//an existing array or object into another array or object.
// bacally spread operator is an operator that has introduced in ES6
// (ECMAScript 2015 is also known as ES6 and ECMAScript 6.)  version of javascript 
// spread operator is used to spend and combine or merge the array or strings if we using 
// array or strings.
//EXAMPLE
let arr1 = ['h','e','y']
let arr2 = [2,4,6]
console.log(...arr1,...arr2);
// Spread operator expands an iterable objects into its individual element. 
// An iterable object is anything that you can loop over with our for of loop .
// Example of iterable : Array, String , Map, Set, DOM nodes.
// 1. Using Spread Operator in logging
// You can use spread operator in console.log with iterable objects
// let fruits = ['🍈', '🍉', '🍋', '🍌'];
// console.log(...fruits); //🍈 🍉 🍋 🍌
//2. Spread operator for Copying Arrays
// let fruits = ['🍈', '🍉', '🍋', '🍌'];
// let fruitsCopy = [ ...fruits ]; 
// console.log(...fruitsCopy); //🍈 🍉 🍋 🍌
//Copy objects
// let user = {name : "John", age : 20 }
// let userCopy = {...user};
// console.log(...userCopy);
// //The spread operator does not perform deep-copy.
// 3. Spread operator for Merging
// let fruits = ['🍈', '🍉', '🍋', '🍌'];
// let vegetables = ['🍅', '🍆', '🥒'];
// let fruitsAndVeg = [...fruits, ...vegetables]
// Merging Objects
// While merging objects, if a key already present then it is replaced by last 
// object with same key.
// let user1 = {name : "John", age : 20 };
// let user2 = {name : "Ram", salary: '20K' };
// let userCopy = {...user1, ...user2};
// userCopy ; // {name : "Ram", age :20 , salary : '20K'};
// 4. Spread operator for Passing as arguments
// function sum(a, b) {
//     return a+b;
//  }
//  let num = [1,2];
//  sum(...num); // 3
//  Using with math functions
//  let num = [5,9,3,5,7];
// Math.min(...num);
// Math.max(...num);
// 5. Spread operator In Destructuring variable
// let [melon, ...fruits ] = ['🍉', '🍋', '🍌', '🍊'];
// melon; //🍉 
// fruits; // [ '🍋', '🍌', '🍊']
// Destructing Objects
// let user = {name : "Ram", age: 20, salary: '20K', job : "Tester" };
// let { name, age, ...details } = user;
// name; // Ram
// age; // 20
// details; // {salary: '20K', job : 'Tester'};
// 6. Convert NodeList Object to Array
// NodeLists are array-like but don’t have all methods of Array, like forEach,
//  map, filter, etc.
//  let nodeList = document.querySelectorAll('.class')
// var nodeArray = [...nodeList]
// 7. Convert String to Character
// String is also an iterable object, so we can use ... to strings also.
// let name1 = "Ram";
// let chars = [...name1];
// 8. Eliminate Duplicates From an array
// let num = [1, 3, 1, 3, 3, 1];
// let uniqueNum = [...new Set(num)];
// uniqueNum; //[ 1, 3 ]
//----------------------------------------------------------------------------------------
//New Features in ES6(ECMAScript 2015)
//The let keyword
// The const keyword
// Arrow Functions
// Map Objects
// Set Objects
// Classes
// Promises
//Q2.1WHAT IS CLASS?
// JavaScript Classes
// JavaScript Classes are templates for JavaScript Objects.
// Use the keyword class to create a class.
// Always add a method named constructor():
//Syntax
// class ClassName {
//   constructor() { ... }
// }
// Example
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }
// The example above creates a class named "Car".
// The class has two initial properties: "name" and "year".
// A JavaScript class is not an object.
// It is a template for JavaScript objects.
//----------------------------------------------------------------------------------------
//Q3.What are the differences between var, let and const?
1.var,let and const these three are keywords that are used to decleare the variable in 
javascript . 
2.var keyword is oldest and let const keywords are introduced in ES6. 
3.var is global scoped and let,const are blocked scoped .
//what is a block?
//A block (that is, a code block) is a section of the code we define 
//using a pair of curly brace s({...}).
ex.{
    let name = "alex";
  }
//  Usually, you define a function using the function keyword and a name.
//  Just be aware that you can define a function without a name, 
//  which we call an anonymous function.
// function test() {
//     let name = "alex";
//   }
//what is global scoped?
// when we declare variables,using var keyword they can exist within a block, inside
//  a function, or outside of a block/function – that is, global scope
// There are mainly three types of scope:
// Block Scope  
{
    let f_name  = 'Alex';
    const ZIP = 500067;
    var age = 25;
}

console.log(f_name); // Uncaught ReferenceError: f_name is not defined
console.log(ZIP);  // Uncaught ReferenceError: ZIP is not defined
console.log(age);  // 25
// Functional Scope  
// f1() is a function

function f1() {
    let f_name = "Alex";
    const ZIP = 560089;
    var age = 25;   
   }
   
   f1();
   
   console.log(f_name); // Uncaught ReferenceError: f_name is not defined
   console.log(ZIP);  // Uncaught ReferenceError: ZIP is not defined
   console.log(age);  // Uncaught ReferenceError: age is not defined
   //The variable declared with var inside a function is not accessible outside of it.
    //The keyword var has function-scope.
// Global Scope
let f_name = "Alex";
 const ZIP = 560089;
 var age = 25;  

// f1() is a function
function f1() {
  console.log(f_name); // Alex
  console.log(ZIP);  // 560089
  console.log(age);  // 25
}

f1();

console.log(f_name); // Alex
console.log(ZIP);  // 560089
console.log(age);  // 25

4.var variables can be updated and re-declared within its scope; 
let variables can be updated but not re-declared; 
4.1 two variables with same name are not possible with let . 
// ex-let firstName = "Jhon"
// console.log(firstName);//Jhon
// firstName = "smith"
// console.log(firstname);//Jhon,smith
const variables can neither be updated nor re-declared.
5.var and let variable value can  be reassign but in const can not reassign .
in genral term we should use let and const over var because var is global scoped and 
function scoped so it is difficult to manage var varible because sometime to we forgate 
that what we have  end of declering so it has been preferred to always use let const in
place of var keyword.
var can be hoisted 
let can be hoisted only in blocked not outside of blocked.
//--------------------------------------------------------------------------------------
what is hoisting ?
Hoisting in javascrip is a behaviour  which says that we should always decleare and 
initialise all the variables  before using them . 
 if we will not assiging the value to a variable before using it , then it will throw 
 errors . so to avoid such errors we we should follow the concept of Hoisting in JS .
 Hoisting brings the declerations of the variable in the top of the code . 
Hoisting only support variable decleration not variable initialization .
//------------------------------------------------------------------------------------
//What Happens When You Access a Variable Before Declaring it in JavaScript
//With var  the variable will have an undefined value.
//undefined means This means that a variable has been declared but has no value assigned.
// With let and const, if you try to access a variable before declaring, 
// you will always get a ReferenceError.
//------------------------------------------------------------------------------------
not defined means when we try t access a variable that is not declared . 
//------------------------------------------------------------------------------------
null means it is a value that we initialize to a variable which will later be replaced 
with some other value . 
//let myCountry = null ;
console.log(mycountry);//null 
let myCountry = "India";
console.log(myCountry);//India
//----------------------------------------------------------------------------------------
//Q4.What is execution context
JavaScript is a single threaded language, means only one task can be executed at a time.
 When the JavaScript interpreter initially executes code, 
 it first enters into a global execution context by default. 
 Each invocation of a function from this point on will result in
  the creation of a new execution context.
  //Execution Context (Global), created by JS Engine contains 3 important things:
   1. Global object - window
   2. Special Object - this
   3. Ref to outer environment

   let x = 10;
function timesTen(a){
    return a * 10;
}

let y = timesTen(x);

console.log(y); // 100
//----------------------------------------------------------------------------------------
//Q5.What is creation phase and execution phase?
//creation Phase
When the JavaScript engine executes a script for the first time,
then  it creates the global execution context that is creation phase(web browser).
During this phase, the JavaScript engine performs the following tasks:
Create the global object i.e., window in the web browser or global in Node.js.
Create the this object and bind it to the global object.
Setup a memory heap for storing variables and function references.
Store the function declarations in the memory heap and variables 
within the global execution context with the initial values as undefined.
//The execution phase
During the execution phase, the JavaScript engine executes the code line by line, 
assigns the values to variables, and executes the function calls.
//----------------------------------------------------------------------------------------
//Q6.What are closures? Give an example of closure
it is a combination of inner function and lexical environment of outer function.
that have access to varible and parameters of outer function.
function outer(){
    let a = 5;
    function inner(){       //closure
        console.log(a);
    }
    inner();
}
outer();

//---------------------------------------------------------------------------------------

