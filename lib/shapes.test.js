const {Circle, Triangle, Square} = require('./shapes.js');

describe('Circle', () => {
    test('Compare rendered html vs expected', () => {
        const expected = '<circle cx="230" cy="100" r="90" fill="blue"/>';
        const circle = new Circle();
        circle.setlogoColor('blue');
        const result = circle.render();
        expect(result).toEqual(expected);
    })
})

describe('Square', () => {
    test('Compare rendered html vs expected', () => {
        const expected = '<rect x="150" y="30" width="170" height="170" fill="blue"/>';
        const square = new Square();
        square.setlogoColor('blue');
        const result = square.render();
        expect(result).toEqual(expected);
    })
})

describe('Triangle', () => {
    test('Compare rendered html vs expected', () => {
        const expected = '<polygon points="225,10 100,210 350,210" fill="blue"/>';
        const triangle = new Triangle();
        triangle.setlogoColor('blue');
        const result = triangle.render();
        expect(result).toEqual(expected);
    })
})