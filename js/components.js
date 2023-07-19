// Fetch and insert the pre-loader
fetch("../components/pre-loader.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("pre-loader-placeholder").innerHTML = data;
  });

// Fetch and insert the navigation-bar
fetch("../components/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    var currentPage = window.location.pathname;
    var navLinks = document.querySelectorAll(".nav-link");

    for (var i = 0; i < navLinks.length; i++) {
      var link = navLinks[i];
      var href = link.getAttribute("href");

      if (href === currentPage) {
        link.classList.add("active");
        link.style.backgroundColor = "#0b8021";
        link.style.color = "white";
      }

      var lastActivePage = localStorage.getItem("lastActivePage");
      if (lastActivePage && href === lastActivePage) {
        link.classList.add("active");
        link.style.backgroundColor = "#0b8021";
        link.style.color = "white";
      }

      link.addEventListener("click", function (e) {
        navLinks.forEach((navLink) => {
          navLink.classList.remove("active");
          navLink.style.backgroundColor = "";
          navLink.style.color = "";
        });

        this.classList.add("active");
        this.style.backgroundColor = "#0b8021";
        this.style.color = "white";

        localStorage.setItem("lastActivePage", this.getAttribute("href"));
      });
    }
  });

// Fetch and insert the footer
fetch("../components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });
