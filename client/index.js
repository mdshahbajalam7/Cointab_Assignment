var input = { name1: "abc1", name2: "abc2" };
output = { NAME1: "abc1", NAME2: "abc2" };
let newObj = {};
for (key in input) {
  let a = key.toUpperCase();
  newObj[a] = input[key];
}
//  console.log(a);/

console.log(newObj);

// let newObj={}
// for(key in input){
//     let a = key.toUpperCase()
//     newObj[a]=input[key]
// }
// console.log(newObj);