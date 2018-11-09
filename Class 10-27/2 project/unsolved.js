$(document).ready(function(){
  $("button").click(function(){
      $("div").animate({
        width: 'toggle'
    });
  });
});
$(document).ready(function(){
  $('h1').click(function(){
    $("#h1").fadeIn();
    $("#h1").fadeIn("slow");
    $("#h1").fadeIn(3000);
  });
});

$(document).ready(function(){
  $('p').click(function(){
      $(this).hide();
  });
});

// CODE HERE
