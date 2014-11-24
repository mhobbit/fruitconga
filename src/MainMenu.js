
BasicGame.MainMenu = function () {

	this.bgImg;
	this.playButton;
	this.logoImg;
	this.creditsButton;

};

BasicGame.MainMenu.prototype = {

	create: function () {

	    // this.bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
	    this.stage.backgroundColor = '#99d3c5';
	    this.bgImg = this.add.sprite(game.world.centerX - 384 , 0, 'mainmenubg');
	    this.logoImg = this.add.sprite(game.world.centerX - 245 , 50, 'logo');

	    this.playButton = game.add.button(game.world.centerX - 95, game.world.centerY*1.5, 'playButton', clickPlay, this, 1, 0, 2); 
	    this.creditsButton = game.add.button(game.world.centerX - 95, this.playButton.y+60, 'creditsButton', clickCredits, this, 1, 0, 2); 
	    // this.spriteTopRight = this.add.sprite(game.width, 0, 'tetris1');
	    // this.spriteTopRight.anchor.set(1, 0);

	    // this.spriteBottomLeft = this.add.sprite(0, game.height, 'tetris2');
	    // this.spriteBottomLeft.anchor.set(0, 1);

	    // this.spriteBottomRight = this.add.sprite(game.width, game.height, 'tetris3');
	    // this.spriteBottomRight.anchor.set(1, 1);

	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	resize: function (width, height) {

		//	If the game container is resized this function will be called automatically.
		//	You can use it to align sprites that should be fixed in place and other responsive display things.
		this.logoImg.x = game.world.centerX - 245;

		this.bgImg.x = game.world.centerX - 384;
	    this.playButton.x = game.world.centerX - 95;
	    this.playButton.y = game.world.centerY*1.5;

	    this.creditsButton.x = game.world.centerX - 95;
	    this.creditsButton.y = this.playButton.y+60;

	}


};

	function clickPlay() {
		this.state.start('Game');
	}

	function clickCredits() {
		this.state.start('Credits');
	}
