import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const images = galleryItems.map(({ preview, original, description }) => 
    `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" loading="lazy" src="${preview}" alt="${description}" />
      </a>
    </div>`
).join('');

galleryRef.insertAdjacentHTML("beforeend", images);

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });
