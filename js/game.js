var Game = {

    canvas:undefined,
    ctx:undefined,
    w:750,
    h:400,
    intervalID: '',
    counter: 0,

    initGame: function() {
        this.canvas = document.getElementById("game")
        this.ctx = this.canvas.getContext("2d")
  //this.player = new Player(this.w, this.h, this.ctx) //crear jugadpr
      //  this.reset()
        this.startGame()
    },

    starGame: function(){
    this.intervalID = setInterval(() => {
        this.clearScreen()
        this.drawAll()
        this.moveAll()
            // if(this.counter%60===0){
            // }

        this.counter++
    }, 1000 / 60)
    //pinta 
},

    clearScreen: function() {
        this.ctx.clearRect(0, 0, this.w, this.h);
      },
      drawAll: function() {
        this.player.draw()
      }          
    
   

}

