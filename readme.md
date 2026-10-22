Olá, estou aqui novamente estudando HTML, CSS e JS.

Hoje segui o passo a passo do professor do canal Manual do Dev, no YouTube, onde vamos fazer um jogo semelhante ao jogo do dinossauro do navegador Chrome, quando acaba a internet.

Link do vídeo: https://youtu.be/r9buAwVBDhA?si=e_x6oziCd-4FHh5T

É um projeto bem simples, no qual usei a posição dos objetos para que funcionasse.

Foi mais um projeto para fixação e para aprender coisas novas.

O jogo é bem simples: você tem que pular por cima do obstáculo que vem na direção do seu personagem. O projeto do vídeo termina apenas com essa parte do gameplay, sem contabilizar pontos. Quando você perde, o jogo fica parado.

Então, meu próximo objetivo é melhorar essa parte, incrementando melhorias na jogabilidade, como:

- Contar os pontos; (FEITO DIA 21/10/2026)
- Aumentar a dificuldade; (FEITO DIA 22/10/2026)
- Adicionar um botão de reset. (FEITO DIA 20/10/2026)

Relatório de implementação:
Implementei um modal que aparece ao perder com a mensagem "você perdeu!"
com um botão que reinicia o jogo.
Para resolver esse problema usei de fonte os videos: https://youtu.be/RKyRJA2z7sI?si=3Om4_x4v9NRqobQj e https://youtu.be/t_GuuhNNcNQ?si=wIpBrmeAP2_bNXEq
e consultei o chatgpt.

Implementei a contagem dos pontos em metros que aparece em durante o gameplay
e no modal quando o jogador perde.
Fiquei MUITO tempo tentando resolver isso, o principal problema foi que eu
criava a parte onde mostrava os pontos mas não aumentava os pontos, e quando
mostrava ele criva uma mensagem pra cada ponto e floodava a tela.
Mas por fim consegui resolver usando a ajuda do meu amigo Luan Vieira e 
consultando o chatGPT.

Implementei um sistema que aumenta a dificuldade do game, no caso os obstaculos
vem mais rapidos na direção do Mario. Em alguns navegadores o obstaculo
nasce no meio do caminho, eu tive muita dificuldade para arrumar isso, quebrei
a cabeça de varias formas mas não consegui resolver, então deixei como está.
Consultei o chatgpt apenas, pois minha solução para aumentar a dificuldade foi
bem simples e ele só me ajudou a entender alguns termos.