
// Definovanie elemetu canvas v body
//let canvas = document.createElement('canvas');

let canvas = document.getElementById("hra");
canvas.height = 570;
canvas.width = 930;

var ctx = canvas.getContext("2d");
// Vytvorenie canvasu v dokumente
//document.body.appendChild(canvas);

// nastavenie pozadia
let bg = canvas.style.background;
canvas.style.background = "url(../plan/Low.svg)";
canvas.style.background = canvas.height;
bg.size = "cover";

// Vypísanie názvu hry
ctx.font = "2.5em Arial";
ctx.fillStyle = "white";
ctx.textAlign = "center";
ctx.fillText("Micro Machines", canvas.width/2, canvas.height/6);


//vloženie aliasu hráča
let image = document.createElement('image');


let hrac = new Image;
hrac.src = "../alias/auticko.svg";

let oponentHrac = new Image;
oponentHrac.src = "../alias/zelene2.svg";


// ---------------------------------------------------------------------------------
// Prítup 1
/*
class Box{
    constructor() {
        this.x = canvas.width/2;
        this.y = canvas.height/3;
        this.vx = 0;
        this.vy = 0;
        this.image = image;
        this.dis = 0;
    }
    mesure(){
        this.dis = Math.abs(vx);
    }
}


let box = new Box();

function showBox() {
    ctx.fillStyle = '#000';
  
    ctx.drawImage(box.image,box.x + box.vx,box.y + box.vy);
    //ctx.drawImage(box.oponent, box.x + box.vx, box.y + box.vy);
}

let BoxOponent = new Box();

function draw(){
    // na zaciatok 
    ctx.clearRect(0,0,canvas.width,canvas.height);
    showBox()
    // cyklenie
    requestAnimationFrame(draw);
}
// refresovanie
requestAnimationFrame(draw);


// Pohyb hráča samovoľne zo strany na stranu

// while(box.vx < canvas.width/2){
//     box.vx += 2;
//     box.vy = 0;}
// 

*/

//-------------------------------

// Prístup 2

// Model

var tick = 0;

var alias = {
    x : canvas.width/3,
    y : canvas.height/2,
    dx : 10,
    dy : 10,
    image : hrac,

    move: function(){
        if(this.x >= canvas.width || this.x <= 0){
            this.dx *= -1;
        }
        if(this.y >= canvas.height || this.x <= 0){
            this.dy *= -1;
        }
        
        //this.x = this.x + this.dx;
        this.y = this.y - this.dy;
    }
}

var oponent = {
    x : canvas.width/3 + canvas.width/3,
    y : canvas.height/2,
    dx : 10,
    dy : 10,
    image : oponentHrac,

    move: function(){
        if(this.x >= canvas.width || this.x <= 0){
            this.dx *= -1;
        }
        if(this.y >= canvas.height || this.x <= 0){
            this.dy *= -1;
        }
        
        //this.x = this.x + this.dx;
        this.y = this.y - this.dy;
    }
}



function showName () {
    ctx.font = "2.5em Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Micro Machines", canvas.width/2, canvas.height/6);
}

//----
// View
//----

function drawAlias(){
    ctx.clearRect(0,0, canvas.width, canvas.height);

    ctx.drawImage(alias.image, alias.x, alias.y);
    
    ctx.drawImage(oponent.image, oponent.x, oponent.y);
}

function drawOponent(){
    //ctx.clearRect(0,0, canvas.width, canvas.height);

}

//-------------//
// Controller //
//-----------//

function step(){
    showName();   
    alias.move();
    oponent.move();
    drawAlias();
    //drawOponent();
}

var timer;

function start(){
    if(timer){
       timer = clearInterval(timer);
        button.textContent = "Start";
    }
    else{
        timer = setInterval(step, 1000/30);
        button.textContent = "Stop";
    }
}

window.onload = function(){
    button = this.document.getElementById("button");
    text = document.getElementById("text");
    canvas = this.document.getElementById("hra");
    //ctx = canvas.getContext("2d");
    button.onclick = start;
}


//---------------------------------------------------------------------------------------------------------------------------------------------


//Pohyb hráča cez klávesy
document.addEventListener('keypress',(e)=>{
    console.log(e + alias.dx + " vy: "+ alias.dy);    

    if(e.key == 'a'){
        alias.dx -= 30;
    }
    if(e.key == 'w'){
        alias.dy -= 30;
    }
    if(e.key == 's'){
        alias.dy += 30;
    }
    if(e.key == 'd'){
        alias.dx += 30;
    }

    // switch(e.key){
    //     case'a': 
    //         box.vx -= 10;
    //     break;
    //     case'w': 
    //         box.vy -= 10;
    //     break;
    //     case's': 
    //         box.vy += 10;
    //     break;
    //     case'd': 
    //         box.vx += 10;
    //     break;
    // }
});

