class Slingshot{
    constructor(a,b){
        var options = {
            bodyA:a,
            pointB:b,
            stiffness:0.04,
            length:10
        }
        this.sling = Constraint.create(options);
        this.pointB = b;
        World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var a = this.sling.bodyA.position;
            var b = this.pointB;
            strokeWeight(4);
            stroke(130, 67, 40);
            line(a.x,a.y,b.x,b.y);
        }
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
}
