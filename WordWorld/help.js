var help = {
    preload: function () {
        
        this.menuText = new Text();
        this.menu = new button();

    },

    create: function () {
        background = game.add.tileSprite(0, 0, 800, 600, 'background2');
        game.world.sendToBack(background);
        

        // Menu button
        this.menuText.makeText(10,10,20,'Gå tilbage');
        this.menu.create(400,450,this.actionOnClick);
        this.menu.button.addChild(this.menuText.text);

        headText = game.add.text(400, 100, 'Hjælp')
        headText.anchor.set(0.5);
        headText.align = 'center';
        headText.fontSize = 80;
        headText.font = 'Righteous';
        headText.fill = '#ff8b67';
        headText.alpha = 0.1;
        game.add.tween(headText).to({
            alpha: 1
        }, 2000, "Linear", true);

        breadText = game.add.text(400, 310, '1. Der mangler et ord i sætningen i bunden af skærmen\n2. Øverst på skærmen finder du det manglende ord\n3. Træk det rigtige ord ned til sætningen\n4. Find 1 rigtigt ord før der er gået 5 sekunder, så får du bonus på 3 point!')
        breadText.anchor.set(0.5);
        breadText.align = 'center';
        breadText.fontSize = 22;
        breadText.font = 'Righteous';
        breadText.fill = '#ff8b67';

    },

    actionOnClick: function () {
        game.state.start('menu', Phaser.Plugin.StateTransition.Out.SlideLeft, Phaser.Plugin.StateTransition.In.SlideLeft);
        backgroundMusic.stop();
        pop.play("",0,1, false, false);
        
    },
};
