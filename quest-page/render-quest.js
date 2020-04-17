// export const createBattleLink = (battle) => {
//     const link 

// }

export const renderQuest = (currentQuest) => {
    const questTitle = document.getElementById('quest-title');
    const questDescription = document.getElementById('quest-description');
    const firstOption = document.getElementById('option1');
    const secondOption = document.getElementById('option2');
    const thirdOption = document.getElementById('option3');

    questTitle.textContent = currentQuest.title;
    questDescription.textContent = currentQuest.description;
    console.log(currentQuest.choices[0]);
    firstOption.textContent = currentQuest.choices[0].description;
    secondOption.textContent = currentQuest.choices[1].description;
    thirdOption.textContent = currentQuest.choices[2].description;
};