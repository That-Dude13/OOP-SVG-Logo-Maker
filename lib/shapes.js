class Shape {
    constructor(color, text, render) {
      this.color = color;
      this.text = text;
      this.render = render;
    }
}
class Circle extends Shape {
    constructor(color, text, render)
    {
        Circle =  Circle();
        Circle = this.color ('blue');
        render();{ 
          return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
        }
        }
    
    }


console.log(Circle)

class Rectangle extends Shape {
    constructor(color, text, render)
    {
        Rectangle =  Rectangle();
        Rectangle = this.color ('green');
        render();{
          return `<rect x="50" y="20" width="150" height="150" fill="${this.color}" />`;
        }
        }
    
    }

console.log(Rectangle)

class Triangle extends Shape {
    constructor(color, text, render)
    {
        Triangle =  Triangle();
        Triangle = this.color ('Yellow');
        render();{ 
          return `<polygon points="200,90 250,250 160,210 height="210" width="500" fill="${this.color}" />`;
        }
        }
    
    }

console.log(Triangle)



module.exports = {Shape}








