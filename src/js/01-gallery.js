import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const ulEl = document.querySelector('.gallery');

function creatGallery(array) {
  const arrayImg = [];
  array.forEach(obj => {
    const liEl = document.createElement('li');
    liEl.classList.add('gallery__item');

    const anchorEl = document.createElement('a');
    anchorEl.classList.add('gallery__link');
    anchorEl.href = obj.original;

    const imgEl = document.createElement('img');
    imgEl.classList.add('gallery__image');
    imgEl.src = obj.preview;
    imgEl.dataset.source = obj.original;
    imgEl.alt = obj.description;

    liEl.append(anchorEl);
    anchorEl.append(imgEl);
    arrayImg.push(liEl);
  });
  return arrayImg;
}

ulEl.prepend(...creatGallery(galleryItems));

const lightbox = new SimpleLightbox('.gallery a');
ulEl.onclick = ev => {
  if (ev.target.nodeName !== 'IMG') {
    return;
  }
  ev.preventDefault();
  lightbox.show();

  document.addEventListener('keydown', ev => {
    if (ev.code === 'Escape') {
      lightbox.close();
    }
  });
};
