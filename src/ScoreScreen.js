
BasicGame.ScoreScreen = function () {
	this.bgImg;
	this.playButton;
	this.music;
	this.score;
	this.score_real;
	this.stage;
	this.active = false;
	this.level;
};

BasicGame.ScoreScreen.prototype = {
	preload: function(){
	    this.load.image('ScoreScreenbg', 'assets/backgrounds/gamenoover.png');
    	this.load.spritesheet('returnButton', 'assets/buttons/mainmenu_button.png', 190,  49);
	},

	create: function () {
		function clickReturn(){
			this.music.destroy();
		    this.state.start('MainMenu');
		}

		function mute(){
			this.music.mute = !this.music.mute;
		}	    

	    this.stage.backgroundColor = '#99d3c5';
	    this.bgImg = this.add.sprite(this.world.centerX - 207 , 0, 'ScoreScreenbg');
	    this.music = game.add.audio('conga');
		this.music.play();

	    this.playButton = game.add.button(game.world.centerX - 95, game.world.centerY + 200, 'returnButton', clickReturn, this, 1, 0, 2); 
		
		this.multipler_text = game.add.bitmapText(this.world.centerX-(this.score.length * 45)/2, this.world.centerY + 100, 'fuente1', this.score);
	},

	update: function () {
		if(this.active){
			switch(this.level){
				case(1):
					if(this.score_real > 2000){
						this.state.states['Levels'].unloqued[1] = true;
					}
					break;
				case(2):
					if(this.score_real > 5000){
						this.state.states['Levels'].unloqued[2] = true;
					}
			}
		}
	},

	resize: function (width, height) {
		this.bgImg.x = game.world.centerX - 384;
	    this.playButton.x = game.world.centerX - 95;
	    this.playButton.y = game.world.centerY*1.5;
	}

};

