// array

const myArr=[0,1,2,3]

console.log(typeof(myArr));

// YOu can declare the array like this also

const myArr2=new Array(1,2,3,4,5,6);

// Accessing by index number

console.log(myArr[0]);

// How to add the value s in array
myArr.push(6)
console.log(myArr);
 
// Remove the last value from array
myArr.pop()
console.log(myArr);

// How to add At first 
myArr.unshift(9,5);
myArr.pop()
console.log(myArr);

// Here the unshift is ADDING THE VALUE AT FIRST AND THE SHIFT IS REMOVING THE VALUE AT FIRST 
// BUT WHEN YOU INSERT SO MANY USING UNSHIFT AND USE THE SHIFT THEN IT REMOVE ONE TIME ONLY MEANS
// YOU ENTER 1,2 THAN YOU HAVE TO USE THE SHIFT TWO TIMES

myArr.shift();
myArr.shift();
console.log(myArr);

// iF WANT TO CHECK THE VALUE IS IN ARRAY OR NOT 

console.log(myArr.includes(100));

// Its always in Boolean True False so if you want to Use further if array ==false than you can use this

// To check the index of means where it is than 

console.log(myArr.indexOf(100));

// HOW TO CONVERT ARRAY INTO STRING
const newArr2=myArr.join()
console.log(newArr2);
console.log(typeof(newArr2));

// SLICE AND SPLICE
// IN SLICE IT REMOVE THE THIRD ELEMENT MEANS IT DOESNOT COUNT THE LAST ONE 

const newArr3=new Array(1,2,3,4,5,6,7,8,9,10);
const modifyArr=newArr3.slice(1,5);
console.log(modifyArr);

// SPLICE :- IN SPLICE IT REMOVE THE ELEMENT WHAT YOU TAKE THE INPUT FROM ORIGINAL
console.log(`splice`);
const mmodifyArr=newArr3.splice(1,5);
console.log(mmodifyArr);
console.log(newArr3);

// ARRAY PART 2
console.log(`FROM NOW THESE THE ARRAY IS PART 2`);

// In these array consider another object 

const teamA=['Ruzeb','Raiyan','Moin','Anis'];
const teamB=['Arkan','Zishan','usaid','Ayaz','Amaan'];

// teamA.push(teamB);
// console.log(teamA);

// It is hard to access the Amaan
// console.log(teamA[4][4]);

// If you have to join two arrays than use concat or spread

// const teamC=teamA.concat(teamB);
// console.log(teamC)

const teamD=[...teamA,...teamB];
console.log(teamD);


// If you Got an array inside array than you can use flat infinity
const confusingArray=[1,2,3,4,[45,65,[88,[99]]]];
console.log(confusingArray.flat(Infinity));

//  TO check the data come is array ot not use this isarray

console.log(Array.isArray('Ruzeb'));

// TO CONVERT INTO ARRAY USE THE FROM 

console.log(Array.from('Ruzeb'))

// IMPORTANT WHEN YOU TRY TO CONVERT THE OBJECT INTO ARRAY IT RETURN EMPTY ARRAY

console.log(Array.from({name:`ruzeb`}));

// TO CONVERT THE MULTIPLE VARIABLE INTO SINGLE ARRAY USE THIS .OF

let score1=300;
let score2=400;
let score4=500;
console.log(Array.of(score1,score2,score4));










