console.log(2 > 1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);


console.log(null > 0); //gives false
console.log(null == 0); //gives false because null is only equal to undefined
console.log(null >= 0); //gives true because null is converted to 0 for comparison

console.log(undefined == 0); //gives false because undefined is only equal to null
console.log(undefined === 0); //gives false because strict equality check fails
console.log(undefined > 0); //gives false because undefined is converted to NaN for comparison
console.log(undefined >= 0); //gives false because undefined is converted to NaN for comparison
console.log(undefined == null); //gives true because undefined is only equal to null

// === checks for both value and type equality

console.log(2===2); //gives true because both value and type are equal
console.log(2==="2"); //gives false because both value and type are not equal
console.log(2=="2"); //gives true because both value is equal but type is not equal