// Fetch and insert the pre-loader
fetch('../components/pre-loader.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('pre-loader-placeholder').innerHTML = data;
  });

// Fetch and insert the navigation bar
fetch('../components/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
  });

// Fetch and insert the footer
fetch('../components/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });