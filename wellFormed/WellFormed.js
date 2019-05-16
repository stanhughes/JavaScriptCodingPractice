console.log('Well Formed?');

const wellFormed = '([])[]({})';

const malFormed1 = '([)]';

const malFormed2 = '((()';

function isWellFormed(str) {
  let formWell = false;

  let arrayStr = str.split(""); // empty string to split between each char
  console.log('arayStr:' + arrayStr);

  let balance = [];
  for (let i in arrayStr) {
    console.log('arrayStr[i]' + arrayStr[i]);
    if (balance.length < 1) {
      balance.push(arrayStr[i]);
    } else {
      if (balance) 
    }
  };
  return formWell;
};

console.log('isWellFormed:' + isWellFormed(wellFormed));
