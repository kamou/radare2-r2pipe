'use strict';

function assert(a, b) {
  if (a === b) {
    console.error('test passes ok');
  } else {
    console.error('assert', a, b);
    process.exit(1);
  }
}

const r2p = require('../');
r2p.open('http://cloud.rada.re/cmd/', (error, r2) => {
  if (error) {
    console.error('pipe error', error);
    process.exit(1);
  }
  r2.cmd('p8 1 @ entry0', (error, result) => {
    assert(result.trim(), '31');
    r2.quit();
    console.log('done');
  });
});
