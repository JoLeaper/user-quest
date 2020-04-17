import { createUser } from './create-user.js';
import { selectPicture } from './select-picture.js';
const userForm = document.getElementById('trainer-information');

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(userForm);
    const userName = form.get('username');
    const trainerType = form.get('trainer-pic');

    const userPicture = selectPicture(trainerType);

    if (!localStorage.getItem('USER')) {
        createUser(userName, userPicture);
    }

    window.location.href = '../map-page/index.html';

});