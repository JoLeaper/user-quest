// import adventureData from '../data/gym-data.js';
// import { findById } from '../common/utilities.js'
import { renderResult, renderLose, renderFinal } from './render-result.js';
import { getUser } from '../common/utilities.js';
import { hasCompleted } from '../result-page/has-completed.js';
const submitButton = document.getElementById('submit');

renderResult();

submitButton.addEventListener('click', () => {
    const user = getUser();

    if (user === null) {
        window.location.href = '../index.html';
        return;
    }
    const completed = hasCompleted(user);

    if (completed === true) {
        renderFinal(user);
        localStorage.clear();
    
    } else if (user.hp < 0) {
        renderLose(user);
        localStorage.clear();

    } else {
        window.location.href = '../map-page/index.html';
    }

});