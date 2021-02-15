export class Card {
    constructor(data, template, handleCardClick) {
        this._name = data.name;
        this._img = data.img;
        this._alt = data.alt;
        this._template = template;
        this._handleCardClick = handleCardClick;
    }


    _getTemplate() {
        const cardElement = document
            .querySelector(this._template)
            .content
            .querySelector('.gallery__card')
            .cloneNode(true);
        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        const cardImage = this._element.querySelector('.gallery__image');
        this._setEventListeners(cardImage);
        this._element.querySelector('.gallery__name').textContent = this._name;
        cardImage.src = this._img;
        cardImage.alt = this._alt;
        return this._element;

    }

    _setEventListeners(cardImage) {
        this._element.querySelector('.gallery__button').addEventListener('click', () => {
            this._likeButton();

        });

        this._element.querySelector('.popup__submit_delete').addEventListener('click', () => {
            this._buttonDelete();

        });
        cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._img, this._alt);

        });
    }

    _likeButton() {
        this._element.querySelector('.gallery__button').classList.toggle('gallery__button_like');
    }

    _buttonDelete() {
        this._element.remove();
    }



}