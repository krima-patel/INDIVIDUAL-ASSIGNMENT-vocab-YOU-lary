import navigationEvents from '../events/navigationEvents';
import formEvents from '../events/formEvents';
import showCards from '../components/pages/cards';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import { getCards } from '../../api/vocabData';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  formEvents(user.uid);
  navBar();
  logoutButton();
  navigationEvents(user.uid);
  getCards(user.uid).then((cardsArray) => showCards(cardsArray));
};

export default startApp;
