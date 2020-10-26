class Bag {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image = loadImage("images/potli.jpg"); 
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display(){

    var bagPos = this.body.position;

    push();

    translate(bagPos.x, bagPos.y);
    imageMode(CENTER);
    fill("black");
    image(this.image, 0, 0, this.width, this.height);

    pop();

  }
  
};