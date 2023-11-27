let userData =JSON.parse(localStorage.getItem("personObj"));

renderTable(userData);

function renderTable(userData){

    let table =document.querySelector("table")
    let tbody=document.querySelector("tbody")

    userData.forEach((data) => {
        let tr =document.createElement("tr")
        tr.innerHTML='
        <td>${data.id}</td>
        '
    });
}