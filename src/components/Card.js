export class Card {
    constructor({ name, link, likes, owner, _id, userId }, template, handleCardClick, deleteHandler, addLike, removeLike) {
        this._name = name;
        this._img = link;
        this._alt = name;
        this._template = template;
        this._handleCardClick = handleCardClick;
        this._ownerId = owner._id;
        this._imageId = _id;
        this._likes = likes;
        this._userId = userId;
        this._deleteHandler = deleteHandler;
        this._addLike = addLike;
        this._removeLike = removeLike;
        this._likeButton = this._likeButton.bind(this);

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
        this._element.querySelector('.gallery__button-counter').textContent = this._likes.length;
        this._likes.forEach((item) => {
            if (item._id === this._userId) {
                this._element.querySelector('.gallery__button').classList.add('gallery__button_like');
            }
        })
        this._removeButton = this._element.querySelector('.gallery__button-delete');
        this.checkId();
        this._cardImage = this._element.querySelector('.gallery__image');
        this._setEventListeners();
        this._element.querySelector('.gallery__name').textContent = this._name;
        this._cardImage.src = this._img;
        this._cardImage.alt = this._alt;
        return this._element;

    }
    _setEventListeners() {
        this._element.querySelector('.gallery__button').addEventListener('click', this._likeButton);
        this._removeButton.addEventListener('click', this._deleteHandler);
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._img, this._alt);

        });
    }

    _likeButton(evt) {
        if (!evt.target.classList.contains('gallery__button_like')) {
            this._element.querySelector('.gallery__button').classList.add('gallery__button_like');
            this._addLike();
        } else {
            this._element.querySelector('.gallery__button').classList.remove('gallery__button_like');
            this._removeLike();
        }
    }

    checkId(removeButton) {
        if (this._ownerId !== this._userId) {
            this._removeButton.remove();
        }
    }

    removeCard() {
        this._element.remove();
    }
    returnCardId() {
        return this._imageId;
    }
    changeLikesCounter(counter) {
        this._element.querySelector('.gallery__button-counter').textContent = counter;

    }
}