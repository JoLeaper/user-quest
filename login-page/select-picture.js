export function selectPicture (trainerType) {
    let userPicture;
    
    if (trainerType === 'boy') {
        const boyPicture = document.getElementById('boy-trainer');
        userPicture = boyPicture.getAttribute('src');
    } else {
        const girlPicture = document.getElementById('girl-trainer');
        userPicture = girlPicture.getAttribute('src');
    }
    return userPicture;
}