function myFunc() {
  var number1 = document.getElementById("age").value;
  if (number1 < 18) {
    alert("you are under 18");
  } else if (number1 == 18) {
    alert("you are 18!");
  } else alert("you are over 18");
}
