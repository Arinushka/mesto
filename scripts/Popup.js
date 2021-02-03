export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._buttonClose = this._popupSelector.querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
        this.close = this.close.bind(this);
    }
    open() {
        this._popupSelector.classList.add('popup_opened');
    }
    close() {
        this._popupSelector.classList.remove('popup_opened');

        this._removeEventListeners();

    }
    setEventListeners() {
        this._buttonClose.addEventListener('click', this.close);
        document.addEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    _removeEventListeners() {
        this._buttonClose.removeEventListener('click', this.close);
        document.removeEventListener('keydown', this._handleEscClose);
    }
}