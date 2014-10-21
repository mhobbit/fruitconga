var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.audio('conga', ['assets/audio/clicktrack_122bpm.ogg' , 'assets/audio/clicktrack_122bpm.mp3'], true);
    game.load.spritesheet('pickle', 'assets/banana_spritesheet.png', 33, 35, 8, 0, 0);

}
//varios
var music;
var pickle;
//debug
var i = 0;
var n = 0;
//conductor
var bpm = 122;
var lastbeat = 0;
var beat = 60000/bpm;
var offset;
var tolerance = 120;

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
    offset = 0;
    lastbeat += offset;
}

function update() {
    if(music.isDecoded && music.isPlaying){
        musicOn();
    }
}

function render() {
    game.debug.text(music.currentTime, 20, 30);
    game.debug.text(lastbeat, 20, 45);
    game.debug.text( i, 20, 60 );
    game.debug.text( n, 20, 75 );
}

function clickOnBeat(event, sprite){
    var time = music.currentTime;
    i = time;
    if(time >= lastbeat - tolerance){
        if(time <= lastbeat + tolerance){
            n += 1;
        }
    }
}

function musicOn(){
    pickle.animations.play('dancing_pickle');

    if(music.currentTime > lastbeat + beat){
        nbeat +=1;
        lastbeat += beat;
    }
}