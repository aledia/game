var Game = {

    canvas:undefined,
    ctx:undefined,
    width:undefined,
    height:undefined,


    startGame:id_canvas =>{
        
        canvas = document.getElementById(id_canvas);
        ctx =  canvas.getContext('2d');
        width = canvas.width;
        height = canvas.height;
        
        Game.draw()


    },
    draw: () =>{
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.rect(0,0,width,height);
        ctx.fill();
        ctx.closePath();  
    },
   

}

