window.onload = function () {
    
    document.getElementById("start").onclick = function () {
        var audio = new Audio("./song/jdt.mp3");

      audio.play();

        

        document.getElementById("startGame").style.display = 'none';
        document.getElementById("container").style.display = 'block';
        Game.initGame();


    };
};