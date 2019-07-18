var timeoutfunc;
var gameCompleteState = {

    preload: function () {

    },


    create: function () {
        background = game.add.tileSprite(0, 0, 800, 600, 'background');
        game.world.sendToBack(background);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.renderer.renderSession.roundPixels = true;
        game.physics.setBoundsToWorld();
        game.camera.flash('0xffffff', 200, false);
        correctSound = game.add.audio('correctSound');
        correctSound.play("",0,1, false, false);

        var style = {
            font: "35px Righteous",
            fill: "#F8F8FF",
            align: "center"
        };

        var text = game.add.text(game.world.centerX, game.world.centerY + 90, "Svaret er korrekt!", style);

        text.anchor.set(0.5);

        var textsentence = game.add.text(game.world.centerX, game.world.centerY + 238, game.global.sentenceArray[game.global.correctMatch].replace("____", game.global.wordArray[game.global.correctMatch]), style);
        
        textsentence.anchor.set(0.5);
        
        game.global.nextSpeech++;
        game.global.correctMatch++;
        // Make local variable to store time difference
        var combo = game.global.combo - game.global.counter;
        // if the time difference is greater than -5 the question was answered within 5 seconds and there should be combo
        if(combo > -5)
        {
                    var style1 = {
            font: "35px Righteous",
            fill: "#F8F8FF",
            align: "center"
        };
            
            game.global.combo = game.global.counter;
            console.log("combo time");
            game.global.score += 3;
            var textcombo = game.add.text(game.world.centerX, game.world.centerY + 160, "Bonus! Du får en bonus på +3 points!", style1);

        textcombo.anchor.set(0.5);
            textcombo.alpha = 0;
            
                    game.add.tween(textcombo).to({
            alpha: 1
        }, 500, "Linear", true);
        
        }else {
            // if it wasent answered within 5 seconds, no combo will be rewarded to the score
            console.log("no combo time");
            game.global.combo = game.global.counter;
        }
        console.log(game.global.correctMatch);
        game.global.score++;
        this.newGame();
    },


    newGame: function () {
         timeoutfunc = setTimeout(function () {
                if (game.global.score > localStorage.getItem('bestScore')) {
                // Then update the best score
                localStorage.setItem('bestScore', game.global.score);}
                    
            if (game.global.correctMatch === 6) {
                game.global.getWords = 6;

            } else if (game.global.correctMatch == 12) {
                game.global.getWords = 12;
            }else if(game.global.correctMatch == 18){
                console.log("Game Done?")
                // New state on last sentence complete
                game.state.start('endgame');
                
            }
            
             if(game.global.correctMatch != 5 ){
                 game.state.start('play');
             }else {
                 game.state.start('endgame');
             }
        }, 5000);
    },
    
};