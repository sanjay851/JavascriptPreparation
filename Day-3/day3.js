console.log('day3');
//Q1.What is callback hell
// callback are just the name/convention for using javascript.it instead of  immediately returning results like other functions, takes time to produce the result.so, if we stuck in some particular call which prevents us from making further calls ends us into callback hell.
//the structure of callback hell looks like pyramid/arrow shape.
//we use promises to prevent using callbacks and thereby avoiding callback hell
function printNumber() {
    setTimeout(() => {
        console.log('1');
        setTimeout(() => {
            console.log('2');
            setTimeout(() => {
                console.log('3');
                setTimeout(() => {
                    console.log('4');
                    setTimeout(() => {
                        console.log('5');
                    }, 5000)
                }, 4000)
            }, 3000)
        }, 2000)
    }, 1000)
}
// printNumber();
//---------------------------------------------------------------------------------------
//Q2.What are promises and why do we need them?
//Promises - Promises are used to handle asynchronous operations in JavaScript.
// They are easy to manage when dealing with multiple asynchronous operations when callbacks can create callback hell leading to unmanageable code. 
// It also allow us to make API calls or fetch data from Web Servers successfully. 
// If not able to do so fetch us with error message.
// It have three stages.

// 1.Pending        2.Resolved(fulfilled)       3.Rejected
//To prevent callback hell we use promises. Our code will look cleaner. 
//This will also handle 'errors'.
//We use promises by following reasons:
//1.Use promises whenever you are using asynchronous or blocking code.
//2.resolve maps to then and reject maps to catch for all practical purposes.
//3.Make sure to write both .catch and .then methods for all the promises.
//4.If something needs to be done in both cases use .finally.
//5.We can add multiple handlers to a single promise.
const getId = new Promise((resolve,reject)=>{//producer,executor
    setTimeout(() => {
        let id = [1,2,3,4,6];
        resolve(id);
        //reject("Error in fetching");
        
    },2000);
});

getId     //consumer
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})
.finally(() => {
    console.log("successfully executed");
})
//-------------------------------------------------------------------------------------
//Q3.What is promise chaining
// Promise chaining: Promise chaining is a syntax that allows you to chain 
// together multiple asynchronous tasks in a specific order. This is great 
// for complex code where one asynchronous task needs to be performed after 
// the completion of a different asynchronous task.
const hello = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 2000); 
})
hello
.then(function(result) { 
    console.log(result); 
    return result * 2; 
})
.then(function(result) { 
    console.log(result); 
    return result * 2; 
})
.then(function(result) {
    console.log(result); 
    return result * 2;
});
//----------------------------------------------------------------------------------
//Q4.What is the purpose of async/await keywords?
//Async - They are used to handle promises more efficiently.
// the word async before a function always means that the function
//  always returns a promise. so, we therefore use async before the
//   function name to return a promise instead of a value.

//Await is used to wait for the result that is to be returned from 
// the promises. So, we use await when we are calling a function which
//  returns a promise. Also,we can use them(Async/await) for making API calls.

//----------------------------------------------------------------------------------
//Q5.Give an example of async/await
async function fn() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 3000)
    });
    let result = await promise; 
    console.log(result); 
  }
fn();
//-----------------------------------------------------------------------------------
//Q6.What is hoisting?
Hoisting in javascrip is a behaviour  which says that we should always decleare and 
initialise all the variables  before using them . 
 if we will not assiging the value to a variable before using it , then it will throw 
 errors . so to avoid such errors we we should follow the concept of Hoisting in JS .
 Hoisting brings the declerations of the variable in the top of the code . 
Hoisting only support variable decleration not variable initialization .
//---------------------------------------------------------------------------------------
//Q7.What is the DOM?
// Document Object Model (DOM) is a platform and language-neutral 
//interface that allows programs and scripts to dynamically access and
 //update the content, structure, and style of a document.

//-------------------------------------------------------------------------------------
//Q8.Difference between undefined vs not defined vs NaN
//undefined means This means that a variable has been declared but has no value assigned.
//not defined means when we try t access a variable that is not declared .
//null means it is a value that we initialize to a variable which will later be replaced 
//with some other value . 
//let myCountry = null ;
console.log(mycountry);//null 
let myCountry = "India";
console.log(myCountry);//India  
//-------------------------------------------------------------------------------------
//Q9.How many operators do we have in JS ?
// Arithmetic Operators
// Comparision Operators
// Logical Operators
// Relational Operators
// Conditional Operator
// Bitwise Operator
//--------------------------------------------------------------------------------------
//Q10.What are pure functions?
// This is a function which gives you same output for same input passed. 
//It doesn't depends on some variables whose value might change in the future,
 //and therefore always gives u same values.

//--------------------------------------------------------------------------------------
//Q11.What are arrow functions?
// Arrow function is one of the features introduced in the ES6 version of JavaScript. 
//It allows you to create functions in a cleaner way compared to regular functions.

let x = (x, y) => {
console.log(x * y);
}
x(3,6);