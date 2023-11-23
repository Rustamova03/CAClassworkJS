let Todo = document.querySelector(".todo");
let addBtn = document.querySelector(".add");
let ul = document.querySelector(".ul");

Todo.style.padding = "5px 60px";
Todo.style.border = "2px solid blue";
Todo.style.borderRadius = "3px";
addBtn.style.padding = "5px 10px";
addBtn.style.backgroundColor = "blue";
addBtn.style.color = "white";
addBtn.style.borderRadius = "3px";




addBtn.addEventListener("click", function () {
  if (Todo.value !== "") {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let deleteBtn = document.createElement("button");

    span.innerText = Todo.value;
    deleteBtn.innerText = "Delete";

    li.append(span, deleteBtn);
    ul.append(li);
    Todo.value = "";

    deleteBtn.addEventListener("click", function () {
      console.log(this);
      this.parentElement.remove();
    });
  }
});
