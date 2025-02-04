// for Of loop

const arr = [1,2,3,4,5,6]

for (const val of arr) {
    console.log(val);
}

const greeting = "Hello World"

for (const greet of greeting) {
    if(greet == " "){
        continue
    }
    console.log(greet);
    
}

// Maps

const map = new Map()
map.set("IN","India")
map.set("US","USA")
map.set("FR","France")

for (const [key,value] of map) {
    console.log(key,value)
}

// Object is not iterable
const myObj = {
    game1 : "thor",
    game2 : "Spider"
}

// for (const [key,value] of object) {
//     // console.log(key,value);   
// }
for (const key in myObj) {
    console.log(`${key}  is ${myObj[key]}`);
}

// WHEN YOU USE THE FORIN METHOD IN ARRAY IT RETURN THE INDEX NUMBER

const myarr=["hello","how","are","you"]

for (const key in myarr) {
    console.log(myarr[key]);
    
}

