 class Player{
    constructor(x,y,ctx){
        this.x = x, 
        this.y = y,
        this.ctx = ctx,
        this.img = new Image(),
        this.img.src = './img/pistoleroIzquierda.png'

    }
    draw(){
        this.ctx.drawImage(this.img, this.x, this.y,60,60)
    }
}