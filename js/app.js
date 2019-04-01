document.getElementById("start").onclick = function () {
    //llamamos a una funcion que inicializa todo.
    Game.startGame('container');
    document.getElementById('container').style.display='block';
    document.getElementById('startGame').style.display='none';

    

}



//     function startGame() {
//   var canvas = document.querySelector("#container").display= "block";



/* @type {CanvasRenderingContext2D} */
// var ctx = canvas.getContext('2d');

// setup(canvas, drawAll);
//     }

//   }