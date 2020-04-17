import { findById } from '../common/utilities.js';

export const renderResult = () => {
    // grabs the HTML elements to be rendered
    const questTitle = document.getElementById('quest-title');
    const questResult = document.getElementById('result-message');

    // grabs the user profile and choices from local storage
    const questInfo = localStorage.getItem('CHOICE');
    const parsedQuestInfo = JSON.parse(questInfo);
    const currentQuest = parsedQuestInfo[0];
    const userChoice = parsedQuestInfo[1];

    const stringyUserData = localStorage.getItem('USER');
    const userData = JSON.parse(stringyUserData);



    const result = findById(userChoice, currentQuest.choices);
    const resultMessage = result.result;

    userData.hp += result.hp;
    userData.exp += result.experience;

    questTitle.textContent = currentQuest.title;
    questResult.textContent = resultMessage;

    const updatedUserData = JSON.stringify(userData);
    localStorage.setItem('USER', updatedUserData);

    const emptyArray = [];
    const stringyEmptyArray = JSON.stringify(emptyArray);
    localStorage.setItem('CHOICE', stringyEmptyArray);


};