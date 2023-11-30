let toogle = document.querySelector(".toogle");

toogle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  
  
  
  if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", true);
    } else {
        localStorage.setItem("dark-mode", false);
    }
});
let isDark = localStorage.getItem("dark-mode") === "true";
  if(isDark) {
    document.body.classList="dark-mode"
  }