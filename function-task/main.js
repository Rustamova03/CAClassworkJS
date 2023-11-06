// 1.
// function printFullName(lastname="ipsum",firstname="lorem") {
//     return `I am  ${firstname} ${lastname} `;
// }
// console.log(printFullName("Briliant","Rustamova"));

// 2.

// function sum(num1 = 0, num2 = 0) {
//   let sum = num1 + num2;
//   return sum;
// }
// function multiply(num1 = 0, num2 = 0) {
//   let mult = num1 * num2;
//   return mult;
// }
// function substruct(num1 = 0, num2 = 0) {
//   let subs = num1 - num2;
//   return subs;
// }
// function divide(num1 = 0, num2 = 0) {
//   let divide = num1 / num2;
//   return divide;
// }

// console.log(sum(2, 3));
// console.log(multiply(2, 3));
// console.log(substruct(2, 3));
// console.log(divide(2, 3));

// 3.
function calculate(num1, num2, operator) {
  let result = 0;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else {
    result = "Bele bir operator movcud deyil";
  }
  return result;
}

// console.log(calculate(2, 3, "*"));
// console.log(calculate(2, 3, "+"));
// console.log(calculate(2, 3, "-"));
// console.log(calculate(2, 3, "/"));
// console.log(calculate(2, 3, "&"));

// 4.
// const employees=[
//     { name:"Jamil",salary:"50000",department:"IT"   },
//     { name:"jale",salary:"60000",department:"HR"   },
//     { name:"Bayram",salary:"55000",department:"IT"   },
//     { name:"Sahil",salary:"75000",department:"HR"   },
//     { name:"Maryam",salary:"65000",department:"IT"   },
//     { name:"Elnara",salary:"80000",department:"HR"   },
//     { name:"Davud",salary:"70000",department:"IT"   },
// ]

// function filterEmployees(array) {
//     let emp=[];
//     for(let i=0;i<array.length;i++){
//         if(array[i].salary>60000){
//             emp.push(array[i])
//         }
//     }
//   return emp;
// }
// console.log(filterEmployees(employees));

// 5.

function reverseString(word) {
  let str = "";
  for (let i = word.length - 1; i >= 0; i--) {
    str += word[i];
  }
  return str;
}

console.log(reverseString("hello"));

// 6.

let strrrrrr = `Lorem Ipsum has been the industry's standard dummy a galley of type and scrambled it to make a type specimen book.`;
function lorem(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] === " " && count++;
  }
  return count;
}
console.log(lorem(strrrrrr));
console.log(lorem("ihbnui  huigdxpofgkg   lfdsncfg  cf09rk  9se0"));
console.log(lorem("ihbnuihuigdxpofgklfd    s09rk9se0zsp[df,,zsd-"));
