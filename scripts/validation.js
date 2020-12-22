function showError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add('popup__input_state_invalid');
}

function hideError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove('popup__input_state_invalid');
}

function setButtonState(button, isActive) {
    if (isActive) {
        button.classList.remove('popup__button_invalid');
        button.disabled = false;
    } else {
        button.classList.add('popup__button_invalid');
        button.disabled = true;
    }
}

function checkInputValidity(form, input) {
    if (input.validity.valid) {
        hideError(form, input);
    } else {
        showError(form, input);
    }
}

function setEventListener(form) {
    const inputList = form.querySelectorAll('.popup__input');
    const submitButton = form.querySelector('.popup__submit');
    inputList.forEach(input => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(form, input);
            setButtonState(submitButton, form.checkValidity());
        })
    });
}

function enableValidation() {
    const forms = document.querySelectorAll('.popup__container');
    forms.forEach(form => {
        setEventListener(form)
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        const submitButton = form.querySelector('.popup__submit');
        setButtonState(submitButton, form.checkValidity())
    });
}

enableValidation();