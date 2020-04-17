import adventureData from '../data/gym-data.js';
import { findById } from '../common/utilities.js'
import { renderQuest } from './render-quest.js';
const submitButton = document.getElementById('submit');


const params = new URLSearchParams(window.location.search);
const questId = params.get('id');


const currentQuest = findById(questId, adventureData);
renderQuest(currentQuest);

submitButton.addEventListener('click', () => {
    const userChoice = document.querySelector('input:checked');
    console.log(userChoice.value);
    // window.location.href = '../result-page/index.html';
});
