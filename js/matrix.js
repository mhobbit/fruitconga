//VARIABLES PRIVADAS
var matrix_x = 180, matrix_y = 150, tam = 7;
var difx = 40, dify = 40;
var score = 0;

//Metodos
function createMatris(matrix, game){
	var dance = false;
	for(i = 0; i < tam*tam; i++){
		var value = Math.random();
		var temp;
		var vel = 10;
		if(value < .2){
			temp = game.add.sprite(matrix_x + (difx * (i % tam)), matrix_y + (dify * parseInt(i / tam)), 'banana', 3);
			temp.inputEnabled = true;
			temp.input.useHandCursor = true;
			temp.events.onInputDown.add(matrixClickHandler, this);
			temp.animations.add('dance_banana', [0, 1, 2, 3, 4, 5, 6, 7], vel, true);
			if(dance)
				temp.animations.play('dance_banana');
			matrix.push(temp);
		}
		else if(value < .4){
			temp = game.add.sprite(matrix_x + (difx * (i % tam)), matrix_y + (dify * parseInt(i / tam)), 'apple', 3);
			temp.inputEnabled = true;
			temp.input.useHandCursor = true;
			temp.events.onInputDown.add(matrixClickHandler, this);
			temp.animations.add('dance_apple', [0, 1, 2, 3, 4, 5, 6, 7], vel, true);
			if(dance)
				temp.animations.play('dance_apple');
			matrix.push(temp);
		}
		else if(value < .6){
			temp = game.add.sprite(matrix_x + (difx * (i % tam)), matrix_y + (dify * parseInt(i / tam)), 'green_apple', 3);
			temp.inputEnabled = true;
			temp.input.useHandCursor = true;
			temp.events.onInputDown.add(matrixClickHandler, this);
			temp.animations.add('dance_green_apple', [0, 1, 2, 3, 4, 5, 6, 7], vel, true);
			if(dance)
				temp.animations.play('dance_green_apple');
			matrix.push(temp);
		}
		else if(value < .8){
			temp = game.add.sprite(matrix_x + (difx * (i % tam)), matrix_y + (dify * parseInt(i / tam)), 'pina', 3);
			temp.inputEnabled = true;
			temp.input.useHandCursor = true;
			temp.events.onInputDown.add(matrixClickHandler, this);
			temp.animations.add('dance_pina', [0, 1, 2, 3, 4, 5, 6, 7], vel, true);
			if(dance)
				temp.animations.play('dance_pina');
			matrix.push(temp);
		}
		else{
			temp = game.add.sprite(matrix_x + (difx * (i % tam)), matrix_y + (dify * parseInt(i / tam)), 'sandia', 3);
			temp.inputEnabled = true;
			temp.input.useHandCursor = true;
			temp.events.onInputDown.add(matrixClickHandler, this);
			temp.animations.add('dance_sandia', [0, 1, 2, 3, 4, 5, 6, 7], vel, true);
			if(dance)
				temp.animations.play('dance_sandia');
			matrix.push(temp);
		}
	}
}

function matrixClickHandler(sprite){
    var x, y;
    x = ((sprite.x - matrix_x) / difx);
    y = ((sprite.y - matrix_y) / dify);
    KillTheSame(x, y, tablero[y*tam + x].key);
	DownTheRest();
}

function SomeOneisDeath(){
	for(i = 0; i < tam*tam; i++){
		if(!tablero[i].alive){
			return true;
		}
	}
	return false;
}

function DownTheRest(){
	while(SomeOneisDeath()){
		for(i = (tam*tam - 1); i >= 0; i--){
			if(i - tam >= 0 && !tablero[i].alive && tablero[i - tam].alive){
				tablero[i - tam].kill();
				tablero[i].loadTexture(tablero[i - tam].key, tablero[i - tam].frame);
				tablero[i].revive();
			}
		}
		for(i = 0; i < tam; i++){
			if(!tablero[i].alive){
				var temp = Math.random();
				if(temp < .2){
					tablero[i].loadTexture('banana', 3);
					tablero[i].revive();
				}
				else if(temp < .4){
					tablero[i].loadTexture('apple', 3);
					tablero[i].revive();
				}
				else if(temp < .6){
					tablero[i].loadTexture('green_apple', 3);
					tablero[i].revive();
				}
				else if(temp < .8){
					tablero[i].loadTexture('pina', 3);
					tablero[i].revive();
				}
				else{
					tablero[i].loadTexture('sandia', 3);
					tablero[i].revive();
				}
			}
		}
	}
}

function KillTheSame(x, y, key){
	tablero[y*tam + x].kill();
	score += 10;
	if(y - 1 >= 0 && tablero[(y - 1)*tam + x].alive && tablero[(y - 1)*tam + x].key == key){
		KillTheSame(x, y - 1, key);
	}
	if(x + 1 < tam && tablero[y*tam + (x + 1)].alive && tablero[y*tam + (x + 1)].key == key){
		KillTheSame(x + 1, y, key);
	}
	if(y + 1 < tam && tablero[(y + 1)*tam + x].alive && tablero[(y + 1)*tam + x].key == key){
		KillTheSame(x, y + 1, key);
	}
	if(x - 1 >= 0 && tablero[y*tam + (x - 1)].alive && tablero[y*tam + (x - 1)].key == key){
		KillTheSame(x - 1, y, key);
	}
	return;
}