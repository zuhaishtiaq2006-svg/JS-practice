const score = 400
console.log(score);

const balance = new Number(1000)
console.log(balance);

console.log(balance.toString());//gives 1000
console.log(balance.toFixed(2)); //gives 1000.00

const othernumber = 12.8900
console.log(othernumber.toPrecision(3));//gives 12.9

const number2 = 1000000000
console.log(number2.toLocaleString()); //gives 1,000,000,000

//==============math===========//
console.log(Math);//gives all the math methods
console.log(Math.abs(-9));//gives 9
console.log(Math.sqrt(14));//gives 3.7416573867739413
console.log(Math.ceil(4.2));//gives 5
console.log(Math.floor(4.9));//gives 4
console.log(Math.round(4.5));//gives 5
console.log(Math.min(0, 150, 30, 20, -8, -200));//gives -200
console.log(Math.max(0, 150, 30, 20, -8, -200));//gives 150
console.log(Math.random());//gives random number between 0 and 1

console.log((Math.random() *10) +1); //gives random number between 1 and 10 e.g 9.234234234
console.log(Math.floor((Math.random() *10) +1)); //gives random number between 1 and 10 e.g 9, 7

const min = 15
const max = 30
console.log(Math.floor(Math.random()* (max-min +1)) + min);//gives random number between 15 and 30 e.g 22, 17
