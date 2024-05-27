// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Add event listeners to pagination buttons
document.getElementById("button1").addEventListener("click", scrollToTop);
document.getElementById("button2").addEventListener("click", scrollToTop);
document.getElementById("button3").addEventListener("click", scrollToTop);
