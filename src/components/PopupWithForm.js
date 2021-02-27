import { Popup } from '/src/components/Popup.js';
export class PopupWithForm extends Popup {
    constructor(popupSelector, formSubmit) {
        super(popupSelector)
        this._form = this._popup.querySelector('.popup__container_form');
        this._formSubmit = formSubmit;
        this._formSubmitHandler = this._formSubmitHandler.bind(this);
        this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    }
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }
    _formSubmitHandler(evt) {
        evt.preventDefault();
        this._formSubmit(this._getInputValues());
    }
    setEventListeners() {
        this._form.addEventListener('submit', this._formSubmitHandler);
        super.setEventListeners();
    }

    close() {
        this._form.reset();
        super.close();
    }


}