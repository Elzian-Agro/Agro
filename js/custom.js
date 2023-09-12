jQuery(document).ready(function ($) {
  $(window).on("load", function () {
    $(".preloader").fadeOut(200);
  }),
    $(document).ready(function () {
      $(window).scroll(function () {
        $(this).scrollTop() > 200
          ? $(".go-top").fadeIn(200)
          : $(".go-top").fadeOut(200);
      }),
        $(".go-top").click(function (o) {
          o.preventDefault(), $("html, body").animate({ scrollTop: 0 }, 300);
        }),
        new WOW({ mobile: !1 }).init();
    });
});
