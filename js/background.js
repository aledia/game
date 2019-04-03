class Background {
    constructor(ctx, w, h) {

        this.ctx = ctx,
        this.img = new Image(),
        this.img.src= "./img/winterfell.png",
        this.w = w,
        this.h = h
    }
    draw() {
  
            this.ctx.drawImage(this.img, 0, 0, this.w, this.h)
        
       
    }
}