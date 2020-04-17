export const createQuestLink = (object) => {
    const link = document.createElement('a');
    const linkLocation = document.createTextNode(`${object.title}`);


    link.appendChild(linkLocation);

    link.title = window.location.href;
    link.href = `../quest-page/index.html?id=${object.id}`;

    //style 1
    //style 2
    //style 3

    return link;

};

export const createCompletedLink = (object) => {
    const completedLink = document.createElement('span');
    const completedTitle = document.createTextNode(`${object.title}`);


    completedLink.appendChild(completedTitle);


    //style 1
    //style 2
    //style 3

    return completedLink;

};