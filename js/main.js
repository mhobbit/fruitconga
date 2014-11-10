var width = 800;
var height = 600;
var game = new Phaser.Game(width, height, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.audio('conga', ['assets/audio/conga.ogg' , 'assets/audio/conga.mp3'], true);
    game.load.spritesheet('banana', 'assets/img/banana.png', 33, 35, 8);
    game.load.spritesheet('apple', 'assets/img/apple.png', 35, 34, 8);
    game.load.spritesheet('green_apple', 'assets/img/green_apple.png', 33, 35, 8);
    game.load.spritesheet('pina', 'assets/img/pina.png', 35, 35, 8);
    game.load.spritesheet('sandia', 'assets/img/sandia.png', 35, 35, 8);
}

//MATRIZ
var tablero = [];
var cola = [];
var score_text;
var selector;

//MUSICA
var music;

function create() {
    game.stage.backgroundColor = '#ddd';
    createMatris(tablero, game);
    music = game.add.audio('conga');
    music.play();
    score_text = game.add.text(5, 5, '', {fill: '#000'});
    selector = game.add.text(586, 38, '[   ]', {fill: '#000'});
}

function update() {
    QueueUpdate(cola);
    if(score > 0){
        score_text.text = "Score: " + score;
    }
}