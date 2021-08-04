class Ball {

    constructor(x, y) {

        var options = {
            restitution: 0.8
        }

        this.body = Matter.Bodies.rectangle(x, y, 30, 30, options);
        World.add(engine.world,this.body);

    }

    display() {

        rect(this.body.position.x, 
            this.body.position.y, 
            30, 30);

    }

}