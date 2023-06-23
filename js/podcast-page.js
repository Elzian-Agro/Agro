const podcastTitle = document.getElementById('podcastTitle');
const podcastContent = document.getElementById('podcastContent');
const podcastAuthor = document.getElementById('podcastAuthor');
const podcastDate = document.getElementById('podcastDate');
const podcastAudio = document.getElementById('podcastAudio');
const podcastAbout = document.getElementById('podcastAbout');
const podcastAudioTitle = document.getElementById('podcastAudioTitle');
const podcastAuthorContact = document.getElementById('podcastAuthorContact');
const thumbnail = document.getElementById('thumbnail');
const podcastTags = document.getElementById('podcastTags');
const podcastTimeline = document.getElementById('podcastTimeline');


const urlParams = new URLSearchParams(window.location.search); /*pass the data through url */
const podcastData = JSON.parse(decodeURIComponent(urlParams.get('podcast')));

displayPodcastContent(podcastData);

function displayPodcastContent(podcast) {

  /*Podcast title */
  const title = document.createElement('h3');
  title.textContent = podcast.title;
  podcastTitle.appendChild(title);
  /*Podcast title */

  /*podcast breif */
  const content = document.createElement('p');
  content.textContent = podcast.content;

  const brief = document.createElement('p');
  brief.textContent = podcast.brief;
  podcastContent.appendChild(brief);

  /*podcast breif */
  
  /*podcast author */
  const author = document.createElement('p');
  author.textContent = podcast.author;
  podcastAuthor.appendChild(author);
  /*podcast author */

  /* Tags */
  const tagsContainer = document.createElement('div');
  tagsContainer.className = 'tags-container';
  
  podcast.tags.forEach((tag, index) => {
    const tagElement = document.createElement('span');
    tagElement.textContent = tag;
    tagElement.className = 'tag';
    tagElement.style.display = 'inline-block';
    tagElement.style.padding = '5px';
    tagElement.style.marginRight = '5px';
    tagElement.style.border = '1px solid black';
    tagElement.style.borderRadius = '5px';
    tagElement.style.fontSize = '10px';
    tagElement.style.backgroundColor = 'gray';
    tagElement.style.borderColor = 'gray';
    tagElement.style.color = 'white';
  
    if (index !== podcast.tags.length - 1) {
      const separator = document.createElement('span');
      separator.className = 'tag-separator';
      separator.style.marginLeft = '5px';
      tagElement.appendChild(separator);
    }
  
    tagsContainer.appendChild(tagElement);
  });
  
  podcastTags.appendChild(tagsContainer);

  /* Tags */

  /*podcast date */
  const date = document.createElement('p');
  date.textContent = podcast.date;
  podcastDate.appendChild(date);
  /*podcast date */


  /*Audio TimeLine */
  const timelineList = document.createElement('ul');
  timelineList.className = 'timeline-list';

  podcast.audioTimeline.forEach((timelineItem) => {
    const listItem = document.createElement('li');
    listItem.textContent = timelineItem;
    listItem.style.paddingTop = '10px';
    timelineList.appendChild(listItem);
  });

  podcastTimeline.appendChild(timelineList);
  /*Audio TimeLine */

  /*podcast audio */
  const audio = document.createElement('audio');
  audio.src = podcast.audio;
  audio.controls = true;
  audio.style.marginTop = '10px';
  podcastAudio.appendChild(audio);
  /*podcast audio */

  /*podcast about */
  const about = document.createElement('p');
  about.textContent = podcast.about;
  podcastAbout.appendChild(about);
  /*podcast about */

  /*podcats audio title */
  const audioTitle = document.createElement('p');
  audioTitle.textContent = podcast.audioTitle;
  podcastAudioTitle.appendChild(audioTitle);
  /*podcats audio title */

  /*podcast audio author contact */
  const authorContact = document.createElement('a');
  authorContact.textContent = podcast.authorContact;
  authorContact.href = podcast.authorContact;
  podcastAuthorContact.appendChild(authorContact);
  /*podcast audio author contact */

  /*podcast tumbnail */
  const thumbnailImg = document.createElement('img');
  thumbnailImg.src = podcast.thumbnail;
  thumbnail.appendChild(thumbnailImg);
  /*podcast tumbnail */

}

function getUrlParameter(parameterName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(parameterName);
}
