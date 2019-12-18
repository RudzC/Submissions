let button = document.querySelector("button");
button.addEventListener("click", () => {
  let confirmation = document.getElementById("confirmation");
  let password = document.getElementById("password");
  if (password.value != confirmation.value) {
    confirmation.style.border = "1px solid red";
    password.style.border = "1px solid red";
  }
});
