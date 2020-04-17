export const storeChoice = (currentQuest, userChoice) => {
    const choiceArray = [currentQuest, userChoice];
    const stringyChoiceArray = JSON.stringify(choiceArray);
    localStorage.setItem('CHOICE', stringyChoiceArray);
};

