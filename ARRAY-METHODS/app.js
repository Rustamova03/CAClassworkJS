1.

// TASK 1  -------------------------------------------------
// const number = [1, 2, 3, 4, 5, 6, 7, 8];

// Tək ədədləri filter methodu vasitəsilə yeni bir dəyişkənə mənimsət:
// ====>   [1, 3, 5, 7]
// let nums = number.filter((item, i) => item%2===1);

// console.log(nums);


// ----------- part II

// const array = [-3, -2, -1, 0,1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// // 1 və 10 aralığındakı rəqəmləri consol-a çıxart
// // ====>   [1,2,3,4,5,6,7,8,9,10]
// let numbers = array.filter((elem, i) => elem>0 && elem<11);

// console.log(numbers);



// -------------------------------------------------  TASK 2  -------------------------------------------------

const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan'
  },
  {
    first_name: 'Tim',
    last_name: 'Lee'
  },
  {
    first_name: 'John',
    last_name: 'Carte'
  }
];

// Verilmiş array-də objectlərin first_name və last_name dəyişkənin aşağıdaki kimi göstərin.

// =====> ["Mike Sheridan", "Tim Lee", "John Carte"]

// let user = users.map((  name ,i) => {
//   return `${name.first_name} ${name.last_name}`
//   });
  
//   console.log(user);
  

// -------------------------------------------------  TASK 3  -------------------------------------------------

// const persons = [
//     { name: "Akif", age: 25 },
//     { name: "Aysu", age: 32 },
//     { name: "Ali", age: 35 }
// ];

// find metodu vasitəsilə array-in içindəki, yaşı 30-dan yuxarı olan ilk şəxsi "firstPerson" adlı dəyişkənə
// mənimsədib console-a çıxardın. ====> { name: 'Aysu', age: 32 }
// let firstPerson = persons.find((item, i) => { console.log(i); return item.age>30 });

// console.log(firstPerson);


// ------------------------------ part II

// tapdığınız objectin index-ni də ikinci bir console-da çıxardın.(metod ilə)


// -------------------------------------------------  TASK 4  -------------------------------------------------

// const array1 = [1, 4, 9, 16];

// Verilmiş array-in hər bir elementini qüvvətə yüksəldin.   ======> [ 1, 16, 81, 256 ]

// let newNums = array1.map((item) => {
//     return item ** 2;
//   });
  
//   console.log(newNums);

// -------------------------------------------------  TASK 5  -------------------------------------------------

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// Verilmiş animals array-ni slice metodu vasitəsilə aşağıdaki kimi yazmağa çalışın.

// Gözlənilən çıxış: ["camel", "duck", "elephant"]
console.log(animals.slice(2));

// 
// // Gözlənilən çıxış: ["camel", "duck"]
console.log(animals.slice(2,4));

// 
// // Gözlənilən çıxış: ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(1));


// // Gözlənilən çıxış: ["duck", "elephant"]
console.log(animals.slice(3));

// 
// // Gözlənilən çıxış: ["camel", "duck"]
console.log(animals.slice(2,4));

// 
// // Gözlənilən çıxış: ["ant", "bison", "camel", "duck", "elephant"]
console.log(animals.slice(0));



// -------------------------------------------------  TASK 6  -------------------------------------------------

const months = ['Jan', 'March', 'April', 'June'];
// 
// // Expected output: ["Jan", "Feb", "March", "April", "June"]
months.splice(1, 0, 'Feb');
console.log(months);

// >>>>>>>>

//
// // Gözlənilən çıxış: ["Jan", "Feb", "March", "April", "May"]
months.splice(4, 1, 'May');
console.log(months);
// -------------------------------------------------  TASK 7  -------------------------------------------------

// // const company = [
// //   { firstName: "John", lastName: "Doe", salary: 50000, yearsWorked: 5 },
// //   { firstName: "Alice", lastName: "Johnson", salary: 60000, yearsWorked: 8 },
// //   { firstName: "Bob", lastName: "Smith", salary: 75000, yearsWorked: 3 },
// //   { firstName: "Eve", lastName: "Williams", salary: 55000, yearsWorked: 7 },
// // ];


// console-a belə çıxsın  =========>
// [
//   'John Doe illik 50000$ maaş alır və 5 ildir çalışır',
//   'Alice Johnson illik 60000$ maaş alır və 8 ildir çalışır',
//   'Bob Smith illik 75000$ maaş alır və 3 ildir çalışır',
//   'Eve Williams illik 55000$ maaş alır və 7 ildir çalışır'
// ]