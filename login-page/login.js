import { createUser } from './create-user.js';
const userForm = document.getElementById('trainer-information');

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(userForm);


    const userName = form.get('username');
    const userPicture = form.get('trainer-pic');

    if (!localStorage.getItem('USER')) {
        createUser(userName, userPicture);
    }

    window.location.href = '../map-page/index.html';
});