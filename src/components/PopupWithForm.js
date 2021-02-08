import { Popup } from '/src/components/Popup.js';
export class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector)
        this._formSelector = this._popup.querySelector('.popup__container_form');
        this._formSubmit = formSubmit;
    }
    _getInputValues() {
        this._inputList = Array.from(this._formSelector.querySelectorAll('.popup__input'));
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }
    _formSubmitHandler() {
        this._formSubmit(this._getInputValues());

    }
    setEventListeners() {
        this._formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._formSubmit();
        });
        super.setEventListeners();
    }

    close() {
        this._formSelector.reset();
        super.close();
    }
}