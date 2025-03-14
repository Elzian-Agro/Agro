let speech = null;
let isSpeaking = false;
let index = 0;
let spans = [];

// Function to toggle speech synthesis (Play/Pause)
function toggleReadAloud() {
  if (isSpeaking) {
    window.speechSynthesis.pause();
    document.getElementById("toggleButton").innerText = "▶ Resume";
    isSpeaking = false;
  } else {
    if (speech && window.speechSynthesis.speaking) {
      window.speechSynthesis.resume();
    } else {
      startReading();
    }
    document.getElementById("toggleButton").innerText = "⏸ Pause";
    isSpeaking = true;
    document.getElementById("stopButton").style.display = "inline-block";
  }
}

// Function to start reading aloud
function startReading() {
  const paragraphs = Array.from(document.getElementsByClassName("readable-text"));

  const textArray = paragraphs.map((p) => p.innerText.trim());
  const fullText = textArray.join(" ");

  // Convert words into spans for highlighting
  paragraphs.forEach((p) => {
    const words = p.innerText.split(" ");
    p.innerHTML = words.map((word) => `<span>${word} </span>`).join(" ");
  });

  spans = paragraphs.flatMap((p) => Array.from(p.getElementsByTagName("span")));
  index = 0;

  speech = new SpeechSynthesisUtterance(fullText);
  speech.lang = "en-US";
  speech.rate = 0.75;

  speech.onboundary = (event) => {
    let charIndex = event.charIndex;
    let currentText = fullText.substring(0, charIndex).split(" ");
    let wordPosition = currentText.length - 1;

    if (wordPosition < spans.length) {
      // Remove previous highlight
      spans.forEach((span) => (span.style.backgroundColor = "transparent"));

      // Highlight current word
      spans[wordPosition].style.backgroundColor = "#ffff00";
      spans[wordPosition].style.borderRadius = "3px";
      spans[wordPosition].style.padding = "2px 0px 2px 0px";
    }
  };

  speech.onend = () => {
    spans.forEach((span) => (span.style.backgroundColor = "transparent"));
    document.getElementById("toggleButton").innerText = "🔊 Listen";
    document.getElementById("stopButton").style.display = "none";
    isSpeaking = false;
  };

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
  isSpeaking = true;
  document.getElementById("stopButton").style.display = "inline-block";
}

// Function to stop speech synthesis
function stopAloud() {
  window.speechSynthesis.cancel();
  document.getElementById("toggleButton").innerText = "🔊 Listen";
  document.getElementById("stopButton").style.display = "none";
  isSpeaking = false;
  spans.forEach((span) => (span.style.backgroundColor = "transparent"));
}

// Stop speech when leaving page
window.addEventListener("beforeunload", () => {
  window.speechSynthesis.cancel();
});
