var loadState = {
    preload: function () {
        game.load.image('background', 'assets/background.png');
        //https://opengameart.org/content/fun-bgm
        game.load.audio('backgroundMusic', 'assets/musicRelax.ogg');
        // https://opengameart.org/content/bubbles-pop
        game.load.audio('pop', 'assets/pop.ogg');
        game.load.spritesheet('mute', 'assets/muteButton.png', 28, 22);
        // https://www.gamedevmarket.net/asset/grass-plain-vector-background-2/
        game.load.image('background2', 'assets/background2.png');
        // https://www.gamedevmarket.net/asset/free-rpg-monster-pack/
        game.load.image('player', 'assets/player.png')
        // http://www.transparentpng.com/details/bubble-balloon-white-speech-bubles-image_4224.html
        game.load.image('speech', 'assets/speech.png')
        // https://www.gamedevmarket.net/asset/grass-plain-vector-background-2/
        game.load.image('cloud', 'assets/cloud3.png');
        //https://opengameart.org/content/lively-meadow-victory-fanfare-and-song
        game.load.audio('finishMusic', 'assets/finish.ogg');
        //https://opengameart.org/content/completion-sound
        game.load.audio('correctSound', 'assets/correctSound.ogg');
        //http://soundbible.com/1830-Sad-Trombone.html
        game.load.audio('falseSound', 'assets/falseSound.ogg');

    },
    // Go to next state
    create: function () {
        game.state.start('menu');
    }
};