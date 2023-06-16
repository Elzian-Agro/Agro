const tagButtons = document.querySelectorAll('#tagContainer button');
const blogContainer = document.getElementById('blogContainer');
const latestPodcastContainer = document.getElementById('latestPodcastContainer');
let data = [];

fetch('../podcast/podcast_list/podcast.json')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    displayPodcastCards(data);
    displayLatestPodcast(data);
  })
  .catch(error => console.error(error));

tagButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedTag = button.getAttribute('data-tag');
    const filteredData = (selectedTag === 'all') ? data : data.filter(podcast => podcast.tags.includes(selectedTag));
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

function displayLatestPodcast(data) {
  const latestPodcast = data[data.length - 1];
  const latestPodcastCard = createPodcastCard(latestPodcast);
  latestPodcastContainer.appendChild(latestPodcastCard);
}


function createPodcastCard(podcast) {
  const card = document.createElement('div');
  card.className = 'blog-card card';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const authorDate = document.createElement('div');
  authorDate.className = 'author-date';

  const author = document.createElement('span');
  author.className = 'author';
  author.textContent = podcast.author;
  author.style.fontSize = '12px';

  const date = document.createElement('span');
  date.className = 'date';
  date.textContent = podcast.date;
  date.style.fontSize = '12px';

  const title = document.createElement('h4');
  title.className = 'pod-title';
  title.textContent = podcast.title;

  const content = document.createElement('p');
  content.className = 'pod-text';
  content.textContent = podcast.content;

  const readMore = document.createElement('a');
  readMore.className = 'btn btn-dark';
  readMore.href = podcast.buttonUrl;
  readMore.textContent = 'Read More';
  readMore.style.display = 'flex';
  readMore.style.justifyContent = 'center';

  authorDate.appendChild(author);
  authorDate.appendChild(date);
  cardBody.appendChild(authorDate);
  cardBody.appendChild(title);
  cardBody.appendChild(content);
  cardBody.appendChild(readMore);
  card.appendChild(cardBody);

  return card;
}
