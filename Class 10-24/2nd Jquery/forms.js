// event listner on button

$("#submit").click(function() {

// Save name as a variable
var name = $("#name").val();
//  Set HTML of the paragraph element
$("#buttonPusherInfo").html(name + " was here");

//  Input value to the name
$("name").val("");


});