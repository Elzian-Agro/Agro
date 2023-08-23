// // Fetch and insert the pre-loader
fetch("../components/pre-loader.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("pre-loader-placeholder").innerHTML = data;
  });

// // Fetch and insert the navigation-bar
// fetch("../components/navbar.html")
//   .then((response) => response.text())
//   .then((data) => {
//     document.getElementById("navbar-placeholder").innerHTML = data;

//     var currentPage = window.location.pathname;
//     var navLinks = document.querySelectorAll(".nav-link");

//     for (var i = 0; i < navLinks.length; i++) {
//       var link = navLinks[i];
//       var href = link.getAttribute("href");

//       if (href === currentPage) {
//         link.classList.add("active");
//         link.style.backgroundColor = "#0b8021";
//         link.style.color = "white";
//       }

//       var lastActivePage = localStorage.getItem("lastActivePage");
//       if (lastActivePage && href === lastActivePage) {
//         link.classList.add("active");
//         link.style.backgroundColor = "#0b8021";
//         link.style.color = "white";
//       }

//       link.addEventListener("click", function (e) {
//         navLinks.forEach((navLink) => {
//           navLink.classList.remove("active");
//           navLink.style.backgroundColor = "";
//           navLink.style.color = "";
//         });

//         this.classList.add("active");
//         this.style.backgroundColor = "#0b8021";
//         this.style.color = "white";

//         localStorage.setItem("lastActivePage", this.getAttribute("href"));
//       });
//     }
//   });

// // Fetch and insert the footer
fetch("../components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });


// // common/navbar.js
// document.addEventListener("DOMContentLoaded", function () {
//     const navbarContainer = document.getElementById("navbarContainer");
  
//     // Fetch the navigation bar content from "navbar.html"
//     fetch("../common/navbar.html")
//       .then((response) => response.text())
//       .then((data) => {
//         // Insert the fetched content into the container
//         navbarContainer.innerHTML = data;
//         // Add the "active" class to the current page link
//         setActiveLink();
//       })
//       .catch((error) => console.error("Error fetching navigation bar:", error));
//   });
  
//   function setActiveLink() {
//     const currentPage = window.location.pathname.split("/").pop();
//     const navLinks = document.querySelectorAll("#navbarContainer a");
  
//     navLinks.forEach((link) => {
//       if (link.getAttribute("href").endsWith(currentPage)) {
//         link.classList.add("active");
//       }
//     });
//   }
  



// // common/navbar.js
// document.addEventListener("DOMContentLoaded", function () {
//     const navbarContainer = document.getElementById("navbarContainer");
  
//     // Fetch the navigation bar content from "navbar.html"
//     fetch("../common/navbar.html")
//       .then((response) => response.text())
//       .then((data) => {
//         // Insert the fetched content into the container
//         navbarContainer.innerHTML = data;
//         // Add the "active" class to the current page link
//         setActiveLink();
//         // Add event listener for dropdown menus
//         addDropdownEventListeners();
//       })
//       .catch((error) => console.error("Error fetching navigation bar:", error));
//   });
  
//   function setActiveLink() {
//     const currentPage = window.location.pathname.split("/").pop();
//     const navLinks = document.querySelectorAll("#navbarContainer a");
  
//     navLinks.forEach((link) => {
//       if (link.getAttribute("href").endsWith(currentPage)) {
//         link.classList.add("active");
//         // Also set parent link active if a dropdown menu is active
//         if (link.parentElement.classList.contains("dropdown-content")) {
//           link.parentElement.parentElement.querySelector("a").classList.add("active");
//         }
//       }
//     });
//   }
  
//   function addDropdownEventListeners() {
//     const dropdownLinks = document.querySelectorAll(".dropdown a");
  
//     dropdownLinks.forEach((link) => {
//       link.addEventListener("click", function (event) {
//         event.preventDefault();
//         const dropdownContent = this.nextElementSibling;
//         dropdownContent.classList.add("active");
//       });
//     });
//   }



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
      setActiveLink();
      // Add event listener for dropdown menus
      addDropdownEventListeners();
    })
    .catch((error) => console.error("Error fetching navigation bar:", error));
});

function setActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();
  const currentPageHome = window.location.pathname.split("https://agro.elzian.com").pop();
  const navLinks = document.querySelectorAll("#navbar-placeholder a");

  navLinks.forEach((link) => {
   
    if(link.getAttribute("href").endsWith(currentPageHome)) {
      link.classList.add("active");
     
    }
     else if (link.getAttribute("href").endsWith(currentPage)) {
      link.classList.add("active");
      // Also set parent link active if a dropdown menu is active
      const parentListItem = link.closest("li.dropdown");
      if (parentListItem) {
        parentListItem.querySelector("a").classList.add("active");
      }
    }
  });
}

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


