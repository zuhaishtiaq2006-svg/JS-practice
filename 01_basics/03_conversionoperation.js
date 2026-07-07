// let score = "12abc" //gives NaN

let score = false
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)

// true => 1; false =>0

// let isLoggedIn = 1 //gives true
// let isLoggedIn = "" //gives false
let isLoggedIn = "Zuha" //gives true
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);


let number = 34
let stringnumber = String(number)
console.log(stringnumber);
console.log(typeof stringnumber);


/*==================Operation Conversion==================*/
let value = 4
let negvalue = -value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);


let str1 = "hello"
let str2 = " zuha"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" +2 +2);
console.log(1 + 2 + "2");


let gamecounter = 100
// gamecounter++; //post increment gives the value first and then increase it by 1
++gamecounter; //pre increment increases the value first and then gives it
console.log(gamecounter);
