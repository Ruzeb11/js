// This is singleton object 
const tinderUser=new Object()

// This is simple object

const tindi={}
tindi.id="123ab";
tindi.name="Name";

// console.log(tindi);

const app={
    email:"abc@gmail.com",
    fullname:{
         firstname:"Ruzeb",
         lastname:"Munshi",
         full:this.firstname+this.lastname
    }
}
console.log('-----------------------');

console.log(Object.keys(app))
// console.log(app.fullname.firstname);
// console.log(app.fullname.full);
  

// This is how to join multiple object 

const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}
const obj3={5:'a',6:'b'}

const obj4=Object.assign({},obj1,obj2,obj3,{8:'e'})

//Here you are watching that {} is target area and remaining are source 

console.log(obj4);

// There is also another method which is spread 

const obj5={...obj4}

// From Database the value will come always in array object 

const arr=[
    {
        id:1,
        name:'Ruzeb'
    },
    {
        id:2,
        name:'Raj'
    }
]
console.log(arr);

console.log(arr[0].name);
 
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

// To check the key exist or not you can use the hasOwnProperty

console.log(obj1.hasOwnProperty('1'));

console.log(`-------------Now Starting Destructuring-----------`);

// DESTRUCTURE 
// IF IN OBJECT I HAVE TO ACCESS MULTIPLE KEY THAN USE THIS 
const course={
       coursename:'odoo',
       price:'Free',
       instructor:'Sir'
}

course.coursename;
course.price;

// TO AVOID THIS YOU CAN USE THIS 
const {coursename,price}=course
console.log(coursename,price);

// HERE THE DISTRUCTURE MEANS YOU CAN CHANGE THE KEY 
const {instructor:sir}=course;
console.log(sir);

// API 
 




 

