function myFunc() {
  var fname = document.getElementById("name").value;
  var lname = document.getElementById("surname").value;
  var cityN = document.getElementById("city").value;

  alert(
    "your first name: " +
      fname +
      "\n" +
      "last name: " +
      lname +
      "\n" +
      "lives in:" +
      cityN
  );
}
