export const createUser = ((userName, userPicture) => {
    const user = {
        completed: {},
        icon: userPicture,
        name: userName,
        hp: 100,
        exp: 0
    };
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
});