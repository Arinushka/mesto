let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');
let profileName = document.querySelector('.profile__name');;
let profileJob = document.querySelector('.profile__job');
let editForm = document.querySelector('.profile__button-edit');
let closeProfile = document.querySelector('.popup__close_proile');
let closeGallery = document.querySelector('.popup__close_gallery');
let form = document.querySelector('.popup__profile');
const openFormAddCard = document.querySelector('.popup__gallery');
const profileForm = document.querySelector('.profile__form');
const galleryForm = document.querySelector('.gallery__form');
const cardContainerElement = document.querySelector('.gallery');
const buttonAddCard = document.querySelector('.profile__button-add');
const inputNameGallery = document.querySelector('.popup__name_gallery');
const inputLinkGallery = document.querySelector('.popup__link');
const templateElement = document.querySelector('.template');
let likeButton;
const initialCards = [{
        name: 'Камчатка',
        img: './images/kamchatka.jpg',
        alt: 'Камчатка'
    },
    {
        name: 'Байкал',
        img: './images/baikal.jpg',
        alt: 'Байкал'
    },
    {
        name: 'Хужир',
        img: './images/Khuzhir.jpg',
        alt: 'Хужир'
    },
    {
        name: 'Иваново',
        img: './images/ivanovo.jpg',
        alt: 'Иваново'
    },
    {
        name: 'Эльбрус',
        img: './images/elbrus.jpg',
        alt: 'Эльбрус'
    },
    {
        name: 'Тулиновка',
        img: './images/tulinovka.jpg',
        alt: 'Тулиновка'
    }
];


formSubmitHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value === '' ? profileName.textContent : nameInput.value;
    profileJob.textContent = jobInput.value === '' ? profileJob.textContent : jobInput.value;
    hideClick(evt);
}
form.addEventListener('submit', formSubmitHandler);

showClick = (evt) => {
    if (evt.target.classList.contains('profile__button-edit')) {
        nameInput.value = profileName.textContent;
        jobInput.value = profileJob.textContent;
        form.classList.add('popup_opened');
        return;
    }
    if (evt.target.classList.contains('profile__button-add')) {
        openFormAddCard.classList.add('popup_opened');
        return;
    }

}

editForm.addEventListener('click', showClick);


hideClick = (evt) => {
    if (evt.target.classList.contains('popup__close_proile') || evt.target.classList.contains('profile__form')) {
        profileForm.reset();
        form.classList.remove('popup_opened');
        return;
    }
    if (evt.target.classList.contains('popup__close_gallery') || evt.target.classList.contains('gallery__form')) {
        openFormAddCard.classList.remove('popup_opened');
        return;
    }

}

closeProfile.addEventListener('click', hideClick);
closeProfile.typeButton = 'button-profile';
closeGallery.addEventListener('click', hideClick);
closeGallery.typeButton = 'button-card';

buttonAddCard.addEventListener('click', showClick);


function renderGallery() {
    const galleryCards = initialCards.map(composeCard);
    cardContainerElement.append(...galleryCards);
}

function composeCard(item) {
    const newCard = templateElement.content.cloneNode(true);
    const headerElement = newCard.querySelector('.gallery__name');
    const imageElement = newCard.querySelector('.gallery__image');
    const imageAlt = newCard.querySelector('.gallery__image');
    headerElement.textContent = item.name;
    imageElement.src = item.img;
    imageAlt.alt = item.alt;
    return newCard;
}

galleryForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    addNewCard();
    hideClick(evt);
});

function addNewCard() {
    const inputText = inputNameGallery.value;
    const inputLink = inputLinkGallery.value;

    const newCardHTML = composeCard({ name: inputText, img: inputLink, alt: 'Здесь ваша картинка' });
    cardContainerElement.prepend(newCardHTML);
}

function likeButtonActive() {
    likeButton = document.querySelectorAll('.gallery__button');
    likeButton.forEach(function(item) {
        item.addEventListener('click', () => item.classList.toggle('gallery__button_like'));
    });

}


// function deleteCard() {
//     const deleteButton = document.querySelectorAll('.gallery__button-delete');
//     deleteButton.forEach(function(item) {
//         item.addEventListener('click', () => item.classList.remove('template'));
//     });

// }


// const deleteButton = document.querySelectorAll('.gallery__button-delete');

// function deleteCard(evt) {
//     const targetCard = evt.target.closest('.gallery__card');
//     targetCard.remove();
// }
// deleteButton.forEach(function(item) {
//     item.addEventListener('click', deleteCard);
// });


renderGallery();
likeButtonActive();