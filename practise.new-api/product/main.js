const BASE_URL = "  https://dog.ceo/api/breeds/image/random";
let image = document.querySelector(".header");
let img = document.createElement("img");

image.append(img);

setInterval(() => {
  fetch(`${BASE_URL}`)
    .then((response) => response.json())
    .then((data) => {
      img.src = data?.message;
    });
},2000);
