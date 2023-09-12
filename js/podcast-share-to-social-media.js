 // Copy the current browser URL when the "Copy" button is clicked
 document.getElementById("share").addEventListener("click", function () {
    var currentUrl = window.location.href;
    var tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = currentUrl;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    displayPopupMessage("Link copied");
    setTimeout(function () {
      document.getElementById("popup").style.display = "none";
    }, 2000); // Hide the popup after 2 seconds
  });

  // Share the current browser URL on Facebook
  document
    .getElementById("facebook")
    .addEventListener("click", function () {
      var currentUrl = window.location.href;
      var facebookUrl =
        "https://www.facebook.com/sharer/sharer.php?u=" +
        encodeURIComponent(currentUrl);
      window.open(facebookUrl, "_blank");
    });

  // Share the current browser URL on LinkedIn
  document
    .getElementById("linkedin")
    .addEventListener("click", function () {
      var currentUrl = window.location.href;
      var linkedinUrl =
        "https://www.linkedin.com/sharing/share-offsite/?url=" +
        encodeURIComponent(currentUrl);
      window.open(linkedinUrl, "_blank");
    });

  // Function to display the popup message
  function displayPopupMessage(message) {
    var popup = document.getElementById("popup");
    popup.innerHTML = message;
    popup.style.display = "block";
    setTimeout(function () {
      popup.style.display = "none";
    }, 2000); // Display the message for 2 seconds
  }