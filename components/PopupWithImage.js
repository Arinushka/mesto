import { Popup } from '/components/Popup.js';
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    }

    open(name, img, alt) {
        const titleFullsize = document.querySelector('.popup__title-fullsize');
        const imageFullsize = document.querySelector('.popup__image-fullsize');
        titleFullsize.textContent = name;
        imageFullsize.src = img;
        imageFullsize.alt = alt;
        super.open();
    }
}