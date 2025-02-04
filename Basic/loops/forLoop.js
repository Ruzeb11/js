// For loop 

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
} 

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop ${i}`);
    
    for (let j = 0; j < array.length; j++) {
        console.log(`inner Loop ${j}`);

    }
}

let marray = ["array","function","object"]

for (let index = 0; index < marray.length; index++) {
    const element = marray[index];
    console.log(element);
}

// Break And continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log('detected');
        break
    }
    console.log(`Value of index is ${index}`);
 
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log('detected');
        continue
    }
    console.log(`Value of index is ${index}`);
 
}

const coding = ["js","ruby","python"]

coding.forEach( function (val){
    console.log(val);
})

coding.forEach(element => {
    console.log(element);
});

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
})

const mycoding = [
    {
        languageName : "javascript",
        languageFileName : "ruby"
    },
    {
        languageName : "JAVA",
        languageFileName : "c"
    },
    {
        languageName : "C#",
        languageFileName : "python"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageFileName);
    
})


// MAPS

const myNum = [1,2,3,4,5,6,7,8,9]

const newNum = myNum.map( (nums) => nums+10 )

console.log(newNum);

// FILTER

const NewFilter = myNum.filter((filt) => filt > 5 )

console.log(NewFilter);

// Chaining In ONE LINE MULTIPLE METHOD ARE THERE .map().filter()

const newNum1 = myNum
                    .map( (nums) => nums+10 )
                    .filter( (nums) => nums >10 )

console.log(newNum1);

// reduce

const Numss=[1,2,3,4]

// const myTotal =  


// function adds(a,b){
//     console.log(this);
// }
// adds(3,4)
const add = (hell) => ( console.log(this))
add();