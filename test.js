document.addEventListener('DOMContentLoaded', () => {

  const setadireita = document.createElement('div');
  const setaesquerda = document.createElement('div');
  setadireita.id = 'setadireita';
  setaesquerda.id = 'setaesquerda';
  const legenda = document.querySelector('#escolhalegenda');

  const label = document.querySelector('#nomes');

  document.querySelector('#imgcontainer').style.left = `${window.innerWidth/2 - 7}px`;
  const trofeu = document.querySelector('#trofeu');
  
  const vida = [document.querySelector('#vida1'), document.querySelector('#vida2'), document.querySelector('#vida3')];
  const lifeshowcase = document.querySelector('#vidas');
  
  //seleciona pergunta
  function functeste() {
    return Math.round(Math.random());
  }
  const randomico = functeste();
  const randomico2 = functeste();
  const randomico3 = Math.abs(randomico2 - 1);

  const players = ['p1', 'p2'];
  let seletor = 0;

  //variaveis de html
  const traduct = document.querySelector('#options');
  const cronometro = document.querySelector('#cronometro');
  const avisomobile = document.querySelector('#avisomobile');
  const inspira = document.querySelector('.parag');
  const voltar = document.createElement('BUTTON');
  const config = document.querySelector('#config');
  const info = document.querySelector('#info');
  const but = document.getElementById('startb');
  const menu = document.getElementById('mycanvas');
  const tela = document.getElementById('screen');
  const starter = document.querySelector('#start');
  const starterxpos = (window.innerWidth)/2;
  const pos = (window.innerWidth)/4 - 155; //metade do trapezio e metade do paralelogramo
  const trapezio = document.querySelector("#trapezio");
  const caixa = document.querySelector('#caixa');
  const ponte1 = document.querySelector('#ponte1');
  const ponte2 = document.querySelector('#ponte2');
  const triangulo = document.querySelector('#base');
  const ponteirox = [window.innerWidth/4 - 31, window.innerWidth - window.innerWidth/4 + 7.5];
  let posix = 0;
  const cores = ['#f4fd75', 'rgb(70, 195, 219)'];
  const reestart = document.createElement('BUTTON');
  const zeroacinco = getRndInteger(0, 5);
  const menssagens = ['The game is over, but you have an infinite amount of chances to try again.', 'keep learning, nothing is better than overcome yourself.', 'I heard that egg is good for the brain, maybe you need to rest.', 'At least you learned something new today?', 'everyday may not be good, but there is something good in every day.', 'That is ok, go get some coffee and try again.']
  const mudarslidedireita = document.createElement('p');
  const mudarslideesquerda = document.createElement('p');
  inspira.innerHTML = menssagens[zeroacinco];

  mudarslidedireita.className = 'mudarslide';
  mudarslidedireita.id = 'slidedireita';
  mudarslideesquerda.className = 'mudarslide';
  mudarslideesquerda.id = 'slideesquerda';
  document.querySelector('.slidechange').appendChild(mudarslidedireita);
  document.querySelector('.slidechange').appendChild(mudarslideesquerda);

  triangulo.style.display = 'none';

  reestart.textContent = 'try again';
  reestart.className = 'reestart';
  
  if (window.innerWidth >= 1280) {
    ponte2.style.left = `${window.innerWidth - window.innerWidth/4 + 83}px`
    ponte1.style.left = `${window.innerWidth/4 - 83}px`; 
  } else {
    ponte2.style.left = `${window.innerWidth - window.innerWidth/4 + 48}px`
    ponte1.style.left = `${window.innerWidth/4 - 48}px`; 
  }

  document.querySelector('.container').style.top = '50%';
  document.querySelector('.container').style.width = `${window.innerWidth}px`;

  starter.style.top = '75%';
  starter.style.marginLeft = `${starterxpos}px`;

  //transition start window
  transition.style.opacity = '0';
  setTimeout(() => {
    transition.style.display = 'none';
  }, 1000);

  //botão de alternativas
  const alternativa1 = document.createElement("BUTTON");
  alternativa1.innerHTML = "alternativa A";
  const alternativa2 = document.createElement("BUTTON");
  alternativa2.innerHTML = "alternativa B";

  alternativa1.className = "alternativa";
  alternativa2.className = "alternativa";

  //config click
  config.onclick = function() {
    botonhover.play();
    var escolhapersonagem = setInterval(() => {
      legenda.style.top = `${window.innerHeight/2 - 120}px`;
      label.style.top = `${window.innerHeight/2 + 60}px`;
    }, 10);
    document.querySelector('#nomegame').style.display = 'none';
    document.querySelector('#usuarios').src = `${sprites[picker]}`;
    document.querySelector('.container').style.opacity = '0';
    document.querySelectorAll('.butinicial').forEach(bot => {
      bot.style.display = 'none';
    })
    voltar.textContent = 'BACK';
    voltar.id = 'voltar';
    document.querySelector('#start').appendChild(voltar);
    document.querySelector('#imgcontainer').style.display = 'inline';
    voltar.style.display = 'inline';
    document.querySelector('#setas').appendChild(setadireita);
    document.querySelector('#setas').appendChild(setaesquerda);
    setadireita.style.display = 'inline';
    setaesquerda.style.display = 'inline';
    legenda.style.display = 'inline'
    label.style.display = 'inline';
    traduct.style.display = 'none';
    document.querySelector('.container').style.display = 'none';
  }

  //click setas
  setadireita.onclick = () => {
    setahover.play();
    if (picker != 4) {
      picker += 1;
    } else {
      picker = 0;
    }
    document.querySelector('#usuarios').src = `${sprites[picker]}`;
    label.innerHTML = nomes[picker];
  }
  setaesquerda.onclick = () => {
    setahover.play();
    if (picker != 0) {
      picker -= 1;
    } else {
      picker = 4;
    }
    document.querySelector('#usuarios').src = `${sprites[picker]}`;
    label.innerHTML = nomes[picker];
  }

  //back click
  voltar.onclick = () => {
    traduct.style.display = 'flex';
    document.querySelector('#nomegame').style.display = 'inline';
    botonhover.play();
    document.querySelectorAll('.butinicial').forEach(bot => {
      bot.style.display = 'inline';
    })
    document.querySelector('.container').style.opacity = '1';
    document.querySelector('#imgcontainer').style.display = 'none';
    tela.style.backgroundColor = '#a1eafb';
    voltar.style.display = 'none';
    setadireita.style.display = 'none';
    setaesquerda.style.display = 'none';
    legenda.style.display = 'none'
    label.style.display = 'none';
    menu.style.opacity = 1;
    caixa.style.opacity = 1;
    document.querySelector('#manual').style.display = 'none';
    document.querySelector('figure').style.left = '0%'
    document.querySelector('.container').style.display = 'flex';
    document.querySelectorAll('.mudarslide').forEach(mudador => {
      mudador.style.display = 'none';
    });
  }

  let parametro = 0;
  //sliderchanger click
  document.querySelectorAll('.mudarslide').forEach(mudador => {
    mudador.onclick = () => {
      document.querySelector('figure').style.left = `${-Math.abs(parametro + 100)}%`;
      parametro = -Math.abs(parametro + 100);
    }
  })

  //infoclick
  info.onclick = () => {
    traduct.style.display = 'none';
    document.querySelector('#nomegame').style.display = 'none';
    document.querySelector('.container').style.opacity = '0';
    document.querySelectorAll('.butinicial').forEach(bot => {
      bot.style.display = 'none';
    })
    voltar.textContent = 'BACK';
    voltar.id = 'voltar';
    document.querySelector('#start').appendChild(voltar);
    voltar.style.display = 'inline';
    document.querySelector('#manual').style.display = 'inline';
    document.querySelector('#manual').style.color = 'white';
    tela.style.backgroundColor = '#070b20';
    mudarslidedireita.style.left = `${window.innerWidth - window.innerWidth/6}px`;
    mudarslideesquerda.style.left = `${window.innerWidth/6 - 30}px`;
    document.querySelectorAll('.mudarslide').forEach(mudador => {
      mudador.style.display = 'inline-block';
    });
    menu.style.opacity = '0';
    caixa.style.opacity = '0';
    botonhover.play();
    document.querySelector('.container').style.display = 'none';
  }

  //start click
  but.onclick = function() {
    const ponteiroy = `${canvas1.height/2}`;
    triangulo.style.top = `${ponteiroy}`
    let alternativascorretas = 0;
    const fail = document.querySelector('#fail');
    fail.volume = 0.3;
    traduct.style.display = 'none';
    document.querySelector('#nomegame').style.display = 'none';
    const botonhover = document.querySelector('#botaohover');
    botonhover.play();
    starter.style.opacity = 0;
    menu.style.opacity = 0; 
    caixa.style.display = 'none';
    lifeshowcase.style.display = 'inline';
    this.disabled = true;
    info.disabled = true;
    config.disabled = true;
    setTimeout(() => {
      addsprite();
      starter.style.display = 'none';
      menu.style.display = 'none';    
      tela.style.backgroundColor = '#070b20';
      if (window.innerWidth <= 1280) {
        document.querySelector('#trapezio').style.marginLeft = `${(window.innerWidth/4) - 85}px`;
        document.querySelector('#trapezio').style.marginRight = `${(window.innerWidth/4) - 85}px`;
      }
      else {
        trapezio.style.marginLeft = `${pos}px`;
        trapezio.style.marginRight = `${pos}px`;
      }
    }, 1000);
    setTimeout(() => {
      caixa.style.display = 'inline';
      caixa.style.backgroundColor = '#070b20';
    }, 3000)
    setTimeout(() => {
      //cria os botões com perguntas aleatorias e alternativas em ordem aleatória
      document.querySelector('#botaozo').appendChild(alternativa1);
      document.querySelector('#botaozo').appendChild(alternativa2);
      const config = ["correta", "errada"];
      alternativa1.dataset.resposta = config[randomico2];
      alternativa2.dataset.resposta = config[randomico3]
      const mudardps = getRndInteger(0, perguntas.length - 1);
      document.querySelectorAll(".alternativa").forEach(alternativa =>{
        alternativa.onclick = () => {
          const mudardps = getRndInteger(0, perguntas.length - 1);
          const newrandomico2 = functeste();
          const newrandomico3 = Math.abs(newrandomico2 - 1);
          tempo = 15;
          //se a alternativa estiver correta
          if (alternativa.dataset.resposta === 'correta') {
            ponte1.style.boxShadow = '5px 8px #f4fd75';
            ponte2.style.boxShadow = '8px 8px #46c3db';
            acertos += 1;
            alternativascorretas += 1
            seletor = Math.abs(seletor - 1);
            jogador = players[seletor];
            document.querySelector('#player').innerHTML = jogador;
            posix = Math.abs(posix - 1);
            triangulo.style.left = `${ponteirox[posix]}px`;
            document.querySelector('#triangulo').style.borderTop = `10px solid ${cores[posix]}`;
          } else {
            vidas -= 1;
            vida[vidas].style.backgroundColor = '#070b20';
            vida[vidas].style.marginLeft = '8px';
            vida[vidas].style.marginRight = '2px';
            fail.play();
            dim();

            setTimeout(() => {
              vida[vidas].style.marginLeft = '2px';
              vida[vidas].style.marginRight = '8px';
              setTimeout(() => {
                vida[vidas].style.marginLeft = '5px';
                vida[vidas].style.marginRight = '5px';
              }, 200);
            }, 200);
          }
          if (window.innerWidth >= 1280) {
            if (alternativascorretas % 2 == 0) {
              ponte1.style.width = `${(acertos/2 * window.innerWidth/6)/2 + 85}px`; 
              ponte2.style.width = `${(acertos/2 * window.innerWidth/6)/2 + 85}px`; 
            }
          } else {
            if (alternativascorretas % 2 == 0) {
              ponte1.style.width = `${(acertos/2 * window.innerWidth/6)/2 + 50}px`; 
              ponte2.style.width = `${(acertos/2 * window.innerWidth/6)/2 + 50}px`; 
            }
          }
          if (acertos === 6) {
            trofeu.style.top = `${window.innerHeight/2 - 45}px`
            trofeu.style.left = `${window.innerWidth/2 - 38}px`
            caixa.style.opacity = '0';
            alternativa1.disabled = true;
            alternativa2.disabled = true;
            alternativa1.style.opacity = '0';
            alternativa2.style.opacity = '0';
            triangulo.style.left = `${window.innerWidth/2 - 7.5}px`;
            lifeshowcase.style.opacity = '0';
            document.querySelector('#player').innerHTML = 'click';
            document.querySelector('#player').style.transform = 'translate(-10px)';
            document.querySelector('#triangulo').style.borderTop = '10px solid #e67a7a';
            trofeu.style.display = 'inline';
            cronometro.style.display ='none';
            clearInterval(temporesposta);
            clearInterval(segundos);
            
            setTimeout(() => {
              trofeu.style.opacity = '1';
            }, 200);
          
            setTimeout(() => {
              caixa.style.display = 'none';
              alternativa1.style.display = 'none';
              alternativa2.style.display = 'none';
            }, 1000);
          }

          const config = ["correta", "errada"];
          alternativa1.dataset.resposta = config[newrandomico2];
          alternativa2.dataset.resposta = config[newrandomico3];
          caixa.innerHTML = `${perguntas[mudardps].pergunta}<br>A) ${perguntas[mudardps].possibilidade[newrandomico2]}<br>B) ${perguntas[mudardps].possibilidade[newrandomico3]}`;
          perguntas.splice(mudardps, 1);
          }
        })
        caixa.style.height = `${window.innerHeight/4}px`;
        caixa.style.width = `${window.innerWidth/4}px`;
        caixa.style.backgroundColor = '#E3EAEF';
        cronometro.style.display = 'inline';
        const segundos = setInterval(() => {
          tempototal += 1;
        }, 1000);
        const temporesposta = setInterval(() => {
          cronometro.innerHTML = tempo;
          tempo -= 1;
          if (tempo < 0) {
            const mudardps = getRndInteger(0, perguntas.length - 1);
            const newrandomico2 = functeste();
            const newrandomico3 = Math.abs(newrandomico2 - 1);
            tempo = 15;
            vidas -= 1;
            vida[vidas].style.backgroundColor = '#070b20';
            vida[vidas].style.marginLeft = '8px';
            vida[vidas].style.marginRight = '2px';
            dim();
            fail.play();

            setTimeout(() => {
              vida[vidas].style.marginLeft = '2px';
              vida[vidas].style.marginRight = '8px';
              setTimeout(() => {
                vida[vidas].style.marginLeft = '5px';
                vida[vidas].style.marginRight = '5px';
              }, 200);
            }, 200);
            alternativa1.dataset.resposta = config[newrandomico2];
            alternativa2.dataset.resposta = config[newrandomico3];
            caixa.innerHTML = `${perguntas[mudardps].pergunta}<br>A) ${perguntas[mudardps].possibilidade[newrandomico2]}<br>B) ${perguntas[mudardps].possibilidade[newrandomico3]}`;
            perguntas.splice(mudardps, 1);
          };
          
          if (vidas === 0) {
            alternativa1.disabled = true;
            alternativa2.disabled = true;
            getSoundAndFadeAudio('#startsong');
            cronometro.style.display = 'none';
            clearInterval(segundos);
            clearInterval(temporesposta);
            document.querySelector('#gameover').style.display = 'flex';
            setTimeout(() => {
              const audioe = document.querySelector('#failsound');
              audioe.volume = 0.2;
              audioe.play();
              document.querySelector('#gameover').style.width = `${canvas1.width}px`
              document.querySelector('#gameover').style.height = `${canvas1.height}px`
              document.querySelector('#gameover').style.opacity = '1';
              document.querySelector('#gameover').appendChild(reestart);
            }, 500)
            setTimeout(() => {
              document.querySelector('#spriteover').style.opacity = '1';
              reestart.style.opacity = '1';
              mutebutton = 0;
            }, 2000)
            reestart.onclick = () => {
              setTimeout(() => {
                location.reload();
              }, 300)
            }
          }
        }, 1000);

      caixa.innerHTML = `${perguntas[mudardps].pergunta}<br>A) ${perguntas[mudardps].possibilidade[randomico2]}<br>B) ${perguntas[mudardps].possibilidade[randomico3]}`;
      perguntas.splice(mudardps, 1);
    }, 9000);
    //timer de 3 segundos
    let timerstartv = 3; 
    const thetimer = document.querySelector('#timerstart');
    let escala = 0;
    setTimeout(() => {
      triangulo.style.left = `${window.innerWidth/4 - 31}px`;
      triangulo.style.display = 'inline';
      lifeshowcase.style.opacity = '1';
      setInterval(() => {
        triangulo.style.top = `${ponteiroy - escala}px`
        escala = Math.abs(escala - 7);
        if (timerstartv > 0) {
          thetimer.innerHTML = timerstartv;
          timerstartv--;
        }
        else {
          thetimer.style.color = '#c82586'
          thetimer.innerHTML = 'GO!'
          setTimeout(() => {
            thetimer.style.opacity = 0;
            setTimeout(() => {
              thetimer.style.display = 'none';
            }, 1000);
            clearTimeout();
          }, 1000)
        }
      }, 1000);
    }, 5000);
  }; 

  if (window.innerHeight >= window.innerWidth) {
    avisomobile.style.display = 'flex';
    const avisoon = setInterval(() => {
      avisomobile.style.width = `${canvas1.width}px`;
      avisomobile.style.height = `${canvas1.height}px`;
    }, 10)
    setTimeout(() => {
      avisomobile.style.opacity = '0';
      clearInterval(avisoon);
      setTimeout(() => {
        avisomobile.style.display = 'none';
      }, 2000)
    }, 2000)
  }
});

