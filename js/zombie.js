class Zombie{
    constructor(x,y,ctx){
        this.x = x, 
        this.y = y,
        this.ctx = ctx,
        this.img = new Image(),
        this.img.src = './img/zombie.png'

    }
    draw(){
        this.ctx.drawImage(this.img, this.x, this.y,50,50)
    }
    move(){
        this.x++;
    }
}