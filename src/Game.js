
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
        this.game.load.spritesheet('spotlight', 'assets/img/frutitas/spotlight_spritesheet.png', 35, 35, 2);
        this.load.image('game_bg', 'assets/backgrounds/game.png');
        this.load.image('banana', 'assets/img/frutitas/1.png');
        this.load.image('morado', 'assets/img/frutitas/2.png');
        this.load.image('verde', 'assets/img/frutitas/3.png');
        this.load.image('rojo', 'assets/img/frutitas/4.png');
        this.load.image('naranjo', 'assets/img/frutitas/5.png');
        this.load.image('barra', 'assets/img/frutitas/barra.png');
        this.load.bitmapFont('fuente', 'assets/fonts/showcard_title0.png', 'assets/fonts/showcard_title0.fnt');
        this.load.bitmapFont('fuente1', 'assets/fonts/showcard_title1.png', 'assets/fonts/showcard_title1.fnt');

        this.music = song;
        this.music.preload();
    },

	create: function () {
        //BACKGROUND y LOGO
        this.bg = this.add.sprite(this.world.centerX-340,this.world.centerY -215 , 'game_bg');
        this.add.sprite(this.world.centerX - 150, 5, 'logoSmall');

        //EXTRAS!!!
        this.score_text = game.add.bitmapText( this.world.centerX-260, this.world.centerY - 65 , 'fuente','0');
        spotlight = game.add.sprite(Math.round(this.game.width/2 + 55), Math.round(this.game.height/2 - 195), 'spotlight');
        this.multipler_text = game.add.bitmapText(this.world.centerX-250, this.world.centerY - 3, 'fuente1','');
        this.healthbar = this.game.add.sprite(this.world.centerX-271, this.world.centerY - 117,'barra');
        this.healthbar.cropEnabled = true;

        //COLA
        this.music.create();
        this.cola = new Cola(this.game, this.music);

        //GRILLA
        this.grilla = new matrix(this.game, this.cola, this.music, this.score);
        this.grilla.create(6, 7);
	},

	update: function () {
        //tamaño healthbar
        this.healthbar.crop(new Phaser.Rectangle(0,0,(health/20)*132, 20));

        //cambio de luz del foco        
        if (this.music.onBeat()){
            spotlight.frame = 1;
        }
        else
            spotlight.frame = 0;
        //this.music.update();
        this.cola.QueueUpdate();
        this.grilla.ScoreUpdate(this.score_text, this.multipler_text);
        if(health <= 0){
            this.music.destroy();
            this.state.start('GameOver');
  //          game.state.states['ScoreScreen'].score = this.score_text.text;
  //          this.state.start('ScoreScreen'); //testeando la pantalla de score
        }
        if(this.music.isOver){
            this.music.destroy();
            game.state.states['ScoreScreen'].score = this.score_text.text;
            this.state.start('ScoreScreen'); //testeando la pantalla de score
        }
	},

	quitGame: function (pointer) {
		this.state.start('MainMenu');
	}

};
