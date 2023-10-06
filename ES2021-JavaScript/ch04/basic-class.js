class Color {
    constructor(r = 0, g = 0, b = 0) {
        this.r = r
        this.g = g
        this.b = b
    }

    get rgb() {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")" 
    }

    set rgb(value) {
        return value
    }

    toString() {
        return this.rgb
    }

    static fromCSS(css) {

    }

}

const color = new Color(30, 144, 255);
