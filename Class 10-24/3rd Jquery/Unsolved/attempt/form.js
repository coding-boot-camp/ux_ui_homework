
// YOUR CODE HERE
// Event listener for form submission
$("#sendEmail").click(function() {


  // Save the first name as a variable
  var firstName = $("#firstName").val();
  // var lastName = $("#lastName").val();
  // var eMail = $("eMail").val();
  // var message = $("message").val ();


  // Set HTML of .modal-body
  $(".modal-body").html("thank you, " + firstName + " . Your message has been sent!");


  // $('#sentMessage').trigger('focus')

  // Clear   all fields in form
$(".form-control").val("");



});
