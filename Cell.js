const Color = {
    "RED": 1,
    "GREEN": 2,
    "BLUE": 3,
    "WHITE": 4,
    "BLACK": 5
}

class Cell 
{
    #value;
    #color;
    constructor(...args) {
        if (args.length === 0) {
            this.#value = "";
            this.#color = 0;
        } else if(args.length === 1) {
            this.setValue(args[0].toString());
            this.#color = 0;
        } else {
            this.#value = args[0].toString();
            this.setColor(args[1]);
        }
    }

    setValue(val) { this.#value = val.toString(); }
    setColor(color) {
        if (typeof(color) === "string") { this.#color = Color[color.toUpperCase()]; }
        else { this.#color = 0; }
    }
    getValue() { return this.#value; }

    getColor() { return this.#color; }

    toInt() {
        if (Number(this.#value)) {
            parseInt(this.#value);
        } else { return -1; }
    }
    toDouble() {
        if (Number(this.#value)) {
            parseFloat(this.#value);
        } else { return -1; }
    }
    toDate() {
        if (Date.parse(this.#value)) {
            this.#value = new Date(this.#value);
        } else { return -1; }
    }
    reset() {
        this.#value = "";
        this.#color = 0;
    }

}

export { Cell, Color };