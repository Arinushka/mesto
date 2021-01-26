import { Card } from './Card.js';
import { initialCards } from './initial-cards.js';
import { FormValidator } from './FormValidator.js';

const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');
const profileName = document.querySelector('.profile__name');;
const profileJob = document.querySelector('.profile__job');
const editForm = document.querySelector('.profile__button-edit');
const popupEditProfile = document.querySelector('.popup_profile');
const formGallery = document.querySelector('.popup_gallery');
const formProfile = document.querySelector('.popup__profile-form');
const galleryForm = document.querySelector('.popup__gallery-form');
const cardContainerElement = document.querySelector('.gallery');
const buttonAddCard = document.querySelector('.profile__button-add');
const inputNameGallery = document.querySelector('.popup__name_gallery');
const inputLinkGallery = document.querySelector('.popup__link');
const fullsizeForm = document.querySelector('.popup_fullsize_wrapper');
const popups = document.querySelectorAll('.popup');
const titleFullsize = document.querySelector('.popup__title-fullsize');
const imageFullsize = document.querySelector('.popup__image-fullsize');
const validationConfig = {
    formSelector: '.popup__container_form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inputInvalidClass: 'popup__input_state_invalid',
    buttonInvalidClass: 'popup__button_invalid',
};


// функция изменения имени и профессии у профайла
const formSubmitHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value === '' ? profileName.textContent : nameInput.value;
    profileJob.textContent = jobInput.value === '' ? profileJob.textContent : jobInput.value;
    hidePopup(popupEditProfile);
}
popupEditProfile.addEventListener('submit', formSubmitHandler);

// функция открытия попапов и добавления слушателя для ф-ии closeByEscape
const showPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

editForm.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    validationProfrile.resetValidation();
    showPopup(popupEditProfile);
});
buttonAddCard.addEventListener('click', () => {
    inputNameGallery.value = '';
    inputLinkGallery.value = '';
    validationGallery.resetValidation();
    showPopup(formGallery);
});

// функция закрытия попапов и удаление слушателя для ф-ии closeByEscape
const hidePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}



popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        // закрытие попапов по клику на оверлей
        if (evt.target.classList.contains('popup_opened')) {
            hidePopup(popup)
        }
        // закрытие попапов на клику на крестик
        if (evt.target.classList.contains('popup__close')) {
            hidePopup(popup)
        }

    })
})

// функция закрытия попапов по нажатию на escape
function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened')
        hidePopup(openedPopup);
    }
}


const validationProfrile = new FormValidator(validationConfig, formProfile);
validationProfrile.enableValidation();
const validationGallery = new FormValidator(validationConfig, galleryForm);
validationGallery.enableValidation();


const composeFullSizeImagePopup = (name, img, alt) => {
    titleFullsize.textContent = name;
    imageFullsize.src = img;
    imageFullsize.alt = alt;
    showPopup(fullsizeForm);
}


function createCard() {
    const cardText = inputNameGallery.value;
    const cardLink = inputLinkGallery.value;
    return new Card({ name: cardText, img: cardLink, alt: cardText }, '.template', composeFullSizeImagePopup)
}

// функция добавления новой карточки
function addNewCard() {
    const card = createCard();
    const cardElement = card.generateCard();
    cardContainerElement.prepend(cardElement);

}


galleryForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    addNewCard();
    hidePopup(formGallery);
});

// функция отрисовки первых 6 карточек
//как реализовать здесь createCard - не понимаю(
function renderGallery() {
    const galleryCards = initialCards.map(item => {
        return new Card({ name: item.name, img: item.img, alt: item.name }, '.template', composeFullSizeImagePopup);

    });
    const cardElements = galleryCards.map(card => { return card.generateCard() })
    cardContainerElement.append(...cardElements);

}

renderGallery();