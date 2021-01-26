export class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._form = form;
        this._submitButton = form.querySelector(this._config.submitButtonSelector);
        this._inputList = form.querySelectorAll(this._config.inputSelector);
    }

    // метод, который будет находить все формы на странице по конкретному селектору и для каждой из этих форм вызывать setEventListener
    enableValidation() {
        this._setEventListener()
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setButtonState()

    }


    // метод добавления доп.класса кнопке при невалидной форме
    _setButtonState() {
            if (this._form.checkValidity()) {
                this._submitButton.classList.remove(this._config.buttonInvalidClass);
                this._submitButton.disabled = false;
            } else {
                this._submitButton.classList.add(this._config.buttonInvalidClass);
                this._submitButton.disabled = true;
            }
        }
        // метод, которому можно передать любую форму для валидации 
    _setEventListener() {
            this._inputList.forEach(input => {
                input.addEventListener('input', (evt) => {
                    this._checkInputValidity(input);
                    this._setButtonState(this._form.checkValidity());
                })
            });
        }
        // метод проверки формы на валидность
    _checkInputValidity(input) {
            if (input.validity.valid) {

                this._hideError(input);
            } else {

                this._showError(input);
            }
        }
        // метод показывает ошибку
    _showError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        input.classList.add(this._config.inputInvalidClass);
    }

    // метод скрывает ошибку при ее устранении
    _hideError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._config.inputInvalidClass);
    }
    resetValidation() {
        this._inputList.forEach((inputElement) => {
            this._hideError(inputElement)
        });

        this._setButtonState();
    }

}