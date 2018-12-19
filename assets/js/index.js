$('.filters ul li').click(function(){
  $('.filters ul li').removeClass('active');
  $(this).addClass('active');
  
  var data = $(this).attr('data-filter');
  $grid.isotope({
    filter: data
  })
});

var $grid = $('.grid').imagesLoaded( function() {
  // init Isotope when grid's images have loaded
  $grid.isotope({
    itemSelector: ".all",
  filter: ".all",
  percentPosition: true,
  masonry: {
    columnWidth: ".all"
  }
  });
});