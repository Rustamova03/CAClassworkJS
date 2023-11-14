// -------------------------------------------- TASK 1 --------------------------------------------

// const text = "Java is awesome. Java is fun.";

// text dəyişəndə Java sözünün əvəzinə Javascript yazdırın
// ====>> JavaScript is awesome. Java is fun.

// let  newText = text.replace("Java", "Javascript");

// console.log(newText);

// -------------------------------------------- TASK 2 --------------------------------------------

// mixUp adlı function yaradın. function 2 parametr qəbul edir. Ən sonda aşağıdakı kimi
// nəticə çıxardın.

// function mixUp(a, b) {
//     let result=b.slice(0,2)+a.slice(2) + " " +a.slice(0,2)+b.slice(2);
//     return result
// }

// console.log(mixUp("donce", "gevlet")); //'gence dovlet'
// console.log(mixUp("val", "pur")); //'pul var'
// -------------------------------------------- TASK 3 --------------------------------------------

// verbing adlı function yaradın. Bu function bir parametr(feil) qəbul edir. Bu feil əgər 3 hərfdən
// kiçikdirsə sözün özün return edin. Əgər sonu "ing" ilə bitirsə sonuna "ly" əlavə edin. Digər
// hallarda sözün sonuna "ing" əlaavə edin.





// function verbing(word) {
//   if (word.length < 3) {
//     return word
//   } else if (word.endsWith('ing')) {
//     return word +'ly'
//   }else {
//     return word +'ing'
//   }
// }
// console.log(verbing('go')); // go
// console.log(verbing('swiming')); //swimingly
// console.log(verbing('swim')); //swiming

// -------------------------------------------- TASK 4 --------------------------------------------

// Sözün palindrom olub olmadığını yoxlayın.

// function isPalindrome(string) {
 
// if(string==string.split('').reverse().join('') ){
// console.log("is polindrom");
// }else{
//     console.log("is not polindrom");
// }
// }

// isPalindrome("radar");

// -------------------------------------------- TASK 5 --------------------------------------------

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const length = 4;

function splitIntoChunk(arr, len) {
return arr.slice(0,4)+arr.slice(4,9)
}

console.log(splitIntoChunk(array, length)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]



// -------------------------------------------- TASK 6 --------------------------------------------

// console.log(longestWord("Hello word hi programmers"));

// Ən uzun sözü tapın.  ======>> programmers

// -------------------------------------------- TASK 7 --------------------------------------------

// function getFileExtension(filename){

// }

// getFileExtension adlı function yaradın. Verilmiş fayl adının uzantısını göstərən kod yazın.

// console.log(getFileExtension('module.js')) //js
// console.log(getFileExtension('module.txt')) //txt
