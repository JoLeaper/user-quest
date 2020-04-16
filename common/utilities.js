export const getUser = (() => {
    const stringyUser = localStorage.getUser('USER');
    const user = JSON.parse(stringyUser);
    return user;
});