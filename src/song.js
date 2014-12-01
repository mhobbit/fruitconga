//me rendí de parsear el JSON en esta parte, de ahi extraigo la info de las canciones en otra parte del juego.
function Song(songList, bpm, offset, game){	
	this.bpm = bpm;
	this.offset = offset;
	this.beat = 60000/bpm;

	this.lastbeat = 0;
	this.tolerance = 200;
	//llamar preload, create y update en los mismos metodos del stage.
	this.preload = function(){
		game.load.audio('song', songList, true);
	}

	this.create = function(){
		this.music = game.add.audio('song');
		this.music.play()
		this.lastbeat += offset;
	}

	this.update = function(){
	    if(this.music.isDecoded && this.music.isPlaying){
		    if(this.music.currentTime > this.lastbeat + this.beat){
		        this.lastbeat += this.beat;
		    }
	    }
	}

	this.onBeat = function(){
	    time = this.music.currentTime;
	    if((time >= this.lastbeat - this.tolerance) && (time <= this.lastbeat + this.tolerance)){
	    	return true;
	    }
	    return false;
	}
}