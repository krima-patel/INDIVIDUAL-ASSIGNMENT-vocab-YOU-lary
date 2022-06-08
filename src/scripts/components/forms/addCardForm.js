import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addCardForm = (obj = {}) => {
  clearDom();
  const domString = `<form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" placeholder="What's the word or phase?" value="${obj.title || ''}" required>
  </div>
  <div class="form-group">
    <label for="definition">Definition</label>
    <input type="text" class="form-control" id="definition" placeholder="What does it mean?" value="${obj.definition || ''}" required>
  </div>
  
  <select class="form-select" aria-label="Select Language" id="select-category">
    <option selected>${obj.category || 'Select Language'}</option>
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="javascript">JavaScript</option>
  </select>
  
  <button type="submit" class="btn btn-success mt-3">Submit Vocab</button>
</form>`;

  renderToDOM('#form-container', domString);
};

export default addCardForm;
