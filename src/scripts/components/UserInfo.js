
export default class UserInfo {
   constructor(profile, speciality, avatar) {
    this._name = profile;
    this._speciality = speciality;
    this._avatar = avatar;
  }

  getUserInfo = () => {
    return {   
      profile: this._name.textContent,
      speciality: this._speciality.textContent
    }
  }

  setUserInfo(data) {
    this._name.textContent =  data.name;
    this._speciality.textContent = data.about;
  }

  setUserAvatar(data) {
     this._avatar.src = data.avatar;
  }

  setId(userId) {
    this._userId = userId;
  }

  getId() {
    return this._userId;
  }

} 