const clearDom = () => {
  document.querySelector('#cards-container').innerHTML = '';
  // document.querySelector('#filter-buttons').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
