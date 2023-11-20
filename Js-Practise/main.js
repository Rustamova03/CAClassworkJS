// 1. arrayın içindəki müsbət ədədləri tapın
// let arr = [2, 4, -3, 43, 41, -3];

// function findPositives(arr) {
//     let findArr = arr.filter(num => num > -1);
//     return findArr;
// }
// console.log(findPositives(arr));

// 2. üçbucağın tərəfləri verilib, düzbucaqlı üçbucaq olub olmamasını tapın
// function isRectangle(a, b, c) {
//     if (a+b > c && b+c > a && c+a > b){
// 	if ((a**2 + b**2 == c**2) || (b**2 + c**2 == a**2) || (c**2 + a**2 == b**2)){
//        return `yes`
//     }

// 	else{
// 		return`No`
//     }
//     }
// }
// console.log(isRectangle(3, 4, 5)); //yes
// console.log(isRectangle(3, 6, 5)); //no
// console.log(isRectangle(4, 5, 3)); //yes

// 3. arrayın içindəki bütün hərfləri böyük olan elementin indexini tapın
// let webTechs = ["html", "CSS", "js", "REACT", "Redux", "Node", "MongDB"];

// console.log(webTechs.findIndex(item=>item===item.toLocaleUpperCase()));

// 4. arrayın içindəki bütün hərfləri böyük olan elementləri başqa bir array şəklində return edin
// let webTechs2 = ["HTML", "CSS", "JS", "REACT", "Redux", "Node", "MongDB"];
// let filtered=webTechs2.filter(item =>item ===item.toLocaleUpperCase())
// console.log(filtered);

// 5. Reverse the Case
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.

// function reverseCase(str) {
//     if(str ===str.toLowerCase()){
//         return str.toUpperCase();
//     }else if ((str) ===str.toUpperCase()){
//         return str.toLowerCase()
//     }
//     }

// console.log(reverseCase("MANY THANKS")); //"many thanks"
// console.log(reverseCase("many thanks")); //"MANY THANKS"

// const users = [
//   {
//     name: "Anar",
//     surname: "Hesenli",
//     age: "22",
//     uni: "ADA",
//     gender: "male",
//     salary: "3001",
//   },
//   {
//     name: "Nicat",
//     surname: "Sadiqov",
//     age: "25",
//     uni: "GDU",
//     gender: "male",
//     salary: "200",
//   },
//   {
//     name: "Nezrin",
//     surname: "Reshidova",
//     age: "23",
//     uni: "UNEC",
//     gender: "female",
//     salary: "300",
//   },
//   {
//     name: "Hikmet",
//     surname: "Hesenov",
//     age: "22",
//     uni: "UNEC",
//     gender: "male",
//     salary: "320",
//   },
//   {
//     name: "Murad",
//     surname: "Salmanli",
//     age: "23",
//     uni: "GDU",
//     gender: "male",
//     salary: "420",
//   },
//   {
//     name: "Aynure",
//     surname: "Hesenzade",
//     age: "23",
//     uni: "BMU",
//     gender: "female",
//     salary: "3210",
//   },
// ];

// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.
// console.log(
//   users.filter(
//     (item) =>
//       item.uni.toLocaleLowerCase() === "unec" &&
//       item.surname[0].toLocaleLowerCase() === "r"
//   )
// );
// 2.2.Show users whose age is eqaul to 22 and name start 'a'.
// console.log(
//   users.filter(
//     (item) => item.age === "22" && item.name[0].toLocaleLowerCase() === "a"
//   )
// );
// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
// console.log(
//   users.map((item) => {
//     if (item.gender === "male") {
//       return { ...item, name: `Mr ${item.name}` };
//     } else {
//       return { ...item, name: `Mrs ${item.name}` };
//     }
//   })
// );
// 2.4.Sort users by age (ascending).
// console.log(users.sort((a,b)=>a.age-b.age));



