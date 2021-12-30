var readline = require('readline-sync');

const fortuneCollection = {
  great: ['awesome', 'extraordinary', 'noteworthy'],
  good: ['ok', 'fine'],
  poor: ['sucks', 'looks bleak', 'could be worse']
}

const getRandomNumber = length => {
  return Math.floor(Math.random() * length);
}

let continueGame = true;

while(continueGame){

  console.log('Your fortune for today: ');
  const randomKey = Object.keys(fortuneCollection);
  const prop = randomKey[Math.floor(Math.random() * randomKey.length)];

  const fortuneIdx = getRandomNumber(fortuneCollection[prop].length);

  switch(prop){
    case 'great':
      console.log(`Your future will be ${fortuneCollection[prop][fortuneIdx]}`);
      break;
    case 'good':
      console.log(`Everything will turn out ${fortuneCollection[prop][fortuneIdx]}`);
      break;
    case 'poor':
      console.log(`It ${fortuneCollection[prop][fortuneIdx]}`);
      break;
  }

  continueGame = readline.keyInYN('Do you want another fortune?');
}