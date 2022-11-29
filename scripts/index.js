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




console.log({profileEditButton, profileAddButton, cardLikeButton, popupCloseButton});