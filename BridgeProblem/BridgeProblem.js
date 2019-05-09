'use strict';

function getRandomeInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let sideA = [1,2,5,10];
let sideB = [];
let totalTime = 0;

while (sideA.length > 0) {
  // select two people to cross
  let i = getRandomeInt(sideA.length);
  let person1 = sideA.splice(i,1);
  i = getRandomeInt(sideA.length);
  let person2 = sideA.splice(i,1);

  // time to cross
  let time2Cross = (person1[0] > person2[0]) ? person1[0] : person2[0];
  totalTime = totalTime + time2Cross;

  // cross bridge
  sideB.push(person1[0]);
  sideB.push(person2[0]);

  // return light
  // make sure there is another person on the other side before returning
  if (sideA.length > 0) {
    i = getRandomeInt(sideB.length);
    let returnLight = sideB.splice(i,1);
    sideA.push(returnLight[0]);
  }

//  break;
}

console.log('sideA:' + sideA);
console.log('sideB:' + sideB);
console.log('totalTime:' + totalTime);
