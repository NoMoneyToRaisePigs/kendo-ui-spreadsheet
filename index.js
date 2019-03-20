// import {add} from './test.js';

// console.log(add(1,2));


"use strict";

var _test = require("./test.js");
var kendo = require("./node_modules/@progress/kendo-ui/js/kendo.all.js");

(0, _test.add)(1, 2);


$("#spreadsheet").kendoSpreadsheet();

var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet"); // the widget instance

var sheet = spreadsheet.activeSheet(); // the current active sheet

var range = sheet.range("A1:B2"); // 2x2 cell range

range.value("foo").color("green");