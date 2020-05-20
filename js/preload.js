
window.onload = function () {
    context = document.getElementById('canvas').getContext('2d');
    
    // Save the buttons listeners to variables
    startButton = document.getElementById('start');
    scoreButton = document.getElementById('score');
    helpButton = document.getElementById('help');
    mapToMenu = document.getElementById('home'); // Pri volbe mapy
    helpToMenu = document.getElementById('home1');
    scoreToMenu = document.getElementById('home2');

    onePlayer = document.getElementById('oneplayer');
    twoPlayers = document.getElementById('twoplayer');
    playersToMap = document.getElementById('back');

    playGameOne = document.getElementById('play1');
    playGameTwo = document.getElementById('play2');
    
    music = document.getElementById('hudba');
    pause = document.getElementById('ipause');
    
    endGame = document.getElementById('endGame');
    cancel = document.getElementById('cancel');

    // Listen on click 
    
    startButton.onclick = Screen.level;
    scoreButton.onclick = Screen.lead;
    helpButton.onclick = Screen.help;
    mapToMenu.onclick = Screen.displayMenu;
    helpToMenu.onclick = Screen.displayMenu;
    scoreToMenu.onclick = Screen.displayMenu;

    onePlayer.onclick = Screen.name1;
    twoPlayers.onclick = Screen.names;
    playersToMap.onclick = Screen.back;  
    
    
    playGameOne.onclick = Screen.gameStart;
    playGameTwo.onclick = Screen.gameStart;
    
    pause.onclick = Screen.gamePause;
    cancel.onclick = Screen.gamePause;
    endGame.onclick = Screen.displayMenu;
    
    music.load();

};