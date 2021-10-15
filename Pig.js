class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,60,60);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity = 255;
  }
display() {

  if (this.body.speed < 4) {
super.display() 

}
else {
World.remove(world,this.body);
push();
this.visiblity = this.visiblity-5;
tint(255,this.visiblity)
image(this.image,this.body.position.x,this.body.position.y,60,60);
pop();
}
  }
  }
