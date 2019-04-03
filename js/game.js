var Game = {

    canvas:undefined,
    ctx:undefined,
    w:750,
    h:400,
    intervalID: '',
    counter: 0,
    frameCounter:undefined,
    arrayFire: [],
   
    

    initGame:function() {

        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.frameCounter = 340;
        this.arrayEnemy= [];

        //  this.reset()
        
        this.startGame();
    },

    reset:function(){
     
        this.player = new Player(10, 20, this.ctx) 
        
      

        this.background=new Background(this.ctx,this.w,this.h);
        this.bullet=new Bullet(this)

    },

    startGame:function(){
        this.reset();
        this.movement();
    this.intervalID = setInterval(() => {
        this.frameCounter++;
        if (this.frameCounter%350 == 0){
            this.generateEnemy();
            
        }
            

        this.clearScreen();
        this.background.draw();
        this.player.draw();
        this.arrayFire.forEach((bullet)=>{
            bullet.draw()
            bullet.pepe()
        });
        this.arrayEnemy.forEach(enemy =>{
            enemy.draw();
            enemy.move();
        }) 
        this.clearEnemy();
        this.clearFire();
        

        this.counter++;
    }, 1000 / 60)
    
},

    clearScreen: function() {
        this.ctx.clearRect(0, 0, this.w, this.h);
      },

    drawAll: function() {
    this.player.draw()
    },

    generateEnemy: function(){
        this.arrayEnemy.push(new Zombie(750, this.h -80, this.ctx))        
    },
    clearEnemy: function(){
    
        this.arrayEnemy = this.arrayEnemy.filter(enemy => {
            return enemy.x >= -100
        })
      
    },
    fire: function(){

        if(this.arrayFire.length < 7){

            this.arrayFire.push(new Bullet(this))
        }
    },
    clearFire: function(){
        this.arrayFire = this.arrayFire.filter( fire => {
            return fire.y < 400;
        })
    },
   
    movement: function(){
        window.onkeydown = (e) =>{
            switch(e.keyCode){
                case 37:
                this.player.x--
                break;
               
                case 39:
                this.player.x++
                break;

                case 38:
                this.player.y--
                break;
               
                case 40:
                this.player.y++
                break;

                case 32:
                this.fire();
                break;
            }
        }
    },
                
    
   

}

