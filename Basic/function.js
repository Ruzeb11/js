function sayMyName(){
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
}

sayMyName()
sayMyName()
sayMyName()
sayMyName()
sayMyName()

function loginUserMessage(username = "sam"){
    if(username==undefined){
        console.log("Please enter string");
        return
    }
    return `${username} just logged in`
}

const a = loginUserMessage();
console.log(a);