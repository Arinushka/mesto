import { Card } from './Card.js';
import { initialCards } from './initial-cards.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';

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

// функция открытия попапов
const showPopup = (formGallery) => {
    const popupOpen = new Popup(formGallery);
    popupOpen.setEventListeners();
    popupOpen.open();
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

// функция закрытия попапов 
const hidePopup = (formGallery) => {
    const popupClose = new Popup(formGallery);
    popupClose.setEventListeners();
    popupClose.close();
}


// закрытие попапов по клику на оверлей
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {

        if (evt.target.classList.contains('popup_opened')) {
            hidePopup(popup)
        }
    })
})

const validationProfrile = new FormValidator(validationConfig, formProfile);
validationProfrile.enableValidation();
const validationGallery = new FormValidator(validationConfig, galleryForm);
validationGallery.enableValidation();


const composeFullSizeImagePopup = (name, img, alt) => {
    const previewFullSize = new PopupWithImage(fullsizeForm)
    previewFullSize.open(name, img, alt);
}

const cardList = new Section({
        items: initialCards,
        renderer: (item) => {
            createCard(item);
        }
    },
    cardContainerElement
);
cardList.addItem();

function createCard(item) {
    const card = new Card(item, '.template', composeFullSizeImagePopup);
    const cardElement = card.generateCard();
    cardList.setItem(cardElement);
    return cardElement;

}

function addNewCard() {
    const cardText = inputNameGallery.value;
    const cardLink = inputLinkGallery.value;
    const cardElement = createCard({ name: cardText, img: cardLink, alt: cardText });
    cardContainerElement.prepend(cardElement);

}

galleryForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    addNewCard();
    hidePopup(formGallery);
});