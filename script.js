
// Variable in javascripts
let firstName = "Peter";
let middleName = "Kessellie";
let lastName = "Tarnue";

console.log(firstName);
console.log(middleName);
console.log(lastName);


let age = 12;
console.log(age);

age = 54;
console.log(age)

// Variables with constant values is declar as const

const pi = 3.14;
// pi = 10;

console.log(pi)


// Number in Javascript
let num1 = 5;
let num2 = 7;

let sum = num1 + num2;
console.log(sum);

console.log(4 + 3 * (4 + 1));

console.log((4 + 6 + 9)/77); 


const max = 57;
const actual =  max - 13;
const percentage = actual / max;
console.log(percentage);

const myInt = 5;
const myFloat = 6.667;
myFloat;
myFloat;

let myConstantNumb_string = "56";

console.log(typeof(myConstantNumb_string));

myConstantNumb_string = Number(myConstantNumb_string);
console.log(typeof(myConstantNumb_string));

let myNum = 34;

moduloResult = myNum % 4;
console.log(moduloResult);

moduloResultIncreementByOne = moduloResult++;
// console.log(moduloResultIncreementByOne)

const num3 = 10;
const num4 = 50;

9 * num3;
num3 ** 3;

myNum++;
console.log(myNum)

myNum--;
console.log(myNum)

let x = 3;
x += 4;
console.log(x);


// Comparision operator 
console.log(5 === 4);
console.log(5 !== 4);

const btn = document.querySelector('button');
const txt = document.querySelector('p')

btn.addEventListener('click', updateBtn);

function updateBtn() {
    if (btn.textContent === "Start machine") {
        btn.textContent = "Stop machine";
        txt.textContent = "The machine has started!";
    } else {
        btn.textContent = "Start machine";
        txt.textContent = "The machine is stopped!";
    }
}

// Basic operators, maths

let firtName = "Peter";
let centerName = " K. ";
let familyName = "Tarnue";

let fullname = firstName + centerName + lastName;
console.log(fullname);

let counter = 1;
let a  = ++counter;
console.log(a);

let counters = 1;
let ab = counter++;
console.log(ab);

// Data type in Javascript
let number = 4; // integer number type
let numb = 4.555; // float number type
let me = "Moses"; // string data type
console.log(`I love writing code that represent ${counter}`);

typeof undefined;

let text = "I am learning JavaScript right now of Odin."
let length = text.length;

console.log(length);

let language = "javaScript";
let message = `Let's learn ${language}`;
console.log(message)
alert(message)

// Escape character 
let str = "Hello, what's your name? Is it \"Mike\"";
console.log(str);

let str2 = 'Hello, what\'s your name? Is it "Mark"?';
console.log(str2)

// New line character
let str3 = "New \nline";
let str4 = "I'm containing a backslash: \\!";
console.log(str3);
console.log(str4);

let bool1 = false;
let bool2 = true;

let testVariable = 1;
let variableTypeTest1 = typeof testVariable;
let variableTypeTest2 = typeof testVariable;
console.log(variableTypeTest1);
console.log(variableTypeTest2);

// Converting data types 
let nr1 = 2;
let nr2 = "2";
alert(nr1 * nr2);

