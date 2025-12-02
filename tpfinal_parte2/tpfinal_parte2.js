//Video:
// Bejar, Keyla
//Inchauspe, Celeste: https://youtu.be/zfAxbXglC_A

let pantalla = "inicio";
let juego;

function preload() {
  juego = new Juego();
  juego.preload();
}

function setup() {
  createCanvas(640, 480);
  noSmooth();
  textAlign(CENTER, TOP);
  textSize(18);

  juego.setup();
}

function draw() {
  juego.draw();
}

function keyPressed() {
  juego.keyPressed();
}

class Juego {
  constructor() {
    this.musica = null;
    this.sonido = null;

    this.imgFondo = null;
    this.imgJuego = null;
    this.imgTeseo = null;
    this.imgMinotauro = null;

    this.boton = null;
    this.botonCreditos = null;

    this.teseo = null;
    this.minotauro = null;

    this.balasTeseo = [];
    this.balasMinotauro = [];
  }

  preload() {
    this.musica = loadSound("data/musica.mp3");
    this.sonido = loadSound("data/sonidos.mp3");

    this.imgFondo = loadImage("data/background.png");
    this.imgJuego = loadImage("data/background2.png");
    this.imgTeseo = loadImage("data/teseo.png");
    this.imgMinotauro = loadImage("data/minotauro.png");
  }

  setup() {
    this.teseo = new Personaje(width / 2, height - 130, this.imgTeseo, "Teseo");
    this.minotauro = new Personaje(width / 2, 40, this.imgMinotauro, "Minotauro");

    this.minotauro.velocidad = 2;

    this.boton = createButton("Comenzar");
    this.boton.position(width / 2 - 40, height / 2 + 120);
    this.boton.mousePressed(() => this.cambiarPantalla());

    this.botonCreditos = createButton("Créditos");
    this.botonCreditos.position(width / 2 - 40, height / 2 + 170);
    this.botonCreditos.mousePressed(() => pantalla = "creditos");
  }

  draw() {
    if (pantalla === "inicio") return this.pantallaInicio();
    if (pantalla === "juego") return this.pantallaJuego();
    if (pantalla === "fin") return this.pantallaFin();
    if (pantalla === "creditos") return this.pantallaCreditos();
  }


  pantallaInicio() {
    background(100, 150, 255);
    image(this.imgFondo, 0, 0, width, height);

    fill(255);
    textSize(24);
    text("EL CAMINO DEL MINOTAURO", width / 2, height / 3);

    textSize(19);
    text("INSTRUCCIONES:", width / 2, height / 2);

    textSize(17);
    text(
      "Usa las flechas ← → para mover a Teseo\n" +
      "Espacio para disparar\n" +
      "¡Evita al Minotauro!",
      width / 2,
      height / 2 + 35
    );

    this.boton.show();
    this.botonCreditos.show();
    this.boton.html("Comenzar");
  }


  pantallaJuego() {
    image(this.imgJuego, 0, 0, width, height);
    this.boton.hide();
    this.botonCreditos.hide();

    fill(255);
    text(`Vidas Teseo: ${this.teseo.vidas}`, 100, 10);
    text(`Vidas Minotauro: ${this.minotauro.vidas}`, width - 120, 10);

    this.minotauro.dibujar();
    this.teseo.dibujar();

    this.movimientoMinotauro();
    this.disparoMinotauro();
    this.actualizarBalas();

    if (this.teseo.vidas <= 0 || this.minotauro.vidas <= 0) {
      pantalla = "fin";
    }
  }

 
  movimientoMinotauro() {
    this.minotauro.x += this.minotauro.velocidad;
    if (this.minotauro.x > width - 40 || this.minotauro.x < 40) {
      this.minotauro.velocidad *= -1;
    }
  }

  disparoMinotauro() {
    if (frameCount % 60 === 0) {
      this.balasMinotauro.push(new Bala(this.minotauro.x, 120, 4));
    }
  }


  actualizarBalas() {
    // Balas Teseo
    fill(0, 0, 255);
    for (let i = 0; i < this.balasTeseo.length; i++) {
      let b = this.balasTeseo[i];
      b.y -= b.vel;

      ellipse(b.x, b.y, 10);

      if (dist(b.x, b.y, this.minotauro.x, 80) < 40) {
        this.minotauro.vidas--;
        this.sonido.play();
        this.balasTeseo.splice(i, 1);
        i--;
      }
    }

    // Balas Minotauro
    fill(255, 0, 0);
    for (let i = 0; i < this.balasMinotauro.length; i++) {
      let b = this.balasMinotauro[i];
      b.y += b.vel;

      ellipse(b.x, b.y, 10);

      if (dist(b.x, b.y, this.teseo.x, height - 80) < 30) {
        this.teseo.vidas--;
        this.sonido.play();
        this.balasMinotauro.splice(i, 1);
        i--;
      }
    }
  }


  pantallaFin() {
    background(0);
    fill(255);
    textSize(32);

    this.musica.stop();

    if (this.teseo.vidas <= 0) {
      text("¡Perdiste! El Minotauro te ha derrotado.", width / 2, height / 2 - 40);
    } else {
      text("¡Ganaste! Teseo vence al Minotauro.", width / 2, height / 2 - 40);
    }

    textSize(18);
    text("Click en Comenzar para reiniciar", width / 2, height / 2 + 20);

    this.boton.show();
    this.boton.html("Comenzar");
  }


  pantallaCreditos() {
    background(0);
    fill(255);
    textSize(26);
    text("CRÉDITOS", width / 2, 80);

    textSize(18);
    text("Alumnas: Bejar Keyla e Inchauspe, Celeste\nComisión 3", width / 2, 150);

    this.boton.show();
    this.boton.html("Volver");
    this.boton.position(width / 2 - 40, height - 100);
    this.botonCreditos.hide();
  }


  keyPressed() {
    if (pantalla === "juego") {
      if (keyCode === LEFT_ARROW) this.teseo.x -= 10;
      else if (keyCode === RIGHT_ARROW) this.teseo.x += 10;
      else if (key === " ") {
        this.balasTeseo.push(new Bala(this.teseo.x, height - 100, 5));
        this.sonido.play();
      }
    }
  }

  cambiarPantalla() {
    pantalla = "juego";

    if (!this.musica.isPlaying()) {
      this.musica.loop();
      this.musica.setVolume(0.5);
    }

    this.teseo.reset(width / 2);
    this.minotauro.reset(width / 2);

    this.balasTeseo = [];
    this.balasMinotauro = [];
  }
}

class Personaje {
  constructor(x, y, img, nombre) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.nombre = nombre;
    this.vidas = 3;
    this.velocidad = 0;
  }

  dibujar() {
    image(this.img, this.x - 50, this.y, 96, 96);
    text(this.nombre, this.x, this.y + 90);
  }

  reset(posX) {
    this.x = posX;
    this.vidas = 3;
  }
}

class Bala {
  constructor(x, y, vel) {
    this.x = x;
    this.y = y;
    this.vel = vel;
  }
}
