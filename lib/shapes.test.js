const shapes = require ('./lib/shapes.js')


const shapes = new circle();
shapes.fillColor("green");
expect(shapes.render()).toEqual('<circle cx="25" cy="75" r="20"/> fill="green" />');

shapes= new square();
shapes.fillColor("blue");
expect(shapes.render()).toEqual('<rect x="50" y="20" width="150" height="150""/> fill="blue" />');

shapes = new triangle();
shapes.fillColor("red");
expect(shapes.render()).toEqual('</> fill="red" />');