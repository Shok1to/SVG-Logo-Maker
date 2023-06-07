const SVG = require('./svg');
const{ Circle } = require('./shapes');

test("should render a 300 x 200 svg element", () => {
    const expectedSvg = 
      '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="200"></svg>';
    const svg = new SVG();
    expect(svg.render()).toEqual(expectedSvg);
});

    test("should append text element", () => {});
    test("should set text message and color", () => {});
