export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__close');
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClose = this._handleOverlayClose.bind(this);
        this.close = this.close.bind(this);
    }
    open() {
        this._popup.classList.add('popup_opened');
    }

    close() {
        this._popup.classList.remove('popup_opened');
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }

    setEventListeners() {
        this._buttonClose.addEventListener('click', this.close);
        document.addEventListener('keydown', this._handleEscClose);
        this._popup.addEventListener('click', this._handleOverlayClose)
    }
}