function rand(min, max) {
  return Math.floor(Math.random() * (max-min + 1) + min)
}

//estrela
function Estrela(x, y, dx, dy, raio) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.raio = raio;
  let gravidade = 0.1;
  let Epotencial = 0.4;

  this.edraw = function() {
    c1.save();
    c1.beginPath();
    c1.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false);
    c1.fillStyle = "#E3EAEF";
    c1.shadowColor = "#E3EAEF";
    c1.shadowBlur = 10;
    c1.fill();
    c1.closePath();
    c1.restore();
  }

  this.eupdate = function() {
    if (this.x + this.raio > canvas1.width || this.x - this.raio < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.raio + this.dy > canvas1.height) {
      this.dy = -this.dy * Epotencial;
    } else {
      this.dy += gravidade;
    }

    if (this.y + this.raio + this.dy >= (window.innerHeight)/2) {
      this.shatter();
    }

    this.x += this.dx;
    this.y += this.dy;
    this.edraw();
  }

  this.shatter = function() {
    this.raio -= 15;
    for (let i = 0; i < 8; i++) {
      miniestrelas.push(new MiniEstrela(this.x, this.y, 2));
    }
  }
}
//miniestrelas
function MiniEstrela(x, y, raio, color) {
  Estrela.call(this, x, y, raio, color);
  this.x = x;
  this.y = y;
  this.raio = raio;
  let gravidade = 0.1;
  let Epotencial = 0.8;
  this.dx = rand(-5, 5);
  this.dy = rand(-15, 15);
  this.ttl = 300;
  this.opacity = 1;
  
  this.mdraw = function() {
    c1.save();
    c1.beginPath();
    c1.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false);
    c1.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    c1.shadowColor = "#E3EAEF";
    c1.shadowBlur = 20;
    c1.fill();
    c1.closePath();
    c1.restore();
  }

  this.mupdate = function() {
    if (this.x + this.raio > canvas1.width || this.x - this.raio < 0) {
      this.dx = -this.dx;
    } 
      if (this.y + this.raio + this.dy > canvas1.height) {
        this.dy = -this.dy * Epotencial;
      } else {
        this.dy += gravidade;
      }
      this.x += this.dx;
      this.y += this.dy;
      this.ttl -= 1;
      this.opacity -= 1 / this.ttl;
      this.mdraw();
  }
}

