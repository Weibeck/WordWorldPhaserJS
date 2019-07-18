function cloud() {

    this.preload = function () {

        this.word = new Text();

    };

    this.create = function (value) {

        this.group = game.add.group();
        this.group.enableBody = true;

        for (x = 0; x < 6; x++) {
            var cloud = this.group.create(x * 150, 60, 'cloud'); 
            cloud.checkWorldBounds = true;
            cloud.events.onOutOfBounds.add(cloudOut, this);
            cloud.body.velocity.x = 50;
            cloud.inputEnabled = true;
            cloud.input.enableDrag(true);
            cloud.checkNumber = value;
            this.word.makeText(80,30,22,game.global.wordArray[value++])
            cloud.addChild(this.word.text);
        }

    };

    cloudOut = function (cloud) {
        cloud.reset(-75, cloud.x - 740);
        cloud.body.velocity.x = 50;
    };

    this.checkMatch = function (obj1, obj2) {
            clearTimeout (myTimer);
            if (obj2.checkNumber === game.global.correctMatch) {
                game.state.start('gameComplete');
            } else {
                game.state.start('gameFail');
            }
        
    };

};
