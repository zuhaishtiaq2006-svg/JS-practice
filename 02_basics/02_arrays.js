const marverlheros = ["thor", "ironman", "spiderman", "hulk", "captain america"];
const dcHeros = ["batman", "superman", "wonder woman", "flash", "aquaman"];

// Accessing elements in an array
// console.log(marverlheros[0]); // Output: thor
// console.log(dcHeros[2]); // Output: wonder woman

// marverlheros.push(dcHeros);
// console.log(marverlheros); // Output: ["thor", "ironman", "spiderman", "hulk", "captain america", ["batman", "superman", "wonder woman", "flash", "aquaman"]]
// console.log(marverlheros[5][3]); // Output: flash

const allheros = marverlheros.concat(dcHeros)
console.log(allheros);


const allheros2 = [...marverlheros, ...dcHeros]
console.log(allheros2);


//======webscraping needs in arrays=====//
console.log(Array.isArray("Zuha")); //gives false because "Zuha" is not an array
console.log(Array.from("Zuha")); //gives ["Z", "u", "h", "a"] because it converts the string into an array of characters
console.log(Array.from({name: "Zuha"})); //gives [] because it converts the object into an array of values but the object has no values)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //gives [100, 200, 300] because it creates an array from the given values