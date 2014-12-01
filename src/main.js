var width = 315;
var height = 455;
var game = new Phaser.Game(width, height, Phaser.CANVAS, 'phaser_example', { preload: preload, create: create, update: update });

function preload() {
    game.load.spritesheet('banana', 'assets/img/banana.png', 33, 35, 8);
    game.load.spritesheet('apple', 'assets/img/apple.png', 35, 34, 8);
    game.load.spritesheet('green_apple', 'assets/img/green_apple.png', 33, 35, 8);
    game.load.spritesheet('pina', 'assets/img/pina.png', 35, 35, 8);
    game.load.spritesheet('sandia', 'assets/img/sandia.png', 35, 35, 8);
}

//MATRIZ
var grilla;

//Piso
var piso;

function create() {
    if(!game.device.desktop){
        var canvas_game = document.getElementsByTagName('canvas');
        canvas_game[0].style.width = "80%";
    }
    game.stage.backgroundColor = "#EEE";
    //GRILLA
    grilla = new matrix(game);
    grilla.create(6, 7);
}

function update() {
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}