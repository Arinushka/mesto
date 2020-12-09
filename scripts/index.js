// let formElement = document.querySelector('.popup');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');
let profileName = document.querySelector('.profile__name');;
let profileJob = document.querySelector('.profile__job');
let editForm = document.querySelector('.profile__button-edit');
let closeProfile = document.querySelector('#close-profile');
let closeGallery = document.querySelector('#close-gallery');
let form = document.querySelector('#popup-profile');
const openFormAddCard = document.querySelector('#popup-gallery');
const profileForm = document.querySelector('#profile-form');
const galleryForm = document.querySelector('#gallery-form');
const cardContainerElement = document.querySelector('.gallery');
const buttonAddCard = document.querySelector('.profile__button-add');
const initialCards = [{
        name: 'Камчатка',
        img: './images/kamchatka.jpg'
    },
    {
        name: 'Байкал',
        img: './images/baikal.jpg'
    },
    {
        name: 'Хужир',
        img: './images/Khuzhir.jpg'
    },
    {
        name: 'Иваново',
        img: './images/ivanovo.jpg'
    },
    {
        name: 'Эльбрус',
        img: './images/elbrus.jpg'
    },
    {
        name: 'Тулиновка',
        img: './images/tulinovka.jpg'
    }
];


formSubmitHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value === '' ? profileName.textContent : nameInput.value;
    profileJob.textContent = jobInput.value === '' ? profileJob.textContent : jobInput.value;
    hideClick();
}
form.addEventListener('submit', formSubmitHandler);

showClick = (evt) => {
    switch (evt.currentTarget.typeButton) {
        case 'button-profile':
            nameInput.value = profileName.textContent;
            jobInput.value = profileJob.textContent;
            form.classList.add('popup_opened');
            break;
        case 'button-card':
            openFormAddCard.classList.add('popup_opened');
            break;
    }

}

editForm.addEventListener('click', showClick);
editForm.typeButton = 'button-profile';

hideClick = (evt) => {
    switch (evt.currentTarget.typeButton) {
        case 'button-profile':
            profileForm.reset();
            form.classList.remove('popup_opened');
            break;
        case 'button-card':
            galleryForm.reset();
            openFormAddCard.classList.remove('popup_opened');
            break;
    }

}

closeProfile.addEventListener('click', hideClick);
closeProfile.typeButton = 'button-profile';
closeGallery.addEventListener('click', hideClick);
closeGallery.typeButton = 'button-card';

buttonAddCard.addEventListener('click', showClick);
buttonAddCard.typeButton = 'button-card';

function renderGallery() {
    let newHTML = '';
    newHTML = initialCards.map(composeCardHTML).join('');
    cardContainerElement.insertAdjacentHTML('afterbegin', newHTML);
}

function composeCardHTML(item) {
    return `<article class="gallery__card">
    <img class="gallery__image"src='${item.img}'alt="Камчатка">
    <div class="gallery__wrapper">
        <h2 class="gallery__name">${item.name}</h2>
        <button class="gallery__button"ntype="button" name="button-like"></button>
    </div>
</article>`
}

// function bindAddCardListener() {
//     const addButtonElement = document.querySelector('.profile__button-add');
//     addButtonElement.addEventListener('click', () => {

//     })
// }

renderGallery();
// bindAddCardListener();