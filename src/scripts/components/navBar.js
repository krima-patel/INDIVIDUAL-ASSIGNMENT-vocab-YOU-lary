import brain from '../../../image/pinkbrain.png';
import renderToDOM from '../helpers/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-5">
    <div class="container-fluid">
      <img src=${brain} "alt="image of colorful brain" width="100" height="70">
        <a class="navbar-brand title" href="#"> Vocab-YOU-lary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
            <li class="nav-item">
              <a class="nav-link" href="#" id="add-card-btn">Create Vocab Entry</a>
            </li>
          </ul>
          <span class="navbar-text">
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
