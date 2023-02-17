
export default class UserInfo {
  constructor({profile, speciality}) {
    this._name = profile;
    this._speciality = speciality;
    
  }

  getUserInfo = () => {
    return {   
      profile: this._name.textContent,
      speciality: this._speciality.textContent
    }
  }

  setUserInfo(data) {
    this._name.textContent =  data.profile;
    this._speciality.textContent = data.speciality;
  }

} 