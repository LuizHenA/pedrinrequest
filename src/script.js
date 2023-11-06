const img = document.querySelector('#img');
const value = document.querySelector('#showValue');
const btn = document.querySelector('#btn');
const audio = document.querySelector('#audio');
let number = 0;
const p = document.querySelector('#paragraph');
const pImg = document.querySelector('#p-img');
const fototeta = 'Fofa\nOtimista\nTalentosa\nObstinada\nTranquila\nExuberante\nTranquilizante\nAmorosa';
p.style.whiteSpace = 'pre-line'

const collectionButton = document.querySelector('#collection-button');
const diceButton = document.querySelector('#dice-button');
const diceSection = document.querySelector('#dice-section');
const collectionSection = document.querySelector('#collection-section');

collectionButton.addEventListener('click', () => {
    diceSection.style.display = 'none';
    collectionSection.style.display = 'flex';
});

diceButton.addEventListener('click', () => {
    diceSection.style.display = 'flex';
    collectionSection.style.display = 'none';
});

for (let i = 1; i <= 6; i++) {
    const collectionButton = document.querySelector(`#square-${i}`);
    collectionButton.addEventListener('click', () => {
        pImg.setAttribute('src', `/src/img/paragrafo/${i}.jpg`);
        if (i === 1) {
            p.textContent = "Vida eu não sou o Belligham mas eu estou de braços abertos pra você";
        } else if (i === 2) {
            p.textContent = "Tá convidada pro meu casamento, pode vir de noiva 😍";
        } else if (i === 3) {
            p.textContent = "Ow vida, mais iluminado que o belligham só o brilho dos seus olhos...";
        } else if (i === 4) {
            p.textContent = fototeta;
        } else if (i === 5) {
            p.textContent = "Consigo imaginar milhares de coisas, mas não um mundo sem você";
        } else {
            p.textContent = "💐Meu sonho sempre foi conhecer o amor da minha vida, agora meu sonho e casar com você💐";
        }
    });
}

btn.addEventListener('click', () => {
    img.classList.add('animate');
    value.classList.add('show');

    audio.play();

    btn.style.display = 'nome';

    setTimeout(() => {
        number = generator(1, 6)
        img.setAttribute('src', `/src/img/dado/${number}.png`);
        value.textContent = number;

        if (number === 1) {
            p.textContent = "Vida eu não sou o Belligham mas eu estou de braços abertos pra você";
            pImg.setAttribute('src', '/src/img/paragrafo/1.jpg')
        } else if (number === 2) {
            p.textContent = "Tá convidada pro meu casamento, pode vir de noiva 😍";
            pImg.setAttribute('src', '/src/img/paragrafo/2.jpg')
        } else if (number === 3) {
            p.textContent = "Ow vida, mais iluminado que o belligham só o brilho dos seus olhos...";
            pImg.setAttribute('src', '/src/img/paragrafo/3.jpg')
        } else if (number === 4) {
            p.textContent = fototeta;
            pImg.setAttribute('src', '/src/img/paragrafo/4.jpg')
        } else if (number === 5) {
            p.textContent = "Consigo imaginar milhares de coisas, mas não um mundo sem você";
            pImg.setAttribute('src', '/src/img/paragrafo/5.jpg')
        } else if (number === 6) {
            p.textContent = "💐Meu sonho sempre foi conhecer o amor da minha vida, agora meu sonho e casar com você💐";
            pImg.setAttribute('src', '/src/img/paragrafo/6.jpg')
        }

        btn.style.display = 'inline-block';
        img.classList.remove('animate');
        value.classList.remove('show');
    }, 1750)
})

function generator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}