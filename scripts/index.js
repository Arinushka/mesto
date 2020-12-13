const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');
const profileName = document.querySelector('.profile__name');;
const profileJob = document.querySelector('.profile__job');
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
const fullsizeForm = document.querySelector('.popup_fullsize_wrapper');
const buttonFullsize = document.querySelector('.popup__close-fullsize');
const titleFullsize = document.querySelector('.popup__title-fullsize');
const imageFullsize = document.querySelector('.popup__image-fullsize');
const imageGallery = document.querySelector('.gallery__image');
const buttonSubmitCard = document.querySelector('.popup__submit_gallery');

formSubmitHandler = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value === '' ? profileName.textContent : nameInput.value;
    profileJob.textContent = jobInput.value === '' ? profileJob.textContent : jobInput.value;
    hidePopup1(evt);
}
form.addEventListener('submit', formSubmitHandler);

function showEditUserPopup() {
    showPopup1 = (evt) => {
        evt.target.classList.contains('profile__button-edit');
        form.classList.add('popup_opened');
    };
    showPopup2 = (evt) => {
        evt.target.classList.contains('profile__button-add');
        formGallery.classList.add('popup_opened');
    };
    showPopup3 = () => {
        fullsizeForm.classList.add('popup_opened');
    };
    editForm.addEventListener('click', showPopup1);
    buttonAddCard.addEventListener('click', showPopup2);
}

function hideEditUserPopup() {
    hidePopup1 = (evt) => {
        evt.target.classList.contains('popup__close_proile') || evt.target.classList.contains('popup__profile-form');
        formProfile.reset();
        form.classList.remove('popup_opened');
    };

    hidePopup2 = (evt) => {
        evt.target.classList.contains('popup__close_gallery') || evt.target.classList.contains('popup__gallery-form');
        formGallery.classList.remove('popup_opened');
    };

    hidePopup3 = (evt) => {
        evt.target.classList.contains('popup__close-fullsize') || evt.target.classList.contains('popup__fullsize');
        fullsizeForm.classList.remove('popup_opened');
    };
    closeProfile.addEventListener('click', hidePopup1);
    closeGallery.addEventListener('click', hidePopup2);
    buttonFullsize.addEventListener('click', hidePopup3);
    buttonSubmitCard.addEventListener('click', hidePopup2);
}

function composeCard(item) {
    const newCard = templateElement.content.cloneNode(true);
    const headerElement = newCard.querySelector('.gallery__name');
    const imageElement = newCard.querySelector('.gallery__image');

    const buttonDelete = newCard.querySelector('.gallery__button-delete');
    const galleryCard = newCard.querySelector('.gallery__card');
    const likeButton = newCard.querySelector('.gallery__button');
    headerElement.textContent = item.name;
    imageElement.src = item.img;
    imageElement.alt = item.alt;
    imageElement.addEventListener('click', function() {
        titleFullsize.textContent = headerElement.textContent;
        imageFullsize.src = imageElement.src;
        showPopup3();
    });
    likeButton.addEventListener('click', function() {
        likeButton.classList.toggle('gallery__button_like');
    });

    buttonDelete.addEventListener('click', function() {
        galleryCard.remove();
    });
    return newCard;
}

function addNewCard() {
    const inputText = inputNameGallery.value;
    const inputLink = inputLinkGallery.value;
    const card = composeCard({ name: inputText, img: inputLink, alt: inputText });
    cardContainerElement.prepend(card);
}

galleryForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    addNewCard();
});

function renderGallery() {
    const galleryCards = initialCards.map(composeCard);
    cardContainerElement.append(...galleryCards);
}

renderGallery();
showEditUserPopup();
hideEditUserPopup();