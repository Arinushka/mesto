export class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent
        }
    }
    setUserInfo(data) {
        this._name.textContent = data.input_name_profile === '' ? this._name.textContent : data.input_name_profile;
        this._job.textContent = data.input_job_profile === '' ? this._job.textContent : data.input_job_profile;
    }
}