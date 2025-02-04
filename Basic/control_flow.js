// IF ELSE 
// IF(){}
// ELSE{}
// OPERATORS
// 1- //,< ,> ,<= ,>= ,== ,!= ,=== ITS USED FOR CHECKING THE DATATYPE ARE SAME BOTH OR NOT,!==


const temprature = 49

if(temprature < 50){
    console.log(`It is lower `);
}else{
    console.log(`it is greater`);
}


//THIS EXAMPLE IS BASED ON SCOPE THAT WHEN YOU DECLARE THE VARIABLE INSIDE THE SCOPER YOU CANT USE OUTSIDE 

const score = 20

if( score < 20 ){
    let power = 'fly'
    console.log(`Your power is ${power}`)
}

// IN IF ELSE IMPLICIT ALSO THERE LIKE WITHOUT OPENING THIS BRACKET {}YOU CAN ALS0 USE DIRECT CONSOLE.LOG
const balance = 1000

if (balance < 1000) console.log('Low amount');

// IF YOU WANT TO WRITE MULTIPLE LINE YOU CAN REMOVE THE COLON AND USE THE COMA

console.log(`----------now elseif---------------`)

// else-if

if (balance < 500){
    console.log('Very Low balance please top-up Your account!!!!')
}else if(balance < 750){
    console.log('Low balance please top-up Your account!!!!')
}else if(balance < 999){
    console.log('please top-up Your account!!!!')
}else{
    console.log(`Balance is ${balance}`)
}

// NOW USER LOGGED IN 
// && THIS IS AND MEANS ALL CONDITION MUST BE TRUE
// || THIS IS OR MEANS ANY IF TRUE THAN 

function james(){
    return temprature
}