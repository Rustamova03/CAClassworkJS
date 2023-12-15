const BASE_URL = `https://restcountries.com/v2`;
let cards = document.querySelector(".cards");
let search = document.querySelector("#search");
let select = document.querySelector("select");
let button = document.querySelector("button");
let body = document.querySelector("body");
let goBack=document.querySelector(".back")

async function getData(endPoint) {
  let res = await axios(`${BASE_URL}/${endPoint}`);
  console.log(res.data);
  getAllData(res.data);
}
getData("all");

/* */

async function getAllData(countriesArr) {
  cards.innerHTML = ``;
  countriesArr.forEach((element) => {
    cards.innerHTML += `
        <div class="card">
        <img src="${element.flags.svg}" alt="" />
        <h3>${element.name}</h3>
        <p>${element.population}</p>
        <p>${element.region}</p>
        <p>${element.capital}</p>
      </div>
 
 
        `;
  });
}

search.addEventListener("input", function (e) {
  if (e.target.value) {
    getData(`name/${e.target.value}`);
  } else {
    getData("all");
  }
});

select.addEventListener("change", function (e) {
  if (e.target.value != "all" || e.target.value != "") {
    getData(`region/${e.target.value}`);
  } else {
    getData(`${e.target.value}`);
  }
});

localStorage.getItem("dark-mode") === "true" && body.classList.add("dark-mode");

button.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  localStorage.getItem("dark-mode") === "true"
    ? localStorage.setItem("dark-mode", false)
    : localStorage.setItem("dark-mode", true);
});

goBack.addEventListener("click",function(){
    window.history.back()
})