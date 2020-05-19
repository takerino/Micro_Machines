
let canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");


//vloženie aliasu hráča

let hrac = new Image();
hrac.src = "../alias/auticko.svg";

let protiHrac = new Image();
protiHrac.src = "../alias/zelene2.svg";

//-------------------------------

// Model


// Globalne premenne, ktore maju vyznam iba takto
var keys = {};

var tick = 0;
var col;
var bcg = "../plan/Med.svg";

let check = 1;


// Mapy
// Low

let mapLow = {}


//------------------------------------

var alias = {
    x : canvas.width /3,
    y : canvas.height /2,
    rotation : 0,
    gravity : 0,
    forward : -4,
    backward : 3,
    left : -3,
    right : 3,
    speed : 0,
    maxSpeed : 5,
}

var player = {
    x : canvas.width /3,
    y : canvas.height /2,
    width : 80,
    height : 145,
    image : hrac,
    rotation : 0,
    gravity : 0,
    forward : -4,
    backward : 3,
    left : -3,
    right : 3,
    speed : 0,
    maxSpeed : 5,
}

var oponent = {
    x : canvas.width /2 + 50,
    y : canvas.height/2,
    width : 80,
    height : 145,
    image : hrac,
    rotation : 0,
    gravity : 0,
    forward : -4,
    backward : 3,
    left : -3,
    right : 3,
    speed : 0,
    maxSpeed : 4,
}

function showName () {
    ctx.font = "2.5em Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Micro Machines", canvas.width/2, canvas.height/8);
}

function writeText(text){
    clearCanvas();
    ctx.font = "3em Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText(text, canvas.width/2, canvas.height/5);
}

//----
// View
//----

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Vycisti ovladacie prvky umiestnene nad canvasom 
function clearElements(){
    document.getElementById("helper").style.display = "none";
    document.getElementById("level").style.display = "none";
    document.getElementById("hraci").style.display = "none";
    document.getElementById("names").style.display = "none";
    document.getElementById("name1").style.display = "none";
    document.getElementById("lead").style.display = "none";
    menu.style.display = "none";
    gName.style.display = "none";


}

function drawBg (){
    bg = "url(../plan/low_new.svg)";
}

function drawAlias(){
    clearCanvas();
    ctx.drawImage(player.image, player.x, player.y);
    //console.log("Alias vykresleny na y: " + player.y + " x: " + player.x);
}

function drawOponent(){
    //ctx.drawImage(oponent.image, oponent.x, oponent.y);
    //console.log(oponent.y + " " + oponent.y);
    ctx.fillRect(oponent.x, oponent.y, oponent.width, oponent.height);
}


// Hra sama o sebe vo svojej pointe GameOver nemá => nerieši sa kolízia objektov pre ukončenie hry, iba pre spomalenie ich rýchlosti
// a vytvorenie animácie narazenia, aby si to hráč uvedomil, je tu ale implementovaná kvôli zadaniu a potrebe pre KB3
function gameOver(){
    crash.volume = 0.3;
    //crash.play();
    clearCanvas();
   
    canvas.style.background = "url(../img/Background.jpg)"
    canvas.style.background.size = "80% cover";
    menu.style.display = "block";
    gName.style.display = "block";
    showName();
    writeText("Game Over!");
    col = 1;
}

function setBg(){
    canvas.style.background = "../img/bg.jpg";
}

function help(){
    clearCanvas();
    menu.style.display = "none";
    gName.style.display = "none";
    document.getElementById("helper").style.display = "block";
}

function menuBack(){
    clearCanvas();
    clearElements();
  
    menu.style.display = "block";
    gName.style.display = "block";
}

function back(){
    document.getElementById("hraci").style.display = "none";
    document.getElementById("level").style.display = "block";
}



  //------------//
 // Controller //
//------------//

function mainLoop(){
    clearCanvas();
    drawBg();
    //drawOponent();
    drawAlias();
    player.move();
    colision(player);
    //oponent.move();
    //colision(oponent);
    //showName();   

    requestAnimationFrame(mainLoop);
}

var timer;

function start(){
    clearCanvas();   
    clearElements();
    
    document.getElementById("canvas").style.background = "url(../plan/Low.svg)";

    if(col == 1){
        console.log("Po Game over");
        col = 0;
    }

    if(pname){
        alert("Meno hraca: "+pname.value);
    }
    if(p1Name && p2Name){
        //alert("Meno 1: " + p1Name + " Meno 2: " + p2Name);
        
    }

   
    console.log("Hra sa spustila");
    requestAnimationFrame(mainLoop);
}  

function level(){
    clearElements();
    sound();
 
    console.log("Volba urovne"); 

    document.getElementById("level").style.display = "block";

    writeText("Choose map for your game");
}

function hraci(){
    //clearCanvas();
    clearElements();
    sound();

    writeText("Number of players")

    console.log("Volba poctu hracov");
    document.getElementById("hraci").style.display = "block";

    
}

var p1Name
var p2Name

function names(){
    clearCanvas();
    clearElements();
  
    writeText("Write player names");
    document.getElementById("names").style.display = "block";

    p1Name = document.getElementById("player1").value;
    p2Name = document.getElementById("player2").value;

    console.log("Player 1 name" + p1Name); 
    console.log("Player 2 name" + p2Name); 

    
}

var pname

