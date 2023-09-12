document
.getElementById("shareButton")
.addEventListener("click", function () {
  document.getElementById("modalOverlay").style.display = "block";
});

document
.getElementById("closeButton")
.addEventListener("click", function () {
  document.getElementById("modalOverlay").style.display = "none";
});