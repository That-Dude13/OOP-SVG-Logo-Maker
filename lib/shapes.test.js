const shape = new circle();
shape.setColor("green");
expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20"/> fill="green" />');

shape = new triangle();
shape.setColor. 