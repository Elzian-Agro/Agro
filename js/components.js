// Load external HTML components into placeholders
$("#pre-loader-placeholder").load("../components/pre-loader.html");
$("#footer-placeholder").load("../components/footer.html");
$("#navbar-placeholder").load("../components/navbar.html");

// common/navbar.js

// Listen for the DOMContentLoaded event to ensure the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Check if the current page has a non-empty path
  if (window.location.pathname.split("/").pop() != "") {
    // Set the active link in the navigation bar
    setActiveLink();
    // Add event listeners for dropdown menus
    addDropdownEventListeners();
  } else {
    // Set the Home page as the active link when on the homepage
    setHomeActiveLink();
  }
});

// Add click event listeners for dropdown menus
function addDropdownEventListeners() {
  const dropdownLinks = document.querySelectorAll(".dropdown > a");

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      // Toggle the visibility of the dropdown content
      const dropdownContent = this.nextElementSibling;
      dropdownContent.classList.toggle("active");
    });
  });
}

// Set the active link in the navigation bar based on the current page
function setActiveLink() {
  // Get the name of the current page from the URL
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("#navbar-placeholder a");

  navLinks.forEach((link) => {
    // Check if the link's href attribute ends with the current page's name
    if (link.getAttribute("href").endsWith(currentPage)) {
      // Add the "active" class to the link
      link.classList.add("active");
      
      // If a dropdown menu is active, also set its parent link as active
      const parentListItem = link.closest("li.dropdown");
      if (parentListItem) {
        parentListItem.querySelector("a").classList.add("active");
      }
    }
  });
}

// Set the Home page as the active link when on the homepage
function setHomeActiveLink() {
  // Find the Home page link by its href attribute
  const homeLink = document.querySelector('a[href="../index.html"]');
  // Add the "active" class to the Home page link
  homeLink.classList.add("active");
}
