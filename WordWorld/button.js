function button(){
    
    this.preload = function(){
    },
    
    
    
    this.create = function(x,y,call){
        this.button = game.add.button(x, y, 'cloud', call, this);
        this.button.scale.setTo(1.8, 1.8);
        this.button.anchor.setTo(0.5, 0.5);
    }
};