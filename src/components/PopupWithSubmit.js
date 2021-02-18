import { Popup } from '/src/components/Popup.js';
export class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupWithSubmitDelete = document.querySelector('.popup__submit_delete');
    }
    setEventListeners(deleteCard) {
        super.setEventListeners();
        this._handleButtonSubmit = deleteCard;
        this._popupWithSubmitDelete.addEventListener('click', this._handleButtonSubmit);
    }

    close() {
        super.close();
        this._popupWithSubmitDelete.removeEventListener('click', this._handleButtonSubmit);
    }
}