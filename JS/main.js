$(".modal").on('hide.bs.modal', function(){
    $('iframe').attr('src', $('iframe').attr('src'));
      
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('invisible', $(this).scrollTop() > $nav.height());
    });
  });
 
 
  $('.movie-slider').slick({
    infinite: true,
    speed:1200,
    dots:true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite:false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite:true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true,
          arrows:false,
          dots:true
        }
      }
    ]});
  
      