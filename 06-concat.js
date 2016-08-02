const concat = require('concat-stream');

const rev = concat(function (buf) {
  const reversed = buf.toString().split('').reverse().join('');
  console.log(reversed);
});

process.stdin.pipe(rev);
