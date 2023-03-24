class Block{
    constructor(x,y,w,h){
        var options = {
            isStatic: false,
            restitution: 0.4,
            friction: 0
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);

        this.w = w;
        this.h = h;
        this.visibility = 255;

        this.image = loadImage("block.png");

    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        if(pos.y<350){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            stroke(255, 170, 165);
            strokeWeight(2);
            rectMode(CENTER);
            rect(0,0,this.w, this.h);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility -= 5;
            tint(255,this.visibility);
            noStroke();
            image(this.image,pos.x,pos.y,this.w,this.h);
            pop();
        }
    }

    display2(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        stroke(255, 170, 165);
        strokeWeight(2);
        rectMode(CENTER);
        rect(0,0,this.w, this.h);
        pop();
    }


      
}
