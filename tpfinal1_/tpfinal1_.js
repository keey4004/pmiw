/*Bejar Keyla Nerea 
Inchauspe Celeste
vid. Keyla: https://www.youtube.com/watch?v=-d1HjRhFl08
vid. Celeste: https://www.youtube.com/watch?v=Ekseos9QNmI
*/

let pantalla = 0; 
let colorBoton = 100; 
let colorFondo = 220; 
let tamanoFuente = 18;
let tipografia;
let mimusica;
let img1, img2, img3, img4, img5, img6, img7, img8, img10, img11, img12, img14, img16;

function preload() {
  tipografia = loadFont("data/tipo.ttf");
  mimusica = loadSound("./data/musica.mp3");
  img1 = loadImage("data/p1.png");
  img2 = loadImage("data/p2.png");
  img3 = loadImage("data/p3.png");
  img4 = loadImage("data/p4.png");
  img5 = loadImage("data/p5.png");
  img6 = loadImage("data/p6.png");
  img7 = loadImage("data/p7.png");
  img8 = loadImage("data/p8.png");
  img10 = loadImage("data/p10.png");
  img11 = loadImage("data/p11.png");
  img12 = loadImage("data/p12.png");
  img14 = loadImage("data/p14.png");
  img16 = loadImage("data/p16.png");
  
}
  
function setup() {
  createCanvas(800, 600);
  textFont(tipografia);
  textAlign(CENTER, CENTER); 
  textSize(tamanoFuente);
}

// Dibuja el botón 
function dibujarBoton(txt, x, y, w, h) {
  fill(colorBoton);
  rect(x, y, w, h, 8); 
  fill(255); 
  text(txt, x + w/2, y + h/2);
}

// Botón
function botonClic(x, y, w, h) {
  let estaDentroX = mouseX > x && mouseX < x + w;
  let estaDentroY = mouseY > y && mouseY < y + h;
  return estaDentroX && estaDentroY;
}

