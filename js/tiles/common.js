//
// Asset loader
//

var Loader = {
    images: {}
};

var context;
var pause = 0;

Loader.loadImage = function (key, src) {
    var img = new Image();

    var d = new Promise(function (resolve, reject) {
        img.onload = function () {
            this.images[key] = img;
            resolve(img);
        }.bind(this);

        img.onerror = function () {
            reject('Could not load image: ' + src);
        };
    }.bind(this));

    img.src = src;
    return d;
};

Loader.getImage = function (key) {
    return (key in this.images) ? this.images[key] : null;
};

//
// Keyboard handler
//

var Keyboard = {};

Keyboard.LEFT = 37;
Keyboard.RIGHT = 39;
Keyboard.UP = 38;
Keyboard.DOWN = 40;

Keyboard._keys = {};

Keyboard.listenForEvents = function (keys) {
    window.addEventListener('keydown', this._onKeyDown.bind(this));
    window.addEventListener('keyup', this._onKeyUp.bind(this));

    keys.forEach(function (key) {
        this._keys[key] = false;
    }.bind(this));
}

Keyboard._onKeyDown = function (event) {
    var keyCode = event.keyCode;
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = true;
    }
};

Keyboard._onKeyUp = function (event) {
    var keyCode = event.keyCode;
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = false;
    }
};

Keyboard.isDown = function (keyCode) {
    if (!keyCode in this._keys) {
        throw new Error('Keycode ' + keyCode + ' is not being listened to');
    }
    return this._keys[keyCode];
};

//
// Game object
//

var Game = {};

Game.run = function (context) {
    this.ctx = context;
    this._previousElapsed = 0;

    var p = this.load();
    
    Promise.all(p).then(function (loaded) {
        this.init();
        window.requestAnimationFrame(this.tick);
    }.bind(this));

    Screen.gameScreen;
};

Game.tick = function (elapsed) {
    window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.ctx.clearRect(0, 0, 1030, 570);

    // compute delta time
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25);
    this._previousElapsed = elapsed;

    this.update(delta);
    this.render();
}.bind(Game);


Game.init = function () {};
Game.update = function (delta) {};
Game.render = function () {};


//
// start up function
//

window.onload = function () {
    context = document.getElementById('canvas').getContext('2d');
    
    // Save the buttons listeners to variables
    startButton = document.getElementById('start');
    scoreButton = document.getElementById('score');
    helpButton = document.getElementById('help');
    mapToMenu = document.getElementById('home'); 
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

    //Game.run(context);
};
