export class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelector }) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector);
    }
    getUserInfo() {
            return {
                name: this._name.textContent,
                job: this._job.textContent
            }
        }

    setAvatar(data) {
        this._avatar.src = data.input_link_profile === '' ? this._avatar.src : data.input_link_profile;
    }

    initUserInfo(name, about, avatar) {
        this._name.textContent = name;
        this._job.textContent = about;
        this._avatar.src = avatar;
    }
    setUserId(id) {
        this._userId = id;
    }
    returnUserId() {
        return this._userId;
    }
}