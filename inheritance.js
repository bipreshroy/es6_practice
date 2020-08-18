class Child{
    constructor (childName){
        this.name = childName;
    }
}
const cName = new Child("Kabir");
const cName1 = new Child("Chobir");
console.log(cName,cName1);
//.............................................
class Parent{
    constructor(){
        this.fathername = "Jubayer";
    }
}
class Baby extends Parent{
    constructor (childName){
        super();
        this.child_name = childName;
    }
}
const baby1 = new Baby("Akbor");
const baby2 = new Baby("Bakkor");
console.log(baby1,baby2);
//........................................
class Parent1{
    constructor(){
        this.fathername = "Jubayer Hussain";
    }
}
class Baby1 extends Parent1{
    constructor (childName){
        super();
        this.child_name = childName;
    }
    getFullName(){
        return this.child_name + " " + this.fathername;
    }
}
const babyName1 = new Baby1("Akbor");
const babyName2 = new Baby1("Bakkor");
console.log(babyName1.getFullName());
console.log(babyName2.getFullName());