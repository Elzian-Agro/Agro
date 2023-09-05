jQuery.noConflict();
(function($) {
  $(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
})(jQuery);