const miniestrelas = [];
const estrelas = [];
const backgroundestrelas = [];

const trofeu = document.querySelector('#trofeu');

let picker = 0;
const sprites = ['sprite usuarioa.png', 'sprite cidao.png', 'sprite erinaldo.png', 'sprite maurilioa.png', 'sprite tenorio.png'];
const nomes = ['Moreno', 'Cid', 'Erinaldo', 'Maurilio', 'Tenorio'];

//empresario e usuario
function addsprite() {
  const hasTouchscreen = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
  const fecharplacar = document.querySelector('#fecharplacar');
  const win = document.querySelector('#victory');

  const musicastart = document.querySelector('#startsong');
  musicastart.volume = 0.3;

  const canvas1 = document.querySelector('#screen');
  const c1 = canvas1.getContext('2d');

  //nuvem
  const nuvem2 = new Image();
  nuvem2.src = "nuvem-2.png";
  const nuvem = new Nuvem(nuvem2);
  
  //empresario
  const spriteempresario = new Image();
  spriteempresario.src = "sprite empresarioa.png";
  const empresario = new Sprite(spriteempresario);

  //usuario
  const spriteusuario = new Image();
  spriteusuario.src = `${sprites[picker]}`;
  const usuario = new uSprite(spriteusuario);

  //trofeu click
  trofeu.onclick = function() {
    empresario.mvright = true;
    usuario.umvleft = true;
    trofeu.style.opacity = '0';
    setTimeout(() => {
      trofeu.style.display = 'none';
      triangulo.style.display = 'none';
      trofeupontos = 1;
      document.querySelector('#player').style.display = 'none';
      document.querySelector("#tempo").innerHTML = `Time:<br>${tempototal} seconds`;
      document.querySelector("#erros").innerHTML = `Errors:<br>${3 - vidas}`;
      document.querySelector("#placar").innerHTML = `Score:<br>${500 - tempototal - 30 * (3 - vidas)} points`;
      win.style.display = 'flex';
      setTimeout(() => {
        musicastart.volume = 0.3;
        win.style.opacity = '1';
      }, 3000);
    }, 1000);
  }

  //menu onclick
  const endgame = document.querySelector('#terminarjogo');
  endgame.onclick = function() {
    survey.style.opacity = '0';
    transition.style.display = 'inline';
    getSoundAndFadeAudio('#startsong');
    setTimeout(() => {
      transition.style.opacity = '1';
      setTimeout(() => {
        location.reload();
      }, 1000);
    }, 200);
  }

  const thankyou = ['Obrigado por jogar sua participação é muito importante, por favor, responda o formulário para me ajudar em projetos futuros.', 'Thank you for playing your participation is very important, please answer the form to help me with future projects.']
  const Facebookforms = [document.querySelector('#pesquisapt'), document.querySelector('#pesquisaen')];
  const survey = document.querySelector('#survey');
  //Next click
  fecharplacar.onclick = () => {
    win.style.opacity = '0';
    survey.style.display = 'flex';
    document.querySelector('#agradecimentouser').innerHTML = `${thankyou[traduct.options[traduct.selectedIndex].value]}`;
    Facebookforms[traduct.options[traduct.selectedIndex].value].style.display = 'inline';
    setTimeout(() => {
      win.style.display = 'none';
      survey.style.opacity = '1';
    }, 1000);
  }

  //nuvem
  nuvem2.onload = function() {
    init();
  }

  //usuario
  spriteusuario.onload = function() {
    init();
  }
  //empresario
  spriteempresario.onload = function() {
    init();
  }
  //constante para pegar sempre a mesma distancia
  const ktela = window.innerHeight/2 - 584.5

  let junk = 1;
  function init() {
    loop();
    for (let i = 0; i <= 1; i++) {
      estrelas.push(new Estrela(junk * window.innerWidth/4, ktela, 0, 0, 15))
      junk = 3;
    }
    if (hasTouchscreen) {
      for (let i = 0; i < 0; i++) {
        const x = Math.random() * canvas1.width;
        const y = Math.random() * canvas1.height;
        const radius = Math.random() * 3;
        backgroundestrelas.push(new Estrela(x, y, 0, 0, radius))
      }
    }
    else {
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * canvas1.width;
        const y = Math.random() * canvas1.height;
        const radius = Math.random() * 3;
        backgroundestrelas.push(new Estrela(x, y, 0, 0, radius))
      }
    }
  }

  function update() {
    empresario.move();
    usuario.umove();
  }

  function draw() {
    empresario.draw(c1);
    usuario.udraw(c1);
  }
  
  function come() {
    update();
    draw();
    musicastart.play();
  }
  let p = 0;
  //empresario
  function loop() {
    c1.clearRect(0, 0, canvas1.width, canvas1.height);
    window.requestAnimationFrame(loop, canvas1);
    nuvem.nupdate();
    estrelas.forEach((estrela, index) => {
      estrela.eupdate()
      if (estrela.raio <= 0) {
        estrelas.splice(index, 1)
      }
    })
    miniestrelas.forEach((miniestrela, index) => {
      miniestrela.mupdate()
      if (miniestrela.ttl <= 0) {
        miniestrelas.splice(index, 1)
      }
    })
    backgroundestrelas.forEach(backgroundestrela => {
      backgroundestrela.edraw();
    })

    if (p > 0) {
      come();
    } else {
      if (hasTouchscreen) {
        setTimeout(() =>{
          p = 1;
        }, 400)
      }
      setTimeout(() =>{
        p = 1;
      }, 600)
    }
  }
}


