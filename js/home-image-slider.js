var slideImg1 = document.getElementById("slideImg1");

var images = new Array(
  "images/home-baner-slide1_40.jpg",
  "images/home-baner-slide2_40.jpg",
  "images/home-baner-slide3_40.jpg",
  "images/home-baner-slide4n.jpg"
);

var len = images.length;
var i = 0;

function slider() {
  if (i > len - 1) {
    i = 0;
  }
  slideImg1.src = images[i];
  i++;
  setTimeout("slider()", 3000);
}