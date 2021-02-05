export class UserInfo {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._nameInput = this._popupSelector.querySelector('.popup__name');
        this._name = document.querySelector('.profile__name');
        this._jobInput = this._popupSelector.querySelector('.popup__job');
        this._job = document.querySelector('.profile__job');
    }
    getUserInfo() {
        this._nameInput.value = this._name.textContent;
        this._jobInput.value = this._job.textContent;

    }
    setUserInfo() {
        this._name.textContent = this._nameInput.value === '' ? this._name.textContent : this._nameInput.value;
        this._job.textContent = this._jobInput.value === '' ? this._job.textContent : this._jobInput.value;
    }
}