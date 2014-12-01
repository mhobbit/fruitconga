
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
    this.score = 0;
};

BasicGame.Game.prototype = {
    preload: function(){
        this.game.load.spritesheet('banana_1', 'assets/img/banana.png', 35, 35, 8);
        this.game.load.spritesheet('apple_1', 'assets/img/apple.png', 35, 35, 8);
        this.game.load.spritesheet('green_apple_1', 'assets/img/green_apple.png', 35, 35, 8);
        this.game.load.spritesheet('pina_1', 'assets/img/pina.png', 35, 35, 8);
        this.game.load.spritesheet('sandia_1', 'assets/img/sandia.png', 35, 35, 8);
        this.load.image('game_bg', 'assets/backgrounds/game.png');
        this.load.image('banana', 'assets/img/frutitas/1.png');
        this.load.image('morado', 'assets/img/frutitas/2.png');
        this.load.image('verde', 'assets/img/frutitas/3.png');
        this.load.image('rojo', 'assets/img/frutitas/4.png');
        this.load.image('naranjo', 'assets/img/frutitas/5.png');
        this.music = new Song(['assets/audio/latin/Peppy Pepe.ogg'], 124, 0, this.game);
        this.music.preload();
    },

	create: function () {
        //this.game.physics.startSystem(Phaser.Physics.ARCADE);
        //piso = this.game.add.sprite((game.width/2 - 115), ((game.height/2) + 130), 'piso', 0);

        //EXTRAS!!!
        this.score_text = game.add.text(5, 5, '', {fill: '#000'});
        this.selector = game.add.text(586, 38, '[ ]', {fill: '#000'});
        this.multipler_text = game.add.text(700, 500, '', {fill: '#000'});

        //COLA
        this.music.create();
        this.cola = new Cola(this.game, this.music);

        //GRILLA
        this.bg = this.add.sprite(this.world.centerX-340,this.world.centerY -215 , 'game_bg');
        this.grilla = new matrix(this.game, this.cola);
        this.grilla.create(6, 7);
	},

	update: function () {
        //this.music.update();
        this.cola.QueueUpdate();
        if(this.score > 0){
            this.score_text.text = "Puntaje: " + score;
        }
	},

	quitGame: function (pointer) {
		this.state.start('MainMenu');
	}

};
