class Student{
    constructor(sId,sName){
        this.id = sId;
        this.name = sName;
        this.schoolName = "Kolimunnesa high school."
    }
}
const stu1 = new Student(10,"Shuvo");
const stu2 = new Student(33,"Vobo");

console.log(stu1,stu2);