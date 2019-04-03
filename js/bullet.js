class Bullet {
    constructor (x, y, ctx, damage){
        this.x = x,
        this.y = y,
        this.ctx = ctx,
        this.damage = damage,
        this.img = new Image(),
        this.img.src = './img/shot.png'

        
    }
    draw(){
        this.ctx.drawImage(this.img, this.x, this.y,16,16)
    }
    shoot(){
        this.x--;

    }
}