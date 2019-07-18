var myTimer; 

function speech() {


    this.preload = function () {


    };

    this.create = function () {
 setTimeout(function () {
        this.sprite = game.add.sprite(590, 340, 'speech');
        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.scale.setTo(0.3, 0.3);
        game.physics.arcade.enable(this.sprite);
        this.sprite.addChild(this.text);
     }, 0);
        
        this.updateText(game.global.nextSpeech);
    };

    this.generateText = function (x) {
        setTimeout(function () {
        this.text = game.add.text(0, -50, x, {
            font: "50px Arial",
            fill: "black"
        });
            this.text.alpha = 0;
                    game.add.tween(this.text).to({
            alpha: 1
        }, 2000, "Linear", true);

        this.text.anchor.setTo(0.5, 0.5);
            }, 0);
        
    };
    
    this.updateText = function(x,y) {
                myTimer = setTimeout(function () {
                    if(x <= 0){
                        this.text.alpha = 0;
                        this.text.setText("Træk skyen \n med det rigtige ord \n ned til sætningen!");
                         game.add.tween(this.text).to({
            alpha: 1
        }, 2000, "Linear", true);
                    }
                    else
                    {
                        this.text.alpha = 0;
                        this.text.setText("Et lille hint:\n Ordet starter \n med bogstavet " + game.global.wordArray[game.global.nextSpeech].charAt(0))
                         game.add.tween(this.text).to({
            alpha: 1
        }, 2000, "Linear", true);
                    }
            
            }, 11000);
    };

};