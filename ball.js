class Ball{
    constructor(x,y){
        var options={
            density:1,
            friction:0.05,
        }
        this.body=Bodies.circle(x,y,50,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        fill(0);
        ellipse(0,0,100,100);
        pop();
    }
}