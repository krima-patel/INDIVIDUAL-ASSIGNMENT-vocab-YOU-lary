import addCardForm from '../components/forms/addCardForm';

const navigationEvents = (uid) => {
  document.querySelector('#add-card-btn').addEventListener('click', () => {
    addCardForm(uid);
  });
};

export default navigationEvents;
