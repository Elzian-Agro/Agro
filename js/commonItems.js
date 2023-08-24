document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById("navbarContainer");
  
    // Fetch the navigation bar content from "navbar.html"
    fetch("../components/navbar.html")
      .then((response) => response.text())
      .then((data) => {
        // Insert the fetched content into the container
        navbarContainer.innerHTML = data;
        // Add the "active" class to the current page link
        setActiveLink();
       
      })
      .catch((error) => console.error("Error fetching navigation bar:", error));
  });
  
  function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("#navbar-placeholder a");
  
    navLinks.forEach((link) => {
      link.classList.remove("active"); // Remove active class from all links
    });
  
    const homeLink = document.querySelector('a[href="../index.html"]');
    homeLink.classList.add("active"); // Add active class to the Home page link
  
    // set parent link active if a dropdown menu is active
    const parentListItem = homeLink.closest("li.dropdown");
    if (parentListItem) {
      parentListItem.querySelector("a").classList.add("active");
    }
  }
