class Shape {
    constructor(fillColor, text, shape) {
       this.text = text
       this.fillColor = fillColor
       this.shape = shape

   };
}
   class Circle extends Shape {
    constructor(fillColor){
        super(fillColor)
        

    }
    render(){
        ('<circle cx="25" cy="75" r="20"/> fill="green" />')
        
    }
    }
    
const newCircle = new Circle('fillColor')
console.log(newCircle.fillColor)
  
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
//   mycar = new Model("Ford", "Mustang");
//   document.getElementById("demo").innerHTML = mycar.show();
//    new Circle {
//     constructor (color, text, fillColor, shape) {
//        this.color = color
//        this.text = text
//        this.fillColor = fillColor
//        this.shape = shape
//     }
// printMetaData() {
//     console.log(`Created by ${this.color} with ${this.fillColor} and ${this.text}`);
//   }

  
// }
//   module.exports = { Shape }

//   class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
//   mycar = new Model("Ford", "Mustang");
//   document.getElementById("demo").innerHTML = mycar.show();