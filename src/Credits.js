
BasicGame.Credits = function () {
    this.logoImg;
    this.style;
    this.text;
    this.creditsText;
    this.returnBtn;
};

BasicGame.Credits.prototype = {
	create: function () {
        this.creditsText = game.cache.getText('credits');
        this.logoImg = this.add.sprite(5 , 50, 'logoSmall');
        this.style = { font: "20px Arial", fill: "#FFFFFF", align: "center", stroke: 'black', strokeThickness: 1};

        this.text = game.add.text(300, 20, this.creditsText, this.style);
        this.text.setShadow(2, 2);
        
        this.returnBtn = game.add.button(game.world.centerX - 95, game.world.centerY*1.8, 'returnButton', clickReturn, this, 1, 0, 2); 
	},

	update: function () {

		//	Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

	},

	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.start('MainMenu');

	}

};

function clickReturn(){
    this.state.start('MainMenu');
}
