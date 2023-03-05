const loadMemes = () => {
    const URL = 'https://meme-api.com/gimme/25';
    fetch(URL)
    .then(response => response.json())
    .then(data => showMeme(data.memes.slice(0, 5)))
    .catch(error => {
        console.log(error);
    })
};

const showMeme = (memes) => {
    memes.slice(0, 5).forEach(meme => {
        // console.log(meme.url);
    const memeContainer = document.getElementById('section');
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${meme.url}"></img>
    `;
    memeContainer.appendChild(div);
});
};

loadMemes();
// console.log(memes)