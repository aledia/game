 class Player{
    constructor(x,y,ctx){
        this.x = x, 
        this.y = y,
        this.ctx = ctx,
        this.img = new Image(),
        this.img.src = './img/drogon2.png'

    }
    draw(){
        this.ctx.drawImage(this.img, this.x, this.y,150,150)
    }
}