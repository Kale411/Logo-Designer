class shape {
    constructor(){
        this.colour = "";
    }
    setColour(colourVar){
        this.colour = colourVar;
    }
}

class triangle extends shape {
    render(){
        return `<polygon points ="150, 20 240, 180 60, 180" fill= "${this.colour}"/>`;
    }
}

class circle extends shape {
    render(){
        return `<circle cx="150" cy="115" r="80" fill="${this.colour}"/>`;
    }
}

class square extends shape {
    render() {
        return `<rect x="70" y="40" width="160" height="160" fill="${this.colour}"/>`;
    }
}

module.exports = {triangle, circle, square};