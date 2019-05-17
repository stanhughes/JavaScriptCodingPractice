'use strict'

console.log('Well Formed?');

const wellFormed = '([])[]({})';

const malFormed1 = '([)]';

const malFormed2 = '((()';

function isMatch(left,right) {
  let match = false;
  switch (left) {
    case '(':
      match = (right === ')');
      break;
    case '{':
      match = (right === '}');
      break;
    case '[':
      match = (right === ']');
      break;
    default:
      break;
  };
  return match;
};

function isWellFormed(str) {
  let formedWell = false;

  let arrayStr = str.split(""); // empty string to split between each char
  console.log('arayStr:' + arrayStr);

  let balance = [];
  for (let i in arrayStr) {
    console.log('arrayStr[i]' + arrayStr[i]);
    if (balance.length < 1) {
      balance.push(arrayStr[i]);
    } else {
      if (isMatch(balance[balance.length-1],arrayStr[i])) {
        balance.pop();
      } else {
        balance.push(arrayStr[i]);
      }
    }
  };
  
  if (balance.length < 1) {
    formedWell = true;
  }

  return formedWell;
};

console.log('isWellFormed:' + isWellFormed(wellFormed));
console.log('malFormed1=' + malFormed1 + ' is well formed? ' + isWellFormed(malFormed1)); 
console.log('malFormed2=' + malFormed2 + ' is well formed? ' + isWellFormed(malFormed2));
