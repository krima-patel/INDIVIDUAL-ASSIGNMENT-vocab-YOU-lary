import showCards from '../components/pages/cards';
import { getCards } from '../../api/vocabData';

const filterButtonEvents = (uid) => {
  document.querySelector('#html-btn').addEventListener('click', () => {
    getCards(uid).then((cardsArray) => showCards(cardsArray));
  });

  document.querySelector('#css-btn').addEventListener('click', () => {
    getCards(uid).then((cardsArray) => showCards(cardsArray));
  });

  document.querySelector('#javascript-btn').addEventListener('click', () => {
    getCards(uid).then((cardsArray) => showCards(cardsArray));
  });

  document.querySelector('#view-all-btn').addEventListener('click', () => {
    getCards(uid).then((cardsArray) => showCards(cardsArray));
  });
};

export default filterButtonEvents;
