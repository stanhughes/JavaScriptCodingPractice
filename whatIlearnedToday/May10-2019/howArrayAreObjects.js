// An array is an object
const array1 = [2,1];
const object1 = {0:2, 1:1};
const object2 = {zero:2, one:1};

console.log('array1[0]:' + array1[0]);
console.log('object1[0]:' + object1[0]);
console.log('object1.0:' + 'won\'t work, a number );
console.log('object2.zero:' + object2.zero);
