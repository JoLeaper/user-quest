export const getUser = (() => {
    const stringyUser = localStorage.getItem('USER');
    const user = JSON.parse(stringyUser);
    return user;
});

// export const createBanner = ((userData) => {
//     const trainerImage = document.getElementById('trainer-picture');

//     trainerImage.src = `../` + userData.image;


// });