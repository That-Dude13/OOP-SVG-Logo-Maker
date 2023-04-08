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


console.log(new Circle('green', 'test').render());


class Square extends Shape {
  constructor(color)
  {
     super(color, text)
      
      }
    render(){
      return `<rect x="50" y="20" width="150" height="150" fill="${this.color}" />`
    }
  }


  console.log(new Square ('yellow', 'test').render());


  class Triangle extends Shape {
    constructor(color)
    {
       super(color)
        
        }
      render(){
        return `<polygon points="200,90 250,250 160,210 height="210" width="500" fill="${this.color}" />`
      }
    }

    console.log(new Triangle('blue', 'test').render());





module.exports = {Shape, Circle}
module.exports = {Shape, Square}
module.exports = {Shape, Triangle}









