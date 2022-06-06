import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Vocab Cards</h1>';
  renderToDOM('#cards-container', domString);
};

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-primary btn-lg mb-4" id="add-card-btn">Add A Vocab Card</button>';

  renderToDOM('#add-button', btnString);

  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.category}</h6>
        <p class="card-text">${item.definition}</p>
        <i class="btn btn-success fas fa-eye" id="view-card-btn--${item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="edit-card-btn--${item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-card-btn--${item.firebaseKey}"></i>
      </div>
    </div>`;
    });
    renderToDOM('#cards-container', domString);
  } else {
    emptyCards();
  }
};

export default showCards;
