var Game = {

    canvas:undefined,
    ctx:undefined,
    w:750,
    h:400,
    intervalID: '',
    counter: 0,
    frameCounter:undefined,
   
    

    initGame:function() {

        this.canvas = document.getElementById("canvas")
        this.ctx = this.canvas.getContext("2d")
        this.frameCounter = 340;
        this.arrayEnemy= [];

        //  this.reset()
        
        this.startGame();
    },

    reset:function(){
     
        this.player = new Player(this.w-200, this.h -150, this.ctx) 
        
       // this.zombie2 = new Zombie(10, this.h -200, this.ctx) 

        this.background=new Background(this.ctx,this.w,this.h)

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
        this.arrayEnemy.forEach(enemy =>{
            enemy.draw();
            enemy.move();
        }) 
        this.clearEnemy();
        
        

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
        this.arrayEnemy.push(new Zombie(10, this.h -80, this.ctx))        
    },
    clearEnemy: function(){
    
        this.arrayEnemy = this.arrayEnemy.filter(enemy => {
            return enemy.x < 750
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
            }
        }
    }
                
    
   

}