function Sprite(img) {
  
  this.mvright = false;
  this.srcx = this.srcy = 0;
  this.width = 79;
  this.height = 120;
  this.posx = (canvas1.width)/4 - 59;
  this.posy = (canvas1.height)/2 - 117;//this.height - pixels sobrando
  this.img = img;
  this.speed = 0.75;
  this.countanim = 60;
  this.parado = 0;
  const piscando = new Image();
  piscando.src = 'piscandosprite empresarioa.png'
  //empresario
  this.draw = function(c1) {
    c1.drawImage(this.img, this.srcx, this.srcy, this.width, this.height, this.posx, this.posy, this.width, this.height);
    this.animation();
  }

  //empresario
  this.move = function() {
    if (this.mvright && this.posx < (canvas1.width) / 2 - this.width) {
      this.posx += this.speed;
    }
    else {
      this.mvright = false;
    }
  }

  //empresario
  this.animation = function() {
    if (this.mvright) {
      this.countanim++;
      if (this.countanim >= 150) {
        this.countanim = 60;
      }
      this.srcx = Math.floor(this.countanim / 30) * this.width;
    }
    else {
      this.parado++;
      if (this.parado >= 200) {
        this.parado = 0;
      }
      this.srcx = Math.floor(this.parado / 100) * this.width;
    }
    if (trofeupontos >= 1 && this.mvright == false) {
      setTimeout(() => {
        this.img = piscando 
      }, 500);
    }
  }
}

