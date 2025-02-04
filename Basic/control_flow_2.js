// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month = 3

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('february');
        break;
    case 3:
        console.log('March')
        break;

    default:
        console.log('No exist')
        break;
}
// IF IN IT IS IN STRING THAN WRITE AT CASE "" LIKE THIS 

console.log('Truthly');
// Truthly value
// "0",'false',"",[],{},function(){}

console.log('falsy');
// Falsy values 
// false , 0 ,-0 , BigInt 0n, "",null,undefined,NaN

const arr=[]
if (arr.length == 0) {
    console.log('Its an empty array');
}else{
    console.log('Full array');
}

const objj={}
if (Object.keys(objj).length == 0) {
    console.log('Its an empty object');
}else{
    console.log('Full object');
}

console.log('NULL COALESCING OPERATOR(??):NULL UNDEFINED');

let var2;
var2 = null ?? 10;   // null will be replaced by 10
console.log(var2);    // Output: 10

let var3 = undefined;
var3 = var3 ?? 20;    // undefined will be replaced by 20
console.log(var3);    // Output: 20

console.log('------------Terniary Operator---------')

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 200 ? console.log('Overpriced'): console.log('Good price')