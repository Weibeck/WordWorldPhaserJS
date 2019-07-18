function timer() {
    this.create = function () {
        // Create countdown text
        this.countDownText = game.add.text(685, 30, 'Tid: ' + game.global.counter, {
            font: '50px Righteous',
            fill: '#ff8b67'
        })
        this.countDownText.anchor.setTo(0.5, 0.5);

        this.timer = game.time.events.loop(Phaser.Timer.SECOND, this.counterNow, this);

    };
    this.counterNow = function () {
        game.global.counter++;
        this.countDownText.setText("Tid: " + game.global.counter);
    };

};