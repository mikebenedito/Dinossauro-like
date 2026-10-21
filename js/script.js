const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let distanciaPercorrida = 0;
let pontos = 0;


const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump')
    } ,500);
};


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px','');
    distanciaPercorrida += 1;
    pontos = distanciaPercorrida / 10;
          
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        const modal = document.createElement("dialog");
        modal.innerHTML = `<p>Você perdeu!</p> <p2>Pontuação:${pontos}</p2> <button id="btn">Reiniciar</button>`
        document.getElementById("divModal").appendChild(modal);

        modal.showModal();

        const btn = document.getElementById("btn");
        btn.addEventListener('click', function(){
            location.reload();
        });

        clearInterval(loop);
    } 

}, 10);


document.addEventListener('keydown', jump);