function name1(){
    clearCanvas();
    clearElements();
    
    writeText("Write your name")
    document.getElementById("name1").style.display = "block";

    pname = document.getElementById("player");
    console.log("Player name " + pname.value);

    //alert("Meno hraca: "+pname.value)

}



function chooseLow(){
    console.log("Zvoleny low");
    bg = "url(../map/Low.svg)";
    hraci();
}

function chooseMed(){
    console.log("Zvoleny medium");
    hraci();
}

function choosePro(){
    console.log("Zvoleny Profesional");
    hraci();
}

function lead(){
    clearElements();

    document.getElementById("lead").style.display = "block";
}



// Nacitanie hlavnych komponentov hry

window.onload = function(){
    setBg();
    canvas = document.getElementById("canvas");

    //ctx = canvas.getcontext("2d");

    startG = this.document.getElementById("start");
    menu = document.getElementById("menu");
    gName = document.getElementById("name");
    inst = document.getElementById("help");
    iback = document.getElementById("iback");
    isound = document.getElementById("isound");
    hudba = document.getElementById("hudba");
    crash = document.getElementById("crash");
    next = document.getElementById("next");
    one = document.getElementById("oneplayer");
    two = document.getElementById("twoplayer");
    hback = document.getElementById("back");
    playB1 = document.getElementById("play1");
    playB2 = document.getElementById("play2");
    score = document.getElementById("score");
    mMenu = document.getElementById("mMenu");
    
    startG.onclick = level;
    inst.onclick = help;
    iback.onclick = menuBack;
    isound.onclick = sound;
    next.onclick = menuBack;
    mMenu.onclick = menuBack;
    playB1.onclick = this.start;
    playB2.onclick = this.start;

    score.onclick = lead;


    one.onclick = name1;
    two.onclick = names;

    hback.onclick = back;
    
    hudba.load();

    sound();
    //requestAnimationFrame(this.mainLoop);
}



// Movement and speed
// Direction => forward/backward, obj => object to modify direction
function moveY(direction, obj){
    let pom = 0.2;
    obj.y += direction;
    //console.log("obj y: " +obj.y + " dir: " + direction);
    
    obj.y += obj.speed;
    
    if(Math.abs(obj.speed) < obj.maxSpeed && direction < 0)
        obj.speed--;
        // if(pom > 1)
        //     obj.speed--;
        // else
        //     pom *= 20;
    if(obj.speed < obj.maxSpeed - 3 && direction > 0)
        obj.speed++;
   
    //console.log("dir: " + direction + " speed: " + obj.speed);
  
}


function moveS(side, obj){
    obj.x += side;
    obj.rotation = 5;
    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.restore();

}

// Collision with canvas borders
//
function colision(obj){
    if(!col){
        if(obj.x + obj.width >= canvas.width || obj.x + 5 <= 0){
            //console.log("Object collide to x: "+ obj.x );
            gameOver();
            obj.right = obj.left = obj.forward = obj.backward = obj.speed = 0;
        }

        if(obj.y + obj.height >= canvas.height || obj.y <= 0){
            //console.log("Object collide to y: " + obj.y);
            clearCanvas();
            col = 1;
            gameOver();  
            obj.right = obj.left = obj.forward = obj.backward = obj.speed = 0;              
        }
    }
    else{
        clearCanvas();
        console.log("Vykreslujem po game over")
        col = 0;
        setStart();
        //start();
        //console.log("Po...");
        
    }
   
}

function setStart(){
    player.x = alias.x;
    player.y = alias.y;
    player.forward = alias.forward;
    player.backward = alias.backward;
    player.left = alias.left;
    player.right = alias.right;
    player.speed = alias.speed;
}

// Sound components
//



function sound(){
    var time = 0;

    if(check){
        hudba.pause();
        ctx.beginPath();
        ctx.moveTo(30,35);
        ctx.lineTo(80, 85);
        ctx.lineWidth = 6;
        ctx.strokeStyle = "black";
        ctx.stroke();
        check = 0;
        //time = hudba.currentTime();
       
    }
    else if(check == 0){
        clearCanvas();
        check = 1;
        console.log("Check: " + check);       
        //hudba.load();
        hudba.play();
    }
    
    console.log("Click: " + check);

}

//----------------------------------------------------------------------------------------------

// Obj moving with arrow
//

player.move = function(){
    if(keys[37]){
        moveS(this.left, player) //player.x -= 3;
        colision(player);
    }
    if(keys[39]){
        moveS(this.right, player);//player.x += 3;
        colision(player);
    }
    if(keys[38]){
        moveY(this.forward, player); //player.y -= 4;
        colision(player);
    }
    if(keys[40]){
        moveY(this.backward, player); //player.y += 3;
        colision(player);
    }
}

// oponent moving with WASD

oponent.move = function(){
    if(keys[65]){
        moveS(this.left, oponent);
        colision(oponent);
    }
    if(keys[68]){
        moveS(this.right, oponent);
        colision(oponent);
    }
    if(keys[87]){
        moveY(this.forward, oponent);
        colision(oponent);
    }
    if(keys[83]){
        moveY(this.backward, oponent); 
        colision(oponent);
    }
}

// Keyboard handler

window.onkeydown = function(){
    keys[event.keyCode] = true;
    console.log(keys);
}
window.onkeyup = function(){
    keys[event.keyCode] = false;
}

