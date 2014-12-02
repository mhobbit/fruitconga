BasicGame.Levels = function () {
    this.stages;

    this.unloqued = [true, false, false];

    this.style;
    this.text;
};

BasicGame.Levels.prototype = {

	create: function () {

        this.stages = [];
        this.functions = [this.stage1Click, this.stage2Click, this.stage3Click];

        this.stages.push(this.add.sprite(this.world.centerX - 400 , this.world.centerY*0.8, 'stage1'));
        this.stages.push(this.add.sprite(this.world.centerX - 100 , this.world.centerY*0.8, 'stage2'));
        this.stages.push(this.add.sprite(this.world.centerX + 150 , this.world.centerY*0.8, 'stage3'));

        this.stages[0].inputEnabled = true;
        this.stages[0].events.onInputDown.add(this.stage1Click);
        this.stages[1].inputEnabled = true;
        this.stages[1].events.onInputDown.add(this.stage2Click);
        this.stages[2].inputEnabled = true;
        this.stages[2].events.onInputDown.add(this.stage3Click);

        this.style = { font: "40px Arial", fill: "#FFFFFF", align: "center", stroke: 'black', strokeThickness: 1};
        this.text = game.add.text(this.world.centerX-280, this.world.centerY*0.5, "Select Party to start Dancing!", this.style);
	},

	update: function () {
        for(i = 0; i < 3; i++){
            if(this.unloqued[i]){
                this.stages[i].frame = 0;
                this.stages[i].inputEnabled = true;
            }
            else{
                this.stages[i].frame = 1;
                this.stages[i].inputEnabled = false;
            }
        }
	},

    stage1Click: function(){
        song = new Song([ 'assets/audio/latin/Back on Track.ogg'], 84, 60000/84, this.game);
        game.state.states['Game'].level = 1;
        game.state.start('Game');
    },

    stage2Click: function(){
        song = new Song([ 'assets/audio/latin/Peppy Pepe.ogg'], 124, 0, this.game);
        game.state.states['Game'].level = 2;
        game.state.start('Game');
    },

    stage3Click: function(){
        song = new Song([ 'assets/audio/latin/Tango de Manzana.ogg'], 127, 0, this.game);
        game.state.states['Game'].level = 3;
        game.state.start('Game');
    },

	quitGame: function (pointer) {
		game.state.start('MainMenu');
	}

};