var endGameState = {

  preload: function () {

              this.leaveText = new Text();
        this.leave = new button();
                    this.playText = new Text();
        this.play = new button();
    },


    create: function () {
        background = game.add.tileSprite(0, 0, 800, 600, 'background');
        game.world.sendToBack(background);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.renderer.renderSession.roundPixels = true;
        game.physics.setBoundsToWorld();
        
                // Background Music
        backgroundMusic.stop();
        
        finishMusic = game.add.audio('finishMusic');
        finishMusic.play("",0,0.1, true, true);
        
        
        
        
                var style = {
            font: "35px Righteous",
            fill: "#ff8b67",
            align: "center",
            backgroundColor: "#e4fbff",
    
        };

        var text = game.add.text(game.world.centerX, game.world.centerY + 65, " Du fik: " + game.global.score + " point ", style);

        text.anchor.set(0.5);
        
       var text1 = game.add.text(game.world.centerX, game.world.centerY + 115, " Din bedste score: " + localStorage.getItem('bestScore') + " point ", style);

        text1.anchor.set(0.5);
        
        var text2 = game.add.text(game.world.centerX, game.world.centerY - 180, " Godt spillet! Du har gennemført alle sætninger! ", style);

        text2.anchor.set(0.5);
        
        
        var text3 = game.add.text(game.world.centerX, game.world.centerY + 165, " Du havde: " + game.global.failCounter + " fejl! ", style);

        text3.anchor.set(0.5);
        
        var text4 = game.add.text(game.world.centerX, game.world.centerY + 15, " Du brugte: " + game.global.counter + " sekunder! ", style);

        text4.anchor.set(0.5);
        
        
        
        this.leaveText.makeText(12,12,18,'Gå til menu');
        this.leave.create(200,550,this.down);
        this.leave.button.addChild(this.leaveText.text);
        
        
                this.playText.makeText(10,10,20,'Spil igen');
        this.play.create(550,550,this.actionOnClick);
        this.play.button.addChild(this.playText.text);
    },
        actionOnClick: function () {
        game.global.nextSpeech = 0;
        game.global.correctMatch = 0;
        game.global.score = 0;
        game.global.counter = 0;
        game.state.start('play', Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.In.SlideLeft);
        pop.play();
        finishMusic.stop();
        backgroundMusic.play("",0,0.4, true, true);
    },
    down: function () {
        game.state.start('menu', Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
        pop.play("",0,1, false, false);
        finishMusic.stop();
    }



};