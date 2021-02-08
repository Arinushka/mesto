import { Card } from '/components/Card.js';
import { initialCards } from '/utils/initial-cards.js';
import { FormValidator } from '/components/FormValidator.js';
import { Section } from '/components/Section.js';
import { PopupWithImage } from '/components/PopupWithImage.js';
import { PopupWithForm } from '/components/PopupWithForm.js';
import { UserInfo } from '/components/UserInfo.js';
import { nameInput, jobInput, editForm, formProfile, galleryForm, buttonAddCard, inputNameGallery, inputLinkGallery, validationConfig } from '/utils/constants.js'
import '/pages/index.css';

const validationProfrile = new FormValidator(validationConfig, formProfile);
validationProfrile.enableValidation();
const validationGallery = new FormValidator(validationConfig, galleryForm);
validationGallery.enableValidation();

const inputsProfile = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job' });

const formSubmitHandler = () => {
    inputsProfile.setUserInfo(nameInput.value, jobInput.value);
    userPopup.close();
}
const submitGalleryForm = () => {
    addNewCard();
    galleryPopup.close();
}

const imagePopup = new PopupWithImage('.popup_fullsize_wrapper')
imagePopup.setEventListeners();
const userPopup = new PopupWithForm('.popup_profile', formSubmitHandler)
userPopup.setEventListeners();
const galleryPopup = new PopupWithForm('.popup_gallery', submitGalleryForm)
galleryPopup.setEventListeners();

editForm.addEventListener('click', () => {
    validationProfrile.resetValidation();
    const userInfo = inputsProfile.getUserInfo();
    nameInput.value = userInfo.name;
    jobInput.value = userInfo.job;
    userPopup.open();
});

buttonAddCard.addEventListener('click', () => {
    validationGallery.resetValidation();
    galleryPopup.open()
});

const handleCardClick = (name, img, alt) => {
    imagePopup.open(name, img, alt);
}

const cardList = new Section({
        items: initialCards,
        renderer: (item) => {
            const card = createCard(item);
            insertCard(card);
        }
    },
    '.gallery'
);
cardList.render();

function createCard(item) {
    const card = new Card(item, '.template', handleCardClick);
    return card;
}

function insertCard(card) {
    const cardElement = card.generateCard();
    cardList.setItem(cardElement);
    return cardElement;
}

function addNewCard() {
    const cardText = inputNameGallery.value;
    const cardLink = inputLinkGallery.value;
    const card = createCard({ name: cardText, img: cardLink, alt: cardText })
    const cardElement = insertCard(card);
    cardList.addItem(cardElement);
}