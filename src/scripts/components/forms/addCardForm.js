import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `<form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
  <div class="form-group">
    <label for="image">Title</label>
    <input type="text" class="form-control" id="title" placeholder="What's the word or phase?" value="${obj.title || ''}" required>
  </div>
  <div class="form-group">
    <label for="image">Definition</label>
    <input type="text" class="form-control" id="definition" placeholder="What does it mean?" value="${obj.definition || ''}" required>
  </div>
  <div class="form-group">
    <label for="title">Langauge</label>
    <input type="text" class="form-control" id="language" placeholder="Which language?" value="${obj.category || ''}" required>
  </div>
  <button type="submit" class="btn btn-primary mt-3">Submit Author</button>
</form>`;

  renderToDOM('#form-container', domString);
};

export default addCardForm;
