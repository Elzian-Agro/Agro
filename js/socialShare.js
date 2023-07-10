 // Share the current browser URL on Facebook
 document.getElementById("facebook").addEventListener("click", function() {
    var currentUrl = window.location.href;
    var facebookUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(currentUrl);
    window.open(facebookUrl, "_blank");
});

// Share the current browser URL on LinkedIn
document.getElementById("linkedin").addEventListener("click", function() {
    var currentUrl = window.location.href;
    var linkedinUrl = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(currentUrl);
    window.open(linkedinUrl, "_blank");
});

// Share the current browser URL on whatsapp
document.getElementById("whatsapp").addEventListener("click", function() {
    var currentUrl = window.location.href;
    var linkedinUrl = "https://wa.me/?url=" + encodeURIComponent(currentUrl);
    window.open(linkedinUrl, "_blank");
});

// Share the current browser URL on twitter
document.getElementById("twitter").addEventListener("click", function() {
    var currentUrl = window.location.href;
    // var linkedinUrl = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(currentUrl);
    var linkedinUrl = "https://twitter.com/sharing/share-offsite/?url=" + encodeURIComponent(currentUrl);
    window.open(linkedinUrl, "_blank");
});