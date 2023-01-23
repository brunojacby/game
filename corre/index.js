function pular() {
    
    document.getElementById("personagem3").style.cssText = 'top: 50px; transition: all 0.3s  ease-out; transform : rotate(-5deg)';
    
    setTimeout(function(){document.getElementById("personagem3").style.cssText = 'transition: all 0.2s  ease-out;'; document.getElementById("personagem3").style.top = "120px";},300);
    }


//variaveis do jogo
var jogar = false;
var pontuacao = -1;
var maximopontuacao = 0;
//funcao que comeca o jogo
function jogue(){jogar = true;}

//essa função é se o alvo personagem, que apos uma comparacao, as div não podem ficar uma sobreposta a outra, se isso ocorre, quer dizer que teve uma colisao e acaba o jogo
function alvo() {
    var aw= document.getElementById("personagem3").offsetWidth;
    var ah= document.getElementById("personagem3").offsetHeight;
    var bw= document.getElementById("obstaculo").offsetWidth;
    var bh= document.getElementById("obstaculo").offsetHeight;
    var cw= document.getElementById("obstaculo2").offsetWidth;
    var ch= document.getElementById("obstaculo2").offsetHeight;
    var at= document.getElementById("personagem3").offsetTop;
    var al= document.getElementById("personagem3").offsetLeft;
    var bt= document.getElementById("obstaculo").offsetTop;
    var bl= document.getElementById("obstaculo").offsetLeft;
    var ct= document.getElementById("obstaculo2").offsetTop;
    var cl= document.getElementById("obstaculo2").offsetLeft;
    
//essa e a programcao que compara os obstaculos, se uma div estiver sobreposta a outra, acaba o jogo chamando a funcão fim,
    //if(al < bl+bw && bl < al + aw && at < bt+bh && bt < at + ah) { fim() }
    if(al < cl+cw && cl < al + aw && at < ct+ch && ct < at + ah) {
        pontuacao++ 
        document.getElementById("obstaculo2").style.display = 'none';       
    }
}
// essa e a funcao fim que se tiver a colisao das div, acaba o jogo
function fim() {
jogar = false;
document.getElementById("obstaculo").style.display = 'none';
document.getElementById("obstaculo2").style.display = 'none';
if(pontuacao < 0){pontuacao = 0; document.getElementById("pontos").innerHTML = '<button class="inicio" onclick="javascript:jogue()">Play</button>'}
else{ document.getElementById("pontos").innerHTML = '<div class="again" style=font-size:25px><br><br>Pontos: '+pontuacao+' &nbsp;&nbsp;&nbsp;&nbsp; Máximo: '+maximopontuacao+'<h1>Game Over</h1><button onclick="javascript:jogue()">Play Again</button></div>'}
}
// agora e parte que fica acontecendo o jogo, ficamos chamando  varias vezes a funcao alvo() a cada 100m para fazer as comparacoes da colisao, se tiver a colisao acaba o jogo
setInterval(function(){alvo()},100);
//para ficar mais dificil o jogo, vamos sortear o obstaculo qual obstaculo vai aparecer a cada 2segundos
function sortear()
{
//fazemos um sorteio entre 1 e 2, qual for sorteado, executa um dos if/else
var nn = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    if(nn == 1){ 
    document.getElementById("obstaculo").style.display = 'block';
    document.getElementById("obstaculo2").style.display = 'none';
    }
    else
    {
    document.getElementById("obstaculo").style.display = 'none';
    document.getElementById("obstaculo2").style.display = 'block';
    }
    
//adicionamos 1 ponto se passar pelo obstaculo    
pontuacao++;
//se o maximo da pontuacao for menor que a pontuacao, deixamos ambas iguais
if(maximopontuacao < pontuacao) { maximopontuacao = pontuacao;}
document.getElementById("pontos").innerHTML = pontuacao;
}
// e depois ficamos chamando funcao sorter o obstaculo a cada 2s se a variavel jogar for verdadeira
setInterval(function(){if(jogar){sortear();}},2000);
//começamos o jogo, ja chamando a variavel fim pra zerar tudo.
fim();