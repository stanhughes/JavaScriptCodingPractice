console.log('Stan Hughes, April 30, 2019');
console.log('Determine which values are still zero after looping through an ');
console.log('array of 100 elements.');
console.log('All elements start a \'0\' and are toggled to \'1\' or \'0 ');
console.log('depending on the current value of the element.');
console.log('Starts at 2 and goes to 100.');
console.log('Solving using a procedural approach');

// Create the initial array of zeros.
let oneHundred = new Array(100);
oneHundred.fill(0,0,100);

// Range through array using the products of each number
for (let i=2; i<100; i++) {
  for(let j=0; j<100; j++) {
      // Index to toggle
      // j is 0 to 99
      // need 1 to 100
      let k = i * (j+1);
      if (k <= 100) {
        // Toggle at index

        // k is from 1 to 100
        // need values 0 to 99
        let value = oneHundred[k-1];
        if (value == 0) {
          value = 1;
        } else {
          value = 0;
        }
        oneHundred[k-1] = value;
      } else {
        // loop is finished
        j = 100;
      }
  }
//  console.log(oneHundred);
}

// display 0 values
let display = '';
for (let i=0; i<100; i++) {
  let value = oneHundred[i];
  if (value == 0) {
    // index is from 0 to 99
    // need 1 to 100
    if (display.length < 1) {
      	display = display + (i+1);
    } else {
    	display = display + ', ' + (i+1);
    }
  }
}

// Will display 1, 4, 9, 16, 25, 36, 49, 64, 81
console.log('Only products of square roots number have an odd number of ');
console.log('factors.');
console.log('Factors of 8: 1x8, 2x4: 1,2,4,8 for a total of 4');
console.log('Factors of 9: 1x9, 3x3: 1,3,9 for a total of 3');
console.log(display);
