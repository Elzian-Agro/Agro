document.addEventListener("DOMContentLoaded", function () {
  // Get all buttons and sections
  var buttons = document.querySelectorAll("button");
  var sections = document.querySelectorAll(".section-news");

  // Show section1 on page load
  var section1 = document.getElementById("section1");
  section1.classList.add("active");

  // Add click event listener to each button
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Check if the clicked button is button1 (section1)
      if (this.id === "button1") {
        // If button1 is clicked, do not disable section1
        section1.classList.add("active");
      } else {
        // Remove active class from section1 to disable it
        section1.classList.remove("active");
      }

      // Remove active class from all sections and buttons
      sections.forEach(function (section) {
        section.classList.remove("active");
      });
      buttons.forEach(function (button) {
        button.classList.remove("active");
      });

      // Add active class to the clicked section and button
      var sectionId = this.id.replace("button", "section");
      var section = document.getElementById(sectionId);
      section.classList.add("active");
      this.classList.add("active");

      // Add color to buttons based on active section
      buttons.forEach(function (button) {
        var sectionId = button.id.replace("button", "section");
        var section = document.getElementById(sectionId);
        if (section.classList.contains("active")) {
          button.style.backgroundColor = "#009207"; // Set the desired color
        } else {
          button.style.backgroundColor = ""; // Remove any previously set color
        }
      });
    });
  });
});

// Fetch JSON data for multiple sections (assuming they have unique IDs)
function fetchAndRenderNews(sectionId, itemsToFetch) {
  fetch("newsData.json")
    .then((response) => response.json())
    .then((data) => {
      const cardsContainer = document.getElementById(sectionId);

      // Iterate over the JSON data
      data.forEach((item) => {
        // Check if the item's ID is in the itemsToFetch array
        if (itemsToFetch.includes(item.id)) {
          // Create a card element
          const card = document.createElement("news-container");
          card.classList.add("news-container");

          const img = document.createElement("img");
          img.src = `${item}`;

          // Set card content using item properties
          card.innerHTML = `
              <div class="news-container d-flex">
                <div class="news-content-container text-center">
                  <div class="news-content">
                    <div class="news-image-container">
                      <div class="news-image-box">
                        <img src="${item.image}" alt="">
                      </div>
                    </div>
                    <div class="news-box-body">
                      <div class="news-top-container d-flex justify-content-between">
                        <div class="news-site">
                          <p>${item.news_site}</p>
                        </div>
                        <div class="news-date">
                          <p>${item.date}</p>
                        </div>
                      </div>
                      <div class="news-title text-center">
                        <h3>${item.title}</h3>
                      </div>
                      <div class="news-desc" style="padding: 10px;">
                        <p>${item.description}</p>
                      </div>
                      ${
                        item.link
                          ? `
                        <div class="news-buttons d-flex justify-content-center align-items-center gap-3">
                          <div class="news-btn">
                           <a href="${item.link}" target="_blank" style="${
                              item.link === "#" ? "pointer-events: none;" : ""
                            }">
                            Read More <i class="fa fa-arrow-right"></i>
                          </a>
                          </div>
                          <div class="news-download-btn">
                            <a href="${item.download_link}" target="_blank" style="${
                              !item.download_link ? "pointer-events: none;" : ""
                            }"><i class="fa fa-download"></i></a>
                          </div>
                        </div>`
                          : ""
                      }
                    </div>
                  </div>
                  <div class="news-extra-buttons">
                      ${
                        item.extra_link
                          ? item.extra_link
                              .map((link) => {
                                return `
                              <div class="news-extra-btn">
                                <a href="${link.link}" target="_blank">
                                  ${link.name} <i class="fa fa-arrow-right"></i>
                                </a>
                                <div class="news-extra-download-btn">
                                  <a href="${link.download_link}" target="_blank"><i class="fa fa-download"></i></a>
                                </div>
                              </div>`;
                              })
                              .join("")
                          : ""
                      }
                    </div>
                </div>
              </div><br><br><br>
            `;

          // Add the card to the container
          cardsContainer.appendChild(card);
        }
      });
    });
}

// Fetch and render news for section 2
fetchAndRenderNews("blog-item-1", [-1, 42, 41, 40, 39, 38, 37, 36, 35, 34]);

// Fetch and render news for section 2
fetchAndRenderNews("blog-item-2", [33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23]);

// Fetch and render news for section 3
fetchAndRenderNews("blog-item-3", [22, 21, 20, 19, 18, 17, 16, 15, 14]);

// Fetch and render news for section 4
fetchAndRenderNews("blog-item-4", [13, 12, 11, 10, 9, 8, 7, 6, 5, 4]);

// Fetch and render news for section 5
fetchAndRenderNews("blog-item-5", [3, 2, 1, 0]);
