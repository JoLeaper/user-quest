import { findById, getUser } from '../common/utilities.js';
import { hpArray, expArray } from '../data/final-result.js';

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
    userData.completed[`${currentQuest.id}`] = true;

    questTitle.textContent = currentQuest.title;
    questResult.textContent = resultMessage;

    const updatedUserData = JSON.stringify(userData);
    localStorage.setItem('USER', updatedUserData);

    const emptyArray = [];
    const stringyEmptyArray = JSON.stringify(emptyArray);
    localStorage.setItem('CHOICE', stringyEmptyArray);

};


export const renderLose = () => {
    // grabs the HTML elements to be rendered
    const questTitle = document.getElementById('quest-title');
    const questResult = document.getElementById('result-message');

    const resultMessage = `You battled as hard as you could, but you couldn't make it to the League! Remember, every Pokemon has strengths and weaknesses.
    Study up, and you'll be able to make it to the league next time!`;

    // userData.hp += result.hp;
    // userData.exp += result.experience;
    // userData.completed[`${currentQuest.id}`] = true;

    questTitle.textContent = 'Too Bad!';
    questResult.textContent = resultMessage;
};

export const renderFinal = () => {
    const questTitle = document.getElementById('quest-title');
    const questResult = document.getElementById('result-message');

    const user = getUser();
    const finalHp = user.hp;
    const finalExp = user.exp;

    let hpMessageIndex;
    let expMessageIndex;

    if (finalHp > 67) {
        hpMessageIndex = 0;
    } else if (finalHp < 67 && finalHp > 33) {
        hpMessageIndex = 1;
    } else {
        hpMessageIndex = 2;
    }

    if (finalExp > 67) {
        expMessageIndex = 0;
    } else if (finalExp < 67 && finalExp > 33) {
        expMessageIndex = 1;
    } else {
        expMessageIndex = 2;
    }
    


    const resultMessage = `${user.name}, congratulations for making it to the Pokemon League! Only a select few trainers can say they made it this far, so you've already cemented your place in history!
    ${hpArray[hpMessageIndex]}. After the Champion arrives, ${expMessageIndex}.`

    questTitle.textContent = 'Indigo Plateau';
    questResult.textContent = resultMessage;

}