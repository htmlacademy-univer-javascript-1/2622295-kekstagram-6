import { renderThumbnails, initThumbnailsHandlers } from './pictures.js';
import { initForm, setFormSubmit } from './form.js';
import { initScaleEditor } from './scale-photo.js';
import { getData } from './api.js';
import { showAlert } from './message.js';
import { initFilters } from './filters.js';
import { debounce } from './util.js';

getData()
  .then((photos) => {
    renderThumbnails(photos);
    initFilters(photos, debounce(renderThumbnails));
    initThumbnailsHandlers();
  })
  .catch((err) => {
    showAlert(err.message);
  });

setFormSubmit();

// Инициализация формы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  initForm();
});

// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  initScaleEditor();
  // eslint-disable-next-line no-console
  console.log('Scale editor initialized');
});
