import { Popup } from '/src/components/Popup.js';
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._titleFullsize = this._popup.querySelector('.popup__title-fullsize');
        this._imageFullsize = this._popup.querySelector('.popup__image-fullsize');
    }

    open(name, img, alt) {
        this._titleFullsize.textContent = name;
        this._imageFullsize.src = img;
        this._imageFullsize.alt = alt;
        super.open();
    }
}