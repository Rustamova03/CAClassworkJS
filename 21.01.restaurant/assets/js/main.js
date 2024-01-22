let BASE_URL = `http://localhost:8080`;
let header = document.querySelector("header");
let cards = document.querySelector(".cards");

async function getData() {
  let res = await axios(`${BASE_URL}/products`);
  console.log(res.data);
  data(res.data);
}
getData();

function data(array) {
  cards.innerHTML = "";
  array.forEach((element) => {
    cards.innerHTML += `
        <div class="card">
        <img src="${element.image}" alt="" />
        <h3>${element.title}</h3>
        <p>
        ${element.description}
        </p>
        <button>Learn More</button>
      </div>
        `;
  });
}

function scrollfunction() {
  if (document.body.scrollTop > 96 || document.documentElement.scrollTop > 96) {
    header.style.background = `white`;
    header.style.color = `black`;
  } else {
    header.style.background = ``;
    header.style.color = ``;
  }
}
window.onscroll = function () {
  scrollfunction();
};
