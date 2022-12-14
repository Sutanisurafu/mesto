const profileEditButton = document.querySelector('.profile__edit-btn');
const cardLikeButton = document.querySelectorAll('.like-btn');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupContainer = document.querySelector('.popup__container');
const profileName = document.querySelector('.profile__title');
const profileSpeciality = document.querySelector('.profile__text');
const popupForm = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_type_name');
const inputSpeciality = document.querySelector('.popup__input_type_speciality');


//открытие попапа
function popupOpen() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputSpeciality.value = profileSpeciality.textContent;
}
//закрытие попапа
function popupClose() {
  popup.classList.remove('popup_opened');
}
//сохранение данных формы 
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileSpeciality.textContent = inputSpeciality.value;
  popupClose();
}

popupCloseButton.addEventListener('click', popupClose);
profileEditButton.addEventListener('click', popupOpen);
popupForm.addEventListener('submit', handleFormSubmit);



const cardsArr = [
  {
    place: 'Чусовая',
    link: 'https://www.visit-tagil.ru/upload/iblock/fcb/chusovaya_reka_.jpg'
  },
  {
    place: 'Кунгурская пещера',
    link: 'https://lh3.googleusercontent.com/p/AF1QipNRgZutp5r7YNZZkrP-Xsi0PobkaXARlbIfaYtj=s680-w680-h510'
  },
  {
    place: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    place: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    place: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1548834925-e48f8a27ae6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    place: 'Байкал',
    link: 'https://images.unsplash.com/photo-1617835594990-7cd5a9b5d153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
]; 
//пробую добавить карточки через JS 3

const cardsContainer = document.querySelector('.cards');

const createCard = (place, link) => {
  const card = document.createElement('article');
  card.classList.add('card');
  const cardImage = document.createElement('img');
  cardImage.classList.add('card__image')
  const cardTitle = document.createElement('h2');
  const cardLikeBtn = document.createElement('button');
  cardImage.textContent = link
  cardTitle.textContent = place
  cardTitle.classList.add('card__title');
  cardLikeBtn.classList.add('like-btn');
  card.append(cardImage, cardTitle, cardLikeBtn);
  return card;
}


const cardsTemplate = document.querySelector('#cards-template').content;
cardsArr.forEach(function (element) {
  const cardsElement = cardsTemplate.cloneNode(true);

  cardsElement.querySelector('.card__title').textContent = element.place;
  cardsElement.querySelector('.card__image').src = element.link;
  cardsContainer.append(cardsElement);
})





















// //закрытие попапа по нажанию мимо него
// popup.addEventListener('click', function(event) {
//   if(!event.defaultPrevented) {
//     popupClose();
//   }
// })

// popupContainer.addEventListener('click', function(event) {
//   event.preventDefault();
// })

//кнопка лайк
// for (let i = 0; i < cardLikeButton.length; i++) {
//   cardLikeButton[i].addEventListener("click", function liki() {
//     if(cardLikeButton[i].classList.contains('like-btn_active')) {
//       cardLikeButton[i].classList.remove("like-btn_active")
//     } else {cardLikeButton[i].classList.add("like-btn_active");
//   }
    
//   });
// }


