class Bullet {
    constructor (game, orientation){
        this.game = game
        this.x = this.game.player.x+100,
        this.y = this.game.player.y+120,
        this.ctx = game.ctx,
        this.w = 20,
        this.h = 30,
        this.orientation = orientation,
        this.img = new Image(),
        this.img.src = './img/fireball.png';

        
    }
    draw(){
        if(this.orientation == "right"){
            this.ctx.drawImage(this.img, this.x, this.y-10, this.w, this.h);

        }else{
            this.ctx.drawImage(this.img, this.x-70, this.y-10, this.w, this.h);
        }
    }
    move(){

        if(this.orientation === "right"){
            this.x++;
            this.y++;
        }else{
            this.x--;
            this.y++;
        }
   

    }
}