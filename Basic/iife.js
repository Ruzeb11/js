// IMMEDIATELY CALLED THE FUNCTION WHEN YOU WRITE IT IMMEDIATELY EXECUTE
// ITS SYNTAX IS ()()

(function chai(){
    console.log('Db Connected succesfully');
}()
);
// This is same but in async function

( ()=>{
    console.log('This is db connected but in this its with async');
}
)();

//Async but with argument 

( (name) => {
    console.log(`This is db connected but access by ,${name}`);
}
)("Ruzeb")