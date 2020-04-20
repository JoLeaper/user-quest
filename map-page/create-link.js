export const createQuestLink = (object) => {
    const link = document.createElement('a');
    const linkLocation = document.createTextNode(`${object.title}`);


    link.appendChild(linkLocation);

    link.title = window.location.href;
    link.href = `../quest-page/index.html?id=${object.id}`;

    link.style.position = 'absolute';
    link.style.top = object['map'].top;
    link.style.left = object['map'].left;
    link.style.background = 'black';

    return link;

};

export const createCompletedLink = (object) => {
    const completedLink = document.createElement('span');
    const completedTitle = document.createTextNode(`${object.title}`);


    completedLink.appendChild(completedTitle);

    completedLink.style.position = 'absolute';
    completedLink.style.top = object['map'].top;
    completedLink.style.left = object['map'].left;
    completedLink.style.background = 'black';
    completedLink.style.color = 'white';

    return completedLink;

};