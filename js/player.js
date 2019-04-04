 class Player{
    constructor(x,y,ctx,h,w){
        this.x = x, 
        this.y = y,
        this.ctx = ctx,
        this.img = new Image(),
        this.img.src = './img/drogon2.png'
        this.w = 750;
        this.h = 400;
        this.orientation = "right";
       
    }
    draw(){
        if(this.orientation !== "right"){
            this.img.src = './img/drogon.png'
        }else{
            this.img.src = './img/drogon2.png'
        }
        this.ctx.drawImage(this.img, this.x, this.y,150, 150)
    }
}