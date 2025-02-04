function CalculateCartPrice(...num1){
    return num1
}
console.log(CalculateCartPrice(200,500,600,700))
// ... means not know how much value is coming

function CalculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(CalculateCartPrice(200,500,600,700))
// here the first 2 will take two argument and remaining the num 1 will take

const user={
    name:'ruzeb',
    age:20
}
function objfunction(anyobject){
       console.log(`${anyobject.name} and the age is ${anyobject.age}`);
}
// objfunction(user)

// In function you can pass the object also 
objfunction(
    {
        name:'raj',
        age:21
    }
)

// In function same you can pass the array also

objfunction(
    ['jay',22]
)

