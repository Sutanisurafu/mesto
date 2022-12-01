//profile__edit-btn
//profile__add-btn
//card__like-btn


const profileEditButton = document.querySelector('.profile__edit-btn');
const profileAddButton = document.querySelector('.profile__add-btn');
const cardLikeButton = document.querySelector('.card__like-btn');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupContainer = document.querySelector('.popup__container');

function popupOpen() {
  popup.classList.add('popup__opened');
}

function popupClose() {
  popup.classList.remove('popup__opened');
}
//закрытие попапа
popup.addEventListener('click', function(event) {
  if(!event.defaultPrevented) {
    popupClose();
  }
})

popupContainer.addEventListener('click', function(event) {
  event.preventDefault();
})

popupCloseButton.addEventListener('click', popupClose);
profileEditButton.addEventListener('click',popupOpen);

//редактирование профиля
document.querySelector('.input__text_type_name').value = document.querySelector('.profile__title').textContent;
document.querySelector('.input__text_type_speciality').value = document.querySelector('.profile__text').textContent;
document.querySelector('.popup__submit-btn').onclick = editProfile;

function editProfile() {
  let inputName = document.querySelector('.input__text_type_name').value;
  let inputSpeciality = document.querySelector('.input__text_type_speciality').value;
  document.querySelector('.profile__title').innerHTML = inputName;
  document.querySelector('.profile__text').innerHTML = inputSpeciality;
  console.log(inputName, inputSpeciality);
  popupClose();
}

//кнопка лайк

//cardLikeButton.onclick = buttonActive;

//function buttonActive() {
//  cardLikeButton.setAttribute('background-image', 'url(/image/like-button_type_active.svg)');
//}
