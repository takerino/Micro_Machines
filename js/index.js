
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.height = 570;
canvas.width = 930;

//
// Model =>ovládanie pohybu
//

let bg = ctx.background;
bg = "url(../plan/Low.svg)";

var image = new Image();
image.src = "../alias/auticko.svg";

image.onloaod = function(){
    ctx.drawImage(image, 15, 15, this.width, this.height);
}


//
// Controller => spracovávanie a aktualizácia stavu
//





//
// View => Zobrazenie scény
//