import { deleteCard, getSingleCard } from '../../api/vocabData';
import addCardForm from '../components/forms/addCardForm';
import showCards from '../components/pages/cards';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete this card?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey, uid).then((cardsArray) => showCards(cardsArray));
      }
    }

    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObject) => addCardForm(cardObject, uid));
    }

    if (e.target.id.includes('add-card-btn')) {
      addCardForm({}, uid);
    }
  });
};

export default domEvents;
