class Shape {
    constructor(){
        this.color ='';
    }

    setColor(color) {
        this.color = color;
    }

}

class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
    
}

class Triangle extends Shape {
    render () {
        return `<polygon points="250,60 100,400 400,400" fill="${this.color}"/>`
    }
    
}

class Square extends Shape {
    render () {
        return `<rect x="50" y="20" width="150" height="150" fill="${this.color}"/>`
    }
    
}


module.exports = {Circle, Triangle, Square}

