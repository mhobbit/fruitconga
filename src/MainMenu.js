
BasicGame.MainMenu = function () {
	this.muteBtn;
	this.bgImg;
	this.playButton;
	this.logoImg;
	this.creditsButton;
	this.music
};

BasicGame.MainMenu.prototype = {

	create: function () {
		function mute(){
			this.music.mute = !this.music.mute;
		}

	    // this.bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
	    

	    this.stage.backgroundColor = '#99d3c5';
	    this.bgImg = this.add.sprite(this.world.centerX - 384 , 0, 'mainmenubg');
	    this.logoImg = this.add.sprite(this.world.centerX - 245 , 50, 'logo');
	    this.music = game.add.audio('conga');
		this.music.play();

	    this.playButton = game.add.button(game.world.centerX - 95, game.world.centerY*1.5, 'playButton', clickPlay, this, 1, 0, 2); 
	    this.creditsButton = game.add.button(game.world.centerX - 95, this.playButton.y+60, 'creditsButton', clickCredits, this, 1, 0, 2); 

	    this.muteBtn = this.add.sprite(0 , 0, 'audioOn');
	    this.muteBtn.inputEnabled = true;
	    this.muteBtn.events.onInputDown.add(mute, this);
		// this.spriteBottomLeft = this.add.sprite(0, game.height, 'tetris2');
		// this.spriteBottomLeft.anchor.set(0, 1);

	    // this.spriteBottomRight = this.add.sprite(game.width, game.height, 'tetris3');
	    // this.spriteBottomRight.anchor.set(1, 1);

	},

	update: function () {

		//	Do some nice funky main menu effect here
		if (this.music.mute){
			this.muteBtn.loadTexture('audioOff');
		}
		else{
			this.muteBtn.loadTexture('audioOn');
		}
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

	    this.muteBtn.x = 5;
	    this.muteBtn.y = 5;

	}

};
function clickPlay() {
	this.state.start('Game');
}

function clickCredits() {
	this.music.destroy();
	this.state.start('Credits');
}
