import adventureData from '../data/gym-data.js';
import { findById } from '../common/utilities.js'

const params = new URLSearchParams(window.location.search);
const questId = params.get('id');

const currentQuest = findById(questId, adventureData);
console.log(currentQuest);
