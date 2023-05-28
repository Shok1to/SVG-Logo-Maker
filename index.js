//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./shapes.js')
const SVG =('./lib/svg.js')

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
        type:'input',
        message:'Please choose a shape of your logo from: circle, triangle, and square',
        name:'logoShape',
        choices: ['circle','triangle','square'],
    },
    {
        type:'input',
        message:'Please choose the logo color, enter a color keyword or a hexadecimal number',
        name: logoColor,
    }
];

//Create a function to initialize app
function init{
    inquirer.prompt(questions)
    .then(function(answers){
        console.log(answers)

        fs.writeFileSync('./logo.svg',shape({...answers}))
    })
}

// Function call to initialize app
init();