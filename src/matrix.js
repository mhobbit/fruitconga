function matrix(game, cola, music, score){
	this.music = music;	
	this.cola = cola;
	this.game = game;
	this.score = 0;
	this.starx;
	this.stary;
	this.size = 40;
	this.multipler = 1;
}

matrix.prototype.createFruit = function(x, y){
	var temp;
	var value = Math.random();
	if(value < .2){
		temp = this.game.add.sprite(this.starx + (this.size * x), this.stary + (this.size * y), 'banana', 3);
	}
	else if(value < .4){
		temp = this.game.add.sprite(this.starx + (this.size * x), this.stary + (this.size * y), 'morado', 3);
	}
	else if(value < .6){
		temp = this.game.add.sprite(this.starx + (this.size * x), this.stary + (this.size * y), 'verde', 3);
	}
	else if(value < .8){
		temp = this.game.add.sprite(this.starx + (this.size * x), this.stary + (this.size * y), 'rojo', 3);
	}
	else{
		temp = this.game.add.sprite(this.starx + (this.size * x), this.stary + (this.size * y), 'naranjo', 3);
	}
	temp.inputEnabled = true;
	temp.input.useHandCursor = true;
	temp.events.onInputDown.add(this.onClick, this);
	return temp;
}

matrix.prototype.create = function(tamx, tamy) {
	this.starx = Math.round((this.game.width/2) - (tamx * this.size / 2));
	this.stary = Math.round((this.game.height/2) - (tamy	 * this.size / 2));
	this.matrix = [];
	this.tamx = tamx;
	this.tamy = tamy;
	for(y = 0; y < tamy; y++){
		this.matrix[y] = [];
		for(x = 0; x < tamx; x++){
			temp = this.createFruit(x, y);
			this.matrix[y][x] = temp;
		}
	}
};

matrix.prototype.onClick = function(sprite){
	y = (sprite.y - this.stary)/this.size;
	x = (sprite.x - this.starx)/this.size;
	if(!this.music.onBeat())
		return;
	for(i = 0; i < this.cola.queue.length; i++){
		if(this.cola.queue[i].x == 488){
			if(sprite.key + '_1' == this.cola.queue[i].key)
				multipler ++;
			else
				multipler = 1;
		}
	}
	this.killTheSame(x, y);
	while(list = this.createNew()){
		this.downList(list);
	}
};

matrix.prototype.killTheSame = function(x, y){
	this.matrix[y][x].kill();
	this.score += 50 * this.multipler;
	if(x > 0){
		if(this.matrix[y][x].key == this.matrix[y][x-1].key && this.matrix[y][x-1].alive){
			this.killTheSame(x-1, y);
		}
	}
	if(y > 0){
		if(this.matrix[y][x].key == this.matrix[y-1][x].key && this.matrix[y-1][x].alive){
			this.killTheSame(x, y-1);
		}
	}
	if((x + 1) < this.tamx){
		if(this.matrix[y][x].key == this.matrix[y][x+1].key && this.matrix[y][x+1].alive){
			this.killTheSame(x+1, y);
		}
	}
	if((y + 1) < this.tamy){
		if(this.matrix[y][x].key == this.matrix[y+1][x].key && this.matrix[y+1][x].alive){
			this.killTheSame(x, y+1);
		}
	}
}

matrix.prototype.createNew = function(){
	list = [];
	flag = false;
	for(y = (this.tamy - 1); y >= 0; y--){
		for(x = (this.tamx - 1); x >= 0; x--){
			if(!this.matrix[y][x].alive){
				if(y > 0){
					this.matrix[y][x] = this.matrix[y-1][x];
					this.matrix[y-1][x] = this.createFruit(x, y-1);
					this.matrix[y-1][x].kill();
					list.push([y, x]);
					flag = true;
				}
				else{
					this.matrix[y][x] = this.createFruit(x, y);
				}
			}
		}
	}
	if(flag){
		//this.downList(list);
		return list;
	}
	else
		return false;
}

matrix.prototype.downList = function(list){
	for(t = 0; t < this.size; t++){
		for(i = 0; i < list.length; i++){
			this.matrix[list[i][0]][list[i][1]].y += 1;
		}
	}
	/*console.log(this);
	listas = [];
	for(i = 0; i < list.length; i++){
		pos = this.matrix[list[i][0]][list[i][1]].y + this.size;
		sprite = this.matrix[list[i][0]][list[i][1]];
		itween = this.game.add.tween(sprite).to({y: pos}, 10000, Phaser.Easing.Default, true, 0, 0, false);
	}
	itween.onComplete.active = true;
	itween.onComplete.add(this.createNew);
	return itween;*/
}

matrix.prototype.ScoreUpdate = function(score_text, multipler_text){
	if(this.score > 0){
		score_text.text = 'Score: ' + this.score;
	}
	multipler_text.text = 'Multiplicador: ' + this.multipler;
}