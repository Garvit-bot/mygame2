var bg;
var hero;
var aliens;






function preload() {
    laserSound = loadSound('laser.ogg');
    deathSound = loadSound('death.ogg');
    bg=loadImage("4-space.jpg");
    hero=loadImage("1-18614_spaceship-clipart-space-ship-cartoon-png-transparent-png");
    aliens=loadImage("1873.png");
}



function setup() {
    createCanvas(800, 800);
    p = createVector(width / 2, height / 2)
    pVel = createVector(0, 0);
    force = createVector(0, 0);
    size = 10;
    heading = 0;
    boostColor = color("red");
    playerColor = color(255);
    Score = 0;
    Health = 200;
    bb = [];
    bbVel = [];
    bbSize = 25;

    for (var i = 0; i < 5; i++) {
        bb.push(createVector(random(0, width), random(0, height)));
        bbVel.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
    }
}

function draw() {
    background("bg");

    updatePlayer();
    updateBubbles();
    updateLasers();

}