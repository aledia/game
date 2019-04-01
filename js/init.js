window.onload= function(){


document.getElementById("start").onclick = function () {
    
    
    document.getElementById("startGame").setAttribute("class", "noVisible");
    document.getElementById("container").style.display='block';
    Game.initGame();


}
}


