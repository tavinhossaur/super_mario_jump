const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const plant = document.querySelector('.plant');

const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePos = pipe.offsetLeft;
    const plantPos = pipe.offsetLeft;
    const marioPos = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePos <= 120 && pipePos > 0 && marioPos < 200){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePos}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPos}px`;

        mario.src = './resources/mario_game_over.png';
        mario.style.width = '75px'

        plant.style.animation = 'none';
        plant.style.left = `${plantPos}px`;
        plant.style.marginLeft = '25px'

        clearInterval(loop);
    }

}, 15);

document.addEventListener('keydown', jump);