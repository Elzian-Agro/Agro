// Selecting DOM elements
const startBtn = document.querySelector("#startBtn"),
  endBtn = document.querySelector("#endBtn"),
  prevNext = document.querySelectorAll(".prevNext"),
  numbers = document.querySelectorAll(".pagination-link");

// Setting an initial step
let currentStep = 0;

// Function to update the button states
const updateBtn = () => {
  // If we are at the last step
  if (currentStep === 4) {
    endBtn.disabled = true;
    prevNext[1].disabled = true;
  } else if (currentStep === 0) {
    // If we are at the first step
    startBtn.disabled = true;
    prevNext[0].disabled = true;
  } else {
    endBtn.disabled = false;
    prevNext[1].disabled = false;
    startBtn.disabled = false;
    prevNext[0].disabled = false;
  }
};

// Add event listeners to the number links
numbers.forEach((number, numIndex) => {
  number.addEventListener("click", (e) => {
    e.preventDefault();
    // Set the current step to the clicked number link
    currentStep = numIndex;
    // Remove the "active" class from the previously active number link
    document.querySelector(".active").classList.remove("active");
    // Add the "active" class to the clicked number link
    number.classList.add("active");
    updateBtn(); // Update the button states
  });
});

// Add event listeners to the "Previous" and "Next" buttons
prevNext.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Increment or decrement the current step based on the button clicked
    currentStep += e.target.id === "next" ? 1 : -1;
    numbers.forEach((number, numIndex) => {
      // Toggle the "active" class on the number links based on the current step
      number.classList.toggle("active", numIndex === currentStep);
      updateBtn(); // Update the button states
    });
  });
});

// Add event listener to the "Start" button
startBtn.addEventListener("click", () => {
  // Remove the "active" class from the previously active number link
  document.querySelector(".active").classList.remove("active");
  // Add the "active" class to the first number link
  numbers[0].classList.add("active");
  currentStep = 0;
  updateBtn(); // Update the button states
  endBtn.disabled = false;
  prevNext[1].disabled = false;
});

// Add event listener to the "End" button
endBtn.addEventListener("click", () => {
  // Remove the "active" class from the previously active number link
  document.querySelector(".active").classList.remove("active");
  // Add the "active" class to the last number link
  numbers[4].classList.add("active");
  currentStep = 4;
  updateBtn(); // Update the button states
  startBtn.disabled = false;
  prevNext[0].disabled = false;
});
