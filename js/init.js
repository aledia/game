window.onload = function () {


    document.getElementById("start").onclick = function () {


        document.getElementById("startGame").style.display = 'none';
        document.getElementById("container").style.display = 'block';
        Game.initGame();


    };
};