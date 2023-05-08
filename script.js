var pontuacao = 0;//var, let e const
var multiplicador = 1;
var contador = 0;
var appleState = 0;
var isMenuOff = true;
var isUpgrade1On = false;
var isUpgrade2On = false;
var isUpgrade3On = false;
var isSecretOn = false;
var tempo = 0
var precoUpgrade1 = 10;
var precoUpgrade2 = 20;
var upgrade2 = 0;
var precoUpgrade3 = 50;
var upgrade3 = 0;

var i = setInterval(function(){
  if(isUpgrade2On) {
    pontuacao = pontuacao + upgrade2;

    const marcarPontuacao = document.getElementById("ponto");
    marcarPontuacao.innerHTML = "<img src='images/apple.png' alt='' id='icone'> " + parseInt(pontuacao);
  }
}, 2500);

var i = setInterval(function(){
    const corpo = document.getElementById("body");
    corpo.style.backgroundImage = "url('images/background2.png')"
    
    const qtdpontos = document.getElementById("ponto");
    switch(tempo) {
        case 0:
            

            qtdpontos.style.color = "white";
            tempo = 2;
        break;
        case 2:
            corpo.style.backgroundImage = "url('images/background.png')";

            qtdpontos.style.color = "black";
            
            texto1.style.color = "black";
            texto2.style.color = "black";
            texto3.style.color = "black";
            
            tempo = 0;
        break;
    }
}, 60000);

function menu() {
    const campomenu = document.getElementById("menu");

    if(isMenuOff) {
        campomenu.style.display = "block";
        isMenuOff = false;
    } else {
        campomenu.style.display = "none";
        isMenuOff = true;
    }
}

function ativarSecret() {
    if(isSecretOn) {
        isSecretOn = false;

        if(pontuacao >= 50 && appleState == 0 && !isSecretOn) {
            const appleImage = document.getElementById("imagem");
    
            appleImage.src = "images/bigode.png"
            appleState = 1;
        } 
        if(pontuacao >= 100 && appleState == 1 && !isSecretOn) {
            const appleImage = document.getElementById("imagem");
    
            appleImage.src = "images/chapeu.png"
            appleState = 2;
        } 
        if(pontuacao >= 200 && appleState == 2 && !isSecretOn)  {
            const appleImage = document.getElementById("imagem");
    
            appleImage.src = "images/oclinho.png"
            appleState = 3;
        } 
        if(pontuacao >= 350 && appleState == 3 && !isSecretOn) {
            const appleImage = document.getElementById("imagem");
    
            appleImage.src = "images/ternito.png"
            appleState = 4;
        }
    } else {
        isSecretOn = true;
        const appleImage = document.getElementById("imagem");
        appleState = 0;

        appleImage.src = "images/secret1.png";

        if(pontuacao >= 500 && isSecretOn && appleState == 0) {
            const appleImage = document.getElementById("imagem");
            appleState = 1;
    
            appleImage.src = "images/secret2.png";
        }

        if(pontuacao >= 1000 && isSecretOn && appleState == 1) {
            const appleImage = document.getElementById("imagem");
            appleState = 2;
    
            appleImage.src = "images/secret3.png";
        }
    }
}

function pontuar() {
    pontuacao = pontuacao+(1*multiplicador);
    const marcarPontuacao = document.getElementById("ponto");
    marcarPontuacao.innerHTML = "<img src='images/apple.png' alt='' id='icone'> " + parseInt(pontuacao);

    if(pontuacao >= 50 && appleState == 0 && !isSecretOn) {
        const appleImage = document.getElementById("imagem");

        appleImage.src = "images/bigode.png"
        appleState = 1;
    } 
    
    if(pontuacao >= 100 && appleState == 1 && !isSecretOn) {
        const appleImage = document.getElementById("imagem");

        appleImage.src = "images/chapeu.png"
        appleState = 2;
    } 

    if(pontuacao >= 200 && appleState == 2 && !isSecretOn)  {
        const appleImage = document.getElementById("imagem");

        appleImage.src = "images/oclinho.png"
        appleState = 3;
    } 
    
    if(pontuacao >= 350 && appleState == 3 && !isSecretOn) {
        const appleImage = document.getElementById("imagem");

        appleImage.src = "images/ternito.png"
        appleState = 4;
    }

    if(pontuacao >= 500 && isSecretOn && appleState == 0) {
        const appleImage = document.getElementById("imagem");
        appleState = 1;

        appleImage.src = "images/secret2.png";
    } else if(pontuacao >= 1000 && isSecretOn && appleState == 1) {
        const appleImage = document.getElementById("imagem");
        appleState = 2;

        appleImage.src = "images/secret3.png";
    }
}

