class Khalessi{
    constructor(x,y,ctx,h,w){
        this.x = x, 
        this.y = y,
        this.ctx = ctx,
        this.img = new Image(),
        this.img.src = "./img/khalessi.png";
        this.w = 35;
        this.h = 85;
    }
    draw(){
        this.ctx.drawImage(this.img, this.x, this.y,this.w,this.h)
    }
}