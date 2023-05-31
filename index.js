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
        type:'list',
        message:'Please choose a shape of your logo from: circle, triangle, and square',
        name:'logoShape',
        choices: ['circle','triangle','square'],
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
        //use this for the final render
        var svg = new SVG();
        var shape; //we are going to change this shape variable based on user response
        if(answers.logoShape = "circle"){
            shape = new Circle()
            shape.setColor(answers.logoColor)
        }
        if(answers.logoShape = "triangle"){
            shape = new Triangle()
            shape.setColor(answers.logoColor)
        }
        if(answers.logoShape = "square"){
            shape = new Square()
            shape.setColor(answers.logoColor)
        }
        svg.setTextElement(logoText);
        shape.setShapesElement(logoShape);

        //set the values of our svg variable to use setTextElement and setShapesElement
        
        console.log(answers)

        fs.writeFileSync('logo.svg',svg.render())
    })
}

// Function call to initialize app
init();