
class SVG {
    constructor() {
     this.textElement = '';
     this.shapesElement = '';
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="200">${this.shapesElement}${this.textElement}</svg>`;
    }

    setTextElement(logoText, textColor){
        this.textElement = `<text x="230" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text>`;
    }
    setShapesElement(logoShape){
        this.shapesElement = logoShape.render();
      
    }

    

}

module.exports = SVG;