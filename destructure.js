const person = {name:'Abbas Uddin',age:33,address:'jalalabad',fName:'Alim Uddin',job:'facebooker',phone:'01712879808'};
console.log(person.fName);
console.log(person.fName);
console.log(person.fName);
console.log(person.fName);
//...........................................................

const person1 = {name:'Abbas Uddin',age:33,address:'jalalabad',fName:'Alim Uddin',job:'facebooker',phone:'01712879808',friends:['lamim','jamim','tamim','fahim']};
const fatherName = person1.fName;
const add = person1.address;
const phNumber = person1.phone;
console.log(fatherName,add);
console.log(fatherName,add);
console.log(fatherName,add,phNumber);
console.log(fatherName,add,phNumber);
//...........................................................

const person2 = {name:'Abbas Uddin',age:33,address:'jalalabad',fName:'Alim Uddin',job:'facebooker',phone:'01712879808',friends:['lamim','jamim','tamim','fahim']};
const {name,address,phone,age} = person2;
console.log(name,address,phone,age);
console.log(name,address,phone,age);
//...........................................................

const person3 = {name1:'Abbas Uddin',age1:33,address1:'jalalabad',fName1:'Alim Uddin',job1:'facebooker',phone1:'01712879808',friends1:['lamim','jamim','tamim','fahim']};
const {name1,salary,address1,phone1,age1} = person3;
console.log(salary,name1,address1,phone1,age1); //there is no salary in person3 so it showed undefined.
//...........................................................

const friends = ['Aamir Khan','Shahrukh khan','Arman Khan','Shakib Khan','Salman khan','Munayem Khan','Arbaz Khan'];
const [first,second,older] = friends;
const[friend,friend1,friend2,...friend3] = friends;
console.log(first,second,older);
console.log(friend3);
//.............................................................

const complexObject = {
    name:'Abdulla',
    info:{
        add:'jalalabad',
        leader:'betal bose'
    }
}
const{leader} = complexObject.info;
console.log(leader);
//........................................

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

const {price}= product; 
console.log(price);