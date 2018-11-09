// YOUR CODE HERE
// Event listener for form submission
$("#sendEmail").click(function () {


  // Save the first name as a variable
  var firstName = $("#firstName").val();



  // Set HTML of .modal-body
  $("#modal-body").html(firstName);



  // Clear all fields in form
$(".form-control").val("");

});
