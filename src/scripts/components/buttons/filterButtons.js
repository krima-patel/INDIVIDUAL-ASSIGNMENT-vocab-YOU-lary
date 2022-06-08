import renderToDOM from '../../helpers/renderToDom';

const filterButtons = () => {
  const domString = `
  <div class=class="d-grid gap-2 d-md-block">
  <button type="button" class="btn btn-info" id="html-btn">HTML</button>
  <button type="button" class="btn btn-info" id="css-btn">CSS</button>
  <button type="button" class="btn btn-info" id="javascript-btn">JavaScript</button>
  <button type="button" class="btn btn-info" id="view-all-btn">View All Languages</button></div>`;

  renderToDOM('#filter-buttons', domString);
};

export default filterButtons;
