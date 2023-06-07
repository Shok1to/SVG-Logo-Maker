class Shape {
    constructor(){
        this.logoColor ='';
    }

    setlogoColor(logoColor) {
        this.logoColor = logoColor;
    }

}

class Circle extends Shape {
    render () {
        return `<circle cx="230" cy="100" r="90" fill="${this.logoColor}"/>`
    }
    
}

class Triangle extends Shape {
    render () {
        return `<polygon points="225,10 100,210 350,210" fill="${this.logoColor}"/>`
    }
    
}

class Square extends Shape {
    render () {
        return `<rect x="150" y="30" width="170" height="170" fill="${this.logoColor}"/>`
    }
    
}


module.exports = {Circle, Triangle, Square}

