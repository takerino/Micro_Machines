
var ctx = context;

Screen.clearElements = function(){
    document.getElementById("helper").style.display = "none";
    document.getElementById("level").style.display = "none";
    document.getElementById("hraci").style.display = "none";
    document.getElementById("names").style.display = "none";
    document.getElementById("name1").style.display = "none";
    document.getElementById("lead").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("gameInfo").style.display = "none";
    document.getElementById("pauseMenu").style.display = "none";


};

Screen.level = function(){
    Screen.clearElements();
    document.getElementById("level").style.display = "block";
    
}

Screen.lead = function(){
    Screen.clearElements();
    document.getElementById("lead").style.display = "block";
}

Screen.help = function(){
    Screen.clearElements();
    document.getElementById("helper").style.display = "block";
}

Screen.displayMenu = function(){
    Screen.clearElements();
    document.getElementById("menu").style.display = "block";
    
}

Screen.back = function(){
    Screen.clearElements();
    document.getElementById("level").style.display = "block";
}


Screen.hraci = function(){
    Screen.clearElements();
    document.getElementById("hraci").style.display = "block";
}

Screen.names = function(){
    Screen.clearElements();
    document.getElementById("names").style.display = "block";
}


Screen.name1 = function(){
    Screen.clearElements();
    document.getElementById("name1").style.display = "block";
}

Screen.gameStart = function(){
    Screen.clearElements();
    console.log("Spustam hru");
    document.getElementById('pause').style.display = "block";
    document.getElementById('gameInfo').style.display = "block";


    Game.init();
    Game.run(context);

}

Screen.gamePause = function(){
    console.log("Stop");

    if(!pause){
        document.getElementById('box').style.background.image = "url(./img/Background.jpg)";
        document.getElementById('gameInfo').style.display = "none";
        document.getElementById('pauseMenu').style.display = "block";
        pause = 1;
        
    }
    else if(pause){
        document.getElementById('box').style.background.image = "none";
        document.getElementById('pauseMenu').style.display = "none";
        document.getElementById('gameInfo').style.display = "block";
        pause = 0;      

    }
}

Screen.gameScreen = function(){
    document.getElementById('kole').innerHTML = lap+" / "+totalLap;
}



function chooseLow(){
    console.log("Zvoleny low a povodny mapType: "+mapType);
    mapType = 0;
    Screen.hraci();
}

function chooseMed(){
    console.log("Zvoleny medium");
    mapType = 1;
    Screen.hraci();
}

function choosePro(){
    console.log("Zvoleny Profesional");
    mapType = 2;
    Screen.hraci();
}

