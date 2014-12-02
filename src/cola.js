function Cola(game, music){
	this.game = game;
	this.music = music;
	this.cola_x = Math.round((this.game.width/2) - 310);
	this.final = Math.round((this.game.width/2) + 80);
	this.cola_y = Math.round((this.game.height/2) - 197);
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
		temp.animations.add('banana_1', [0, 1, 2, 3, 4, 5, 6, 7], this.vel, true);
		temp.animations.play('banana_1');
		this.queue.push(temp);
	}
	else if(value < .4){
		temp = game.add.sprite(this.cola_x + this.difx, this.cola_y, 'morado_1', 3);
		temp.animations.add('morado_1', [0, 1, 2, 3, 4, 5, 6, 7], this.vel, true);
		temp.animations.play('morado_1');
		this.queue.push(temp);
	}
	else if(value < .6){
		temp = game.add.sprite(this.cola_x + this.difx, this.cola_y, 'verde_1', 3);
		temp.animations.add('verde_1', [0, 1, 2, 3, 4, 5, 6, 7], this.vel, true);
		temp.animations.play('verde_1');
		this.queue.push(temp);
	}
	else if(value < .8){
		temp = game.add.sprite(this.cola_x + this.difx, this.cola_y, 'rojo_1', 3);
		temp.animations.add('rojo_1', [0, 1, 2, 3, 4, 5, 6, 7], this.vel, true);
		temp.animations.play('rojo_1');
		this.queue.push(temp);
	}
	else{
		temp = game.add.sprite(this.cola_x + this.difx, this.cola_y, 'naranjo_1', 3);
		temp.animations.add('naranjo_1', [0, 1, 2, 3, 4, 5, 6, 7], this.vel, true);
		temp.animations.play('naranjo_1');
		this.queue.push(temp);
	}
}

Cola.prototype.QueueUpdate = function(){
	var flag = false;
	if(this.music.music.currentTime > this.music.lastbeat + (this.music.beat * 2)){
		this.music.lastbeat += this.music.beat * 2;
		for(i = 0; i < this.queue.length; i++){
			if(this.queue[i].x > this.final){
				if(this.queue[i].alive){
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