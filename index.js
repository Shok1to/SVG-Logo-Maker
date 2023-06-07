//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js');
const SVG = require('./lib/svg.js');

// Create an array of questions for user input
const questions =[
    {
        type:'input',
        message:'Please enter text for your logo, it is up to three characters',
        name:'text',
    },
    {
        type:'input',
        message:'Please choose the text color, enter a color keyword or a hexadecimal number',
        name:'textColor',
    },
    {
        type: 'list',
        message: "Would you like your svg to be a circle, triangle or square?",
        name: 'logoShape',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type:'input',
        message:'Please choose the logo color, enter a color keyword or a hexadecimal number',
        name: 'logoColor',
    }
];

//Create a function to initialize app
function init(){
    inquirer.prompt(questions)
    .then(function(answers){
        console.log(answers)
        //use this for the final render
        var svg = new SVG();
        var shape; //we are going to change this shape variable based on user response
        if(answers.logoShape === "circle"){
            console.log(answers.logoShape)
            shape = new Circle()
            // shape.setColor(answers.logoColor)
        }
        if(answers.logoShape === "triangle"){
            console.log(answers.logoShape)
            shape = new Triangle()
            // shape.setColor(answers.logoColor)
        }
        if(answers.logoShape === "square"){
            console.log(answers.logoShape)
            shape = new Square()
            // shape.setColor(answers.logoColor)
        }
        shape.setlogoColor(answers.logoColor);
        svg.setTextElement(answers.text, answers.textColor);
        svg.setShapesElement(shape);

        //set the values of our svg variable to use setTextElement and setShapesElement
        
        

        fs.writeFileSync('logo.svg',svg.render())
    })
}

// Function call to initialize app
init();