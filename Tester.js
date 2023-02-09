import { Cell, Color } from "./Cell.js";
import { Spreadsheet } from "./Spreadsheet.js";

class Tester 
{
    static testSetGetValue() {
        let testCell = new Cell();
        testCell.setValue("val");
        if (testCell.getValue() === "val") { console.log(`SetGetValue test is passed`); } 
        else { console.log(`SetGetValue test is failed`); }
    }
    static testSetGetColor() {
        let testCell = new Cell();
        testCell.setColor("red");
        if (testCell.getColor()) { console.log(`SetGetColor test is passed`); } 
        else { console.log(`SetGetColor test is failed`); }
    }
    static testToInt() {
        let testCell = new Cell();
        testCell.setValue(15.5);
        if (testCell.toInt() === -1) { console.log(`toInt test is failed`); }
        else { console.log(`toInt test is passed`); }
    }
    static testToDouble() {
        let testCell = new Cell();
        testCell.setValue(10);
        if (testCell.toDouble() === -1) { console.log(`toDouble test is failed`); }
        else { console.log(`toDouble test is passed`); }
    }
    static testToDate() {
        let testCell = new Cell();
        testCell.setValue("2022/10/10");
        if(testCell.toDate() === -1) { console.log(`toDate test is failed`); }
        else { console.log(`toDate test is passed`); }
    }
    static testReset() {
        let testCell = new Cell();
        testCell.reset();
        if (testCell.getValue() === "" && testCell.getColor() === 0) { console.log(`reset test is passed`); }
        else { console.log(`reset test is failed`); }
    }
    static testSetGetCellAt() {
        let testSpreadsheet = new Spreadsheet(3, 3);
        testSpreadsheet.setCellAt(1, 2);
        if (testSpreadsheet.getCellAt(1, 2)) { console.log(`SetGetCellAt test is passed`); }
        else { console.log(`SetGetCellAt test is failed`); }
    }
    static testAddRow() {
        let testSpreadsheet = new Spreadsheet(3, 3);
        if (testSpreadsheet.addRow(2) === -1) { console.log(`addRow test is failed`); }
        else { console.log(`addRow test is passed`); }

    }
    static testRemoveRow() {
        let testSpreadsheet = new Spreadsheet(3, 3);
        if (testSpreadsheet.removeRow(2) === -1) { console.log(`removeRow test is failed`); }
        else { console.log(`removeRow test is passed`); }
    }
    static testAddColumn() {
        let testSpreadsheet = new Spreadsheet(3, 3);
        if (testSpreadsheet.addColumn(2) === -1) { console.log(`addColumn test is failed`); }
        else { console.log(`addColumn test is passed`); }
    }
    static testRemoveColumn() {
        let testSpreadsheet = new Spreadsheet(3, 3);
        if (testSpreadsheet.removeColumn(2) === -1) { console.log(`removeColumn test is failed`); }
        else { console.log(`removeColumn test is passed`); }
    }
    static testSwapRows() {
        let testSpreadsheet = new Spreadsheet(5, 5);
        if (testSpreadsheet.swapRows(2, 3) === -1) { console.log(`swapRows test is failed`); }
        else { console.log(`swapRows test is passed`); } 
    }
    static testSwapColumns() {
        let testSpreadsheet = new Spreadsheet(5, 5);
        if (testSpreadsheet.swapColumns() === -1) { console.log(`swapColumns test is failed`); }
        else { console.log(`swapColumns test is passed`); }
    }
    static testAll() {
        Tester.testSetGetValue();
        Tester.testSetGetColor();
        Tester.testToInt();
        Tester.testToDouble();
        Tester.testToDate();
        Tester.testReset();
        Tester.testSetGetCellAt();
        Tester.testAddRow();
        Tester.testRemoveRow();
        Tester.testAddColumn();
        Tester.testRemoveColumn();
        Tester.testSwapRows();
        Tester.testSwapColumns();
    }
}

export { Tester };

