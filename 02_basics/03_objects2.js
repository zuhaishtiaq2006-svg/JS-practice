//singleton

//object literals
const mysym = Symbol("mykey1")
const user = {
    name: "Zuha",
    "fullname" : "Zuha Ishtiaq",
    [mysym] : "mykey1",
    age: 19,
    location: "Sahiwal",
    isLoggedIn: true,
    lastloggedindays: ["Monday", "Sunday"]
}

console.log(user.name)
console.log(user.lastloggedindays)
console.log(user["fullname"])
console.log(user[mysym])

user.location = "Lahore"
// Object.freeze(user) 
user.location = "Okara"
console.log(user);


//functions
user.greeting = function(){
    console.log("Hello Zuha");
}
user.greetingtwo = function(){
    console.log(`Hello user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingtwo());