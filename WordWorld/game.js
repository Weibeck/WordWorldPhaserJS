var playState = {

    preload: function () {

        // Create object reference
        this.cloud = new cloud();
        this.sentence = new sentence();
        this.score = new Text();
        this.countdown = new timer();
        this.leaveText = new Text();
        this.leave = new button();
        this.player = new player();
        this.speech = new speech();

        // Load stuff
        this.cloud.preload();
        this.player.preload();
        this.speech.preload();


    },

    create: function () {
        
        background = game.add.tileSprite(0, 0, 800, 600, 'background');
        game.world.sendToBack(background);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.renderer.renderSession.roundPixels = true;
        game.physics.setBoundsToWorld();

        this.speech.generateText(game.global.speechArray[game.global.nextSpeech]);
        this.speech.create();
        this.player.create();
        this.sentence.create();
        this.score.makeText(120, 30, 50, 'Point: ' + game.global.score);
        this.countdown.create();
        this.cloud.create(game.global.getWords);
        this.leaveText.makeText(10,13,15,'Gå til menu');
        this.leave.create(400,10,this.down);
        this.leave.button.addChild(this.leaveText.text);
        
    },

    update: function () {
        game.physics.arcade.overlap(this.cloud.group, this.sentence.text, this.cloud.checkMatch, null, this);
        game.physics.arcade.collide(this.cloud.group);
    },
    
    down: function () {
        game.state.start('menu', Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
        backgroundMusic.stop();
        pop.play("",0,1, false, false);
    }

};