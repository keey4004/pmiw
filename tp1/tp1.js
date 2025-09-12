/* Keyla Nerea Bejar
link
*/


let imgUno;
let t = 0;
let cuadrado = 4;
let fila = 2;
let tamaño = 400;
let miBase = [];
let colores = false;
let escala = [];

function preload() {
  imgUno = loadImage("data/F_12.jpg");
}

function setup() {
  createCanvas(800, 400);
  iniciarColor();
  
  for (let y = 0; y < fila; y++) {
    escala[y] = [];
    for (let x = 0; x < fila; x++) {
      escala[y][x] = 1.0;
    }
  }
}

function draw() {
  background(255);
  //imagen de referencia
  image(imgUno, 0, 0, 400, 400);

  let tam = tamaño / fila;

  for (let y = 0; y < fila; y++) {
    for (let x = 0; x < fila; x++) {
      let index = y * fila + x;
      
      //ubicación del cuadrado
      let posX = width / 2 + x * tam;
      let posY = y * tam;

      // para saber si el mouse esta encima
      if (mouseX > posX && mouseX < posX + tam && mouseY > posY && mouseY < posY + tam) {
        escala[y][x] = lerp(escala[y][x], 1.5, 0.1); // aumenta tamaño ------
      } else {
        escala[y][x] = lerp(escala[y][x], 1.0, 0.05); // vuelve al original -----
      }
//dibujo, funcion que no retorna nada ------
      dibujarCuadrado(posX, posY, tam * escala[y][x], index);
    }
  }
}

//funcion que no retorna --------
function dibujarCuadrado(x, y, tam, tipo) {
  let base = 10;
  let paso = tam / (2 * base);
  
  push();
  translate(x + tam / 2, y + tam / 2);
  
  for (let i = base; i > 0; i--) {
    let s = i * paso * 2;
    let c = colores ? colorBase(i, tipo) : miBase[(i + tipo) % miBase.length];
    fill(c);
    stroke(255, 23, 23);
    strokeWeight(5);
    rectMode(CENTER);
    rect(0, 0, s, s);
  }
  pop();
}

//funcion propia que si retorna (un color) ------
function colorBase(i, tipo) {
  let a = map(i, 0, 15, 0, 255);
  let b = random(10, 255);
  let c = map(tipo, 0, 3, 255, 0);
  return color(a, b, c);
}

//funcion propia que no retorna --------
function iniciarColor() {
  miBase = [
  
    color(230, 15, 0),      // rojo
    color(241, 155, 255),   // rosa
    color(249, 169, 120),   // naranja
    color(66, 238, 252),    // cian
    color(75, 252, 66),     // verde
    color(41, 101, 227),    // azul
    color(255, 255, 0),     // amarillo
    color(255, 0, 255)      // magenta
  ];
}
//para alternar colores con un click
function mousePressed() {
  colores = true;
}

//reiniia codigo con tecla S
function keyPressed() {
  if (key === 's' || key === 'S') {
    t = 0;
    colores = false;
    reiniciarEscala();
  }
}

//reincia escala con tecla S
function reiniciarEscala() {
  for (let y = 0; y < fila; y++) {
    for (let x = 0; x < fila; x++) {
      escala[y][x] = 1.0;
    }
  }
}
