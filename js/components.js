
$("#pre-loader-placeholder").load("../components/pre-loader.html");
$("#footer-placeholder").load("../components/footer.html");
$("#navbar-placeholder").load("../components/navbar.html");

// common/navbar.js
document.addEventListener("DOMContentLoaded", function () {
      if ((window.location.pathname.split("/").pop()) != "") {
        setActiveLink();
        addDropdownEventListeners();
      } else {
        setHomeActiveLink();
      }
});

function addDropdownEventListeners() {
  const dropdownLinks = document.querySelectorAll(".dropdown > a");

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const dropdownContent = this.nextElementSibling;
      dropdownContent.classList.toggle("active");
    });
  });
}

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
