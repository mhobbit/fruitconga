BasicGame.Levels = function () {
    this.stage1;
    this.stage2;
    this.stage3;

    this.style;
    this.text;
};

BasicGame.Levels.prototype = {

	create: function () {
        this.stage1 = this.add.sprite(this.world.centerX - 400 , this.world.centerY*0.8, 'stage1');
        this.stage2 = this.add.sprite(this.world.centerX - 100 , this.world.centerY*0.8, 'stage2');
        this.stage3 = this.add.sprite(this.world.centerX + 150 , this.world.centerY*0.8, 'stage3');

        this.stage1.inputEnabled = true;
        this.stage1.events.onInputDown.add(this.stage1Click);
        this.stage2.inputEnabled = true;
        this.stage2.events.onInputDown.add(this.stage2Click);
        this.stage3.inputEnabled = true;
        this.stage3.events.onInputDown.add(this.stage3Click);

        this.style = { font: "40px Arial", fill: "#FFFFFF", align: "center", stroke: 'black', strokeThickness: 1};
        this.text = game.add.text(this.world.centerX-280, this.world.centerY*0.5, "Select Party to start Dancing!", this.style);
	},

	update: function () {

	},

    stage1Click: function(){
        song = new Song([ 'assets/audio/latin/CumbiaNoFrills.ogg'], 84, 0, this.game);
        game.state.start('Game');
    },

    stage2Click: function(){
        song = new Song([ 'assets/audio/latin/Peppy Pepe.ogg'], 124, 0, this.game);
        game.state.start('Game');
    },

    stage3Click: function(){
        song = new Song([ 'assets/audio/latin/Tango de Manzana.ogg'], 127, 0, this.game);
        game.state.start('Game');
    },

	quitGame: function (pointer) {
		this.state.start('MainMenu');
	}

};