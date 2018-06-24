const heap = require('./heap.sort'),
  insertion= require('./insertion.sort'),
  quick= require('./quick.sort'),
  merge= require('./merge.sort'),
  selection= require('./selection.sort'),
  bubble= require('./bubble.sort'),
  shell= require('./shell.sort');

module.exports = {
  heap: heap,
  insertion: insertion,
  quick: quick,
  merge: merge,
  selection: selection,
  bubble: bubble,
  shell: shell
};