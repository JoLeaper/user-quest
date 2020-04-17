export const getUser = (() => {
    const stringyUser = localStorage.getItem('USER');
    const user = JSON.parse(stringyUser);
    return user;
});

export const createBanner = ((userData) => {
    console.log(userData);
    console.log(userData.exp);
    const trainerImage = document.getElementById('trainer-picture');
    const trainerName = document.getElementById('name');
    const trainerHp = document.getElementById('hp');
    const trainerExp = document.getElementById('exp');

    console.log(userData.image);
    trainerImage.src = `../${userData.icon}`;
    trainerName.textContent = userData.name;
    trainerHp.textContent = userData.hp;
    trainerExp.textContent = userData.exp;


});