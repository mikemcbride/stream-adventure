const through = require('through2');
const trumpet = require('trumpet');

const stream = through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
});

const tr = trumpet();
const loud = tr.select('.loud').createStream();
loud.pipe(stream).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
