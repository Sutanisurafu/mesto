export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

getUserInfo() {
    return fetch(`${this._url}/users/me`, {
        method: "GET",
        headers: this._headers,
    }).then(this._checkResponse);
}

getCards() {
    return fetch(`${this._url}/cards`, {
        method: "GET",
        headers: this._headers,
    }) 
    .then(this._checkResponse)
    
}

editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
            name: data._name,
            about: data._speciality,
        }),
    }).then(this._checkResponse);
}

editAvatar(userAvatar) {
    return fetch(`${this._url}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
            avatar: userAvatar,
        }),
    }).then(this._checkResponse);
}

addCard(data) {
    return fetch(`${this._url}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
            name: data['card-name'],
            link: data['card-image'],
        }),
    }).then(this._checkResponse);
}

addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: this._headers,
    }).then(this._checkResponse);
}

deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: this._headers,
    }).then(this._checkResponse);
}

deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
    }).then(this._checkResponse);
}
}