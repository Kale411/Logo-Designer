const {triangle,circle,square} = require("./shapes.js");

describe("triangle test", ()=> {
    test("testing triangle", () =>{
        const shape = new triangle();
        shape.setColour("green");
        expect(shape.render()).toEqual(
            `<polygon points ="150, 20 240, 180 60, 180" fill="green"/>`
        );
    });
});

describe("circle test", ()=> {
    test("testing cricle", ()=>{
        const shape = new circle();
        shape.setColour("white");
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="115" r="80" fill="white"/>`
        );
    });
});

describe("square test", ()=> {
    test("testing square",()=>{
        const shape = new square();
        shape.setColour("orange");
        expect(shape.render()).toEqual(
            `<rect x="70" y="40" width="160" height="160" fill="orange"/>`
        );
    });
});