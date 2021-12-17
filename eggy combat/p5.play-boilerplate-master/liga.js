class liga{
    constructor (bodyA, bodyB ){
        var options = {bodyA: bodyA, bodyB: bodyB, stiffness: 0.05, lengh: 5}
        this.bodyB = bodyB;
        this.bodyA = bodyA;
        this.sling = Constraint.create(options);
        
        World.add(world, this.sling);
    }
    display(){
    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.bodyB.position;
    strokeWeight(3);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    //image(this.sling3, bodyA.x , bodyA.y , 10, 40);
    }
}