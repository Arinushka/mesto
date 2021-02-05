import { Card } from './Card.js';
import { initialCards } from './initial-cards.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';
import { editForm, popupEditProfile, formGallery, formProfile, galleryForm, cardContainerElement, buttonAddCard, inputNameGallery, inputLinkGallery, fullsizeForm, popups, validationConfig } from './constants.js'

// функция изменения имени и профессии у профайла
const formSubmitHandler = () => {
    const formSubmit = new PopupWithForm(formGallery);
    formSubmit.setEventListeners();
    const editProfile = new UserInfo(popupEditProfile);
    editProfile.setUserInfo();
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
    const inputsProfile = new UserInfo(popupEditProfile);
    inputsProfile.getUserInfo();
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


const handleCardClick = (name, img, alt) => {
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
    const card = new Card(item, '.template', handleCardClick);
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