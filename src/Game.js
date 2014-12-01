
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
};

BasicGame.Game.prototype = {
    preload: function(){
        game.load.spritesheet('banana', 'assets/img/banana.png', 33, 35, 8);
        game.load.spritesheet('apple', 'assets/img/apple.png', 35, 34, 8);
        game.load.spritesheet('green_apple', 'assets/img/green_apple.png', 33, 35, 8);
        game.load.spritesheet('pina', 'assets/img/pina.png', 35, 35, 8);
        game.load.spritesheet('sandia', 'assets/img/sandia.png', 35, 35, 8);
    },

	create: function () {
        //GRILLA
        this.grilla = new matrix(game);
        this.grilla.create(6, 7);

	},

	update: function () {
	},

	quitGame: function (pointer) {
		this.state.start('MainMenu');
	}

};
