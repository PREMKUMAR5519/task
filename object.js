let obj1 = {name:"prem", age: 21};
let obj2 = { age: 21,name:"ram"};
var a = Object.keys(obj1).sort();
var b = Object.keys(obj2).sort();
const c = JSON.stringify(a);
const d = JSON.stringify(b);
if (c===d) {
    console.log('objects are same');
 } else {
    console.log('objects are not-same');
 }
