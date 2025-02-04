// Iteration

const i=[0,1,2,3,4,5,6]

for (let i = 0; i <= 10; i++) {
    const element = i 
    if (element == 5 ) {
        console.log("5 is best number");
    }
    console.log(element);
}
// console.log(array.length);

for (let i = 0; i <= 10; i++) { 
    console.log(`This is outside loop ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`This is inside loop ${j},This is outside loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
}

