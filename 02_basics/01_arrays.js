// const arr = [0,1,2,3]
// console.log(arr);

const newarr = new Array(1,2,3,4,5)
console.log(newarr[3]);

//=====Array Methods=====//
const myarr = new Array(1,2,3,4,5)
myarr.push(6)//adds 6 at the end of the array
myarr.push(7)//adds 7 at the end of the array
myarr.pop()//removes the last element of the array
myarr.unshift(3)//adds 3 at the start of the array
myarr.shift()//removes the first element of the array

console.log(myarr.includes(9));//gives false
console.log(myarr.indexOf(3));//gives 2
console.log(myarr);

const newarr2 = myarr.join()//joins all the elements of the array and gives a string
console.log(myarr);
console.log(newarr2);//gives in string format e.g 1,2,3,4,5,6

//slice and splice

console.log("A" , myarr);
const mynum1 = myarr.slice(0,3)//gives a new array from index 1 to 4
console.log(mynum1);
console.log("B" , myarr);

const mynum2 = myarr.splice(0,3)//removes elements from index 1 to 5 and gives a new array
console.log("C", myarr);
console.log(mynum2);
