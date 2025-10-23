
let bird;
let background, birdImg;

function preload(){
    birdImg=loadImage('assets/bird.png');
    background=loadImage('assets/background.png')
    // write code to preload bird.png and background.png
    // refer to assets folder
}

function setup(){
    new Canvas(400, 600);
    
    bird = new Sprite(birdImg,200,300,34,24)
    // write code to create sprite and load bird image on sprite
}

function draw(){
    image(background, 0, 0, width, height);

    



}

