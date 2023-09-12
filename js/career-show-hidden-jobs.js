// Hide the initially hidden job cards on page load
const hiddenJobsContainer = document.getElementById("hidden-jobs");
hiddenJobsContainer.style.display = "none";

function toggleHiddenJobs() {
const hiddenJobsContainer = document.getElementById("hidden-jobs");
const viewMoreButton = document.querySelector(".job-moreBtn");

if (hiddenJobsContainer.style.display === "none") {
hiddenJobsContainer.style.display = "block";
viewMoreButton.textContent = "View Less Jobs";
} else {
hiddenJobsContainer.style.display = "none";
viewMoreButton.textContent = "View More Jobs";
}
}