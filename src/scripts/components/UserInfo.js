
export default class UserInfo {
  constructor({profile, speciality, avatar}) {
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
    this._avatar.src = data.avatar;
  }

  setUserAvatar(data) {
    console.log(data)
     this._avatar.src = data.avatar;
  }
} 