const buttons = document.querySelectorAll('.button');
const body =document.querySelector("body");

buttons.forEach(function (buttons){
    console.log(buttons);
    buttons.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target)        
        console.log(e.target.id);
        console.log(buttons)
        if(e.target.id =='grey'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id =='black'){
            body.style.backgroundColor="yellow"
        }
        if(e.target.id =='skyblue'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id =='purple'){
            body.style.backgroundColor=e.target.id
        }
    })
})
