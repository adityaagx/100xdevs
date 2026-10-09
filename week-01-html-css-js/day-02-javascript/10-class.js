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



/* Create a base shape class and two child classes of square and rectangle
and two methods area and paint, and then test it. */

class Shape{
    constructor(color){
        this.color = color;
    }

    area(){
        throw new Error("The area must be implemented in the subclass");
    }

    paint(){
        return `Painting with color ${this.color}`
    }

    description(){
       return `A shape with color ${this.color}`
    }
}

class Rectangle extends Shape{
    constructor(height, width, color){
        super(color);
        this.height = height;
        this.width = width;
    };

    area(){
        return this.height*this.width;
    }

    description(){
        return `A rectangle with color ${this.color}`;
    }
}

class Square extends Shape{
    constructor(side, color){
        super(color);
        this.side = side;
    };

    area(){
        return this.side*this.side;
    }

    description(){
        return `A square with color ${this.color}`;
    }
}

const square1 = new Square(57, "blue");
console.log(square1.area(), square1.description());

// Create a data and map class, and test it.

const now = new Date();
console.log(now);

const users = new Map();

users.set('name', 'Alice');
users.set('age', 34);

console.log(users.get('age'));
