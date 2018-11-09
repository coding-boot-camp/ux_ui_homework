$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  // carousel
  $('#carousel-example-generic').on('slid.bs.carousel', function () {
    $(".carousel-item.active:nth-child(" + ($(".carousel-inner .carousel-item").length -1) + ") + .carousel-item").insertBefore($(".carousel-item:first-child"));
    $(".carousel-item.active:last-child").insertBefore($(".carousel-item:first-child"));
}); 