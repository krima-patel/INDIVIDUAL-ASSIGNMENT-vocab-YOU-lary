import { createCard, updateCard } from '../../api/vocabData';
import showCards from '../components/pages/cards';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const cardObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#select-category').value,
        time: Math.floor(Date.now() / 1000),
        uid
      };
      createCard(cardObject, uid).then((cardsArray) => showCards(cardsArray));
    }

    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const cardObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#select-category').value,
        firebaseKey,
        time: Math.floor(Date.now() / 1000),
        uid
      };
      updateCard(cardObject, uid).then(showCards);
    }
  });
};

export default formEvents;
