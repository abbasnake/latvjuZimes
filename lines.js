/*jshint esversion: 6 */

class Lines {
    constructor(x1, y1, x2, y2, amount, area) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.amount = amount;
        this.area = area;

        this.cacheDom();
        this.render();
    }

    randomizeArea() {
        return (Math.random() * this.area) - (Math.random() * this.area); 
    }

    cacheDom() {
        const canvas = document.querySelector(".canvas");
        this.ctx = canvas.getContext("2d");
    }

    render() {
        for(let i = 0; i<this.amount; i++){
            let x1 = this.x1 + this.randomizeArea();
            let y1 = this.y1 + this.randomizeArea();
            let x2 = this.x2 + this.randomizeArea();
            let y2 = this.y2 + this.randomizeArea();
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2,y2);
            this.ctx.stroke();
        }
    }
} // class Lines end

//***********************************************************************

class Simbol {
    constructor(name, amount, area) {
        this.name = name;
        this.amount = amount;
        this.area = area;

        this.cacheDom();
        this.render();
    }

    cacheDom() {
        this.canvas = document.querySelector(".canvas");
    }

    // setting some basic units
    // he starting point is the center of canvas
    // the Lines class is called here
    inputCoordinates(x1, y1, x2, y2) {
        const cw = this.canvas.width/2; // center width
        const ch = this.canvas.height/2; // center height
        const wu = this.canvas.width/20; // width divided in 20 units
        const hu = this.canvas.height/10; // height divided in 10 units
        const line = new Lines(cw + (wu*x1), ch + (hu*y1), cw + (wu*x2), ch + (hu*y2), this.amount, this.area);
    }

