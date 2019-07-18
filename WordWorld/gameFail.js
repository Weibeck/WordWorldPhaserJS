var gameFailState = {

    preload: function () {
    },


    create: function () {
        game.stage.backgroundColor = '#F8F8FF';
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.renderer.renderSession.roundPixels = true;
        game.physics.setBoundsToWorld();
    
        falseSound = game.add.audio('falseSound');
        falseSound.play("",0,0.1, false, false);
        
        var style = {
            font: "35px Righteous",
            fill: "#ff8b67",
            align: "center"
        };

        var text = game.add.text(game.world.centerX, game.world.centerY, "Svaret er forkert!", style);

        text.anchor.set(0.5);
        
        var text1 = game.add.text(game.world.centerX, game.world.centerY + 60, "Du får -2 point!", style);

        text1.anchor.set(0.5);
        text1.alpha = 0;
        game.add.tween(text1).to({
            alpha: 1
        }, 1000, "Linear", true);
        

        game.global.failCounter++;
        game.global.score -= 2;
        this.newGame();
    },


    newGame: function () {
        setTimeout(function () {
            console.log(game.global.correctMatch);
            game.state.start('play');
        }, 5000);
    }

};