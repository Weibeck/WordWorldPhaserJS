function Text(){
    
    this.makeText = function(x,y,font,wordArray){
        
        this.text = game.add.text(x, y, wordArray, {
                font: font+"px Righteous",
                fill: "#ff8b67",
            });
        this.text.anchor.set(0.5);
    }
};