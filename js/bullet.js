class Bullet {
    constructor (game){
        this.game = game
        this.x = this.game.player.x+100,
        this.y = this.game.player.y+120,
        this.ctx = game.ctx,
        this.w = 50,
        this.h = 60,
        this.img = new Image(),
        this.img.src = './img/fogonazo.png';

        
    }
    draw(){
        this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    move(){
        this.x++;
        this.y++;

    }
}