import renderToDOM from '../../helpers/renderToDom';
import clearDom from '../../helpers/clearDom';

const viewCard = (obj) => {
  clearDom();

  const domString = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title" id="card-title">${obj.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted" id="card-category">${obj.category}</h6>
    <p class="card-text" id="card-definition">${obj.definition}</p>
    <button type="button" class="btn btn-primary" id="edit-card-btn--${obj.firebaseKey}">Edit Card</button>
    <button type="button" class="btn btn-danger" id="delete-card-btn--${obj.firebaseKey}">Delete Card</button>
  </div>
</div>`;

  renderToDOM('#view', domString);
};

export default viewCard;
