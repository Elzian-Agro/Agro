$(".slider-testimonials").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
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

$(".custom-arrows .slick-prev").click(function () {
  $(".slider-testimonials").slick("slickPrev");
});

$(".custom-arrows .slick-next").click(function () {
  $(".slider-testimonials").slick("slickNext");
});
