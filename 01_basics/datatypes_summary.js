// Two types of datatypes:

// 1. Primitive datatypes
// string, boolean, number, bigint, null, undefined, symbol
const id = Symbol("1234")
const anotherid = Symbol("1234")
console.log(typeof id)
console.log(typeof anotherid)
console.log(id===anotherid)

// 2. Reference datatypes
// array, object, function
const arr = ["apple", "banana", "strawberry"]
const obj ={
    name: "Zuha",
    age: 19,
    isloggedin: true
}
const myfunction = function(){
    console.log("hello world")
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack (primitive), heap (non-primitive)

let myname = "zuha"
let anothername = myname

anothername = "zuha ishtiaq"
console.log(myname)
console.log(anothername)


let user1 = {
    id: 34,
    email: "zuha@gmail.com"
}
let user2 = user1

user2.email = "zuhaishtiaq@gmail.com"

console.log(user1.email);
console.log(user2.email);