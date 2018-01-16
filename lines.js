/*jshint esversion: 6 */


class Simbol{
    constructor(name) {
        this.name = name;

        this.cacheDom();
        this.setDefaultVariables();
        this.setBasicUnits();
        this.render();
    }

    cacheDom() {
        this.canvas = document.querySelector(".canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    setDefaultVariables() {
        this.amount = 55;
        this.area = 55;

        this.red = 150;
        this.green = 0;
        this.blue = 0;
        this.isColRandom = true;
    }

    setBasicUnits() {
        this.centerWidth = this.canvas.width/2; // center width
        this.centerHeight = this.canvas.height/2; // center height
        this.widthUnit = this.canvas.width/20; // width divided in 20 units
        this.heightUnit = this.canvas.height/10; // height divided in 10 units
    }

    setColor(r, g, b) {
        this.red = r;
        this.green = g;
        this.blue = b;
        this.render();
    }

    setIsColRandom(bool) {
        this.isColRandom = bool;
        this.renderColor();
        this.render();
    }

    renderColor() {
        let r = this.red;
        let g = this.green;
        let b = this.blue;
        if(this.isColRandom) {
            r = Math.floor(Math.random() * this.red);
            g = Math.floor(Math.random() * this.green);
            b = Math.floor(Math.random() * this.blue);
        }
        return `rgb(${r}, ${g}, ${b}`;
    }

    randomizeArea() {
        return (Math.random() * this.area) - (Math.random() * this.area); 
    }


    renderLines(x1, y1, x2, y2) {
        x1 = this.centerWidth + (this.widthUnit*x1);
        y1 = this.centerHeight + (this.heightUnit*y1);
        x2 = this.centerWidth + (this.widthUnit*x2);
        y2 = this.centerHeight + (this.heightUnit*y2);
        for(let i = 0; i<this.amount; i++){
            const xx1 = x1 + this.randomizeArea();
            const yy1 = y1 + this.randomizeArea();
            const xx2 = x2 + this.randomizeArea();
            const yy2 = y2 + this.randomizeArea();
            this.ctx.beginPath();
            this.ctx.moveTo(xx1, yy1);
            this.ctx.lineTo(xx2,yy2);
            this.ctx.strokeStyle = this.renderColor();
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }

    // dictionary (object) of all the simbols
    chooseSimbol(name) {
        const dictionary = {
            dievs1: () => {
                this.renderLines(0, -3, -5, 2);
                this.renderLines(0, -3, 5, 2);
            },
            dievs2: () => {
                this.renderLines(0, -3, -5, 2);
                this.renderLines(0, -3, 5, 2);
                this.renderLines(-5, 2, 5, 2);
            },
            marasL: () => {
                this.renderLines(-6, 3, -4, -3);
                this.renderLines(-4, -3, -2, 3);
                this.renderLines(-2, 3, 0, -3);
                this.renderLines(0, -3, 2, 3);
                this.renderLines(2, 3, 4, -3);
                this.renderLines(4, -3, 6, 3);
            },
            zalktis1: () => {
                this.renderLines(-4, -3, -4, 3);
                this.renderLines(-4, 3, 0, 3);
                this.renderLines(0, 3, 0, -3);
                this.renderLines(0, -3, 4, -3);
                this.renderLines(4, -3, 4, 3);
            },
            zalktis2: () => {
                this.renderLines(-3, -3, -6, 0);
                this.renderLines(-6, 0, -3, 3);
                this.renderLines(-3, 3, 3, -3);
                this.renderLines(3, -3, 6, 0);
                this.renderLines(6, 0, 3, 3);
            },
            jumis: () => {
                this.renderLines(-4, 0, -2, -3);
                this.renderLines(-2, -3, 3, 3);
                this.renderLines(-3, 3, 2, -3);
                this.renderLines(2, -3, 4, 0);
            },
            zvaigzne1: () => {
                this.renderLines(-4, 0, 4, 0);
                this.renderLines(-3, -3, 3, 3);
                this.renderLines(0, -4, 0, 4);
                this.renderLines(-3, 3, 3, -3);
            },
            zvaigzne2: () => {
                this.renderLines(-3, -1, -1, -1);
                this.renderLines(-1, -1, -1, -3);
                this.renderLines(-1, -3, 0, -2);
                this.renderLines(0, -2, 1, -3);
                this.renderLines(1, -3, 1, -1);
                this.renderLines(1, -1, 3, -1);
                this.renderLines(3, -1, 2, 0);
                this.renderLines(2, 0, 3, 1);
                this.renderLines(3, 1, 1, 1);
                this.renderLines(1, 1, 1, 3);
                this.renderLines(1, 3, 0, 2);
                this.renderLines(0, 2, -1, 3);
                this.renderLines(-1, 3, -1, 1);
                this.renderLines(-1, 1, -3, 1);
                this.renderLines(-3, 1, -2, 0);
                this.renderLines(-2, 0, -3, -1);
            },
            marasK: () => {
                this.renderLines(-3, -3, 3, 3);
                this.renderLines(-3, 3, 3, -3);
                this.renderLines(-3, -1, -1, -3);
                this.renderLines(1, -3, 3, -1);
                this.renderLines(3, 1, 1, 3);
                this.renderLines(-1, 3, -3, 1);
            },
            laimasS: () => {
                this.renderLines(-1, -2, -1, 2);
                this.renderLines(0, -2, 0, 2);
                this.renderLines(1, -2, 1, 2);
                this.renderLines(-5, -2, -4, 0);
                this.renderLines(-4, 0, -5, 2);
                this.renderLines(-4, -2, -3, 0);
                this.renderLines(-3, 0, -4, 2);
                this.renderLines(-3, -2, -2, 0);
                this.renderLines(-2, 0, -3, 2);
                this.renderLines(5, -2, 4, 0);
                this.renderLines(4, 0, 5, 2);
                this.renderLines(4, -2, 3, 0);
                this.renderLines(3, 0, 4, 2);
                this.renderLines(3, -2, 2, 0);
                this.renderLines(2, 0, 3, 2);
            },
            metenis: () => {
                this.renderLines(-1, -1, 1, 1);
                this.renderLines(-1, 1, 1, -1);
                this.renderLines(-3, -1, 0, 2);
                this.renderLines(0, 2, 3, -1);
                this.renderLines(-3, 1, 0, -2);
                this.renderLines(0, -2, 3, 1);
            },
            usins: () => {
                this.renderLines(0, -3, 0, -3);
                this.renderLines(0, 0, 0, 0);
                this.renderLines(0, 3, 0, 3);
                this.renderLines(-5, -3, -1, -3);
                this.renderLines(-1, -3, -1, 3);
                this.renderLines(-1, 3, -5, 3);
                this.renderLines(-5, 0, -1, 0);
                this.renderLines(5, -3, 1, -3);
                this.renderLines(1, -3, 1, 3);
                this.renderLines(1, 3, 5, 3);
                this.renderLines(1, 0, 5, 0);
            },
            austra: () => {
                this.renderLines(-2, -1, 0, 1);
                this.renderLines(0, 1, 2, -1);
                this.renderLines(-3, 0, -2, 1);
                this.renderLines(-2, 1, 1, -2);
                this.renderLines(-1, -2, 2, 1);
                this.renderLines(2, 1, 3, 0);
            },
            martins: () => {
                this.renderLines(-3, -2, -2, -3);
                this.renderLines(-2, -3, 2, 1);
                this.renderLines(2, 1, 4, -1);
                this.renderLines(4, -1, 6, 1);
                this.renderLines(6, 1, 4, 3);
                this.renderLines(-4, 3, -6, 1);
                this.renderLines(-6, 1, -4, -1);
                this.renderLines(-4, -1, -2, 1);
                this.renderLines(-2, 1, 2, -3);
                this.renderLines(2, -3, 3, -2);
            },
            aka: () => {
                this.renderLines(-1, -3, 3, 1);
                this.renderLines(-3, 1, 1, -3);
                this.renderLines(-1, 3, 3, -1);
                this.renderLines(-3, -1, 1, 3);
            },
            janis: () => {
                this.renderLines(-1, 2, 0, 1);
                this.renderLines(1, 2, 0, 1);
                this.renderLines(0, 1, 0, -1);
                this.renderLines(0, -1, -1, -2);
                this.renderLines(-1, -2, 0, -3);
                this.renderLines(0, -3, 1, -2);
                this.renderLines(1, -2, 0, -1);
            },
            austrasK: () => {
                this.renderLines(0, -3, 0, 3);
                this.renderLines(-1, -2, 0, -1);
                this.renderLines(1, -2, 0, -1);
                this.renderLines(-3, -2, 0, 1);
                this.renderLines(3, -2, 0, 1);
                this.renderLines(-3, -1, -2, -1);
                this.renderLines(-2, -2, -2, -1);
                this.renderLines(-2, 0, -1, 0);
                this.renderLines(-1, -1, -1, 0);
                this.renderLines(3, -1, 2, -1);
                this.renderLines(2, -2, 2, -1);
                this.renderLines(2, 0, 1, 0);
                this.renderLines(1, -1, 1, 0);
            },
            krupitis: () => {
                this.renderLines(-3, -1, -1, -3);
                this.renderLines(-1, -3, 2, 0);
                this.renderLines(3, -1, 1, -3);
                this.renderLines(1, -3, -2, 0);
                this.renderLines(-2, 0, 1, 3);
                this.renderLines(1, 3, 3, 1);
                this.renderLines(2, 0, -1, 3);
                this.renderLines(-1, 3, -3, 1);
            },
            meness: () => {
                this.renderLines(-2, -1, -1, 0);
                this.renderLines(-1, 0, -2, 1);
                this.renderLines(0, -1, 1, -2);
                this.renderLines(1, -2, 2, -1);
                this.renderLines(2, -1, 2, 1);
                this.renderLines(2, 1, 1, 2);
                this.renderLines(1, 2, 0, 1);
            },
            saule: () => {
                this.renderLines(-1, 0, 0, -1);
                this.renderLines(0, -1, 1, 0);
                this.renderLines(1, 0, 0, 1);
                this.renderLines(0, 1, -1, 0);
                this.renderLines(0, 1, 0, 3);
                this.renderLines(0, 3, -1, 4);
                this.renderLines(-1, 4, -2, 3);
                this.renderLines(-2, 3, -2, 2);
                this.renderLines(-2, 2, -0.5, 0.5);
                this.renderLines(-2, 2, -3, 2);
                this.renderLines(-3, 2, -4, 1);
                this.renderLines(-4, 1, -3, 0);
                this.renderLines(-3, 0, -1, 0);
                this.renderLines(0, -1, 0, -3);
                this.renderLines(0, -3, -1, -4);
                this.renderLines(-1, -4, -2, -3);
                this.renderLines(-2, -3, -2, -2);
                this.renderLines(-2, -2, -0.5, -0.5);
                this.renderLines(-2, -2, -3, -2);
                this.renderLines(-3, -2, -4, -1);
                this.renderLines(-4, -1, -3, 0);
                this.renderLines(0, 3, 1, 4);
                this.renderLines(1, 4, 2, 3);
                this.renderLines(2, 3, 2, 2);
                this.renderLines(2, 2, 0.5, 0.5);
                this.renderLines(2, 2, 3, 2);
                this.renderLines(3, 2, 4, 1);
                this.renderLines(4, 1, 3, 0);
                this.renderLines(3, 0, 1, 0);
                this.renderLines(1, -4, 2, -3);
                this.renderLines(2, -3, 2, -2);
                this.renderLines(2, -2, 0.5, -0.5);
                this.renderLines(2, -2, 3, -2);
                this.renderLines(3, -2, 4, -1);
                this.renderLines(4, -1, 3, -0);
                this.renderLines(0, -3, 1, -4);
            },
            perkons: () => {
                this.renderLines(-2, 2, 2, -2);
                this.renderLines(-2, -2, 2, 2);
                this.renderLines(-1, 1, -3, -1);
                this.renderLines(-3, -1, -4, 0);
                this.renderLines(-2, 0, -3, 1);
                this.renderLines(1, -1, 3, 1);
                this.renderLines(3, 1, 4, 0);
                this.renderLines(2, 0, 3, -1);
                this.renderLines(1, 1, -1, 3);
                this.renderLines(-1, 3, 0, 4);
                this.renderLines(0, 2, 1, 3);
                this.renderLines(-1, -1, 1, -3);
                this.renderLines(1, -3, 0, -4);
                this.renderLines(0, -2, -1, -3);
            },
            karogs: () => {
                this.renderLines(-4, -1, 4, -1);
                this.renderLines(-4, 1, 4, 1);
            }
        };

        dictionary[name](); // it turns out you can call object functions this way, just adding the "()" at the end
    }

    // for animations
    rerender() {
        this.render();
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //clear canvas
        this.chooseSimbol(this.name);
    }
} // class Simbol end

//************************************************************************

const s1 = new Simbol("zalktis2");
// const s2 = new Simbol("marasL", 10, 10);

// setInterval(() => {
//     s1.rerender();
// }, 200);



