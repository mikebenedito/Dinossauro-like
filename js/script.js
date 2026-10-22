const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let distanciaPercorrida = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump')
    } ,500);
};

const mostraPontos = document.createElement("p");
document.getElementById("pontos").appendChild(mostraPontos);

atualizaDistancia();

function atualizaDistancia() {
    mostraPontos.textContent = `Distância: ${distanciaPercorrida}m`;
};

function aumentaDistancia() {
    distanciaPercorrida++;
};


function aumentaDificuldade(){
    if(distanciaPercorrida >= 750){
        pipe.style.animation = 'pipe-animation 1.2s infinite linear';
    };
    if(distanciaPercorrida >= 1500){
        pipe.style.animation = 'pipe-animation 1s infinite linear';
    };
    if(distanciaPercorrida >= 2250){
        pipe.style.animation = 'pipe-animation 0.8s infinite linear';
    };
    if(distanciaPercorrida >= 3000){
        pipe.style.animation = 'pipe-animation 0.4s infinite linear';
    };
};



const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px','');
    
    aumentaDistancia();
    atualizaDistancia();
    aumentaDificuldade()
    
              
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        const modal = document.createElement("dialog");
        modal.innerHTML = `<p>Você perdeu!</p> <p2>Distância percorrida:</p2> <p3>${distanciaPercorrida}m</p3> <button id="btn">Reiniciar</button>`
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
