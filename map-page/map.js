import adventureData from '../data/gym-data.js';
import { getUser } from '../common/utilities.js';
import { createBanner } from '../common/utilities.js';
import { createLink } from './create-link.js';

const kantoMap = document.getElementById('map-container');

const userData = getUser();
createBanner(userData);
const newLink = createLink(adventureData[0]);
kantoMap.append(newLink);



// createMission(pewterBattle)
// const pewterBattle = adventureData[0];
// console.log(pewterBattle);
// console.log(userData);

/* 
get a link


*/