function uSprite(img) {

  this.umvleft = false;
  this.usrcx = this.usrcy = 0;
  this.uwidth = 88.8;
  this.uheight = 120;
  this.uposx = (canvas1.width) - (canvas1.width)/4 - 29;
  this.uposy = (canvas1.height)/2 - 117;
  this.uspeed = 0.75;
  this.uimg = img;
  this.ucountanim = 60;
  this.uparado = 0;
  const piscando = new Image()
  piscando.src = `piscando${sprites[picker]}`

  //usuario
  this.udraw = function(c1) {
    c1.drawImage(this.uimg, this.usrcx, this.usrcy, this.uwidth, this.uheight, this.uposx, this.uposy, this.uwidth, this.uheight);
    this.uanimation();
  }

  //usuario
  this.umove = function() {
    if (this.umvleft && this.uposx > (canvas1.width) / 2) {  
      this.uposx -= this.uspeed;
    }
    else {
      this.umvleft = false;
    }
    if (trofeupontos >= 1 && this.umvleft == false) {
      setTimeout(() => {
        this.uimg = piscando 
      }, 500);
    }

  }

  //usuario
  this.uanimation = function() {
    if (this.umvleft) {
      this.ucountanim++;
      if (this.ucountanim >= 150) {
        this.ucountanim = 60;
      }
      this.usrcx = Math.floor(this.ucountanim / 30) * this.uwidth;
    }
    else {
      this.uparado++;
      if (this.uparado >= 200) {
        this.uparado = 0;
      }
      this.usrcx = Math.floor(this.uparado / 100) * this.uwidth;
    }
  }
}

