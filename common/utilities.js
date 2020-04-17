export const getUser = (() => {
    const stringyUser = localStorage.getItem('USER');
    const user = JSON.parse(stringyUser);
    return user;
});

export const createBanner = ((userData) => {
    const trainerImage = document.getElementById('trainer-picture');
    const trainerName = document.getElementById('name');
    const trainerHp = document.getElementById('hp');
    const trainerExp = document.getElementById('exp');

    trainerImage.src = `../${userData.icon}`;
    trainerName.textContent = userData.name;
    trainerHp.textContent = userData.hp;
    trainerExp.textContent = userData.exp;
});

export const findById = ((id, array) => {
    let foundObject;
    
    for (let i = 0; i < array.length; i++) {
        const singleObject = array[i];
        if (singleObject.id === id) {
            foundObject = singleObject;
        }    
    } 
    return foundObject;
});