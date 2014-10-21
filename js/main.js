var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.audio('conga', ['assets/audio/conga.ogg' , 'assets/audio/conga.mp3'], true);
    game.load.spritesheet('pickle', 'assets/banana_spritesheet.png', 33, 35, 8, 0, 0);

}
//varios
var music;
var pickle;
var i = 0;
//conductor
var bpm = 122;
var lastbeat = 0;
var beat = 60/bpm;
var offset;
var tolerance = 100;

var nbeat = 0;

function create() {
    game.stage.backgroundColor = '#182d3b';

    pickle = game.add.sprite(game.world.width/2, game.world.height/2, 'pickle');
    pickle.animations.add('dancing_pickle', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);

    pickle.inputEnabled = true;
    pickle.input.useHandCursor = true;
    pickle.events.onInputDown.add(clickOnBeat);


    music = game.add.audio('conga');
    music.play();
    offset = 1000;
    lastbeat += offset;
}

function update() {
    if(music.isDecoded && music.isPlaying){
        musicOn();
    }
}

function render() {
    game.debug.text(music.currentTime, 20, 30);
    game.debug.text(nbeat/32, 20, 45);
    game.debug.text( i, 20, 60 );
}

function clickOnBeat(event, sprite){
    var time = music.currentTime;
    var nextBeat = lastbeat+beat;
    if(nextBeat - tolerance < time && time > nextBeat + tolerance){
        i += 1;
    }
}

function musicOn(){
    pickle.animations.play('dancing_pickle');

    if(music.currentTime > lastbeat + beat){
        nbeat +=1;
    }
}