function draw() {
  background(colorFondo);
  fill(0); 
  
  let anchoCaja = width * 0.8; 
  let xCaja = width * 0.1;
  let yInicioCaja = height / 4; 
  let yCentro = height / 3; 
  
  // --- PANTALLA 0: PORTADA (Inicio) ---
  if (pantalla === 0) {
    text("Alumnas: Bejar, Keyla Nerea e Inchauspe, Celeste", width/2, height/2 - 20); 
    text("Autor de la obra", width/2, height/2 + 40); 
    dibujarBoton("INICIO", width/2 - 60, 450, 120, 40);
  }

  // --- PANTALLA 1: TÍTULO ---
  else if (pantalla === 1) {
    image(img1, 0, 0, width, height);
    text("El laberinto del Minotauro", width/2, yCentro);
    dibujarBoton("CREDITOS", 200, 450, 120, 40); 
    dibujarBoton("INICIO", 480, 450, 120, 40);  
  }
    
  // --- PANTALLA 2: INTRODUCCIÓN ---
  else if (pantalla === 2) {
    image(img2, 0, 0, width, height);
    let introText = "Eres Teseo y debes entrar al laberinto para encontrar al Minotauro. " +
                    "En el camino deberás decidir si sigues el hilo de Ariadna, enfrentas criaturas mitológicas y eliges diferentes rutas.\n\n" +
                    "Y el objetivo: matar al Minotauro.";
    text(introText, xCaja, yInicioCaja, anchoCaja, 200); 
    dibujarBoton("SIGUIENTE", width/2 - 60, 450, 120, 40); 
  }

  // --- PANTALLA 3: HILO DE ARIADNA (BIFURCACIÓN INICIAL) ---
  else if (pantalla === 3) {
    image(img3, 0, 0, width, height);
    let p3Text = "Entrada al laberinto. Apenas entras te encuentras con el hilo de Ariadna, que te guiará de forma más rápida.\n\n" +
                 "¿Deseas usarlo?";
    text(p3Text, xCaja, yInicioCaja, anchoCaja, 200);
    dibujarBoton("NO", 200, 450, 120, 40); 
    dibujarBoton("SI", 480, 450, 120, 40); 
  }
  
  // --- PANTALLA 4: PUERTAS CERRADAS ---
  else if (pantalla === 4) {
    image(img4, 0, 0, width, height);
    let p4Text = "Encuentras unas puertas cerradas.\nEl tramo está bloqueado. ¿Quieres buscar otro camino?";
    text(p4Text, xCaja, yInicioCaja, anchoCaja, 200);
    dibujarBoton("NO", 200, 450, 120, 40);  
    dibujarBoton("SI", 480, 450, 120, 40);  
  }

  // --- PANTALLA 5: EL PRIMER CRUCE ---
  else if (pantalla === 5) {
    image(img5, 0, 0, width, height);
    let p5Text = "Recorres un terreno algo baldío con diferentes caminos.\n" +
                   "El de la derecha es totalmente oscuro, sin ninguna alma;\n" +
                   "el de la izquierda tiene ruidos extraños, como lamentos.\n" +
                   "¿Qué eliges?";
    text(p5Text, xCaja, yInicioCaja, anchoCaja, 200);  
    dibujarBoton("IZQUIERDA", 200, 450, 120, 40); 
    dibujarBoton("DERECHA", 480, 450, 120, 40); 
  }
  
  // --- PANTALLA 6: ENCUENTRO MINOTAURO (RUTA IZQUIERDA) ---
  else if (pantalla === 6) {
    image(img6, 0, 0, width, height);
    let p6Text = "Encuentras al minotauro, estás frente a frente, solo tienes unos segundos para decidir.";
    text(p6Text, width/2, yCentro); 
    dibujarBoton("HUIR", 200, 450, 120, 40); 
    dibujarBoton("ATACAR", 480, 450, 120, 40); 
  }
  
  // --- PANTALLA 7: ENCUENTRO MINOTAURO (RUTA DERECHA) ---
  else if (pantalla === 7) {
    image(img7, 0, 0, width, height);
    let p7Text = "Encuentras al minotauro, pero las cosas podrían ir mal de inmediato.\n¿Deseas atacar?";
    text(p7Text, xCaja, yInicioCaja, anchoCaja, 200);
    dibujarBoton("NO", 200, 450, 120, 40);  
    dibujarBoton("SI", 480, 450, 120, 40);  
  }
  
  // --- PANTALLA 12: PRISIONEROS (RUTA PUERTAS CERRADAS/SI) ---
  else if (pantalla === 12) {
    image(img12, 0, 0, width, height);
    let p12Text = "Decisiones. Encuentras a los prisioneros del lugar.\n" +
                  "Pero oyes a lo lejos los ruidos del Minotauro. ¿Quieres escapar?";
    text(p12Text, xCaja, yInicioCaja, anchoCaja, 200); 
    dibujarBoton("NO", 200, 450, 120, 40);  
    dibujarBoton("SI", 480, 450, 120, 40);  
  }
  
  // --- PANTALLA 14: ENCUENTRO MINOTAURO (RUTA PUERTAS CERRADAS/NO o PRISIONEROS/NO) ---
  else if (pantalla === 14) {
    image(img14, 0, 0, width, height);
    let p14Text = "Encuentras al Minotauro.\nTienes la posibilidad de hablar con él o pelear. ¿Qué decides?";
    text(p14Text, width/2, yCentro);
    dibujarBoton("PELEAR", 200, 450, 120, 40);  
    dibujarBoton("HABLAR", 480, 450, 120, 40);  
  }

  // --- PANTALLAS DE FINAL (Reiniciar) ---
  
  // PANTALLA 8: Final Huir (ruta P6)
  else if (pantalla === 8) {
    image(img8, 0, 0, width, height);
    let p8Text = "Tras correr por largo rato y el cansancio susurrando en tu nuca, has logrado escapar,\npero el sentimiento de culpa te atormenta, abandonaste a todos.\nSobreviviste ¡pero a qué costo!";
    text(p8Text, xCaja, yInicioCaja, anchoCaja, 200);
    dibujarBoton("INICIO", width/2 - 60, 450, 120, 40);
  }
  // PANTALLA 10: Final Victoria (rutas P6 y P7)
  else if (pantalla === 10) {
    image(img10, 0, 0, width, height);
    let p10Text = "Matas al Minotauro y eres coronado como héroe por todo el mundo. ¡Felicidades!\nRegresa a casa como un campeón, lo tienes totalmente merecido.";
    text(p10Text, xCaja, yInicioCaja, anchoCaja, 200);
    dibujarBoton("INICIO", width/2 - 60, 450, 120, 40);
  }
  // PANTALLA 11: Final Derrota (ruta P7)
  else if (pantalla === 11) {
    image(img11, 0, 0, width, height);
    let p11Text = "Lamentablemente quedas sin fuerza, y con tu último aliento ves los ojos furiosos\n del Minotauro, su cuerpo tenebroso y su aura oscura y enloquecida. Eres derrotado por él.";
    text(p11Text, xCaja, yInicioCaja, anchoCaja, 200);
    dibujarBoton("INICIO", width/2 - 60, 450, 120, 40);
  }
  // PANTALLA 13: Final Huir/Prisioneros (ruta P12)
  else if (pantalla === 13) {
    image(img8, 0, 0, width, height);
    let p13Text = "Tras varias corridas y el cansancio susurrando en tu nuca has logrado escapar,\npero el sentimiento de culpa te atormenta, abandonaste a todos los prisioneros sin intentar nada.\nSobreviviste ¡pero a qué costo!";
    text(p13Text, xCaja, yInicioCaja, anchoCaja, 200);
    dibujarBoton("INICIO", width/2 - 60, 450, 120, 40);
  }
  // PANTALLA 15: Final Derrota/Pelear 
  else if (pantalla === 15) {
    image(img11, 0, 0, width, height);
    let p15Text = "Lamentablemente te quedas sin fuerza, y con tu último aliento, ves los ojos furiosos del minotauro y su aura oscura. ¡Eres derrotado por él!";
    text(p15Text, xCaja, yInicioCaja, anchoCaja, 200);
    dibujarBoton("INICIO", width/2 - 60, 450, 120, 40);
  }
  // PANTALLA 16: Final Liberación/Hablar (ruta P14)
  else if (pantalla === 16) {
    image(img16, 0, 0, width, height);
    text("Las cosas no salen como esperabas pero de algún modo el Minotauro te deja libre. ¡Felicidades!", width/2, yCentro);
    dibujarBoton("INICIO", width/2 - 60, 450, 120, 40);
  }
  
    
    //--- Botón de sonido de fondo---
  ellipse(40, 40, 60, 60);

    //--- Sonido segun la posicion del mouse---
  if ( mimusica.isPlaying() ) {
    let paneo = map(mouseX, 0, width, -1, 1);
    paneo = constrain( paneo, -1, 1 );
    mimusica.pan( paneo );
    //console.log( paneo);
  }
}


