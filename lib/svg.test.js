const {SVG} = require('./svg')

describe('SVG', () => {
    test('Compare rendered html vs expected', () => {
        const expected = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${this.textElement}${this.shapesElement}</svg>';
        const svg = new Svg();
        circle.setColor();
        const result = svg.render();
        expect(result).toEqual(expected);
    })
})

