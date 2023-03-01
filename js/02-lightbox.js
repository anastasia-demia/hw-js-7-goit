import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', itemsMarkup)
galleryContainer.addEventListener("click", onImageClick)

function createGalleryItems (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </div>`
    }).join('')
};

function onImageClick(event) {
    event.preventDefault()
}

var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData:"alt",
    captionPosition:'bottom',
    captionDelay: 250,
});