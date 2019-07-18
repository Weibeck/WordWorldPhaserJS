    // Initialize Phaser
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');   

// Define global variable
    game.global = {
        sentenceArray: ["Marianne kan spille på et ____", "Jeg ____ til skole hver dag", "Det er sundt at være ____","Jeg har et fritidsarbejde for at tjene ____","I ferien tager vi ud og ____","Jeg er ____ fordi jeg fik slik i går","Min mor og far er gode til at lave ____","Jeg dyrker ofte ____","Om vinteren er det ____","Om sommeren er det ____","Traktoren bruges af en ____","En seng er meget ____","En basketball er ____","En ugle er en ____","Min lærer siger ofte at jeg er ____","Om vinteren fryser vand til ____","Om aftenen kan du se en ____","Bilen har farven ____"],
        wordArray: ["klaver","cykler","aktiv","penge","rejser","lykkelig","mad","idræt","koldt","varmt","landmand","blød","rund","fugl","dygtig","is","solnedgang","blå"],
        correctMatch: 0,
        getWords: 0,
        speechArray: ["Velkommen til \n WordWorld!", "Tænk dig godt om...", "Jeg er en talende hund!","Træk skyen \n med det rigtige ord \n ned til sætningen!", "Tiden løber!\nTik, tak, tik, tak.","Jeg hepper på dig!","Tænk dig godt om...","Træk skyen \n med det rigtige ord \n ned til sætningen!","Tiden løber!\nTik, tak, tik, tak.","Jeg er en talende hund!","Træk skyen \n med det rigtige ord \n ned til sætningen!","Jeg synes du \n bliver bedre og bedre!","Træk skyen \n med det rigtige ord \n ned til sætningen!","Jeg er din største fan!","Min livret er leverpostej.","4 ord igen! \n Kom så!","Vi er der næsten!","Træk skyen \n med det rigtige ord \n ned til sætningen!","Vi er næsten færdige!"],
        nextSpeech: 0,
        score: 0,
        counter: 0,
        combo: 0,
        failCounter: 0
    };

game.state.add('load', loadState);
game.state.add('menu', menu);
game.state.add('play', playState);
game.state.add('help', help);
game.state.add('gameComplete', gameCompleteState);
game.state.add('gameFail', gameFailState);
game.state.add('endgame',endGameState)
game.state.start('load');