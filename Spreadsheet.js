import { Cell } from "./Cell.js";

class Spreadsheet 
{
    cells;
    constructor(row, col) {
        if (row <= 0 || col <= 0) { throw `out of range of spreadsheet`; }
        this.cells = new Array(row);
        for (let i = 0; i < row; ++i) {
            this.cells[i] = new Array(col);
        }
    }
    
    setCellAt(row, col) {
        if (row < 0 || col < 0 || row >= this.cells.length || col >= this.cells[0].length) { throw `can't set row or col out of range`; }
        this.cells[row][col] = new Cell();
    }

    getCellAt(row, col) {
        if (row < 0 || col < 0 || row >= this.cells.length || col >= this.cells[0].length) { throw `can't get row or col out of range`; }
        return this.cells[row][col];
    }

    addRow(row) {
        if (row >= 0 || row < this.cells.length) { 
            let col = this.cells[0].length;
            this.cells.splice(row, 0, new Array(col));
        } else { return -1; }
    }

    removeRow(row) {
        if (row >= 0 && row < this.cells.length) {
            this.cells.splice((row), 1);
        } else { return -1; }
    }

    addColumn(col) {
        if (col >= 0 || col < this.cells[0].length) {
            for (let i = 0; i < this.cells.length; ++i) {
                this.cells[i].splice(col, 1, undefined);
            }
        } else { return -1; }
    }

    removeColumn(col) {
        if (col >= 0 && col < this.cells[0].length) {
            for (let i = 0; i < this.cells.length; ++i) {
                this.cells[i].splice(col, 1);
            }
        } else { return -1; }
    }

    swapRows(row1, row2) {
        if (row1 >= 0 && row1 < this.cells.length && row2 >= 0 && row2 < this.cells.length) {
            for (let i = 0; i < this.cells[0].length; ++i) {
                let tmp = this.cells[row1][i];
                this.cells[row1][i] = this.cells[row2][i];
                this.cells[row2][i] = tmp;
            }
        } else { return -1; }
    }
    
    swapColumns(col1, col2) { 
        if (col1 >= 0 && col1 < this.cells[0].length && col2 >= 0 && col2 < this.cells[0].length) {
            for (let i = 0; i < this.cells.length; ++i) {
                let tmp = this.cells[i][col1];
                this.cells[i][col1] = this.cells[i][col2];
                this.cells[i][col2] = tmp; 
            }
        }
    }
}

export { Spreadsheet };