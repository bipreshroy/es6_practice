const ages = [29,22,12,38];
const ages1 = [9,33,4,7,14];
const ages2 = [29,44,84,71,49];
const allAges = ages.concat(ages1);
console.log(allAges);
//.....................................
const allAges1 = ages.concat(ages1).concat([6]).concat(ages2);
console.log(allAges1);
//...........................................................
const allAges2 = [...ages,...ages1,504,...ages2];
console.log(allAges2);
//...................................................
const takaPoisa = [29,76,43,56,32];
const maximumTaka = Math.max(...takaPoisa);
console.log("max taka is: ",maximumTaka);