function upgrade(tipo) {
    switch(tipo) {
        case 1:
            if(pontuacao >= precoUpgrade1) {
                if(pontuacao >= 10 && !isUpgrade1On) {
                    const upgrade1 = document.getElementById("upgrade1");
                    const upgrade2 = document.getElementById("upgrade2");
                    const textoUpgrade2 = document.getElementById("textoUpgrade2");
                    isUpgrade1On = true;
            
                    upgrade1.value = "Upgrade 1";
                    upgrade1.title = "Aumenta a quantidade de pontos que você ganha ao clicar";
                    upgrade2.style.display = "inline-block";
                    textoUpgrade2.style.display = "inline-block";
                }
                multiplicador = multiplicador + 0.25;
                pontuacao = pontuacao-precoUpgrade1;
                precoUpgrade1+=10;

                const textoUpgrade1 = document.getElementById("textoUpgrade1");
                const upgrade1 = document.getElementById("upgrade1");
                const marcarPontuacao = document.getElementById("ponto");
                marcarPontuacao.innerHTML =  "<img src='images/apple.png' alt='' id='icone'> " + parseInt(pontuacao);
                textoUpgrade1.innerHTML = precoUpgrade1 + " maças";
            } else {
                alert("Você não tem as maças necessários!");
            }
        break;
        case 2:
            if(pontuacao >= precoUpgrade2) {
                if(pontuacao >= 20 && !isUpgrade2On) {
                    const inputupgrade2 = document.getElementById("upgrade2");
                    const textoUpgrade2 = document.getElementById("textoUpgrade2");
            
                    inputupgrade2.value = "Upgrade 2";
                    inputupgrade2.title = "Faz você ganhar uma quantia de pontos a cada 2.5 segundos";
                    textoUpgrade2.innerHTML = "20 maças";
                    isUpgrade2On = true; 

                    const inputupgrade3 = document.getElementById("upgrade3");
                    const textoUpgrade3 = document.getElementById("textoUpgrade3");
                    console.log("aqui");
                    inputupgrade3.style.display = "inline-block";
                    textoUpgrade3.style.display = "inline-block";
                }
                pontuacao = pontuacao-precoUpgrade2;
                precoUpgrade2+=20;

                const textoUpgrade2 = document.getElementById("textoUpgrade2");
                const inputUpgrade2 = document.getElementById("upgrade2");
                const marcarPontuacao = document.getElementById("ponto");
                marcarPontuacao.innerHTML =  "<img src='images/apple.png' alt='' id='icone'> " + parseInt(pontuacao);
                textoUpgrade2.innerHTML = precoUpgrade2 + " maças";

                isUpgrade2On = true;
                upgrade2 = upgrade2 + 0.5;
            } else {
                alert("Você não tem as maças necessários!");
            }
        break;
        case 3:
            if(pontuacao >= precoUpgrade3) {
                if(pontuacao >= 50 && !isUpgrade3On) {
                    const inputupgrade3 = document.getElementById("upgrade3");
                    const textoUpgrade3 = document.getElementById("textoUpgrade");
                    

                    inputupgrade3.value = "Upgrade 3";
                    inputupgrade3.title = "Aumenta mais o multiplicador";

                }
                pontuacao = pontuacao-precoUpgrade3;
                precoUpgrade3 = precoUpgrade3 + 50;

                multiplicador+=1;

                const textoUpgrade3 = document.getElementById("textoUpgrade3");
                const marcarPontuacao = document.getElementById("ponto");
                marcarPontuacao.innerHTML = "<img src='images/apple.png' alt='' id='icone'> " + parseInt(pontuacao);
                textoUpgrade3.innerHTML = precoUpgrade3 + " maças";
            } else {
                alert("Você não tem as maças necessários!");
            }
        break;
    }
}