import renderToDOM from '../../helpers/renderToDom';

const filterButtons = () => {
  const domString = `
  <div class="d-grid gap-2 d-md-block">
  <button type="button" class="btn btn-light" id="html-btn">HTML</button>
  <button type="button" class="btn btn-light" id="css-btn">CSS</button>
  <button type="button" class="btn btn-light" id="javascript-btn">JavaScript</button>
  <button type="button" class="btn btn-light" id="view-all-btn">View All Languages</button></div>`;

  renderToDOM('#filter-buttons', domString);
};

export default filterButtons;
