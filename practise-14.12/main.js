const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";
let search = document.querySelector("input");
let form = document.querySelector("form");
let cardtop = document.querySelector(".cardtop");
let div = document.createElement("div");

async function getData(word) {
  const res = await axios(`${BASE_URL}/${word}`);
  console.log(res.data);
  div.innerHTML = `  <div> <p>${res.data[0].word}</p>
<i class="fa-solid fa-volume-high"></i></div>
<div>
    <h4>Definitions:<span>${res.data[0].meanings[0].partOfSpeech}</span></h4>
    <p>${res.data[0].meanings[0].definitions[0].definitions}</p>
</div>`;
  cardtop.after(div);
}
getData();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  getData(search.value);
});

