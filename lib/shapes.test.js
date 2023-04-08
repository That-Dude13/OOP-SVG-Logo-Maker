const {Shape} = require ('./shapes')
var shape = new Circle('green')
var shape = new Square()
var shape = new Triangle()

Shape = new Circle();
Shape.color("green");
expect(Shape.render()).toEqual('<circle cx="25" cy="75" r="20"/> fill="green" />');

= new square();
Shape.color("blue");
expect(Shape.render()).toEqual('<rect x="50" y="20" width="150" height="150""/> fill="blue" />');

Shape = new triangle();
Shape.color("blue");
expect(Shape.render()).toEqual('<polygon points="200,90 250,250 160,210 height="210" width="500" fill="blue" />');

