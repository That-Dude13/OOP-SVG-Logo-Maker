class Shape {
    constructor(color) {
      this.color = color;
      
    }
}
class Circle extends Shape {
    constructor(color)
    {
       super(color)
        
        }
      render(){
        return `<circle cx="25" cy="75" r="20"/> fill="${this.color}" />`
      }
    }


console.log(new Circle('green').render());


class Square extends Shape {
  constructor(color)
  {
     super(color)
      
      }
    render(){
      return `<rect x="50" y="20" width="150" height="150" fill="${this.color}" />`
    }
  }


  console.log(new Square ('yellow').render());


  class Triangle extends Shape {
    constructor(color)
    {
       super(color)
        
        }
      render(){
        return `<polygon points="200,90 250,250 160,210 height="210" width="500" fill="${this.color}" />`
      }
    }

    console.log(new Triangle('blue').render());





module.exports = {Shape = Circle.color}
module.exports = {Shape = Square.color}
module.exports = {Shape =Triangle.color}









