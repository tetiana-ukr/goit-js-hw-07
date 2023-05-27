import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryConteiner = document.querySelector('.gallery');

const galleryList = galleryItems.map((image) => `<li class="gallery__item">
  <a class="gallery__link" href="${image.preview}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`).join('');

galleryConteiner.insertAdjacentHTML('beforeend', galleryList);

const handleImageClick = event => {

    event.preventDefault();

    if(event.target.nodeName !== "IMG") {
        return;
    }

    const imagePath = event.target.getAttribute('data-source');

    const instance = basicLightbox.create(`
    <img src="${imagePath}" width="800" height="600">
`)
    
    instance.show();

    


}
     


galleryConteiner.addEventListener('click', handleImageClick);

//window.addEventListener('keydown', handleImageClick);



console.log(galleryItems);
