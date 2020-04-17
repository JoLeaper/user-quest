// import adventureData from '../data/gym-data.js';
// import { findById } from '../common/utilities.js'
import { renderResult } from './render-result.js';
const submitButton = document.getElementById('submit');

renderResult();

submitButton.addEventListener('click', () => {
    window.location.href = '../map-page/index.html';
});