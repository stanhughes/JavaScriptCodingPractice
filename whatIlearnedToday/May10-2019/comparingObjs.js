const start = {y: 3, x:0};
let end = {y: 0, x: 0};
const current = start;

if (current == start) {
  console.log('current == start: ' + current + ':' + start);
} else {
  console.log('current != start: ' + current + ':' + start)
};

if (current == end) {
  console.log('current == end: ' + current + ':' + end);
} else {
  console.log('current != end: ' + current + ':' + end)
};

end = {y:3, x:0};

// This will still not be equal become objects are being compared
// not values.
if (current == end) {
  console.log('current == end: ' + current + ':' + end);
} else {
  console.log('current != end: ' + current + ':' + end)
};
