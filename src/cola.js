function Cola(game, music){
	this.game = game;
	this.music = music;
	this.cola_x = (this.game.width/2) - 310;
	this.final = (this.game.width/2) + 80;
	this.cola_y = 130;
	this.delay = 1;
	this.tolerance = 120;
	this.queue = [];
	this.vel = 10;
	this.difx = 50;
	this.starx = 50;
}

Cola.prototype.addInQueue = function(){
	var value = Math.random();
	var temp;
	if(value < .2){
		temp = game.add.sprite(this.cola_x + this.difx, this.cola_y, 'banana_1', 3);
		temp.animations.add('dance_banana', [0, 1, 2, 3, 4, 5, 6, 7], this.vel, true);
		temp.animations.play('dance_banana');
		this.queue.push(temp);
	}
	else if(value < .4){
		temp = game.add.sprite(this.cola_x + this.difx, this.cola_y, 'apple_1', 3);
		temp.animations.add('dance_apple', [0, 1, 2, 3, 4, 5, 6, 7], this.vel, true);
		temp.animations.play('dance_apple');
		this.queue.push(temp);
	}
	else if(value < .6){
		temp = game.add.sprite(this.cola_x + this.difx, this.cola_y, 'green_apple_1', 3);
		temp.animations.add('dance_green_apple', [0, 1, 2, 3, 4, 5, 6, 7], this.vel, true);
		temp.animations.play('dance_green_apple');
		this.queue.push(temp);
	}
	else if(value < .8){
		temp = game.add.sprite(this.cola_x + this.difx, this.cola_y, 'pina_1', 3);
		temp.animations.add('dance_pina', [0, 1, 2, 3, 4, 5, 6, 7], this.vel, true);
		temp.animations.play('dance_pina');
		this.queue.push(temp);
	}
	else{
		temp = game.add.sprite(this.cola_x + this.difx, this.cola_y, 'sandia_1', 3);
		temp.animations.add('dance_sandia', [0, 1, 2, 3, 4, 5, 6, 7], this.vel, true);
		temp.animations.play('dance_sandia');
		this.queue.push(temp);
	}
}

Cola.prototype.QueueUpdate = function(){
	var flag = false;
	//console.log(this.music.music.currentTime, this.music.lastbeat + this.music.beat);
	if(this.music.music.currentTime > this.music.lastbeat + (this.music.beat * 2)){
		this.music.lastbeat += this.music.beat * 2;
		//console.log(this.queue);
		for(i = 0; i < this.queue.length; i++){
			if(this.queue[i].x > this.final){
				if(this.queue[i].alive){
					//multipler = 1;
					//multipler_text.fontSize = 10;
					//multipler_text.text = '';
					this.queue[i].kill();
					flag = true;
				}
				else{
					flag = true;
				}
			}
			else
				this.queue[i].x += 35;
		}
		if(this.delay == 1){
			this.addInQueue();
			this.delay = 2;
		}
		else{
			this.delay = 1;
		}
		if(flag)
			this.queue.shift();
	}
}