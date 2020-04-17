export const createLink = (object) => {
    const a = document.createElement('a');
    const link = document.createTextNode(`${object.title}`);

    a.appendChild(link);

    a.title = window.location.href;
    a.href = `../quest-page/index.html?id=${object.id}`;

    return a;

};