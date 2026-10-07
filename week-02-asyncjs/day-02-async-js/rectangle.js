// make a class rectangle
// give it properties, height, width, colour
// give it area and paint methods

class Rectangle{
    constructor(height, width, colour){
        this.height = height
        this.width = width
        this.colour = colour
    }

    area(){
        const area = this.height*this.width
        return area;
    }

    paint(){
        const paint = `This rectangle colour is ${this.colour}`
        return paint;
    }
};

const rect1 = new Rectangle(2, 5, "blue");
console.log(rect1.area());
console.log(rect1.paint());