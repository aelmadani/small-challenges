// Challenge 1
// Her skal alle primtal mellem to tal findes.
// Første funktion fortæller om et tal er primtal eller ej.
// Anden funktion bruger første funktion til at vise alle primatel i et range.

const isPrimeNumber = (num) => {
  let j;

  for (j = 2; j < num; j++) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};

const findPrimeNumbers = (low, high) => {
  let i;
  let primeNums = [];
  for (i = low; i <= high; i++) {
    isPrimeNumber(i) ? primeNums.push(i) : null;
  }
  return primeNums;
};

// --------------------------------------------------------------------

// Challenge 4
// Funktionen berenger hvormange gange en valgt ugedag er der i den givne periode. Og hvormange af dem falder på en specifik
// dag på måneden.
// Args:
// dateStart: startsdato
// dateSend: slutdato
// dayToSearch: hvilken ugedag skal tælles.
// dayOfMonth (optional): hvilken dag på måneden falder den valgte ugedag.

function weekdayCounter(dateStart, dateEnd, dayToSearch, dayOfMonth) {
  var countTotal = 0;
  var countSpecific = 0;
  var week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const startDateString = dateStart.toLocaleDateString('en-GB');
  const endDateString = dateEnd.toLocaleDateString('en-GB');

  var dayIndex = week.indexOf(dayToSearch);

  while (dateStart.getTime() <= dateEnd.getTime()) {
    if (dateStart.getDay() == dayIndex) {
      if (dayOfMonth && dateStart.getDate() == dayOfMonth) {
        countSpecific++;
      }
      countTotal++;
    }

    dateStart.setDate(dateStart.getDate() + 1);
  }

  return dayOfMonth
    ? `Der er ${countTotal} x ${dayToSearch} i perioden fra ${startDateString} til ${endDateString},
  ${countSpecific} af dem falder på d. ${dayOfMonth}.`
    : `Der er ${countTotal} x ${dayToSearch} i perioden fra ${startDateString} til ${endDateString},`;
}

//--------------------------------------------------------------------
// Challenge 5
// Denne funktion tjekker om paranteserne i en tekst streng er balanceret.

const isParenthesisBalanced = (str) => {
  let parArray = [];

  let i;
  for (i = 0; i < str.length; i++) {
    // hvis vi har en åbningsparantes
    if (str[i] === '(') {
      //tilføjes en åbningsparantes i parArray
      parArray.push(str[i]);
      // Ellers hvis vi har en lukkeparantes
    } else if (str[i] === ')') {
      // hvis den seneste parantes i parArray er åbningsparantes
      if (parArray[parArray.length - 1] === '(') {
        // så slet den seneste '('
        parArray.pop();
      } else {
        // ellers så er der en ulukket parantes og derfor indsættes x
        parArray.push('x');
      }
    }
  }
  return parArray.length === 0
    ? 'Alle paranteser er balanceret'
    : 'Paranteserne er uballanceret!';
};

console.log('Challenge 1 test:');
console.log(findPrimeNumbers(2, 40));
console.log(
  weekdayCounter(new Date(2020, 10, 1), new Date(2020, 11, 31), 'Tuesday'),
);
console.log(
  weekdayCounter(new Date(2020, 10, 1), new Date(2020, 11, 31), 'Tuesday', 3),
);

console.log('Challenge 5 test:');
console.log(isParenthesisBalanced('3x(2x+4))+(1-x)'));
