const {Circle, Triangle, Square} = require('./shapes')

describe('Circle', () => {
    test('Compare rendered html vs expected', () => {
        const expected = '<circle cx="150" cy="100" r="80" fill="blue"/>';
        const circle = new Circle();
        circle.setColor('blue');
        const result = circle.render();
        expect(result).toEqual(expected);
    })
})

describe('Square', () => {
    test('Compare rendered html vs expected', () => {
        const expected = '<rect x="50" y="20" width="150" height="150" fill="blue"/>';
        const square = new Square();
        square.setColor('blue');
        const result = square.render();
        expect(result).toEqual(expected);
    })
})

describe('Triangle', () => {
    test('Compare rendered html vs expected', () => {
        const expected = '<polygon points="250,60 100,400 400,400" fill="blue"/>';
        const triangle = new Triangle();
        triangle.setColor('blue');
        const result = triangle.render();
        expect(result).toEqual(expected);
    })
})