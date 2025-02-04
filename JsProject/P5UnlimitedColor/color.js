
const randomColor = function (){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[(Math.floor (Math.random()*16))];
    }
    return color
}; 



let internal ; 

const startchanging = function(){
    
    internal = setInterval( function(){
    document.body.style.backgroundColor = randomColor();
    },1000);
};
const stopchanging = function(){
    clearInterval(internal)
};




document.getElementById('start').addEventListener('click',startchanging)
document.getElementById('stop').addEventListener('click',stopchanging)

// const body = document.body('body')

// body.style.backgroundColor ="black"
// let internalID ;

// start.addEventListener('click',function (){
//     internal = setInterval(() => {

//     }, 1000);
// })

// stop.addEventListener('click',function(){
//     clearInterval(internal)
// })