export const renderQuest = (currentQuest) => {
    const questTitle = document.getElementById('quest-title');
    const questDescription = document.getElementById('quest-description');

    const firstOption = document.getElementById('option1');
    const secondOption = document.getElementById('option2');
    const thirdOption = document.getElementById('option3');

    const firstSelect = document.getElementById('choice1');
    const secondSelect = document.getElementById('choice2');
    const thirdSelect = document.getElementById('choice3');
    // const secondSelect =
    // const thirdSelect =

    questTitle.textContent = currentQuest.title;
    questDescription.textContent = currentQuest.description;

    firstOption.textContent = currentQuest.choices[0].description;
    firstSelect.value = currentQuest.choices[0].id;

    secondOption.textContent = currentQuest.choices[1].description;
    secondSelect.value = currentQuest.choices[1].id;

    thirdOption.textContent = currentQuest.choices[2].description;
    thirdSelect.value = currentQuest.choices[2].id;
};