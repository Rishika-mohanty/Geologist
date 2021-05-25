class Iron {
    constructor(x, y) {
      var i_options = {
        'density':30,
        'friction': 3,
        'restitution':0.3
      };
      this.body = Bodies.rectangle(x, y, 40, 40, i_options);
      this.width = 40;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('black')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  