import { generatePhotosArray } from './data.js';
import { renderThumbnails, initThumbnailsHandlers } from './pictures.js';

const photosArray = generatePhotosArray();

// eslint-disable-next-line no-console
console.log('Сгенерированный массив фотографий:', photosArray);

export { photosArray };

document.addEventListener('DOMContentLoaded', () => {
  renderThumbnails();
});

const initApp = () => {
  renderThumbnails();
  initThumbnailsHandlers();
};

document.addEventListener('DOMContentLoaded', initApp);
