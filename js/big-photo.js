const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialComments = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const createCommentElement = (comment) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');
  commentElement.innerHTML = `
    <img
      class="social__picture"
      src="${comment.avatar}"
      alt="${comment.name}"
      width="35" height="35">
    <p class="social__text">${comment.message}</p>
  `;
  return commentElement;
};

const renderComments = (comments) => {
  socialComments.innerHTML = '';
  comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    socialComments.appendChild(commentElement);
  });
};

const openFullPhoto = (photoData) => {
  bigPicture.querySelector('.big-picture__img img').src = photoData.url;
  bigPicture.querySelector('.big-picture__img img').alt = photoData.description;
  bigPicture.querySelector('.likes-count').textContent = photoData.likes;
  bigPicture.querySelector('.comments-count').textContent = photoData.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photoData.description;
  renderComments(photoData.comments);
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeFullPhoto = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

closeButton.addEventListener('click', () => {
  closeFullPhoto();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' && !bigPicture.classList.contains('hidden')) {
    closeFullPhoto();
  }
});

export { openFullPhoto };
