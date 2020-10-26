const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine, world;
var bag1;

//var gameState = "onSling";

var score = 0;

var backgroundImg;

function preload() {
    backgroundImg = loadImage("images/background.jpg");
}

function setup(){
    canvas = createCanvas(1500,750);

    engine = Engine.create();
    world = engine.world;

    //Round 1
    bag1 = new Bag(500, 150, 150, 150);
    bag2 = new Bag(710, 150, 150, 150);
    bag3 = new Bag(920, 150, 150, 150);

    //Round 2
    bag4 = new Bag(500, 350, 150, 150);
    bag5 = new Bag(710, 350, 150, 150);
    bag6 = new Bag(920, 350, 150, 150);

    //Round 3
    bag7 = new Bag(500, 550, 150, 150);
    bag8 = new Bag(710, 550, 150, 150);
    bag9 = new Bag(920, 550, 150, 150);

}

function draw(){
        background(backgroundImg);
    
        noStroke();
        textSize(55)
        fill("white")
        text("Score : " + score, width-300, 50)

        textSize(70)
        text("Race to", width-1450, 290)
        textSize(60)
        text("200", width-1400, 360)

        textSize(55)
        fill("white")
        text("Round 1", width-480, 190)
        text("Round 2", width-480, 390)
        text("Round 3", width-480, 590)
    
    Engine.update(engine);
    //strokeWeight(4);
    bag1.display();
    bag2.display();
    bag3.display();
    bag4.display();
    bag5.display();
    bag6.display();
    bag7.display();
    bag8.display();
    bag9.display();

}

/*function keyPressed(){
    if(keyCode === 32){
       
    }
}*/