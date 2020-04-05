import hrac from main.js

class Player{
     constructor(x, y, width, height, rotation, gravity, forward, backward, left, right, speed, image){
        this.x = canvas.width/3;
        this.y = canvas.height/2;
        this.width = 80,
        this.height = 142,
        this.image = hrac,
        this.rotation = 0,
        this.gravity = 0,
        this.forward = -4,
        this.backward = 3,
        this.left = -3,
        this.right = 3
     }

     move(){
         console.log("Moving");
     };

     turn(side){
         console.log("Turning" + this.side);
     }
}

class mainPlayer extends Player{
    constructor();
    super();
}

let mainPlayer = new Player(x, y, dx, dy, speed, "player.svg");