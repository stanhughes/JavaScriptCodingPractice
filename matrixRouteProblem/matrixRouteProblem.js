// Given matrix, a start coordinate, and end coordinate
// Return minimum number of steps

// The minimum number of steps through the matrix.
// Return null if there is no path through the matrix.
// How do I determine there is not path through the matrix?
function minSteps(matrix, start, end) {
  let isPath = true;
  let steps = 0;
  let current = start;

  while ((current.x != end.x) || (current.y != end.y)) {

  }
  if (isPath) {
    return matrix;
  } else {
    return null;
  }
};

const f = false;
const t = true;
const matrix = [
  [f,f,f,f,],
  [t,t,f,t,],
  [f,f,f,f,],
  [f,f,f,f,],
];
const start = {y: 3, x:0};
let end = {y: 0, x: 0};
const current = start;

if (current == start) {
  console.log('current == start: ' + current + ':' + start);
} else {
  console.log('current != start: ' + current + ':' + start)
}

if (current == end) {
  console.log('current == end: ' + current + ':' + end);
} else {
  console.log('current != end: ' + current + ':' + end)
}

end = {y:3, x:0};

if (current == end) {
  console.log('current == end: ' + current + ':' + end);
} else {
  console.log('current != end: ' + current + ':' + end)
}


console.log('minSteps():' + minSteps(matrix, start, end));

// use node inspect matrixRouteProblem.js
// and chrome://inspect
// to debug.
// Use '.exit' to get out of the debugger
