// I. 1-100 araliginda sadece cut ededleri cap edin

// for  ( let index=0 ; index<100 ;index++){
//     if (index % 2 === 0) {
//      console.log(`${index}`);
//    }
// }

// // II. Oz adinizi herflerine parcalayin
// let country ="Azerbaijan"
// let countryLength = country.length;
// for ( i=0; i<countryLength; i++){
//     console.log(country[i])
// }

// III. Son reqemi 7 olan butun  iki reqemli ededleri capa veren proqram tertib edin.
// for  ( let index=10 ; index<100 ;index++){
//     if (index % 10 ===7 ) {
//      console.log(`${index}`);
//    }
// }

// IV. Reqemleri eyni olan butun iki reqemleri ededleri capa veren program tertib edin

// for  ( let index=10 ; index<100 ;index++){
//     if (index % 11 ===0 ) {
//      console.log(`${index}`);
//    }
// }
// V. Verilmis ededin butun bolenlerini tapan program tertib edin.
// let a =50;
// for (let index=0; index<=a; index ++){
//     if (a%index ===0) console.log(index);
// }

// VI. Print the Numbers from 0 to 15

for (let i = 0; i < 15; i++) {
  console.log(i);
}

//   task5 fizzbuzz
for (var i = 1; i <= 45; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  }
}

// Calculating the Factorial of the Number Entered by the User

const n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i;
}
console.log(`${factorial}`);
