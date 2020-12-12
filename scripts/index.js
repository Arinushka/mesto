let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');
let profileName = document.querySelector('.profile__name');;
let profileJob = document.querySelector('.profile__job');
const editForm = document.querySelector('.profile__button-edit');
const closeProfile = document.querySelector('.popup__close_proile');
const closeGallery = document.querySelector('.popup__close_gallery');
const form = document.querySelector('.popup_profile');
const formGallery = document.querySelector('.popup_gallery');
const formProfile = document.querySelector('.popup__profile-form');
const galleryForm = document.querySelector('.popup__gallery-form');
const cardContainerElement = document.querySelector('.gallery');
const buttonAddCard = document.querySelector('.profile__button-add');
const inputNameGallery = document.querySelector('.popup__name_gallery');
const inputLinkGallery = document.querySelector('.popup__link');
const templateElement = document.querySelector('.template');
let likeButton;
const fullsizeForm = document.querySelector('.popup__fullsize-wrapper');
const buttonFullsize = document.querySelector('.popup__close-fullsize');
const titleFullsize = document.querySelector('.popup__title-fullsize');
const imageFullsize = document.querySelector('.popup__image-fullsize');
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
        formGallery.classList.add('popup_opened');
        return;
    }
}

editForm.addEventListener('click', showClick);



hideClick = (evt) => {
    if (evt.target.classList.contains('popup__close_proile') || evt.target.classList.contains('popup__profile-form')) {
        formProfile.reset();
        form.classList.remove('popup_opened');
        return;
    }
    if (evt.target.classList.contains('popup__close_gallery') || evt.target.classList.contains('popup__gallery-form')) {
        formGallery.classList.remove('popup_opened');
        return;
    }
    if (evt.target.classList.contains('popup__close-fullsize') || evt.target.classList.contains('popup__fullsize')) {
        fullsizeForm.classList.remove('popup_opened');
        return;
    }
}

closeProfile.addEventListener('click', hideClick);
closeGallery.addEventListener('click', hideClick);
buttonFullsize.addEventListener('click', hideClick);
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
    const buttonDelete = newCard.querySelector('.gallery__button-delete');
    const galleryCard = newCard.querySelector('.gallery__card');
    headerElement.textContent = item.name;
    imageElement.src = item.img;
    imageAlt.alt = item.alt;
    imageElement.addEventListener('click', function() {
        titleFullsize.textContent = headerElement.textContent;
        imageFullsize.src = imageElement.src;
        fullsizeForm.classList.add('popup_opened');
    });
    buttonDelete.addEventListener('click', function() {
        galleryCard.remove();
    });
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

renderGallery();
likeButtonActive();