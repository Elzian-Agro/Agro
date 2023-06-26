
function toggle() {
    var blur = document.querySelector(".blur-btn");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
  }

  document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy-link-input");
    const copyButton = copyLinkParent.querySelector(".copy-link-button");
    const text = inputField.value;
  
    inputField.addEventListener("focus", () => inputField.select());
  
    copyButton.addEventListener("click", () => {
      inputField.select();
      navigator.clipboard.writeText(text);
  
      inputField.value = "Copied!";
      setTimeout(() => (inputField.value = text), 2000);
    });
  });
  