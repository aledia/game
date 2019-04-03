class Zombie{
    constructor(x,y,ctx){
        this.x = x, 
        this.y = y,
        this.ctx = ctx,
        this.img = new Image(),
        this.img.src = './img/pvw_walk.gif'

    }
    draw(){
        this.ctx.drawImage(this.img, this.x, this.y,100,100)
    }
    move(){
        this.x--;
    }
}