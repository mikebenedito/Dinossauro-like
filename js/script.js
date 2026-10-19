const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump')
    } ,500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px','');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        const modal = document.createElement("dialog");
        modal.innerHTML = "Você perdeu!";
        document.getElementById("divModal").appendChild(modal);
        const btn = document.createElement("button");
        btn.innerHTML = "Reiniciar";
        document.getElementById("divModal").appendChild(btn);

        modal.showDialog();

        clearInterval(loop);
        
    };
}, 10);


document.addEventListener('keydown', jump);
