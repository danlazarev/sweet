$('.slider-text').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-img'
  });

  $('.slider-img').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-text'
  });
  $('.slider-text').on('afterChange', function(event, slick, currentSlide, nextSlide){
    console.log(currentSlide);
  });
      