
BasicGame.MainMenu = function () {
	this.muteBtn;
	this.bgImg;
	this.playButton;
	this.logoImg;
	this.creditsButton;
	this.music;
};

BasicGame.MainMenu.prototype = {

	create: function () {
		function mute(){
			this.music.mute = !this.music.mute;
		}	    

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
	},

	update: function () {
		if (this.music.mute){
			this.muteBtn.loadTexture('audioOff');
		}
		else{
			this.muteBtn.loadTexture('audioOn');
		}
	},

	resize: function (width, height) {
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
	this.music.destroy();
	this.state.start('Levels');
}

function clickCredits() {
	this.music.destroy();
	this.state.start('Credits');
}
