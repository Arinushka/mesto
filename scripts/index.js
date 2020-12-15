const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');
const profileName = document.querySelector('.profile__name');;
const profileJob = document.querySelector('.profile__job');
const editForm = document.querySelector('.profile__button-edit');
const closeProfile = document.querySelector('.popup__close_proile');
const closeGallery = document.querySelector('.popup__close_gallery');
const popupEditProfile = document.querySelector('.popup_profile');
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
    hidePopup(popupEditProfile);
}
popupEditProfile.addEventListener('submit', formSubmitHandler);

showPopup = (popup) => {
    popup.classList.add('popup_opened');
}

editForm.addEventListener('click', () => {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    showPopup(popupEditProfile);
});
buttonAddCard.addEventListener('click', () => {
    showPopup(formGallery);
});

hidePopup = (popup) => {
    popup.classList.remove('popup_opened');
}

closeProfile.addEventListener('click', () => {
    hidePopup(popupEditProfile);
});
closeGallery.addEventListener('click', () => {
    hidePopup(formGallery);
});
buttonFullsize.addEventListener('click', () => {
    hidePopup(fullsizeForm);
});
buttonSubmitCard.addEventListener('click', () => {
    hidePopup(formGallery);
});

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
        imageFullsize.alt = imageElement.alt;
        showPopup(fullsizeForm);
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