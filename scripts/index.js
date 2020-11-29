let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');
let profileName = document.querySelector('.profile__name');;
let profileJob = document.querySelector('.profile__job');
let editForm = document.querySelector('.profile__button-edit');
let closeForm = document.querySelector('.popup__close');
let form = document.querySelector('.popup__container');
let like = document.querySelectorAll('.gallery__button');
debugger

formSubmitHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value === '' ? profileName.textContent : nameInput.value;
    profileJob.textContent = jobInput.value === '' ? profileJob.textContent : jobInput.value;
    hideClick();
}
form.addEventListener('submit', formSubmitHandler);

showClick = () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    formElement.classList.add('popup_opened');

}

editForm.addEventListener('click', showClick);

hideClick = () => {
    form.reset();
    formElement.classList.remove('popup_opened');
}

closeForm.addEventListener('click', hideClick);