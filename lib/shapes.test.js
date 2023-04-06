const shapes = require = ('./lib/shapes.js')


const shape = new circle();
shape.fillColor("green");
expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20"/> fill="green" />');

shape = new square();
shape.fillColor("blue");
expect(shape.render()).toEqual('<rect x="50" y="20" width="150" height="150""/> fill="blue" />');

shape = new triangle();
shape.fillColor("red");
expect(shape.render()).toEqual('</> fill="red" />');