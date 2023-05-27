import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryConteiner = document.querySelector('.gallery');

const galleryList = galleryItems.map((image) => `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>
</li>`).join('');

galleryConteiner.insertAdjacentHTML('beforeend', galleryList);


    
let lightbox = new SimpleLightbox('.gallery a', {

    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    
});
   
console.log(galleryItems);

