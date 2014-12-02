
BasicGame.Preloader = function () {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;
	var song;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar

		this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.

		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	You can find all of these assets in the Phaser Examples repository
		this.load.audio('conga', ['assets/audio/latin/Beachfront Celebration.mp3'], true);
	    this.load.image('audioOn', 'assets/img/musicOn.png');
	    this.load.image('audioOff', 'assets/img/musicOff.png');
	    this.load.image('logo', 'assets/img/logo.png');
	    this.load.image('logoSmall', 'assets/img/logo_300.png');
	    this.load.image('mainmenubg', 'assets/img/mainmenu.jpg');
    	this.load.spritesheet('playButton', 'assets/buttons/play_button.png', 190,  49);
    	this.load.spritesheet('returnButton', 'assets/buttons/return_button.png', 190,  49);
    	this.load.spritesheet('creditsButton', 'assets/buttons/credits_button.png', 190,  49);

    	this.load.image('stage1', 'assets/img/party1.png');
    	this.load.image('stage2', 'assets/img/party2.png');
    	this.load.image('stage3', 'assets/img/party3.png');

    	game.load.text('credits', 'assets/text/credits.txt');


	},

	create: function () {
		this.state.start('MainMenu');

	}

};