    // dictionary (object) of all the simbols
    chooseSimbol(name) {
        const dictionary = {
            dievs1: () => {
                this.inputCoordinates(0, -3, -5, 2);
                this.inputCoordinates(0, -3, 5, 2);
            },
            dievs2: () => {
                this.inputCoordinates(0, -3, -5, 2);
                this.inputCoordinates(0, -3, 5, 2);
                this.inputCoordinates(-5, 2, 5, 2);
            },
            marasL: () => {
                this.inputCoordinates(-6, 3, -4, -3);
                this.inputCoordinates(-4, -3, -2, 3);
                this.inputCoordinates(-2, 3, 0, -3);
                this.inputCoordinates(0, -3, 2, 3);
                this.inputCoordinates(2, 3, 4, -3);
                this.inputCoordinates(4, -3, 6, 3);
            },
            zalktis1: () => {
                this.inputCoordinates(-4, -3, -4, 3);
                this.inputCoordinates(-4, 3, 0, 3);
                this.inputCoordinates(0, 3, 0, -3);
                this.inputCoordinates(0, -3, 4, -3);
                this.inputCoordinates(4, -3, 4, 3);
            },
            zalktis2: () => {
                this.inputCoordinates(-3, -3, -6, 0);
                this.inputCoordinates(-6, 0, -3, 3);
                this.inputCoordinates(-3, 3, 3, -3);
                this.inputCoordinates(3, -3, 6, 0);
                this.inputCoordinates(6, 0, 3, 3);
            },
            jumis: () => {
                this.inputCoordinates(-4, 0, -2, -3);
                this.inputCoordinates(-2, -3, 3, 3);
                this.inputCoordinates(-3, 3, 2, -3);
                this.inputCoordinates(2, -3, 4, 0);
            },
            zvaigzne1: () => {
                this.inputCoordinates(-4, 0, 4, 0);
                this.inputCoordinates(-3, -3, 3, 3);
                this.inputCoordinates(0, -4, 0, 4);
                this.inputCoordinates(-3, 3, 3, -3);
            },
            zvaigzne2: () => {
                this.inputCoordinates(-3, -1, -1, -1);
                this.inputCoordinates(-1, -1, -1, -3);
                this.inputCoordinates(-1, -3, 0, -2);
                this.inputCoordinates(0, -2, 1, -3);
                this.inputCoordinates(1, -3, 1, -1);
                this.inputCoordinates(1, -1, 3, -1);
                this.inputCoordinates(3, -1, 2, 0);
                this.inputCoordinates(2, 0, 3, 1);
                this.inputCoordinates(3, 1, 1, 1);
                this.inputCoordinates(1, 1, 1, 3);
                this.inputCoordinates(1, 3, 0, 2);
                this.inputCoordinates(0, 2, -1, 3);
                this.inputCoordinates(-1, 3, -1, 1);
                this.inputCoordinates(-1, 1, -3, 1);
                this.inputCoordinates(-3, 1, -2, 0);
                this.inputCoordinates(-2, 0, -3, -1);
            },
            marasK: () => {
                this.inputCoordinates(-3, -3, 3, 3);
                this.inputCoordinates(-3, 3, 3, -3);
                this.inputCoordinates(-3, -1, -1, -3);
                this.inputCoordinates(1, -3, 3, -1);
                this.inputCoordinates(3, 1, 1, 3);
                this.inputCoordinates(-1, 3, -3, 1);
            },
            laimasS: () => {
                this.inputCoordinates(-1, -2, -1, 2);
                this.inputCoordinates(0, -2, 0, 2);
                this.inputCoordinates(1, -2, 1, 2);
                this.inputCoordinates(-5, -2, -4, 0);
                this.inputCoordinates(-4, 0, -5, 2);
                this.inputCoordinates(-4, -2, -3, 0);
                this.inputCoordinates(-3, 0, -4, 2);
                this.inputCoordinates(-3, -2, -2, 0);
                this.inputCoordinates(-2, 0, -3, 2);
                this.inputCoordinates(5, -2, 4, 0);
                this.inputCoordinates(4, 0, 5, 2);
                this.inputCoordinates(4, -2, 3, 0);
                this.inputCoordinates(3, 0, 4, 2);
                this.inputCoordinates(3, -2, 2, 0);
                this.inputCoordinates(2, 0, 3, 2);
            },
            metenis: () => {
                this.inputCoordinates(-1, -1, 1, 1);
                this.inputCoordinates(-1, 1, 1, -1);
                this.inputCoordinates(-3, -1, 0, 2);
                this.inputCoordinates(0, 2, 3, -1);
                this.inputCoordinates(-3, 1, 0, -2);
                this.inputCoordinates(0, -2, 3, 1);
            },
            usins: () => {
                this.inputCoordinates(0, -3, 0, -3);
                this.inputCoordinates(0, 0, 0, 0);
                this.inputCoordinates(0, 3, 0, 3);
                this.inputCoordinates(-5, -3, -1, -3);
                this.inputCoordinates(-1, -3, -1, 3);
                this.inputCoordinates(-1, 3, -5, 3);
                this.inputCoordinates(-5, 0, -1, 0);
                this.inputCoordinates(5, -3, 1, -3);
                this.inputCoordinates(1, -3, 1, 3);
                this.inputCoordinates(1, 3, 5, 3);
                this.inputCoordinates(1, 0, 5, 0);
            },
            austra: () => {
                this.inputCoordinates(-2, -1, 0, 1);
                this.inputCoordinates(0, 1, 2, -1);
                this.inputCoordinates(-3, 0, -2, 1);
                this.inputCoordinates(-2, 1, 1, -2);
                this.inputCoordinates(-1, -2, 2, 1);
                this.inputCoordinates(2, 1, 3, 0);
            },
            martins: () => {
                this.inputCoordinates(-3, -2, -2, -3);
                this.inputCoordinates(-2, -3, 2, 1);
                this.inputCoordinates(2, 1, 4, -1);
                this.inputCoordinates(4, -1, 6, 1);
                this.inputCoordinates(6, 1, 4, 3);
                this.inputCoordinates(-4, 3, -6, 1);
                this.inputCoordinates(-6, 1, -4, -1);
                this.inputCoordinates(-4, -1, -2, 1);
                this.inputCoordinates(-2, 1, 2, -3);
                this.inputCoordinates(2, -3, 3, -2);
            },
            aka: () => {
                this.inputCoordinates(-1, -3, 3, 1);
                this.inputCoordinates(-3, 1, 1, -3);
                this.inputCoordinates(-1, 3, 3, -1);
                this.inputCoordinates(-3, -1, 1, 3);
            },
            janis: () => {
                this.inputCoordinates(-1, 2, 0, 1);
                this.inputCoordinates(1, 2, 0, 1);
                this.inputCoordinates(0, 1, 0, -1);
                this.inputCoordinates(0, -1, -1, -2);
                this.inputCoordinates(-1, -2, 0, -3);
                this.inputCoordinates(0, -3, 1, -2);
                this.inputCoordinates(1, -2, 0, -1);
            },
            austrasK: () => {
                this.inputCoordinates(0, -3, 0, 3);
                this.inputCoordinates(-1, -2, 0, -1);
                this.inputCoordinates(1, -2, 0, -1);
                this.inputCoordinates(-3, -2, 0, 1);
                this.inputCoordinates(3, -2, 0, 1);
                this.inputCoordinates(-3, -1, -2, -1);
                this.inputCoordinates(-2, -2, -2, -1);
                this.inputCoordinates(-2, 0, -1, 0);
                this.inputCoordinates(-1, -1, -1, 0);
                this.inputCoordinates(3, -1, 2, -1);
                this.inputCoordinates(2, -2, 2, -1);
                this.inputCoordinates(2, 0, 1, 0);
                this.inputCoordinates(1, -1, 1, 0);
            },
            krupitis: () => {
                this.inputCoordinates(-3, -1, -1, -3);
                this.inputCoordinates(-1, -3, 2, 0);
                this.inputCoordinates(3, -1, 1, -3);
                this.inputCoordinates(1, -3, -2, 0);
                this.inputCoordinates(-2, 0, 1, 3);
                this.inputCoordinates(1, 3, 3, 1);
                this.inputCoordinates(2, 0, -1, 3);
                this.inputCoordinates(-1, 3, -3, 1);
            },
            meness: () => {
                this.inputCoordinates(-2, -1, -1, 0);
                this.inputCoordinates(-1, 0, -2, 1);
                this.inputCoordinates(0, -1, 1, -2);
                this.inputCoordinates(1, -2, 2, -1);
                this.inputCoordinates(2, -1, 2, 1);
                this.inputCoordinates(2, 1, 1, 2);
                this.inputCoordinates(1, 2, 0, 1);
            },
            saule: () => {
                this.inputCoordinates(-1, 0, 0, -1);
                this.inputCoordinates(0, -1, 1, 0);
                this.inputCoordinates(1, 0, 0, 1);
                this.inputCoordinates(0, 1, -1, 0);
                this.inputCoordinates(0, 1, 0, 3);
                this.inputCoordinates(0, 3, -1, 4);
                this.inputCoordinates(-1, 4, -2, 3);
                this.inputCoordinates(-2, 3, -2, 2);
                this.inputCoordinates(-2, 2, -0.5, 0.5);
                this.inputCoordinates(-2, 2, -3, 2);
                this.inputCoordinates(-3, 2, -4, 1);
                this.inputCoordinates(-4, 1, -3, 0);
                this.inputCoordinates(-3, 0, -1, 0);
                this.inputCoordinates(0, -1, 0, -3);
                this.inputCoordinates(0, -3, -1, -4);
                this.inputCoordinates(-1, -4, -2, -3);
                this.inputCoordinates(-2, -3, -2, -2);
                this.inputCoordinates(-2, -2, -0.5, -0.5);
                this.inputCoordinates(-2, -2, -3, -2);
                this.inputCoordinates(-3, -2, -4, -1);
                this.inputCoordinates(-4, -1, -3, 0);
                this.inputCoordinates(0, 3, 1, 4);
                this.inputCoordinates(1, 4, 2, 3);
                this.inputCoordinates(2, 3, 2, 2);
                this.inputCoordinates(2, 2, 0.5, 0.5);
                this.inputCoordinates(2, 2, 3, 2);
                this.inputCoordinates(3, 2, 4, 1);
                this.inputCoordinates(4, 1, 3, 0);
                this.inputCoordinates(3, 0, 1, 0);
                this.inputCoordinates(1, -4, 2, -3);
                this.inputCoordinates(2, -3, 2, -2);
                this.inputCoordinates(2, -2, 0.5, -0.5);
                this.inputCoordinates(2, -2, 3, -2);
                this.inputCoordinates(3, -2, 4, -1);
                this.inputCoordinates(4, -1, 3, -0);
                this.inputCoordinates(0, -3, 1, -4);
            },
            perkons: () => {
                this.inputCoordinates(-2, 2, 2, -2);
                this.inputCoordinates(-2, -2, 2, 2);
                this.inputCoordinates(-1, 1, -3, -1);
                this.inputCoordinates(-3, -1, -4, 0);
                this.inputCoordinates(-2, 0, -3, 1);
                this.inputCoordinates(1, -1, 3, 1);
                this.inputCoordinates(3, 1, 4, 0);
                this.inputCoordinates(2, 0, 3, -1);
                this.inputCoordinates(1, 1, -1, 3);
                this.inputCoordinates(-1, 3, 0, 4);
                this.inputCoordinates(0, 2, 1, 3);
                this.inputCoordinates(-1, -1, 1, -3);
                this.inputCoordinates(1, -3, 0, -4);
                this.inputCoordinates(0, -2, -1, -3);
            },
            karogs: () => {
                this.inputCoordinates(-4, -1, 4, -1);
                this.inputCoordinates(-4, 1, 4, 1);
            }
        };

        dictionary[name](); // it turns out you can call object functions this way, just adding the "()" at the end
    }

    // for animations
    rerender() {
        this.render();
    }

    render() {
        this.chooseSimbol(this.name);
    }
} // class Simbol end

//************************************************************************

const s1 = new Simbol("usins", 22, 10);
// const s2 = new Simbol("marasL", 10, 10);

// setInterval(() => {
//     s1.rerender();
// }, 500);



