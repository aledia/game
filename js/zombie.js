class Zombie{
    constructor(x,y,ctx,w,h){
        this.x = x, 
        this.y = y,
        this.ctx = ctx,
        this.w = 75,
        this.h = 100,
        this.img = new Image(),
        this.img.src = './img/pvw_walk.gif'

    }
    draw(){
        this.ctx.drawImage(this.img, this.x, this.y,this.w, this.h)
    }
    move(){
        this.x--;
    }
}