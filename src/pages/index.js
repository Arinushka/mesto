import { Card } from '/src/components/Card.js';
import { FormValidator } from '/src/components/FormValidator.js';
import { Section } from '/src/components/Section.js';
import { PopupWithImage } from '/src/components/PopupWithImage.js';
import { PopupWithForm } from '/src/components/PopupWithForm.js';
import { UserInfo } from '/src/components/UserInfo.js';
import { Api } from '/src/components/Api.js';
import { PopupWithSubmit } from '/src/components/PopupWithSubmit.js';
import { nameInput, jobInput, editForm, formProfile, galleryForm, buttonAddCard, validationConfig, avatarButton, avatarForm } from '/src/utils/constants.js'
import '/src/pages/index.css';

const validationProfrile = new FormValidator(validationConfig, formProfile);
validationProfrile.enableValidation();
const validationGallery = new FormValidator(validationConfig, galleryForm);
validationGallery.enableValidation();
const validationAvatar = new FormValidator(validationConfig, avatarForm);
validationAvatar.enableValidation();

const inputsProfile = new UserInfo({ nameSelector: '.profile__name', jobSelector: '.profile__job', avatarSelector: '.profile__avatar' });

const formSubmitHandler = (data) => {
    renderLoading('.popup_profile', true);
    inputsProfile.setUserInfo(data);
    const newUserInfo = inputsProfile.getUserInfo();
    api.setUserInfo(newUserInfo.name, newUserInfo.job)
        .then(() => {
            renderLoading('.popup_profile', false)
        })
        .catch((err) => {
            console.log(err)
        })
    userPopup.close();
}
const submitGalleryForm = (data) => {
    renderLoading('.popup_gallery', true);
    api.addCard(data.input_name_gallery, data.input_link_gallery)
        .then((res) => {
            cardList.addItem(createCard(res));
            renderLoading('.popup_gallery', false);
        })
        .catch((err) => {
            console.log(err)
        })

    galleryPopup.close();
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20',
    headers: {
        authorization: 'cb025162-3fd1-4801-ae0e-3ba5aa323c64',
        'Content-Type': 'application/json'
    }
});

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

const popupDeleteCard = new PopupWithSubmit('.popup_delete_card');
const cardList = new Section((item) => {
    cardList.addItem(createCard(item));
}, '.gallery')

api.getInitialCards()
    .then(res => {
        console.log(res);
        cardList.render(res)
    })
    .catch((err) => {
        console.log(err)
    })

api.getUserInfo()
    .then(res => {
        inputsProfile.initUserInfo(res.name, res.about, res.avatar);
        inputsProfile.setUserId(res._id);
    })
    .catch((err) => {
        console.log(err)
    })
const removeCard = (card) => {
    return () => {

        api.deleteCard(card.returnCardId())
            .then((res) => {
                popupDeleteCard.close();
                card.removeCard();
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

function renderLoading(popupSelector, isLoading) {
    const buttonElement = document.querySelector(popupSelector).querySelector('.popup__submit');
    if (isLoading) {
        buttonElement.textContent = 'Сохранение...';
    } else {
        if (popupSelector === '.popup_gallery') {
            buttonElement.textContent = 'Создать';

        } else {
            buttonElement.textContent = 'Сохранить';

        }
    }
}

function createCard({ name, link, likes, owner, _id }) {
    const card = new Card({ name, link, likes, owner, _id, userId: inputsProfile.returnUserId() }, '.template', handleCardClick, () => {
        popupDeleteCard.setEventListeners(removeCard(card));
        popupDeleteCard.open();
    }, () => {
        api.addLike(card.returnCardId())
            .then(res => card.changeLikesCounter(res.likes.length))
    }, () => {
        api.removeLike(card.returnCardId())
            .then(res => card.changeLikesCounter(res.likes.length))
    }, );
    return card.generateCard();
}

const submitAvatarForm = (data) => {
    renderLoading('.popup_save_avatar', true);
    api.updateAvatarImage(data.input_link_profile)
        .then((res) => {
            inputsProfile.setAvatar(data);
            renderLoading('.popup_save_avatar', false);

        })
        .catch((err) => {
            console.log(err)
        })

    popupUpdateAvatar.close();

}
const popupUpdateAvatar = new PopupWithForm('.popup_save_avatar', submitAvatarForm);
popupUpdateAvatar.setEventListeners();


avatarButton.addEventListener('click', () => {
    validationAvatar.resetValidation();
    popupUpdateAvatar.open();
})