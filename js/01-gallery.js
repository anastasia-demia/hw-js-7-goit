import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', itemsMarkup)

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

galleryContainer.addEventListener("click", onImageClick)

function onImageClick(evt) {
    evt.preventDefault()

    if(evt.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `)
    instance.show()

    galleryContainer.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close()
        }
    })
}