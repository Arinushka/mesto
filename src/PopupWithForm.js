import { Popup } from './Popup.js';
export class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector)
        this._formSelector = document.querySelector('.popup');
        this._formSubmit = formSubmit;
        this._formSubmitHundler = this._formSubmitHundler.bind(this);
    }
    _getInputValues() {
        this._inputList = Array.from(this._formSelector.querySelectorAll('.popup__input'));
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }
    _formSubmitHundler(evt) {
        evt.preventDefault();
        this._formSubmit(this._getInputValues());

    }
    setEventListeners() {
        this._formSelector.addEventListener('submit', this._formSubmitHundler);
        super.setEventListeners();
    }

    close() {
        this._formSelector.reset();
        super.close();
    }
}