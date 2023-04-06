class shape {
    constructor(color, text, fillColor) {
       this.color = color
       this.text = text
       this.fillColor = fillColor

   };

printMetaData() {
    console.log(`Created by ${this.shape} with ${this.fillColor} and ${this.text}`);
  }


  }
