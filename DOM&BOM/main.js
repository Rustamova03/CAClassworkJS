// TASK1

// let count = 0;
// let countInterval = setInterval(() => {
//   console.log(++count);

//   if (count === 4) {
//     clearInterval(countInterval);
//   }
// }, 1000);

// let count = 0;
// let countInterval = setInterval(() => {
//   console.log(++count);
// }, 1000);

// setTimeout(() => {
//   clearInterval(countInterval);
// }, 4000);

// TASK2
// let login = document.querySelector(".log-in");
// let text = document.querySelector(".text");
// console.log(login);

// login.addEventListener("click", function() {
//   text.style.fontSize="54px";
//   text.style.color="red";
//   text.innerText="Lorem,Ipsum"
// })

// TASK3
//  let texts=document.querySelectorAll(".texts")
//  console.log(texts);
//  texts.forEach(element => {
//     console.log(element.innerText);
//  });

// TASK4
// let str="developer";
// let i=1;
// let int=setInterval(() => {
//     if(i<=str.length){
//         str=str.slice(0,i).toLocaleUpperCase()+str.slice(i);
//         i++
//         console.log(str);
//     }
//     else{
//         clearInterval(setInterval)
//     }
// },1000);

// TASK5

let click = document.querySelector(".change");
console.log(click);
let colors = ["blue", "red", "green", "yellow", "dodgerblue", "black"];
click.addEventListener("click", function () {
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});
