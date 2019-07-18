var menu = {
    preload: function () {

        
        this.headText = new Text();
        this.playText = new Text();
        this.helpText = new Text();
        this.scoreText = new Text();
        this.play = new button();
        this.help = new button();
        
        
        this.play.preload();
        
        /*https://github.com/mozdevs/webfont-preloading - API to preload fonts*/
        let font = new FontFaceObserver('Righteous');
  font.load().then(function () {
    game.add.text(0, 0, '', {
      font: '12px Righteous',
      fill: '#fff'
    });
  })
        
        
    },

    create: function () {
        
        game.global.nextSpeech = 0;
        game.global.correctMatch = 0;
        game.global.score = 0;
        game.global.counter = 0;
        
        // Check cache for bestscore data
        if (!localStorage.getItem('bestScore')) {
        // Create & set bestscore in cache to 0
            localStorage.setItem('bestScore', 0);
        }
        
        background = game.add.tileSprite(0, 0, 800, 600, 'background');
        game.world.sendToBack(background);

        // Play button
        this.playText.makeText(5,5,30,'Spil');
        this.play.create(400,300,this.actionOnClick);
        this.play.button.addChild(this.playText.text);
        
        // Help button
        this.helpText.makeText(10,5,30,'Hjælp');
        this.help.create(400,400,this.actionOnClickHelp);
        this.help.button.addChild(this.helpText.text);

        // Background Music
        pop = game.add.audio('pop');
        backgroundMusic = game.add.audio('backgroundMusic');
        backgroundMusic.play("",0,0.4, true, true);

        // Game title
        this.headText.makeText(400,100,80,'WordWorld');
        this.headText.text.alpha = 0;
        game.add.tween(this.headText.text).to({
            alpha: 1
        }, 1500, "Linear", true);
        
        this.scoreText.makeText(400,540,40,'Højeste score: ' + localStorage.getItem('bestScore') + ' point');

        muteButton = game.add.button(20, 20, 'mute', this.toggleSound, this);
    },

    toggleSound: function () {
        game.sound.mute = !game.sound.mute;
        muteButton.frame = game.sound.mute ? 1 : 0;
    },

    actionOnClick: function () {
        pop.play("",0,1, false, false);
        game.state.start('play', Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.In.SlideLeft);
        
    },

    actionOnClickHelp: function () {
        pop.play("",0,1, false, false);
        game.state.start('help', Phaser.Plugin.StateTransition.Out.SlideRight, Phaser.Plugin.StateTransition.In.SlideRight);
    },
};
