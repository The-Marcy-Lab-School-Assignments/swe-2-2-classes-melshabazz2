class Rectangle {
    constructor(length, width) {
        this.length = length
        this.width = width
    }
    getArea() {
        return this.length * this.width
    }
    getPerimeter() {
        this.length * 2 + this.width * 2
    }
    isSquare() {
        if (Rectangle === 'square') {
            return true
        } else {
            return false
        }
    }
}
const myShape = new Rectangle(10, 5); // length = 10, width = 5
console.log(myShape.getArea()); // 50
console.log(myShape.getPerimeter()); // 30 (10 * 2 + 5 * 2)
console.log(myShape.isSquare()); // false

// length and width are public properties so we can mutate them
myShape.width = 3;
myShape.length = 3;
console.log(myShape.getArea()); // 9
console.log(myShape.getPerimeter()); // 12
console.log(myShape.isSquare()); // true