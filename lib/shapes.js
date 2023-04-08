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
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
      }
    }

    console.log(new Triangle('blue').render());





module.exports = {Circle, Triangle, Square};










