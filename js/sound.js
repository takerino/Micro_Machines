
var musicOn = 0;



function sound(){
    console.log("Zavolana funkcia")
    if(musicOn){
        music.pause();
        document.getElementById('isound').style.display = 'none';
        document.getElementById('isoundOff').style.display = 'block';

        musicOn = 0;
    }
    else{
        music.play();
        document.getElementById('isoundOff').style.display = 'none';
        document.getElementById('isound').style.display = 'block';
        musicOn = 1;
    }
}