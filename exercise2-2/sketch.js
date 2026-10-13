let fillColour;
let x;
let y;

function setup(){
    createCanvas(600,600)
    fillColour = color(random(255), random(255), random(255));
    x = 300;
    y = 300;
}

function draw() {
    background(255)
    rectMode(CENTER)
    fill(fillColour);
    square(x,y,550)
    if (keyIsDown(UP_ARROW)) {
        y = y - 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        y = y + 5;
    }
    if (keyIsDown(LEFT_ARROW)) {
        x = x - 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        x = x + 5;
    }

}

function mouseReleased(){
    fillColour = color(random(255), random(255), random(255));
}