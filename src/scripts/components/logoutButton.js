import firebase from 'firebase/app';
import 'firebase/auth';
import renderToDOM from '../helpers/renderToDom';

const signMeOut = () => {
  firebase.auth().signOut();
};

const logoutButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">Log Out</button>';
  // document.querySelector('#login-form-container').innerHTML = (domString);
  renderToDOM('#logout-button', domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
