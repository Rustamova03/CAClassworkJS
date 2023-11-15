let person = {
  firstName: "Briliant",
  lastName: "Rustamova",
  age: 21,
  university: "GSU",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
};

person["phone number"] = 055651467;
person["city"] = "Ganja";
// console.log(person);

// 1
// console.log(Object.keys(person));
// 2
let val = Object.values(person);
// console.log(val);
// 3
// console.log(Object.entries(person));
// 4
let maxStr = "";
for (let i = 0; i < val.length; i++) {
  if (val[i].length > maxStr.length) {
    maxStr = val[i];
  }
}
// console.log(maxStr);
// 5
delete person.age;
// console.log(person);

// TASK2
let library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    readingStatus: true,
  },
  {
    title: "Walter Jacson",
    author: "Steve Jobs",
    readingStatus: true,
  },
  {
    title: "Suzanne Collins",
    author: "Mockingjay:The Final Book",
    readingStatus: false,
  },
];
// 1

library.forEach((item) => {
  if (item.readingStatus === true) {
    console.log(`Already read ${item.title} by ${item.author}`);
  }else{
    console.log(`You still need to read ${item.title} by ${item.author}`);
  }
});
