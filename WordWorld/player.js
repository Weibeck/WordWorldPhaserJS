function player(){
    
  
    this.preload = function(){
        this.speech = new speech();
        
    };
    
    this.create = function(){
        
        this.sprite = game.add.sprite(730,340,'player');
        this.sprite.anchor.setTo(0.5,0.5);
        this.sprite.scale.setTo(0.7,0.7);
        game.physics.arcade.enable(this.sprite);
        
    };
        
};