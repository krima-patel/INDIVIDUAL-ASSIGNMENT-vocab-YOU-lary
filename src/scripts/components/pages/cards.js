import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyCards = () => {
  document.querySelector('#cards-container').innerHTML = '<h1>No Vocab Cards... Yet</h1>';
};

const showCards = (array) => {
  clearDom();

  // const btnString = '<button class="btn btn-primary btn-lg mb-4" id="add-card-btn">Create a Vocab Entry</button>';
  // renderToDOM('#add-button', btnString);

  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.category}</h6>
        <p class="card-text">${item.definition}</p>
        <button type="button" class="btn btn-primary" id="edit-card-btn--${item.firebaseKey}">Edit Card</button>
        <button type="button" class="btn btn-danger" id="delete-card-btn--${item.firebaseKey}">Delete Card</button>
      </div>
    </div>`;
    });
    renderToDOM('#cards-container', domString);
  } else {
    emptyCards();
  }
};

export default showCards;
