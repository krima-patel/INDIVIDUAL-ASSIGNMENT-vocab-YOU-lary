import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getCards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createCard = (cardObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/cards.json`, cardObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/cards/${response.data.name}.json`, payload)
        .then(() => {
          getCards(cardObject.uid).then(resolve);
        });
    }).catch(reject);
});

const deleteCard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/cards/${firebaseKey}.json`)
    .then(() => {
      getCards(uid).then((cardsArray) => resolve(cardsArray));
    })
    .catch((error) => reject(error));
});

const updateCard = (cardObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/cards/${cardObject.firebaseKey}.json`, cardObject)
    .then(() => getCards(cardObject.uid).then(resolve))
    .catch(reject);
});

const htmlLang = (uid) => new Promise((resolve, reject) => {
  getCards(uid)
    .then((cardsByUser) => {
      const htmlCards = cardsByUser.filter((card) => card.lang === 'html');
      resolve(htmlCards);
    }).catch((error) => reject(error));
});

const cssLang = (uid) => new Promise((resolve, reject) => {
  getCards(uid)
    .then((cardsByUser) => {
      const cssCards = cardsByUser.filter((card) => card.lang === 'css');
      resolve(cssCards);
    }).catch((error) => reject(error));
});

const javascriptLang = (uid) => new Promise((resolve, reject) => {
  getCards(uid)
    .then((cardsByUser) => {
      const javascriptCards = cardsByUser.filter((card) => card.lang === 'javascript');
      resolve(javascriptCards);
    }).catch((error) => reject(error));
});

export {
  getCards,
  getSingleCard,
  createCard,
  deleteCard,
  updateCard,
  htmlLang,
  cssLang,
  javascriptLang
};
