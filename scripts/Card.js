export class Card {
    constructor(data, template, composeFullSizeImagePopup) {
        this._name = data.name;
        this._img = data.img;
        this._alt = data.alt;
        this._template = template;
        this._composeFullSizeImagePopup = composeFullSizeImagePopup;
    }
    _getTemplate() {
        const cardElement = document
            .querySelector('.template')
            .content
            .querySelector('.gallery__card')
            .cloneNode(true);
        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector('.gallery__name').textContent = this._name;
        this._element.querySelector('.gallery__image').src = this._img;
        this._element.querySelector('.gallery__image').alt = this._alt;

        return this._element;

    }

    _setEventListeners() {
        this._element.querySelector('.gallery__button').addEventListener('click', () => {
            this._likeButton();

        });
        this._element.querySelector('.gallery__button-delete').addEventListener('click', () => {
            this._buttonDelete();

        });
        this._element.querySelector('.gallery__image').addEventListener('click', () => {
            this._composeFullSizeImagePopup(this._name, this._img, this._alt);

        });
    }

    _likeButton() {
        this._element.querySelector('.gallery__button').classList.toggle('gallery__button_like');
    }

    _buttonDelete() {
        this._element.remove();
    }


}