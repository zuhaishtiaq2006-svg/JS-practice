let mydate = new Date()
console.log(mydate);
console.log(typeof mydate);//gives object

console.log(mydate.toDateString());//gives date in string format e.g Mon Jun 10 2024
console.log(mydate.toLocaleString()); //gives date in local format e.g 6/10/2024, 12:34:56 PM
console.log(mydate.toTimeString(''));//gives time in string format e.g 12:34:56 PM
console.log(mydate.toString());//gives date and time in string format e.g Mon Jun 10 2024 12:34:56 GMT+0530 

let createdate = new Date(2026, 6, 8)
console.log(createdate.toLocaleDateString());//gives date in local format e.g 8/7/2026
console.log(createdate.toDateString());//gives date in string format e.g Fri Aug 07 2026

let timestamp = Date.now(); //gives timestamp in milliseconds e.g 1717986918000
console.log(timestamp);
console.log(Math.floor(Date.now()/1000));//gives timestamp in seconds e.g 1717986918

let newdate = new Date()
console.log(newdate.getMonth());//gives month in number e.g 5
console.log(newdate.getDay());//gives day in number e.g 1