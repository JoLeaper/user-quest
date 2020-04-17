import adventureData from '../data/gym-data.js';
import { getUser } from '../common/utilities.js';
import { createBanner } from '../common/utilities.js';
import { createLink } from './create-link.js';

const kantoMap = document.getElementById('map-container');

const userData = getUser();
createBanner(userData);

adventureData.forEach((adventure) => {
    const newLink = createLink(adventure);
    kantoMap.append(newLink);
});
