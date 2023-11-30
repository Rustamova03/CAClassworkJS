let Form = document.querySelector("form");
let Title = document.querySelector(".title");
let Login = document.querySelector(".login");
let Signup = document.querySelector(".signup");
let Address = document.querySelector(".address");
let Password = document.querySelector(".password");
let LoginBtn = document.querySelector(".loginBtn");

Form.style.backgroundColor = "white";
Form.style.padding = "30px";
Login.style.padding = "5px 28px";
Login.style.borderRadius = "5px ";
Login.style.backgroundColor = "blue ";
Login.style.color = "white ";
Signup.style.padding = "5px 28px";
Signup.style.borderRadius = "5px ";
Address.style.padding = "5px 15px";
Address.style.borderRadius = "5px ";
Password.style.padding = "5px 15px";
Password.style.borderRadius = "5px ";
LoginBtn.style.padding = "5px 85px";
LoginBtn.style.borderRadius = "5px ";
LoginBtn.style.backgroundColor = "blue ";
LoginBtn.style.color = "white";

Form.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    email: Address.value,
    Password: Password.value,
  };
  console.log(obj);
});
