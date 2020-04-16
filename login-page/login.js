import { createUser } from './create-user.js';
const userForm = document.getElementById('trainer-information');

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(userForm);
    const userName = form.get('username');
    const trainerType = form.get('trainer-pic');
    let userPicture;

    if (trainerType === 'boy') {
        const boyPicture = document.getElementById('boy-trainer');
        userPicture = boyPicture.getAttribute('src');
    } else {
        const girlPicture = document.getElementById('girl-trainer');
        userPicture = girlPicture.getAttribute('src');
    }
    console.log(userPicture);
    // // const userPicture = imgElement.getAttribute('src');
    // if (boyOrGirl === 'boy') {
    //     const userPicture = boyOrGirl.getAttribute('src');
    // } else {
    //     const userPicture = 
    // }

    if (!localStorage.getItem('USER')) {
        createUser(userName, userPicture);
    }

    // window.location.href = '../map-page/index.html';

});