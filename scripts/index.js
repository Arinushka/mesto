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
const popups = document.querySelectorAll('.popup');

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
    showPopup(popupEditProfile);
});
buttonAddCard.addEventListener('click', () => {
    showPopup(formGallery);
});

// функция закрытия попапов и удаление слушателя для ф-ии closeByEscape
const hidePopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

// Геннадий, спасибо вам большое за такое развернутое объяснение!!! Все очень понятно, все бы так объясняли)))

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

// функция добавления слушателя открытому попапу
function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened')
        hidePopup(openedPopup);
    }
}

// функция формирования карточки по шаблону
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
        titleFullsize.textContent = item.name;
        imageFullsize.src = item.img;
        imageFullsize.alt = item.name;
        showPopup(fullsizeForm);
    });
    // добавление лайков
    likeButton.addEventListener('click', function() {
        likeButton.classList.toggle('gallery__button_like');
    });
    // удаление карточки
    buttonDelete.addEventListener('click', function() {
        galleryCard.remove();
    });
    return newCard;
}

// функция добавления новой карточки
function addNewCard() {
    const inputText = inputNameGallery.value;
    const inputLink = inputLinkGallery.value;
    const card = composeCard({ name: inputText, img: inputLink, alt: inputText });
    cardContainerElement.prepend(card);
}

galleryForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    addNewCard();
    hidePopup(formGallery);
});

// функция отрисовки первых 6 карточек
function renderGallery() {
    const galleryCards = initialCards.map(composeCard);
    cardContainerElement.append(...galleryCards);
}

renderGallery();