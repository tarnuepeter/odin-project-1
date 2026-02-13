
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
console.log(nr1 * nr2);

console.log(nr1 + nr2);

let strNum = String(nr1);
console.log(strNum);

// convert number to String
let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

// Convert String to Number
let strToNr = "12";
strToNr = Number(strNum);
console.log(strToNr, typeof strToNr);

// Convert String to Boolean
let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

// Practice exercise
let strr1 = "Laurence";
let strr2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum1 = 1000;
console.log(strr1, typeof strr1);
console.log(strr2, typeof strr2);
console.log(val1, typeof val1);
console.log(val2, typeof val2);
console.log(myNum1, typeof myNum1);

let nr = 2; 
console.log(nr++);
console.log(nr++);

let nrr1 = 4;
let nrr2 = 5;
let nrr3 = 2;
console.log(nrr1++ + ++nrr2 * nrr3++);


// Chapter project 
let oneMile = 1.60934;
let kms = 130;
let result = oneMile * kms;
let output = `The distance of ${kms} kms is equal to ${result} miles`;
console.log(output);

// Creating array
let array = ["Peter", "Morris", 45, 89.78, "Johnson"];
console.log(array);
console.log(array[1]);
array[0] = "Joseph Tarnue";
console.log(array);

colors = ['black', 'orange', 'pink'];
booleans = [true, false, false, true];
emptyArray = [];


console.log("Length of colors: ", colors.length);
console.log("Length of booleans: ", booleans.length);
console.log("Length of empty array: ", emptyArray);

console.log(colors.length - 1);
console.log(colors[-1]);

numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);

console.log("Numbers: ", numbers);

// Add and replacing element in arrays
let favorateFruits = ['grapefruit', 'orange', 'lemon'];
favorateFruits.push('tangerine');
favorateFruits.push("Mangos");

console.log(favorateFruits);

let arrOfShapes = ['circle', 'triangle', "rectangle", 'pentagon'];
arrOfShapes.splice(2,0, "square", 'trapezoid');

console.log(arrOfShapes);

let arry4 = [1,2,3];
let arry5 = [4, 5, 6];
let arry6 = arry4.concat(arry5);
console.log(arry6);

let arry7 = arry6.concat(7,8,9, 10, 11, 12);
console.log(arry7);

let names = ['James', "Alicia", "Fathia", "Maria", "Bert"];
console.log(names.sort());

let ages = [18, 72, 33, 56, 40];
console.log(ages.sort());
console.log(names.reverse());

// Multidimensional arrays
let someValue1 = [1,2,3];
let someValue2 = [4,5,6];
let someValue3 = [7,8,9];

let arrOfArrays = [someValue1, someValue2, someValue3];
console.log(arrOfArrays);
let arrOfArrays2 = [[1,2,3], [4,5,6],[7,8,9]];
console.log(arrOfArrays2);
// Common array methods 
/*  
    1. push() --- to add element to array
    2. splice() --- to insert and element at specific index and remove elments
    3. shift() --- remove element from the begining of an array
    4. pop() ----- remove element from the end of an array
    5. find() --- find specific element in an array
    6. length property --- find the lenth of an array
    7. concat() -- add one or more elements to an array
    8. indexOf() --- find the index of an element in an array
    9. sort() --- sort array element from small to high, or A-Z
    10. reverse() -- reverse the order of the array elements
*/

// Objects in JavaScript
// An object is a chance to group multiple variables into one.
let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBiter: true
};

console.log(dog);
console.log(typeof dog);

// accessing object elements
console.log(dog['color']);
console.log(dog.color);

// updating object elements
dog['color'] = "blue";
dog.weight = 'blue';

console.log(dog);

// Working with objects and arrays
// Objects in objects
let company = {
    companyName: "Healthy Candy",
    activities: "food manufacturing",
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment:2021
};

// accessing element of nested object
company.address.number = "33117";
company['address']['number'] = "100";

// Arrays in objects
company = {
    companyName: "Health Candy",
    activities: [
        "food manufacturing","improving kids", "manufactoring toys"
    ],
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    }
};

let activity = company.activities[1];
console.log(activity);

// Objects in arrays
let addresss = [
    {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },

    {
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
    }
];

let streeName = addresss[0].street;
let streetNumber = addresss[1].number;
console.log(addresss);
console.log(streeName, streetNumber);

// Objects in arrays in objects
company = {
    companyName: "Healthy Candy",
    activities: [
        "food manufacturing", "improving kid's health", "manufacturing toys"
    ],
    address: [
        {
            street: "2nd street",
            number: "123",
            zipcode: "33116",
            city: "Miami",
            state: "Florida"
        },
        {
            street: "1st West avenue",
            number: "5",
            zipcode: "75001",
            city: "Florida",
            state: "texas"
        }
    ],
    yearOfEstablishment: 2021
};

console.log(company.companyName);
console.log(company.activities[0]);
console.log(company.activities[1])

console.log(company.address[0].state);
console.log(company.address[1].state);

console.log(company.yearOfEstablishment);

// chapter projects
//Manipulating an array
const theList = [
    "Laurence", "Svekis", true, 35, 
    null, undefined, {test: 'one', score: 55},
    ['one', 'two']
];

console.log(theList);
theList.splice(0,1,"First");
theList.splice(-1,1, "Last");
theList[3] = "Hello World";
theList[2] = "MIDDLE";

console.log(theList);

// Company project catalog 
let storeItems = []

let iphone = {
    name: "Iphone",
    model: "iphone 19",
    quantity: 20
}

let techno = {
    name: "Techno",
    model: "Cama40 Pro",
    quantity: 30
}

let samsung = {
    name: "samsung",
    model: "zfold",
    quantity: 10
}

storeItems.push(iphone);
storeItems.push(techno);
storeItems.push(samsung);

console.log(storeItems);

console.log(storeItems[2].quantity);

// LOGICAL STATEMENTS
// if and if else statements
let rain = true;
if (rain) {
    console.log("**Taking my umbrella when I need to go outside **");
} else {
    console.log("** I can leave my umbrella at home **");
}

let age1 = 17 
if (age1 < 18) {
    console.log("We're very sorry, but you can't get in under 18");
} else {
    console.log("Welcome!!!!!");
}

// If else statements
let age2 = 10;
let cost = 0;
let messages;
if (age < 3) {
    cost = 0;
    messages = "Access is free under three.";
} else if (age2 >= 3 && age2 < 12) {
    cost = 5;
    messages = "With the child discount, the fee is 5 dollars";
} else if (age2 >= 12 && age2 < 65) {
    cost = 10;
    messages = "A regular ticket costs 10 dollars";
} else {
    cost = 7;
    messages = "A ticket is 7 dollars";
}

console.log(messages);
console.log("Your total cost: "+cost);

// Conditional ternary operators
let access = age2 < 18 ? "denied" : "allowed";

// SWITCH STATEMENTS
// if-else statements
activity = "Lunch";

if(activity === "Get up"){
    console.log("It's 6:30Am");
} else if (activity === "BreakFast") {
    console.log("It is 7:00AM");
} else if (activity === "Drive to work") {
    console.log("It is 8:00AM");
} else if (activity === "Lunch") {
    console.log("It is 12.00PM");
} else if (activity === "Drive home") {
    console.log("It is 5:00PM");
} else if (activity === "Dinner") {
    console.log("It is 6:30PM");
}

// switch version of if statements 
switch(activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "BreakFast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
    default:
        console.log("I cannot determine the current time.")
        break;
}