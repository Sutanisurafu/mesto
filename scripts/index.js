//profile__edit-btn
//profile__add-btn
//card__like-btn


const profileEditButton = document.querySelector('.profile__edit-btn');
const profileAddButton = document.querySelector('.profile__add-btn');
const cardLikeButton = document.querySelectorAll('.like-btn');
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
document.querySelector('.popup__input-name').value = document.querySelector('.profile__title').textContent;
document.querySelector('.popup__input-speciality').value = document.querySelector('.profile__text').textContent;
document.querySelector('.popup__submit-btn').onclick = editProfile;

function editProfile() {
  let inputName = document.querySelector('.popup__input-name').value;
  let inputSpeciality = document.querySelector('.popup__input-speciality').value;
  document.querySelector('.profile__title').innerHTML = inputName;
  document.querySelector('.profile__text').innerHTML = inputSpeciality;
  console.log(inputName, inputSpeciality);
  popupClose();
}

//кнопка лайк


for (let i = 0; i < cardLikeButton.length; i++) {
  cardLikeButton[i].addEventListener("click", function liki() {
    if(cardLikeButton[i].classList.contains('like-btn_condition_active')) {
      cardLikeButton[i].classList.remove("like-btn_condition_active")
    } else {cardLikeButton[i].classList.add("like-btn_condition_active");
  }
    
  });
}
 