const canvas1 = document.querySelector('#screen');
c1 = canvas1.getContext('2d');
setInterval(() => {
  canvas1.width = window.innerWidth;
  canvas1.height = window.innerHeight;
}, 10);

function dim() {
  document.getElementById('dimmer').style.display = 'block';
  setTimeout(() => {
    document.getElementById('dimmer').style.opacity = '0';
  }, 250);
  setTimeout(() => {
    document.getElementById('dimmer').style.display = 'none';
    document.getElementById('dimmer').style.opacity = '0.25';
  }, 500);
}    

function Nuvem(img) {
  this.nwidth = 1280;
  this.nheight = 1080;
  this.nposx = -720;
  this.nposy = window.innerHeight/2 - 584.5 - this.nheight/10;
  this.nimg = img;
  this.dy = 0.00001;
  this.ngrav = 0.000005;
  this.Epotencial = 0.1;
  this.dx = 0.25;

  this.nupdate = function() {
    this.ndraw(c1);
  }
  //nuvem
  this.ndraw = function(c1) {
    c1.drawImage(this.nimg, this.nposx, this.nposy, this.nwidth, this.nheight);
    if (this.nposy + this.dy > window.innerHeight/2 - this.nheight/2 || this.nposy <= window.innerHeight/2 - 584.5 - (this.nheight/8) - 1) {
      this.dy = -this.dy;
    } else {
      this.dy += this.ngrav;
    }
    if (this.nposx + this.nwidth/4 >= innerWidth || this.nposx + this.nwidth + 1 < 0) {
      this.dx = -this.dx;
    }

    this.nposy += this.dy;
    this.nposx += this.dx;
  }
}
let acertos = 0;
let trofeupontos = 0;

//pega um número aleatorio com o último elemento incluso
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let tempo = 15;

