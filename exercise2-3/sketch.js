let x;
let y;
let fillColour;
function setup(){
    createCanvas(600,600)
    x = 300
    y = 300
    fillColour = color(255)

}

function draw(){
    background(0)
    rectMode(CENTER)
    fill(fillColour)
    square(x,y,100)
}

function mouseDragged(){
    if (mouseX<=x+50 && mouseX>=x-50){
        x = mouseX
        y = mouseY
    }
}

function mousePressed(){
    if (mouseX<=x+50 && mouseX>=x-50){
    fillColour = color(random(255), random(255), random(255)); 
    }

}

function mouseReleased(){
    if (mouseX<=x+50 && mouseX>=x-50){
    fillColour = color(255)
    }
}