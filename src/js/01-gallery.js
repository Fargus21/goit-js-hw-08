import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const imagesMarkup = makeImagesMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imagesMarkup);

function makeImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join("");
};
   let gallery = new SimpleLightbox('.gallery a', {
     captionSelector: 'img',
     captionsData: 'alt',
     captionPosition: 'bottom',
     captionDelay: 250,
    });
