let barco
let mar

const tamanho = 64
const velocidade = 64

let andarX = 0
let andarY = 0

function setup() {
  createCanvas(576, 576);
  
  barco = loadImage('barco.png')
  mar = loadImage('mar.png')
  bau = loadImage('bau.png')
}

function draw() {
  background(220);
  
  for(let x = 0; x < 9; x++){
    for(let y = 0; y < 9; y++){
      image(mar, 64*x,64*y, tamanho, tamanho)
    }
  }
image(bau, 64*8, 64*8, tamanho, tamanho)  
  
image(barco, andarX, andarY, tamanho, tamanho) 
  
  if(andarX === tamanho*8 && andarY === tamanho*8){
    rect(160, 160, 256, 256)
    textSize(20)
    text('Achou o tesouro!', 220, 300)
    botao = createButton('Reiniciar')
    botao.mousePressed(reinicio)
    botao.position(260, 350)
    noLoop()
  }

function reinicio(){
  andarX = 0
  andarY = 0
  botao.remove()
  loop()
}

  if(andarX < 0){
    andarX = 0
  }
  
  if(andarY < 0){
    andarY = 0
  }
  
  if(andarX > tamanho*8){
    andarX = tamanho*8
  }
  
  if(andarY > tamanho*8){
    andarY = tamanho*8
  }
  
}


function keyPressed(){
  if(keyIsDown(UP_ARROW)){
    andarY -= velocidade
  }
  
  if(keyIsDown(DOWN_ARROW)){
    andarY += velocidade
  }
  
  if(keyIsDown(LEFT_ARROW)){
    andarX -= velocidade
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    andarX += velocidade
  }
}