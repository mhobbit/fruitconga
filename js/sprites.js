function createBanana(banana){
	banana.animations.add('dancing_pickle', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    banana.inputEnabled = true;
    banana.input.useHandCursor = true;
    banana.events.onInputDown.add(clickOnBeat);
    pickle.animations.play('dancing_pickle');
}

function clickOnBeat(event, sprite){
    var time = music.currentTime;
    if(time >= lastbeat - tolerance){
        if(time <= lastbeat + tolerance){
            //Un toque con ritmo
        }
    }
}