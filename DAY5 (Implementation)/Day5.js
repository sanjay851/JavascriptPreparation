console.log("DAY5 (Implementation)");
// Q1.Create a button , on click of which new Heading tag h1 should be added with text as 
// "MERN stack" on the screen above button .
 addText = () => {
  let addText = document.getElementById('hi');
  addText.innerText = 'MERN stack'
}
// document.querySelector('#add').addEventListener("click",() => {
//   let head = document.querySelector('#hi');
//   head.innerText = 'mern stack'
// }
// );
//---------------------------------------------------------------------------------------
//Q2.Write code to get 1st H1 element from a webpage using DOM
//1. first way to get 1st H1 element from a webpage
document.getElementById('hi');
//2nd way to get 1st H1 element from a webpage
document.getElementsByTagName('h1')[0];
//3rd to get 1st H1 element from a webpage
document.querySelectorAll('h1')[0];
//4th way
document.querySelector('h1');
//--------------------------------------------------------------------------------------
//Q3.Write code to implement timer clock using JS -- display HH:MM:SS -- the time
 //should keep updating every second
 function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
   let s = date.getSeconds();
   let session = "AM";
  
  if(h == 0){
    h = 12;
}
if(h > 12){
    h = h - 12;
    session = "PM";
 }
  
 h = (h<10) ? "0" + h : h;
 m = (m<10) ? "0" + m : m;
 s = (s<10) ? "0" + h : s;
 let time = h + ":" + m + ":" + s + " " + session;
  document.getElementById('clock').innerText=time;
  
}
setInterval(showTime, 1000);
//showTime();
// Q4.Create an HTML page having content as Hello world and a button named Replace Text. 
// When user will click on this button page content should be 
// changed to "Welcome to Elevation academy"
function replaceText(){
    var Heading = document.getElementsByClassName("h1")[0];
    Heading.innerText = "Welcome to Elevation academy";
    Heading.style.color='blue'
}
//-------------------------------------------------------------------------------------
// Q5.Create an HTML page having content as Hello world and a button named "Hide Text."
//  When user will click on this button hide the "Hello World" text
//using jQuary
$('#hide').click(function(){
  $("#wb").hide();
});
$('#show').click(function(){
  $("#wb").show();
});
//---------------------------------------------------------------------------------------
//Q5.Given an array of 0's and 1's find out number of 0's
let array = [0,1,1,0,1,0,1,0,0,0,1];
let count = 0;
for( let i=0; i<array.length;i++)
{
  if(array[i]==0)
  {
  count++;
  }
}
console.log(`Number of 0's in given array is ${count}`);
//---------------------------------------------------------------------------------------
//Q6.Given an array find out total no. of odd and even nos.
let number = [10,11,12,13,14,15,16,17,18,19,20];
let countEven = 0;
let countOdd = 0;
for( let i=0; i<number.length;i++)
{
  if(number[i]%2===0)
  {
  countEven++;
  }
  else{
    countOdd++;
  }
}
console.log(`total no. of odd in given array is ${countOdd} and even no. is ${countEven}`);
//---------------------------------------------------------------------------------------
//Q7.Given a string find out number of vowels 
function countVowel(str) { 

  // find the count of vowels
  const count = str.match(/[aeiou]/gi).length;

  // return number of vowels
  return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);
//---------------------------------------------------------------------------------------
// Q8.Write a code to create two objects with 2 properties each, 
// one will be string and other will be an array. Create a function to 
// check if all the elements of the arrays in both the objects are same