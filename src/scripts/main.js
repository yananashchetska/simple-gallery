const gallery = document.querySelector('.gallery');
const largeImage = gallery.querySelector('#largeImg');

gallery.addEventListener('click', ev => {
    ev.preventDefault();
    const targetSrc = ev.target.getAttribute('src');
    const imageNumberStr = targetSrc.split('-')[1];
    largeImage.setAttribute('src', `./images/landscape-${imageNumberStr}.png`); // Встановлюємо src для largeImage
});