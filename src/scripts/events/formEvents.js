import { createCard, updateCard } from '../../api/vocabData';
import showCards from '../components/pages/cards';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      console.warn('Clicked submit card', e.target.id);
      const cardObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        uid
      };
      createCard(cardObject, uid).then((cardsArray) => showCards(cardsArray));
    }

    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('Clicked update card', e.target.id);
      const cardObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        firebaseKey,
        uid
      };
      updateCard(cardObject, uid).then(showCards);
    }
  });
};

export default formEvents;
