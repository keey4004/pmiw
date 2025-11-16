//Video:
// Bejar, Keyla
//Inchauspe, Celeste: https://youtu.be/zfAxbXglC_A

let pantalla = "inicio";
let boton;

let musica;
let sonido;

let xTeseo, xMinotauro;
let velocidadMinotauro = 2;
let vidasTeseo = 3;
let vidasMinotauro = 3;
let balasTeseo = [];
let balasMinotauro = [];

let imgTeseo; 
let imgMinotauro; 
let imgFondo;
let imgJuego;

function preload() {
  musica = loadSound("data/musica.mp3");
  sonido = loadSound("/data/sonidos.mp3");
  imgFondo = loadImage("data/background.png");
  imgJuego = loadImage("data/background2.png");
  imgTeseo = loadImage("data/teseo.png");
  imgMinotauro = loadImage("data/minotauro.png");
}

function setup() {
  createCanvas(640, 480);
  noSmooth();
  textAlign(CENTER, TOP);
  textSize(18);

  xTeseo = width / 2;
  xMinotauro = width / 2;

  boton = createButton("Comenzar");
  boton.position(width / 2 - 40, height / 2 + 120);
  boton.mousePressed(cambiarPantalla);

  botonCreditos = createButton("Créditos");
  botonCreditos.position(width / 2 - 40, height / 2 + 170);
  botonCreditos.mousePressed(() => pantalla = "creditos");
}

//---Pantalla inicio---
function draw() {
  if (pantalla == "inicio") {
    background(100, 150, 255);
    fill(255);
    image(imgFondo, 0, 0, width, height);
    textAlign(CENTER);
    textSize(24);
    text("EL CAMINO DEL MINOTAURO", width/2, height/3);
    textSize(19);
    text("INSTRUCCIONES:", width/2, height/2 + 10);

    textSize(17);
    text(
      "Usa las flechas ← → para mover a Teseo\n" +
      "Espacio para disparar\n" +
      "¡Evita al Minotauro!", width / 2, height/2 + 40);

    boton.show();
    boton.html("Comenzar");

    botonCreditos.show();
  }
    
  else if (pantalla == "juego") {
    background(180, 220, 180);
    image(imgJuego, 0, 0, width, height);
    boton.hide();
    botonCreditos.hide();

    //---Vidas del Minotauro---
    fill(255);
    textSize(18);
    text(`Vidas Teseo: ${vidasTeseo}`, 100, 10);
    text(`Vidas Minotauro: ${vidasMinotauro}`, width - 120, 10);

    //---MINOTAURO---
    image(imgMinotauro, xMinotauro - 50, 40, 96, 96);
    fill(0);
    text("Minotauro", xMinotauro, 130);

    xMinotauro += velocidadMinotauro;
    if (xMinotauro > width - 40 || xMinotauro < 40) {
      velocidadMinotauro *= -1;
    }

    //---Disparos del Minotauro---
    if (frameCount % 60 == 0) {
      balasMinotauro.push({ x: xMinotauro, y: 120 });
    }

    //---TESEO---
    image(imgTeseo, xTeseo - 50, height - 130, 96, 96);
    fill(0);
    text("Teseo", xTeseo, height - 50);

    //---Disparos de Teseo---
    fill(0, 0, 255);
    for (let i = 0; i < balasTeseo.length; i++) {
      balasTeseo[i].y -= 5;
      ellipse(balasTeseo[i].x, balasTeseo[i].y, 10);
      
      if (dist(balasTeseo[i].x, balasTeseo[i].y, xMinotauro, 80) < 40) {
        vidasMinotauro--;
        sonido.play();
        balasTeseo.splice(i, 1);
        i--;
      }
    }

    //---Disparos de Minotauro---
    fill(255, 0, 0);
    for (let i = 0; i < balasMinotauro.length; i++) {
      balasMinotauro[i].y += 4;
      ellipse(balasMinotauro[i].x, balasMinotauro[i].y, 10);
      
      if (dist(balasMinotauro[i].x, balasMinotauro[i].y, xTeseo, height - 80) < 30) {
        vidasTeseo--;
        sonido.play();
        balasMinotauro.splice(i, 1);
        i--;
      }
    }

    //---Fin---
    if (vidasTeseo <= 0 || vidasMinotauro <= 0) {
      pantalla = "fin";
    }
  }

  else if (pantalla == "fin") {
    background(0);
    fill(255);
    textSize(32);

    if (vidasTeseo <= 0) {
      text("¡Perdiste! El Minotauro te ha derrotado.", width / 2, height / 2 - 40);
    } else {
      text("¡Ganaste! Teseo vence al Minotauro.", width / 2, height / 2 - 40);
    }

    textSize(18);
    text("Clip en Comenzar para reiniciar", width / 2, height / 2 + 20);
    boton.show();
    boton.html("Comenzar");
    botonCreditos.hide();
  }

  else if (pantalla == "creditos") {
    background(0);
    fill(255);
    textSize(26);
    text("CRÉDITOS", width / 2, 80);

    textSize(18);
    text(
      "Alumnas: Bejar Keyla e Inchauspe, Celeste" +
      "Comision 3",
      width / 2,
      150
    );

    boton.show();
    boton.html("Volver");
    boton.position(width / 2 - 40, height - 100);
    botonCreditos.hide();
  }
}

function keyPressed() {
  if (pantalla == "juego") {
    if (keyCode === LEFT_ARROW) xTeseo -= 10;
    else if (keyCode === RIGHT_ARROW) xTeseo += 10;
    else if (key === " ") {
      balasTeseo.push({ x: xTeseo, y: height - 100 });
      sonido.play();
    }
  }
}

function cambiarPantalla() {
  pantalla = "juego";
  
  if (!musica.isPlaying()) {
    musica.loop();
    musica.setVolume(0.5);
  }
  
  vidasTeseo = 3;
  vidasMinotauro = 3;
  balasTeseo = [];
  balasMinotauro = [];
  xTeseo = width / 2;
  xMinotauro = width / 2;
}

