import { generatePhotosArray } from './data.js';
import { openFullPhoto } from './big-photo.js';

let photosData = [];

const createThumbnailElement = (photo) => {
  const template = document.querySelector('#picture').content.querySelector('.picture');
  const thumbnailElement = template.cloneNode(true);
  const image = thumbnailElement.querySelector('.picture__img');
  const likes = thumbnailElement.querySelector('.picture__likes');
  const comments = thumbnailElement.querySelector('.picture__comments');
  image.src = photo.url;
  image.alt = photo.description;
  likes.textContent = photo.likes;
  comments.textContent = photo.comments.length;
  thumbnailElement.dataset.photoId = photo.id;
  return thumbnailElement;
};

const renderThumbnails = () => {
  photosData = generatePhotosArray();
  const picturesContainer = document.querySelector('.pictures');
  if (!picturesContainer) {
    return;
  }
  const existingPictures = picturesContainer.querySelectorAll('.picture');
  existingPictures.forEach((picture) => picture.remove());
  const fragment = document.createDocumentFragment();
  photosData.forEach((photo) => {
    const thumbnailElement = createThumbnailElement(photo);
    fragment.appendChild(thumbnailElement);
  });
  picturesContainer.appendChild(fragment);
};

const initThumbnailsHandlers = () => {
  const picturesContainer = document.querySelector('.pictures');
  if (!picturesContainer) {
    return;
  }
  picturesContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');
    if (thumbnail) {
      evt.preventDefault();
      const photoId = parseInt(thumbnail.dataset.photoId, 10);
      const photoData = photosData.find((photo) => photo.id === photoId);
      if (photoData) {
        openFullPhoto(photoData);
      }
    }
  });
};

export { renderThumbnails, initThumbnailsHandlers };
