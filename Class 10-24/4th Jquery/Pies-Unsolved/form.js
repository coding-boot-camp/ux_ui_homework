// YOUR CODE HERE
// 1. Event listener
$("#submitOrder").click(function () {
  // 2. Retrieve input values
  var numApple = $("#apple").val()
  var numPecan = $("#pecan").val()
  var numKeyLime = $("#keyLime").val()

  // 3. For each variable: Check if blank,
  // if blank set to 0,
  // else parse as integer
  if (numApple == "") {
    numApple = 0;
  }  
  else {
    numApple = parseInt(numApple);
  }
  if (numPecan == "") {
    numPecan = 0;
  }
  else {
    numPecan = parseInt(numPecan);
  }
  if (numKeyLime == "") {
    numKeyLime = 0;
  }
  else {
    numKeyLime = parseInt(numKeyLime);
  }


  // 4. Add all variables together
  var totalPies = numApple + numPecan + numKeyLime;

  // 5. Alter modal content
  $(".modal-body").html("Please confirm you order for " + totalPies + " pies");
});