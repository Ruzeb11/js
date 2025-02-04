//  {} This is scope
// from inside you cant access outside but but from outside you can access inside

let a = 30
if(true){
    let a = 55
    console.log(`Inside is ${a}`);
}
console.log(a);

// closure
// In this small can take from big but big cant take from small 

function one(){
    const username="ruzeb"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

// Example
console.log(add(1))

function add(num){
    return num + 1;
}



const addTwo = function(num){
    return num + 2
}
console.log(addTwo(66))