const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let distanciaPercorrida = 0;


const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump')
    } ,500);
};

function calculaPontos(){
    distanciaPercorrida++;
};

mostraDistancia();

function mostraDistancia() {
    const mostraPontos = document.createElement("p");
    mostraPontos.textContent = `Distância: ${distanciaPercorrida}m`;
    document.getElementById("pontos").appendChild(mostraPontos);
};



const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px','');
    
    calculaPontos();    
              
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        const modal = document.createElement("dialog");
        modal.innerHTML = `<p>Você perdeu!</p> <p2>Distância percorrida: <br>${distanciaPercorrida}m</p2> <button id="btn">Reiniciar</button>`
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
