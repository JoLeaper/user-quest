import adventureData from '../data/gym-data.js';
import { findById } from '../common/utilities.js'
import { renderResult } from './render-result.js';
const submitButton = document.getElementById('submit');

const params = new URLSearchParams(window.location.search);
const questId = params.get('id');
const currentQuest = findById(questId, adventureData);

renderResult(currentQuest, userChoice);