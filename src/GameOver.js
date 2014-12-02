
BasicGame.GameOver = function () {
	this.bgImg;
	this.playButton;
	this.music;
};

BasicGame.GameOver.prototype = {
	preload: function(){
	    this.load.image('gameoverbg', 'assets/backgrounds/gameover.png');
    	this.load.spritesheet('returnButton', 'assets/buttons/mainmenu_button.png', 190,  49);
	},

	create: function () {
		function clickReturn(){
			this.music.destroy();
		    this.state.start('Levels');
		}

		function mute(){
			this.music.mute = !this.music.mute;
		}	    

	    this.stage.backgroundColor = '#99d3c5';
	    this.bgImg = this.add.sprite(this.world.centerX - 207 , 0, 'gameoverbg');
	    this.music = game.add.audio('conga');
		this.music.play();

	    this.playButton = game.add.button(game.world.centerX - 95, game.world.centerY*1.5, 'returnButton', clickReturn, this, 1, 0, 2); 
	},

	update: function () {
	},

	resize: function (width, height) {
		this.bgImg.x = game.world.centerX - 384;
	    this.playButton.x = game.world.centerX - 95;
	    this.playButton.y = game.world.centerY*1.5;
	}

};

