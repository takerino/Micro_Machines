class Player{
     constructor(x, y, dx, dy, speed, image){
        this.x = canvas.width/3;
        this.y = canvas.height/2;
        this.dx = dx;
        this.dy = dy;
        this.speed = 0;
        this.rotation = 0;
        this.image = image;
     }

     move(){
         console.log("Moving");
     };

     turn(side){
         console.log("Turning" + this.side);
     }
}

let mainPlayer = new Player(x, y, dx, dy, speed, "player.svg");