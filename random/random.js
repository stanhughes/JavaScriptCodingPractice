function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function random5() {
  return (getRandomInt(5) + 1)
}

function random7() {
  // Number between 1 to 5
  let randomNum5 = random5()
  // Number between 0 to 2
  let randomNum2

  //
  // Get a random number between 0 to 2
  //

  randomNum2 = 4
  while (randomNum2 > 3 ) {
    randomNum2 = random5()
  }

  // We now have some random number between 1 to 3
  // Change it to a number between 0 to 2
  randomNum2 = randomNum2 - 1

  // 1 to 5 plus 0 to 2 = 1 to 7
  let randomResult = randomNum2 + randomNum5

  return randomResult
}

function displayRandom(number) {
  let myFunc
  if (number === 5) {
    myFunc = random5;
  } else {
    myFunc = random7;
  }

  for (let i=0; i<80; i++) {
    console.log('' + number + ': ' + myFunc())
  }
}

console.log('Random 5 and Random 7')
displayRandom(5)
displayRandom(7)
