class Shape {
    constructor(color, text, fillColor, shape) {
       this.color = color
       this.text = text
       this.fillColor = fillColor
       this.shape = shape

   };

printMetaData() {
    console.log(`Created by ${this.color} with ${this.fillColor} and ${this.text}`);
  }

  
  }
