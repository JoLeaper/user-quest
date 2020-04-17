// import adventureData from '../data/gym-data.js';
// import { findById } from '../common/utilities.js'
import { renderResult, renderLose } from './render-result.js';
import { getUser } from '../common/utilities.js';
const submitButton = document.getElementById('submit');

renderResult();

submitButton.addEventListener('click', () => {
    const user = getUser();
    if (user === null) {
        window.location.href = '../index.html';
    } else if (user.hp < 0) {
        renderLose();
        localStorage.clear();

    } else {
        window.location.href = '../map-page/index.html';
    }

});