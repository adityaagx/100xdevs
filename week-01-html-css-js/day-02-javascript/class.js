/* Create a JavaScript `Car` class whose `constructor` accepts a `brand` string
and initializes `speed` to `0`, then implement an `accelerate(amount)` method 
that increases `speed` by `amount` and logs `"<brand> accelerated. 
Current speed: <speed> mph"`, alongside a `brake(amount)` method that decreases `speed` 
by `amount` without letting it fall below `0` and logs `"<brand> slowed down. 
Current speed: <speed> mph"`. */


class Car {
    constructor(brand){
        this.brand = brand;
        this.speed = 0;
    }

    accelerate(amount){
        this.speed += amount;
        console.log(`${this.brand} accelerated. Current speed: ${this.speed} mph`)
    };

    brake(amount){
        this.speed = Math.max(0, this.speed - amount);
        console.log(`${this.brand} slowed down. Current speed: ${this.speed} mph`)
    };
}

const car1 = new Car("Tesla");
car1.accelerate(89);
car1.brake(34);
car1.brake(102);