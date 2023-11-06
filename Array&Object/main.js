// 1.bos array yaradin
// let arr = new Array();
// console.log(arr);
// 2.
let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
// 3.
console.log(itCompanies.length);
// 4.

console.log("itCompanies", itCompanies);
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
// 5.
console.log(itCompanies[0]); 
console.log(itCompanies[parseInt(itCompanies.length/2)]);
console.log(itCompanies[itCompanies.length - 1]);
// 6.
let array= [];

for (let i = 0; i < itCompanies.length; i++) {
    array.push(itCompanies[i].toLocaleUpperCase());
}
console.log(array);

// 7.
// let company="";

// for(let i=0; i<itCompanies.length;i++){
//     company += " " + itCompanies[i];
// }

console.log(itCompanies.toString());

// 8.
for (let i = 0; i < itCompanies.length; i++) {
   if(itCompanies[i] ===itCompanies[i].toLocaleUpperCase()){
    console.log(itCompanies[i]);}
}


    

