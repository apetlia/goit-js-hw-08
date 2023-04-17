import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
import { createGallaryListHTML } from './function.js';
// Change code below this line

console.log(galleryItems);

const gallaryDivRef = document.querySelector('.gallery');

const gallaryListMarkup = createGallaryListHTML(galleryItems);

gallaryDivRef.innerHTML = gallaryListMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionClass: 'text--align-center',
});
