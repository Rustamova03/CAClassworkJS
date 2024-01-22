let BASE_URL = `http://localhost:8080`;
let tBody = document.querySelector("tbody");
let form = document.querySelector("form");
let allInput = document.querySelectorAll("input");
let searchBtn = document.querySelector(".search");
let ascBtn = document.querySelector(".ascBtn");
let dataArray = [];
let products = null;
let arrayProducts = null;
async function getData() {
  let response = await axios(`${BASE_URL}/products`);
  console.log(response.data);
  products = response.data;
  arrayProducts = structuredClone(products);
  drawTable(response.data);
  dataArray = response.data;
}
getData();

async function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    tBody.innerHTML += `
    <tr>
    <td><img src="${element.image}" alt="" /></td>
    <td>${element.title}</td>
    <td>
    ${element.description}
    </td>
    <td><button class="deleteBtn" onclick=deleteBtn("${element.id}",this)>Delete</button></td>
  </tr>
    `;
  });
}

async function deleteBtn(id, btn) {
  if (confirm("Are you delete?")) {
    await axios.delete(`${BASE_URL}/products/${id}`);
    btn.closest("tr").remove();
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    image: `./assets/image/${allInput[0].value.split("\\")[2]}`,
    title: allInput[1].value,
    description: allInput[2].value,
  };
  axios.post(`${BASE_URL}/products`, obj);
});

searchBtn.addEventListener("input", function (e) {
  let filtered = dataArray.filter((item) =>
    item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  drawTable(filtered);
});

ascBtn.addEventListener("click", function () {
  let sorted;
  if (this.innerText === "Ascending") {
    sorted = products.sort((a, b) => a.title.localeCompare(b.title));
    this.innerText = "Descending";
  } else if (this.innerText === "Descending") {
    sorted = products.sort((a, b) => b.title.localeCompare(a.title));
    this.innerText = "Default";
  } else {
    this.innerText = "Ascending";
    sorted = arrayProducts;
  }
  drawTable(sorted);
});
