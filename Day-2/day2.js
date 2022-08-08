console.log('day-2');
//Q1.What is meant by first class functions
//A function can be passed as argument/values into another function or can be returned from the function.
//This dual property of the functions make them call as first class function.
//They are aslo called as "first class citizens".
var sayHello = function heyHello(a){
    console.log("Hi jhon!!");
    a();
}

sayHello(function Hi()
{
    console.log("My friend name is jhon");
});
//---------------------------------------------------------------------------------------
// Q2.Explain call(), apply() and, bind() methods. Give an example of call(),
//  apply(), bind()
//call():In case of call each and every arguments which is required to be 
//passed to the function will be passed individually.
let user = {
    name : "Shubham",
    age : 23,
    salary : 50000,
    city : "Ahmedabad"
}
let user2 = {
    name : "Vishnu",
    age : 21,
    salary : 60000,
    city : "Kashmir"
}
// creating a function which will be using this object
// When using call bind or apply
function UserDetails (company, designation) {
    // console.log("Hello inside function", this);
    console.log(this.name + " is " + this.age + " years old. ", company, " ", designation);
}
UserDetails.call(user2, "Google", "Backend Developer");
//Apply : In case of apply each and every argument which is required to be passed 
//to the function will be passed inside an array .
UserDetails.apply(user2, ["Amazon", " Full Stack Developer"]);
// Bind: In case of bind, it will return you a new function. And this new function you
// can use anytime anywhere.
const newFunction = UserDetails.bind(user);
newFunction("Flipkart", "Data Scientist")
//---------------------------------------------------------------------------------------
//Q3.What are objects in javascript?
// Objects are the non-primitive datatypes and are use to store multiple data in
 //the form of key and value pairs.
 const ObjName = {
    name : 'ajay devgon',
    role : "Actor",
 }
 console.log(ObjName.role + " " + ObjName.name);
//--------------------------------------------------------------------------------------
//Q4.What are function constructors?
// Function constructor is kind of regular function to create multiple objects at a time. 
//When creating function constructor, the first letter of the name must be capital.
// new keyword is mandatory to be used with function constructor.
function Job(role, salary){
    this.role = role,
    this.salary = salary
}
const newJob = new Job('HR', 50000);
console.log(Job.role);
//-------------------------------------------------------------------------------------
//Q5.Explain prototypes
// Every objrct in javascript has a built-in property. which is called its prototype.
function PersonOne(name, job, yearOfBirth){   
    this.name= name;
    this.job= job;
    this.yearOfBirth= yearOfBirth;
}
console.log(PersonOne.prototype);
//-------------------------------------------------------------------------------------
//Q6.What is prototype chain
//The prototype is itself an object, so the prototype will have its own prototype,
// making what's called a prototype chain.
let myObject = {
    name : "Bittu",
    gender : "Male",
    age : 26,
    showInfo : function(){
        console.log(`Name of the person is ${this.name}`);
    }
}

let secondObj = {
    name : "Rohit",
}

secondObj.__proto__ = myObject;
console.log(secondObj.name,secondObj.gender,secondObj.age);
console.log(secondObj.__proto__.__proto__.__proto__);//Null

//--------------------------------------------------------------------------------------
//Q7.Give an example of inheritance using function constructor
function Employee(name, age, gender, id) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.id = id;
  };
  
  function Developer(name, age, gender, id, 
  specialization) {
  
    // Calling Employee constructor function
    Employee.call(this, name, age, gender, id);
  
    // Adding a new parameter
    this.specialization = computer;
  }
  console.log(Employee.prototype);
  console.log(Developer.prototype);
//-------------------------------------------------------------------------------------
//Q8.What are callbacks?
//A callback is a function passed as an argument to another function
setTimeout(() =>{
    console.log("Hi rohit!!");//hi rohit will print after 1secs in every call.

},1000);

//-------------------------------------------------------------------------------------
//Q9.What is the use of setTimeout
//The setTimeout() method sets a timer which executes a function or specified piece of 
//code once the timer expires.
setTimeout(function () {
       console.log("hello world");
     }, 2000);
//-------------------------------------------------------------------------------------
//Q10.What is an event loop and call stack
///An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.

//Call stack:
//call stack to manage execution contexts: the Global Execution Context and 
//Function Execution Contexts.
//The call stack works based on the LIFO principle i.e., last-in-first-out.
//When you execute a script, the JavaScript engine creates a Global Execution
 //Context and pushes it on top of the call stack.
//Whenever a function is called, the JavaScript engine creates a function execution
 //context for the function, pushes it on top of the call stack, and starts executing 
 //the function.
//If a function calls another function, the JavaScript engine creates a new function
 //execution context for the function that is being called and pushes it on top of the 
 //call stack.
//When the current function completes, the JavaScript engine pops it off the call 
//stack and resumes the execution where it left off.
//The script will stop when the call stack is empty.


