
class SVG {
    constructor() {
     this.textElement = '';
     this.shapesElement = '';
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${this.shapesElement}${this.textElement}</svg>`;
    }

    setTextElement(logoText, logoColor){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoColor}">${logoText}</text>`;
    }
    setShapesElement(logoShape){
        this.shapesElement = logoShape.render();
      
    }

    

}

module.exports = SVG;