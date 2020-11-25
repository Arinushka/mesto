let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');
let profileName = document.querySelector('.profile__name');;
let profileJob = document.querySelector('.profile__job');
let element = document.querySelector('.profile__button-edit');
let closeForm = document.querySelector('.popup__close');

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value === '' ? profileName.textContent : nameInput.value;
    profileJob.textContent = jobInput.value === '' ? profileJob.textContent : jobInput.value;
    formElement.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);

function showClick() {
    formElement.classList.add('popup_opened');
}

element.addEventListener('click', showClick);

function hideClick() {
    formElement.classList.remove('popup_opened');
}

closeForm.addEventListener('click', hideClick);