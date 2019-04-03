class Bullet {
    constructor (game){
        this.game = game
        this.x = this.game.player.x+20,
        this.y = this.game.player.y+20,
        this.ctx = game.ctx,
       
        this.img = new Image(),
        this.img.src = './img/fogonazo.png';

        
    }
    draw(){
        this.ctx.drawImage(this.img, this.x, this.y,50,60)
    }
    pepe(){
        this.x++;
        this.y++;

    }
}