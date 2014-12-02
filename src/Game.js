
BasicGame.Game = function () {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;    //  the tween manager
    this.state;	    //	the state manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

    //Extras!!
    this.grilla;
    this.bg;
    this.music;
};

BasicGame.Game.prototype = {
    preload: function(){
        this.game.load.spritesheet('banana_1', 'assets/sprites/1.png', 35, 35, 8);
        this.game.load.spritesheet('morado_1', 'assets/sprites/2.png', 35, 35, 8);
        this.game.load.spritesheet('verde_1', 'assets/sprites/3.png', 35, 35, 8);
        this.game.load.spritesheet('rojo_1', 'assets/sprites/4.png', 35, 35, 8);
        this.game.load.spritesheet('naranjo_1', 'assets/sprites/5.png', 35, 35, 8);
        this.load.image('game_bg', 'assets/backgrounds/game.png');
        this.load.image('banana', 'assets/img/frutitas/1.png');
        this.load.image('morado', 'assets/img/frutitas/2.png');
        this.load.image('verde', 'assets/img/frutitas/3.png');
        this.load.image('rojo', 'assets/img/frutitas/4.png');
        this.load.image('naranjo', 'assets/img/frutitas/5.png');
        this.load.image('spotlight', 'assets/img/frutitas/spotlight.png');
        this.music = song;
        this.music.preload();
    },

	create: function () {
        //BACKGROUND
        this.bg = this.add.sprite(this.world.centerX-340,this.world.centerY -215 , 'game_bg');

        //EXTRAS!!!
        this.score_text = game.add.text(173, 235, '', {fill: '#000'});
        this.score_text.scale.x = .8;
        this.score_text.scale.y = .8;
        this.spotlight = game.add.sprite(Math.round(this.game.width/2 + 55), Math.round(this.game.height/2 - 195), 'spotlight');
        this.multipler_text = game.add.text(173, 183, '', {fill: '#000'});
        this.multipler_text.scale.x = .5;
        this.multipler_text.scale.y = .6;

        //COLA
        this.music.create();
        this.cola = new Cola(this.game, this.music);

        //GRILLA
        this.grilla = new matrix(this.game, this.cola, this.music, this.score);
        this.grilla.create(6, 7);
	},

	update: function () {
        //this.music.update();
        this.cola.QueueUpdate();
        this.grilla.ScoreUpdate(this.score_text, this.multipler_text);
	},

	quitGame: function (pointer) {
		this.state.start('MainMenu');
	}

};
