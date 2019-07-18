function sentence() {


    this.create = function () {
            // Create a group as done with the clouds to spawn the text -> use sentence from an array
            this.text = game.add.text(400, 540, game.global.sentenceArray[game.global.correctMatch], {
                font: "40px Righteous",
                fill: '#ff8b67'
            })
        
            this.text.anchor.setTo(0.5, 0.5)
            this.text.enableBody = true;
            this.text.checkValue = 2;
            this.text.physicsBodyType = Phaser.Physics.ARCADE;
            game.physics.arcade.enable(this.text);

        }
};