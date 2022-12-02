const profileEditButton = document.querySelector('.profile__edit-btn');
const cardLikeButton = document.querySelectorAll('.like-btn');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupContainer = document.querySelector('.popup__container');
const ProfileName = document.querySelector('.profile__title');
const ProfileSpeciality = document.querySelector('.profile__text');
const popupForm = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_type_name');
const inputSpeciality = document.querySelector('.popup__input_type_speciality');

//открытие попапа
function popupOpen() {
  popup.classList.add('popup_opened');
}

//закрытие попапа
function popupClose() {
  popup.classList.remove('popup_opened');
}

//сохранение данных формы 
function handleFormSubmit (evt) {
  evt.preventDefault();
  ProfileName.textContent = inputName.value;
  ProfileSpeciality.textContent = inputSpeciality.value;
  popupClose();
}


popupCloseButton.addEventListener('click', popupClose);
profileEditButton.addEventListener('click', popupOpen);
popupForm.addEventListener('submit', handleFormSubmit);






//кнопка лайк
for (let i = 0; i < cardLikeButton.length; i++) {
  cardLikeButton[i].addEventListener("click", function liki() {
    if(cardLikeButton[i].classList.contains('like-btn_active')) {
      cardLikeButton[i].classList.remove("like-btn_active")
    } else {cardLikeButton[i].classList.add("like-btn_active");
  }
    
  });
}



// //закрытие попапа по нажанию мимо него
// popup.addEventListener('click', function(event) {
//   if(!event.defaultPrevented) {
//     popupClose();
//   }
// })

// popupContainer.addEventListener('click', function(event) {
//   event.preventDefault();
// })
