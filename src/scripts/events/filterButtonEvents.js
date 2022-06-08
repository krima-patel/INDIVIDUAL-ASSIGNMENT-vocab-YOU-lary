import showCards from '../components/pages/cards';
import {
  cssLang, getCards, htmlLang, javascriptLang
} from '../../api/vocabData';

const filterButtonEvents = (uid) => {
  document.querySelector('#html-btn').addEventListener('click', () => {
    console.warn('clicked html');
    htmlLang(uid).then((cardsArray) => showCards(cardsArray));
  });

  document.querySelector('#css-btn').addEventListener('click', () => {
    cssLang(uid).then((cardsArray) => showCards(cardsArray));
  });

  document.querySelector('#javascript-btn').addEventListener('click', () => {
    javascriptLang(uid).then((cardsArray) => showCards(cardsArray));
  });

  document.querySelector('#view-all-btn').addEventListener('click', () => {
    getCards(uid).then((cardsArray) => showCards(cardsArray));
  });
};

export default filterButtonEvents;
