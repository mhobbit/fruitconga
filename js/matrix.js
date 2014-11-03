//VARIABLES PRIVADAS
var matrix_x = 180, matrix_y = 150, tam = 7;
var difx = 40, dify = 40;

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
			temp.animations.add('dance_apple', [0, 1, 2, 3, 4, 5, 6, 7], vel, true);
			if(dance)
				temp.animations.play('dance_apple');
			matrix.push(temp);
		}
		else if(value < .6){
			temp = game.add.sprite(matrix_x + (difx * (i % tam)), matrix_y + (dify * parseInt(i / tam)), 'green_apple', 3);
			temp.animations.add('dance_green_apple', [0, 1, 2, 3, 4, 5, 6, 7], vel, true);
			if(dance)
				temp.animations.play('dance_green_apple');
			matrix.push(temp);
		}
		else if(value < .8){
			temp = game.add.sprite(matrix_x + (difx * (i % tam)), matrix_y + (dify * parseInt(i / tam)), 'pina', 3);
			temp.animations.add('dance_pina', [0, 1, 2, 3, 4, 5, 6, 7], vel, true);
			if(dance)
				temp.animations.play('dance_pina');
			matrix.push(temp);
		}
		else{
			temp = game.add.sprite(matrix_x + (difx * (i % tam)), matrix_y + (dify * parseInt(i / tam)), 'sandia', 3);
			temp.animations.add('dance_sandia', [0, 1, 2, 3, 4, 5, 6, 7], vel, true);
			if(dance)
				temp.animations.play('dance_sandia');
			matrix.push(temp);
		}
	}
}

function matrixClickHandler(sprite){
	console.log((sprite.x - matrix_x) / difx);
	console.log((sprite.y - matrix_y) / dify);
	
}