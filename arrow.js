function doubleIt(num){
    return num * 2;
}
const result = doubleIt(6);
console.log(result);
//.....................................
const doubleIt1 = function (num) {
    return num * 2;
}
const result1 = doubleIt1(5);
console.log(result1);
//......................................
const doubleIt2 = num => num * 2;
const result2 = doubleIt2(10);
console.log(result2);
//.........................................
const add = (num1,num2) => num1 + num2;
const resultAdd = add(10,20);
console.log(resultAdd);
//.........................................
const give5 = () => 5;
const resultGive = give5();
console.log(resultGive);
//........................................
const doMath = (num1,num2)=>{
    const sum = num1 + num2;
    const diff = num1 - num2;
    const result = sum * diff;
    return result;
}
const resultMath = doMath(20,30);
console.log(resultMath);






