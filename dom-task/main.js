let addBgcolor = document.querySelector(".addBgcolor");

addBgcolor.addEventListener("click", function () {
   addBgcolor.parentElement.style.backgroundColor="green";
   addBgcolor.parentElement.style.width="200px";
   addBgcolor.parentElement.style.height="200px";
   addBgcolor.parentElement.style.position="relative";
   addBgcolor.style.position="absolute";
   addBgcolor.style.right="20px";
   addBgcolor.style.bottom="20px";
  });

let cities=document.querySelector(".cities");
let ul=document.createElement("ul");
 const liArr=["Ganja","Baku","Yevlakh","Goranboy","Shamkir"];
 liArr.forEach(item => {
    let liElem = document.createElement("li");
    liElem.innerText=item;
    ul.append(liElem);
  
 });
  cities.append(ul)

 let allLiELements = document.querySelectorAll("li");
 allLiELements.forEach((item) => {
   item.addEventListener("click", function () {
     this.remove();
   });
 });


let btn=document.querySelector(".light");
btn.addEventListener("click", function (){
    document.body.classList.toggle("dark")
})