// import adventureData from '../data/gym-data.js';
// import { findById } from '../common/utilities.js'
import { renderResult, renderLose } from './render-result.js';
import { getUser } from '../common/utilities.js';
const submitButton = document.getElementById('submit');
const user = getUser();

if (user.hp) {
    renderLose();
    localStorage.clear();
} else {
    renderResult();
}


submitButton.addEventListener('click', () => {
    if (user.hp < 0) {
        window.location.href = '../index.html';

    } else {
        window.location.href = '../map-page/index.html';
    }

});