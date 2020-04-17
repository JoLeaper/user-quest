import adventureData from '../data/gym-data.js';
import { getUser } from '../common/utilities.js';
import { createBanner } from '../common/utilities.js';
import { createQuestLink, createCompletedLink } from './create-link.js';

const kantoMap = document.getElementById('map-container');

const userData = getUser();
createBanner(userData);

adventureData.forEach((adventure) => {
    let newLink;

    if (userData.completed[`${adventure.id}`] === true) {
        newLink = createCompletedLink(adventure);
    } else {
        newLink = createQuestLink(adventure);
    }
    kantoMap.append(newLink);

});
