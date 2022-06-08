// import renderToDOM from '../../helpers/renderToDom';
// import { getCards } from '../../../api/vocabData';

// const selectCard = (uid, cardId) => {
//   let domString = `<label for="category-language">Select a Language</label>
//     <select class="form-control" id="category_card_id" required>
//     <option value="">Select a Language</option>`;

//   getCards(uid).then((cardsArray) => {
//     cardsArray.forEach((card) => {
//       domString += `
//           <option
//             value="${card.firebaseKey}"
//             ${cardId === card.firebaseKey ? 'selected' : ''}>
//               ${card.category}
//           </option>`;
//     });

//     domString += '</select>';

//     renderToDOM('#select-category', domString);
//   });
// };

// export default selectCard;
