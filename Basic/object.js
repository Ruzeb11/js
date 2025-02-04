// singleton
// 
Object.create
const tinderuser= new Object()

// object literals
const mySym=Symbol("key1")


const jsuser={
     name:'Ruzeb',
     [mySym]:"mykey1",
     "full":"Ruzeb Munshi ",
     age:'20',
     "city":"ahmedabad",
     country:'India'
     
}

console.log(jsuser.name);
// console.log(jsuser['city']);
console.log(jsuser.city);
console.log(jsuser.full);
console.log(jsuser[mySym]);
console.log(mySym);


// TO acccess the object you can use dot 
console.log(jsuser.full);

// To change the object you can use
jsuser.name="Raj";

console.log(jsuser.name);

// To freeze the object no can update the object 

// Object.freeze(jsuser)

jsuser.name="Maj";

console.log(jsuser)

// Object Na andar function 
jsuser.greeting=function(){
    console.log(`hello are you there`);
}

console.log(jsuser.greeting);
