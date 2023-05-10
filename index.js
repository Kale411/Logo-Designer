const inquirer = require("inquirer");
const fs = require("fs");
const {triangle, circle, square} = require("./lib/shapes");

function generateFile(name, info){
    let logoString = "";
    logoString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    logoString += "<g>";
    logoString += `${info.shape}`;

    let shapeType = "";
    if (info.shape === "triangle"){
        shapeType = new triangle();
        logoString += `<polygon points ="150, 20 240, 180 60, 180" fill= "${info.shapeColour}"/>`;
    } else if (info.shape === "circle"){
        shapeType = new circle();
        logoString += `<circle cx="150" cy="115" r="80" fill="${info.shapeColour}"/>`;
    } else if (info.shape === "square") {
        shapeType = new square();
        logoString += `<rect x="70" y="40" width="160" height="160" fill="${info.shapeColour}"/>`;
    } else {

    }

    logoString += `<text x="150" y="150" text-anchor="middle" font-size="40" fill="${info.textColour}">${info.text}</text>`;
    logoString += "</g>";
    logoString += "</svg>";

    fs.writeFile(name,logoString, (err) =>{
        err ? console.log(err)  :   console.log("Success");
    });
}

function promptUser(){
    inquirer
        .prompt([
            {
                type:"input",
                message: "Logo text?(3 characters max)",
                name: "text",
            },
            {
                type: "input",
                message: "Text colour?(Hexadecimal or Colour)",
                name: "textColour",
            },
            {
                type: "list",
                message: "Shape?",
                choices: ["triangle","circle","square"],
                name: "shape",
            },
            {
                type: "input",
                message: "Shape colour?(Hexadecimal or Colour)",
                name: "shapeColour",
            },
        ])
        .then((answers) => {
            generateFile("logo.svg", answers);
        });
}

promptUser();