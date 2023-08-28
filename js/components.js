// Fetch and insert the pre-loader
fetch("../components/pre-loader.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("pre-loader-placeholder").innerHTML = data;
  });


// Fetch and insert the footer
fetch("../components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });


// common/navbar.js
document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-placeholder");

  // Fetch the navigation bar content from "navbar.html"
  fetch("../components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      // Insert the fetched content into the container
      navbarContainer.innerHTML = data;
      // Add the "active" class to the current page link
      

      if (currentPage = window.location.pathname.split("/").pop()){
        setActiveLink();
      }else{
        setHomeActiveLink()
      }
    })
    .catch((error) => console.error("Error fetching navigation bar:", error));
});



function setActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("#navbar-placeholder a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href").endsWith(currentPage)) {
      link.classList.add("active");
      // set parent link active if a dropdown menu is active
      const parentListItem = link.closest("li.dropdown");
      if (parentListItem) {
        parentListItem.querySelector("a").classList.add("active");
      }
    }
  });
}

function setHomeActiveLink() {
   
  // Add active class to the Home page link
  const homeLink = document.querySelector('a[href="../index.html"]');
  homeLink.classList.add("active"); 

}