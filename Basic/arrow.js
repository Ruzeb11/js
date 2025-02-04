// THIS KEYWORD 
// THIS REFER THE CURRENT CONTEXT 
// THERE  RETURN THE EMPTY OBJECT {}
// ASYNC RETURN PROMISE LIKE IT WAIT TO PASS THE PROMISE 
// HANDLING APIS CALLBACK

const user={
    username:'RUZEB',
    price:999,

    welcomeMessage: function(){
        console.log(
            `${this.username}, welcome to Amazon`
        );
        console.log("This is the inside of context",this)
    }
}
user.welcomeMessage();
user.username="Raj"
user.welcomeMessage();
console.log("This is the outside of context",this)

// ARROW FUNCTION
function one(){
    let username='Hitesh'
    console.log(this.username);
}

one()

// ARROW FUNCTION IS JUST REMOVE THE FUNCTION NAME AND AFTER THE PARANTHESIS USE THE ARROW KEYWORD

console.log('=============This is arrow===========')

const chai= function (){
    let username='Ruzeb'
    console.log(this);
}

chai()

const chai2 =  () => {
    let username='Ruzeb'
    console.log(this);
}
 
chai2()
// EXPLICIT IS JUST LIKE USE RETURN KEYWORD
// IMPLICIT RETURN IN ARROW FUNCTION ITS SYNTAX IS 
// () =>{} OR ()=>

const addtwo=(add1,add2)=>{
    return add1+add2
}
console.log(
 addtwo(2,4,5,66));

// In IMPLICIT YOU DONT HAVE TO WRITE THE RETURN AND IN SAME LINE
const addthree=(add1,add2,add3) => add1+add2+add3;

console.log(addthree(5,6,7));

// If YOU WRITE THE {} THAN RETURN MUST BUT WHEN YOU USE THE () IT IS NOT COMPULSORY 
// ALWAYS RETURN IN PARENTHESIS if you want to return object than use the ()

const addfour=(add1) => (add1);
console.log(addfour(1));
 
const arrow = () =>{
    let username = "ruzeb"
    console.log(this)
}
arrow()

const normals = function () {
    let username = "ruzeb"
    console.log(this)
}
normals()