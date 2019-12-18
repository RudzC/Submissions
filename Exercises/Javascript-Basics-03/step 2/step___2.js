function myFunc() {
  document.querySelector("#hide").addEventListener("click", () => {
    document.querySelector("p").style.display = "none";
  });
  document.querySelector("#show").addEventListener("click", () => {
    document.querySelector("p").style.display = "inherit";
  });
}

myFunc();
