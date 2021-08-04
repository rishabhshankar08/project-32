class Blower {

    constructor(x, y) {

        var options = {
            isStatic: true
        }

        this.body = Matter.Bodies.rectangle(x, y, 200, 100, options);
        World.add(world, this.body);

    }

    display() {

        rect(this.body.position.x, 
            this.body.position.y, 
            200, 100);

    }

    blow() {

        Matter.Body.applyForce(ball.body, {x: 0, y: 0}, {x: 0, y: 0.0005});

    }

}