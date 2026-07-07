const name = "zuha"
const age = 19
// console.log(name + age + "Value");

console.log(`My name is ${name} and I am ${age} years old.`);
 
 const gamename = new String("GTA RUNNER")
console.log(gamename);
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(4));
console.log(gamename.indexOf('RUNNER'));

const newstring = gamename.substring(0,6);
console.log(newstring);

const anotherstring = gamename.slice(-4, 7);
console.log(anotherstring);

const string1 = "    zuha is learning        "
console.log(string1.trim()); //removes whitespaces from both ends of the string

const url = "https://www.zuha.com/ishtiaq&34"
console.log(url.replace("&34", "intern")); //replaces the first occurrence of the substring with the new substring
console.log(url.includes("zuha"));//returns true if the substring is found, otherwise returns false
console.log(url.search("aleeha")); //returns the index of the first occurrence of the substring, if not found returns -1
console.log(url.search("zuha")); //returns the index of the first occurrence of the substring, if not found returns -1
console.log(gamename.split(" "));//splits the string into an array of substrings based on the specified separator

// console.log(url);