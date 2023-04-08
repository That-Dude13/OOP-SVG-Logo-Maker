class Shape {
    constructor(color, text) {
      this.color = color;
      this.text = text;
    }
}
class Circle extends Shape {
    constructor(color, text,)
    {
       super(color, text)
        
        }
      render(){
        return `<circle cx="25" cy="75" r="20"/> fill="${this.color}" />`
      }
    }


console.log(new Circle('green', 'test').render());


class Rectangle extends Shape {
  constructor(color, text,)
  {
     super(color, text)
      
      }
    render(){
      return `<rect x="50" y="20" width="150" height="150" fill="${this.color}" />`
    }
  }


  console.log(new Rectangle('yellow', 'test').render());


  class Triangle extends Shape {
    constructor(color, text,)
    {
       super(color, text)
        
        }
      render(){
        return `<polygon points="200,90 250,250 160,210 height="210" width="500" fill="${this.color}" />`
      }
    }

    console.log(new Triangle('blue', 'test').render());





module.exports = {Shape}








