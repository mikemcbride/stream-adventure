'use strict'
const split = require('split');
const through2 = require('through2');
const tr = through2(function (buffer, _, next) {
  if (curLine % 2 > 0) {
    this.push(buffer.toString().toLowerCase() + "\n");
  } else {
    this.push(buffer.toString().toUpperCase() + "\n");
  }
  curLine++;
  next();
});

let curLine = 1;

process.stdin
  .pipe(split())
  .pipe(tr)
  .pipe(process.stdout);
