const http = require('http');
const through = require('through2');
const uppercase = through(write, end);

function write (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

function end (done) {
  done();
}

http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(uppercase).pipe(res);
  }
}).listen(process.argv[2])