function mousePressed() {
  
    if ( dist(mouseX, mouseY, 40, 40)<30 ) {


    //Clic en el botón de iniciar para parar musica:
    if ( mimusica.isPlaying() ) {
      mimusica.pause();
    } else {
      mimusica.loop();
      mimusica.setVolume(0.1);
    }
  }

 // PANTALLA 0: Portada -> INICIO (1)
  if (pantalla === 0 && botonClic(width / 2 - 60, 450, 120, 40)) {
    pantalla = 1;

  }
  
  // PANTALLA 1: Título -> "CREDITOS" (0) o "INICIO" (2)
  else if (pantalla === 1) {
    if (botonClic(200, 450, 120, 40)) pantalla = 0;    // CREDITOS -> Pantalla 0
    if (botonClic(480, 450, 120, 40)) pantalla = 2;    // INICIO -> Pantalla 2
  }
  
  // PANTALLA 2: Intro -> 3
  else if (pantalla === 2 && botonClic(width / 2 - 60, 450, 120, 40)) {
    pantalla = 3;
  }
  
  // PANTALLA 3: Hilo de Ariadna -> "NO" (4) o "SI" (5)
  else if (pantalla === 3) {
    if (botonClic(200, 450, 120, 40)) pantalla = 4;    // NO -> Pantalla 4 (Puertas cerradas)
    if (botonClic(480, 450, 120, 40)) pantalla = 5;    // SI -> Pantalla 5 (Primer cruce)
  }
  
  // PANTALLA 4: Puertas cerradas -> "NO" (14) o "SI" (12)
  else if (pantalla === 4) {
    if (botonClic(200, 450, 120, 40)) pantalla = 14;   // NO -> Pantalla 14 (Encuentro/Pelear o Hablar)
    if (botonClic(480, 450, 120, 40)) pantalla = 12;   // SI -> Pantalla 12 (Prisioneros/Decisiones)
  }

  // PANTALLA 5: El primer cruce -> "IZQUIERDA" (6) o "DERECHA" (7)
  else if (pantalla === 5) {
    if (botonClic(200, 450, 120, 40)) pantalla = 6;    // IZQUIERDA -> Pantalla 6 (Encuentro/Huir o Atacar)
    if (botonClic(480, 450, 120, 40)) pantalla = 7;    // DERECHA -> Pantalla 7 (Encuentro/Si o No)
  }
  
  // PANTALLA 6: Encuentro/Huir o Atacar -> "HUIR" (8) o "ATACAR" (10)
  else if (pantalla === 6) {
    if (botonClic(200, 450, 120, 40)) pantalla = 8;    // HUIR -> Pantalla 8 (Final Sobreviviente)
    if (botonClic(480, 450, 120, 40)) pantalla = 10;   // ATACAR -> Pantalla 10 (Final Victoria)
  }
  
  // PANTALLA 7: Encuentro/Si o No -> "NO" (11) o "SI" (10)
  else if (pantalla === 7) {
    if (botonClic(200, 450, 120, 40)) pantalla = 11;   // NO -> Pantalla 11 (Final Derrota)
    if (botonClic(480, 450, 120, 40)) pantalla = 10;   // SI -> Pantalla 10 (Final Victoria)
  }
  
  // PANTALLA 12: Prisioneros -> "NO" (14) o "SI" (13)
  else if (pantalla === 12) {
    if (botonClic(200, 450, 120, 40)) pantalla = 14;   // NO -> Pantalla 14 (Encuentro/Pelear o Hablar)
    if (botonClic(480, 450, 120, 40)) pantalla = 13;   // SI -> Pantalla 13 (Final Sobreviviente con culpa)
  }
  
  // PANTALLA 14: Encuentro/Pelear o Hablar -> "PELEAR" (15) o "HABLAR" (16)
  else if (pantalla === 14) {
    if (botonClic(200, 450, 120, 40)) pantalla = 15;   // PELEAR -> Pantalla 15 (Final Derrota/Pelear)
    if (botonClic(480, 450, 120, 40)) pantalla = 16;   // HABLAR -> Pantalla 16 (Final Liberación)
  }

  // Boton de reinicio
  if ([8, 10, 11, 13, 15, 16].includes(pantalla)) {
    if (botonClic(width / 2 - 60, 450, 120, 40)) {
      pantalla = 0; 
     

    }
  }
}