let perguntas = [{pergunta: 'Qual empresa incentivou a criação da LGPD em 2018 após um vazamento?', possibilidade: [['Facebook'], ['Google']]}, {pergunta: 'Qual o nome do funcionário que monitora o cumprimento das leis de proteção de dados?', possibilidade: [['Data Protection Officer'], ['Back End Developer']]}, {pergunta: 'A tecnica utilizada para esconder uma informação de um usuário é chamada de:', possibilidade: [['Criptografia'], ['Spoofing']]}, {pergunta: 'Qual o nome do servidor que controla o fluxo de rede e evita sobrecargas?', possibilidade: [['Proxy'], ['Blade']]}, {pergunta: 'Qual o valor maximo que a multa da LGPD pode chegar?', possibilidade: [['50 milhões'], ['50 mil']]}, {pergunta: 'Qual orgão fiscalizará o cumprimento da LGPD?', possibilidade: [['ANPD'], ['PROCON']]}, {pergunta: 'A LGPD visa a proteção de dados incluindo: CPF, endereço, telefone, email e RG', possibilidade: [['certo'], ['errado']]}, {pergunta: 'Quais destes itens oferece controle no âmbito da segurança física preventiva?', possibilidade: [['Dispositivos de autenticação biometrica'], ['Chaves públicas criptograficas']]}, {pergunta: 'Qual o nome dado ao ataque de acesso remoto feito do cliente para o servidor?', possibilidade: [['Reverse Shell'], ['NCP']]}, {pergunta: 'Qual endereços web possuem uma conexão cifrada?', possibilidade: [['HTTPS'], ['HTTP']]}, {pergunta: 'Integridade na segurança da informação é permitir o acesso aos dados apenas para o proprietário deles mesmos', possibilidade: [['Certo'], ['errado']]}, {pergunta: 'Qual o nome do filtro de pacotes que atua na camada de redes?', possibilidade: [['Firewall'], ['VPN']]}, {pergunta: 'Qual o nome do malware que acessa a memória temporaria de dispositivos de entrada e saída para recolher informações pessoais?', possibilidade: [['Keylogger'], ['Trojan']]}, {pergunta: 'Qual o nome de ataques de sobrecarga de serviços distribuido entre várias máquinas?', possibilidade: [['DDOS'], ['DOS']]}, {pergunta: 'Qual o nome do ataque que configura uma rede wi-fi fraudulenta e escuta conexões sem fio?', possibilidade: [['Evil Twin'], ['Binary Exploitation']]}, {pergunta: 'Qual lei europeia inspirou a criação da LGPD?', possibilidade: [['GDPR'], ['MDBR']]}, {pergunta: 'Qual o valor mínimo da multa da LGPD?', possibilidade: [['5 mil reais'], ['50 mil reais']]}, {pergunta: 'Qual o ano que visa a entrada em vigor da LGPD?', possibilidade: [['2021'], ['2022']]}, {pergunta: 'Os usuários poderão alterar, atualizar ou excluir seus dados após aceitar os termos de uso das empresas após a entrada em vigor da LGPD.', possibilidade: [['Certo'], ['Errado']]}, {pergunta: 'Qual a finalidade da criação da LGPD?', possibilidade: [['Garantir a segurança dos dados dos usuários'], ['Gerar lucro para as empresas de cyber segurança']]}, {pergunta: 'Toda empresa deverá contratar um Data Protection Officer se quiser armazenar dados dos usuários.', possibilidade: [['Certo'], ['Errado']]}, {pergunta: 'Na criptografia de ponta-a-ponta a menssagem é descriptografada pelo remetente e destinatário, sendo impossivel até mesmo da empresa ter acesso a menssagem.', possibilidade: [['Certo'], ['Errado']]}, {pergunta: 'O tipo de ataque que tem como caracteristica a criação de uma página web falsa para roubar dados de pessoas é chamada de:', possibilidade: [['Phishing'], ['Pixie-Dust']]}, {pergunta: 'Após a criação da LGPD, a empresa poderá armazenar senhas e outros dados do usuário sem a necessidade de dar acesso a um termo de uso.', possibilidade: [['Errado'], ['Certo']]}, {pergunta: 'Qual o tempo mínimo que a empresa deve permanecer com os dados dos usuários após apaga-los segundo a LGPD?', possibilidade: [['5 anos'], ['5 messes']]}]
const perguntasli = [[{pergunta: 'Qual empresa incentivou a criação da LGPD em 2018 após um vazamento?', possibilidade: [['Facebook'], ['Google']]}, {pergunta: 'Qual o nome do funcionário que monitora o cumprimento das leis de proteção de dados?', possibilidade: [['Data Protection Officer'], ['Back End Developer']]}, {pergunta: 'A tecnica utilizada para esconder uma informação de um usuário é chamada de:', possibilidade: [['Criptografia'], ['Spoofing']]}, {pergunta: 'Qual o nome do servidor que controla o fluxo de rede e evita sobrecargas?', possibilidade: [['Proxy'], ['Blade']]}, {pergunta: 'Qual o valor maximo que a multa da LGPD pode chegar?', possibilidade: [['50 milhões'], ['50 mil']]}, {pergunta: 'Qual orgão fiscalizará o cumprimento da LGPD?', possibilidade: [['ANPD'], ['PROCON']]}, {pergunta: 'A LGPD visa a proteção de dados incluindo: CPF, endereço, telefone, email e RG', possibilidade: [['certo'], ['errado']]}, {pergunta: 'Quais destes itens oferece controle no âmbito da segurança física preventiva?', possibilidade: [['Dispositivos de autenticação biometrica'], ['Chaves públicas criptograficas']]}, {pergunta: 'Qual o nome dado ao ataque de acesso remoto feito do cliente para o servidor?', possibilidade: [['Reverse Shell'], ['NCP']]}, {pergunta: 'Qual endereços web possuem uma conexão cifrada?', possibilidade: [['HTTPS'], ['HTTP']]}, {pergunta: 'Integridade na segurança da informação é permitir o acesso aos dados apenas para o proprietário deles mesmos', possibilidade: [['Certo'], ['errado']]}, {pergunta: 'Qual o nome do filtro de pacotes que atua na camada de redes?', possibilidade: [['Firewall'], ['VPN']]}, {pergunta: 'Qual o nome do malware que acessa a memória temporaria de dispositivos de entrada e saída para recolher informações pessoais?', possibilidade: [['Keylogger'], ['Trojan']]}, {pergunta: 'Qual o nome de ataques de sobrecarga de serviços distribuido entre várias máquinas?', possibilidade: [['DDOS'], ['DOS']]}, {pergunta: 'Qual o nome do ataque que configura uma rede wi-fi fraudulenta e escuta conexões sem fio?', possibilidade: [['Evil Twin'], ['Binary Exploitation']]}, {pergunta: 'Qual lei europeia inspirou a criação da LGPD?', possibilidade: [['GDPR'], ['MDBR']]}, {pergunta: 'Qual o valor mínimo da multa da LGPD?', possibilidade: [['5 mil reais'], ['50 mil reais']]}, {pergunta: 'Qual o ano que visa a entrada em vigor da LGPD?', possibilidade: [['2021'], ['2022']]}, {pergunta: 'Os usuários poderão alterar, atualizar ou excluir seus dados após aceitar os termos de uso das empresas após a entrada em vigor da LGPD.', possibilidade: [['Certo'], ['Errado']]}, {pergunta: 'Qual a finalidade da criação da LGPD?', possibilidade: [['Garantir a segurança dos dados dos usuários'], ['Gerar lucro para as empresas de cyber segurança']]}, {pergunta: 'Toda empresa deverá contratar um Data Protection Officer se quiser armazenar dados dos usuários.', possibilidade: [['Certo'], ['Errado']]}, {pergunta: 'Na criptografia de ponta-a-ponta a menssagem só é descriptografada pelo remetente e destinatário, sendo impossivel até mesmo da empresa ter acesso a menssagem.', possibilidade: [['Certo'], ['Errado']]}, {pergunta: 'O tipo de ataque que tem como caracteristica a criação de uma página web falsa para roubar dados de pessoas é chamada de:', possibilidade: [['Phishing'], ['Pixie-Dust']]}, {pergunta: 'Após a criação da LGPD, a empresa poderá armazenar senhas e outros dados do usupario sem a necessidade de dar acesso a um termo de uso.', possibilidade: [['Errado'], ['Certo']]}, {pergunta: 'Qual o tempo mínimo que a empresa deve permanecer com os dados dos usuários após apaga-los segundo a LGPD?', possibilidade: [['5 anos'], ['5 messes']]}], [{pergunta: 'What is the name of the company that encoraged the creation of the LGPD after a data leak?', possibilidade: [['Facebook'], ['Google']]}, {pergunta: 'what is the name of the profession that monitors the data law enforcement?', possibilidade: [['Data Protection Officer'], ['Back End Developer']]}, {pergunta: 'what is the name of the technique used to hide personal information?', possibilidade: [['cryptography'], ['Spoofing']]}, {pergunta: 'what is the name of the server that acts as a flux control and manages overloads?', possibilidade: [['Proxy'], ['Blade']]}, {pergunta: 'What is the maximum value that Lgpd fine can reach?', possibilidade: [['50 million reais'], ['50 thousand reais']]}, {pergunta: 'which supervisory organ will supervise the LGPD operation?', possibilidade: [['ANPD'], ['PROCON']]}, {pergunta: 'The LGPD will protect data including NIN, address, phone number, ID, and e-mail.', possibilidade: [['Correct'], ['Wrong']]}, {pergunta: 'which alternative offers preventive physical security controls?', possibilidade: [['Biometric authentication devices'], ['Cryptographic public keys']]}, {pergunta: 'How is called the name of the forced remote access attack from the client to the server?', possibilidade: [['Reverse shell'], ['NCP']]}, {pergunta: 'Which web address has an encrypted connection?', possibilidade: [['HTTPS'], ['HTTP']]}, {pergunta: 'integrity in information security involves maintaining the restricted access for the owner of the information.', possibilidade: [['correct'], ['Wrong']]}, {pergunta: 'What is the name of the package filter that acts in the network layer?', possibilidade: [['Firewall'], ['VPN']]}, {pergunta: 'What is the name of the malware that accesses the buffer of input and output devices used to steal personal information?', possibilidade: [['Keylogger'], ['trojan']]}, {pergunta: 'what is the name of the Deny of service attack distributed over several machines?', possibilidade: [['DDOS'], ['DOS']]}, {pergunta: 'What is the name of the attack that creates fake network access points that appear to be legit to steal personal information?', possibilidade: [['Evil Twin'], ['Binary exploitation']]}, {pergunta: 'which European law inspired the creation of the LGPD?', possibilidade: [['GDPR'], ['MDBR']]}, {pergunta: 'What is the minimum value of the LGPD fine?', possibilidade: [['5 thousand reais'], ['50 thousand reais']]}, {pergunta: 'which year will the LGPD be created?', possibilidade: [['2021'], ['2022']]}, {pergunta: 'Users will be able to delete, change, and update personal data information after accepting terms of service.', possibilidade: [['True'], ['False']]}, {pergunta: 'what is the goal of LGPD?', possibilidade: [['ensure users data security'], ['earn profit for cybersecurity companies']]}, {pergunta: 'every company should have a Data Security Officer if they need to store personal data.', possibilidade: [['True'], ['False']]}, {pergunta: 'end-to-end encryption only decrypts the message by the sender and the receiver, being impossible even for companies to have access to the message.', possibilidade: [['True'], ['False']]}, {pergunta: 'what is the name of the attack that creates a fake web page to steal personal data information?', possibilidade: [['Phishing'], ['Pixie-dust']]}, {pergunta: 'after the LGPD creation, companies will be able to store personal data information without the need to create a term of service.', possibilidade: [['False'], ['True']]}, {pergunta: "what is the minimum amount of time that a company needs to store a user's information before deleting them?", possibilidade: [['5 years'], ['5 months']]}]]
const traduct = document.querySelector('#linguagens');
const aboutli = [`${document.querySelector('#about').innerHTML}`, 'This game was made by the first-year student of software engineering Matheus Henrique Fernandes Santos in 2020, with the collaboration of Gustavo Oliveira, Rian Périgo and Tiago Abudi, contact:']
const infolgpdli = [`${document.querySelector('#infolgpd').innerHTML}`, "Brazil's General Data Protection Law (LGPD) deals with the concept of personal data and lists the legal bases that authorize its use - and consent is only one of them - highlighting the possibility of processing personal data based on the legitimate interests of the data controller in addition to data protection general principles; basic rights of the data subject - such as the right to access, exclusion of data and to explanation; and the obligations and limits that should be applied to any entity that processes personal data.<br>This game has two players, the first sprite is the CEO of some company, and the second is the user. Your goal in this game is to reach the end of the bridge, but the player one and the player two need to work together. The user and the CEO answer questions about the LGPD article and topics in software security, so that all their answers are correct according to the law. If the user and the CEO answer three questions wrong, the game ends."];
traduct.onchange = () => {
  document.querySelector('#about').innerHTML = aboutli[traduct.options[traduct.selectedIndex].value];
  document.querySelector('#infolgpd').innerHTML = infolgpdli[traduct.options[traduct.selectedIndex].value];
  perguntas = perguntasli[traduct.options[traduct.selectedIndex].value];
};

const botonhover = document.querySelector('#botaohover');
const setahover = document.querySelector('#selectsound');


const volumebuton = document.querySelector('#volumecheck');

let seletorbool = 0;
//volume click
const srcmuted = ['desmutado.png', 'mutado.png'];
volumebuton.onclick = function() {
  this.src = srcmuted[Math.abs(seletorbool - 1)];
  seletorbool = Math.abs(seletorbool - 1);
  document.querySelectorAll("audio").forEach(som => {
    if (som.muted === true) {
      som.muted = false;
    } else {
      som.muted = true;
    }
  });
};
let vidas = 3;

const transition = document.querySelector('#start-endscreen');

function getSoundAndFadeAudio (audiosnippetId) {
  const sound = document.querySelector(audiosnippetId);
  volumepercentage = sound.volume * 10;
  const fadeAudio = setTimeout(() => {
    if (Math.floor(volumepercentage) > 0) {
      volumepercentage = volumepercentage - 1;
      sound.volume = sound.volume - 0.1;
      getSoundAndFadeAudio(audiosnippetId);
    } else {
      sound.pause()
      clearTimeout(fadeAudio);
    }
  }, 200);
}

let tempototal = 0;
