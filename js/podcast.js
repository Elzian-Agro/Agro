const tagButtons = document.querySelectorAll('#tagContainer button');
const blogContainer = document.getElementById('blogContainer');
const latestPodcastContainer = document.getElementById('latestPodcastContainer');
let data = [];

fetch('../podcast/podcast_list/podcast.json') /*Get Data from json file */
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    displayPodcastCards(data);
    displayLatestPodcast(data);
  })
  .catch(error => console.error(error));

  /*Filter podcast by tags */
  tagButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedTag = event.target.getAttribute('data-tag');
      const filteredData = (selectedTag === 'all') ? data : data.filter(podcast => podcast.tags.some(tag => tag === selectedTag));
      displayPodcastCards(filteredData);
    });
  });
  
function displayPodcastCards(data) {
  blogContainer.innerHTML = '';

  data.forEach(podcast => {
    const podcastCard = createPodcastCard(podcast);
    blogContainer.appendChild(podcastCard);
  });
}

/*Display latest podcast according to the recent date */
function displayLatestPodcast(data) {
  const latestPodcast = data[data.length - 1];
  const latestPodcastCard = createPodcastCard(latestPodcast);
  latestPodcastContainer.appendChild(latestPodcastCard);
}

function createPodcastCard(podcast) {
  // Create Card
  const card = document.createElement('div');
  card.className = 'blog-card card';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  // Podcast Date
  const authorDate = document.createElement('div');
  authorDate.className = 'author-date';

  // Author
  const author = document.createElement('span');
  author.className = 'author';
  author.textContent = podcast.author;
  author.style.fontSize = '12px';

  // Date
  const date = document.createElement('span');
  date.className = 'date';
  date.textContent = podcast.date;
  date.style.fontSize = '12px';

  // Thumbnail
  const thumbnail = document.createElement('img');
  thumbnail.src = podcast.thumbnail;
  thumbnail.className = 'thumbnail';
  thumbnail.alt = 'Podcast Thumbnail';

  // Title
  const title = document.createElement('h4');
  title.className = 'pod-title';
  title.textContent = podcast.title;

  // Content
  const content = document.createElement('p');
  content.className = 'pod-text';
  content.textContent = podcast.content;

  // Audio file
  const audio = document.createElement('audio');
  audio.src = podcast.audio;
  audio.controls = true;

  // Tags
  const tags = document.createElement('h4');
  tags.textContent = podcast.tags;

  // Audio Timeline
  const audioTimeline = document.createElement('h4');
  audioTimeline.textContent = podcast.audioTimeline;

  const readMore = document.createElement('a');
  readMore.className = 'btn btn-dark';
  readMore.style.borderRadius = '20px';
  readMore.href = 'podcast.html?podcast=' + encodeURIComponent(JSON.stringify(podcast)); /*Pass the data through link */
  readMore.textContent = 'Read More';
  readMore.target = '_blank';
  readMore.style.display = 'flex';
  readMore.style.justifyContent = 'center';

  authorDate.appendChild(author);
  authorDate.appendChild(date);
  cardBody.appendChild(thumbnail); 
  cardBody.appendChild(authorDate);
  cardBody.appendChild(title);
  cardBody.appendChild(content);
  cardBody.appendChild(readMore);
  card.appendChild(cardBody);

  return card;
}