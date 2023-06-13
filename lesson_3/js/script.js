const taskSolutions = document.querySelectorAll('.taskSolution');
function writeTaskSolution(taskNumber, taskText) {
  taskSolutions[taskNumber - 1].insertAdjacentHTML('afterbegin', taskText);
}
function checkNumberValue(number, insertedText) {
  number = isNaN(number) ? insertedText : number;
  return number;
}
//Task 1
const firstChild = {
  name: prompt("Введіть ім'я першої дитини", 'Василь') ?? 'Ви не ввели імя',
  candiesAmount: parseInt(prompt('Введіть кількість цукерок першої дитини', 0)),
};
const secondChild = {
  name: prompt("Введіть ім'я другої дитини", 'Максим') ?? 'Ви не ввели імя',
  candiesAmount: parseInt(prompt('Введіть кількість цукерок другої дитини', 0)),
};
let comparisonResult;
firstChild.candiesAmount = checkNumberValue(
  firstChild.candiesAmount,
  'Кількість цукерок вказана неправильно'
);
secondChild.candiesAmount = checkNumberValue(
  secondChild.candiesAmount,
  'Кількість цукерок вказана неправильно'
);

if (firstChild.candiesAmount > secondChild.candiesAmount) {
  comparisonResult = firstChild.name;
} else if (firstChild.candiesAmount < secondChild.candiesAmount) {
  comparisonResult = secondChild.name;
} else if (+firstChild.candiesAmount === +secondChild.candiesAmount) {
  comparisonResult = 'Кількість цукерок однакова';
} else {
  comparisonResult = 'Невірно введена кількість цукерок';
}

const task1Solution = `
<div>Ім'я першої дитини: ${firstChild.name};</div>
<div>Кількість цукерок у першої дитини: ${firstChild.candiesAmount};</div>
<div>Ім'я другої дитини: ${secondChild.name};</div>
<div>Кількість цукерок у другої  дитини: ${secondChild.candiesAmount};</div>
<div>Ім'я дитини у якої цукерок більше: ${comparisonResult};</div>
`;
writeTaskSolution(1, task1Solution);

// Task 2

let productPrice = parseFloat(prompt('Вкажіть ціну товару', 0));
productPrice = checkNumberValue(productPrice, 'Ціна введена неправильно');

let moneyAmount = parseFloat(prompt('Введіть кількість грошей', 0));
moneyAmount = checkNumberValue(
  moneyAmount,
  'Кількість грошей вказана неправильно'
);
let lotteryTicketPrice = 4;
let purchaseResult;
if (+moneyAmount < +productPrice) {
  alert('Я не можу продати Вам цей товар');
  purchaseResult = 'Ви не змогли придбати товар';
} else if (+moneyAmount >= +productPrice + lotteryTicketPrice) {
  if (confirm('Не бажаєте купити лоторейний білет?')) {
    alert('Дякую за покупку лоторейного квитка. Хай щастить. Приходьте ще');
    purchaseResult = ' Покупка успішна. Ви придбали лоторейний квиток';
  } else {
    alert('Дякую за покупку.Приходьте ще');
    purchaseResult =
      ' Покупка успішна. На жаль Ви не придбали лоторейний квиток';
  }
} else if (+moneyAmount >= +productPrice) {
  alert('Дякую за покупку.Приходьте ще');
  purchaseResult = 'Покупка успішна';
} else {
  alert('Числа введені неправильно');
  purchaseResult = 'Числа введені неправильно';
}

const task2Solution = `
<div>Ціна товару: ${productPrice};</div>
<div>Кількість грошей: ${moneyAmount};</div>
<div>Отриманий результат: ${purchaseResult};</div>
`;
writeTaskSolution(2, task2Solution);

//Task 3
const min = 1;
const max = 5;
let randomNumber = Math.floor(Math.random() * (max - min + min) + min);
let userAttempt = parseInt(prompt('Спробуйте вгадати число від 1 до 5', 1));
userAttempt = checkNumberValue(userAttempt, 'Число введено не вірно');
let attemptResult;

if (userAttempt >= min && userAttempt <= max) {
  if (userAttempt === randomNumber) {
    alert('Ви вгадали!');
    attemptResult = 'Ви вгадали!';
  } else {
    alert('Ви не вгадали :(');
    userAttempt = parseInt(prompt('Спробуйте вгадати число від 1 до 5', 1));
    userAttempt = checkNumberValue(userAttempt, 'Число введено не вірно');
    if (userAttempt === randomNumber) {
      alert('Ви вгадали!');
      attemptResult = 'Ви вгадали!';
    } else {
      alert('Ви не вгадали :(');
      attemptResult = 'Ви не вгадали :(';
    }
  }
} else if (userAttempt < min || userAttempt > max) {
  alert('Ви ввели занадто мале/велике число');
  attemptResult = 'Ви ввели занадто мале/велике число';
} else {
  alert('Число введено не вірно');
  attemptResult = 'Число введено не вірно';
}

const task3Solution = `
<div>Загадане число: ${randomNumber};</div>
<div>Вказане число: ${userAttempt}</div>
<div>Результат спроби: ${attemptResult}</div>
`;
writeTaskSolution(3, task3Solution);

//Task 4

let userAge = parseInt(prompt('Вкажіть свій вік', 20));
userAge = checkNumberValue(userAge, 'Ви неправильно вказали свій вік');
let ageAnalysisResult;

if (+userAge < 6) {
  ageAnalysisResult = 'Ви дитина';
} else if (+userAge > 5 && userAge < 16) {
  ageAnalysisResult = 'Ви школяр';
} else if (+userAge > 15 && userAge < 25) {
  ageAnalysisResult = 'Ви студент';
} else if (userAge > 24 && userAge < 63) {
  ageAnalysisResult = 'Ви працівник';
} else if (+userAge > 62) {
  ageAnalysisResult = 'Ви пенсіонер';
} else {
  ageAnalysisResult = 'Ви ввели неправильний вік';
}

const task4Solution = `
<div> Ваш вік: ${userAge};</div>
<div>Отриманий результат: ${ageAnalysisResult}</div>
`;
writeTaskSolution(4, task4Solution);

//Task 5

let driverCategory = prompt(
  'Введіть категорію Вашого посвідчення водія(англійськими літерами)',
  'A'
)?.toUpperCase();
let permittedVehicle;

switch (driverCategory) {
  case 'A':
    permittedVehicle = 'Мотоцикл';
    break;
  case 'B':
    permittedVehicle = 'Лекговий автомобіль';
    break;
  case 'C':
    permittedVehicle = 'Вантажівка';
    break;
  default:
    driverCategory = 'Такої категорії не існує';
    permittedVehicle = 'Не вдалося показати результат';
    break;
}

const task5Solution = `
<div>Введена категорія: ${driverCategory};</div>
<div>Дозволений транспортний засіб: ${permittedVehicle}</div>
`;
writeTaskSolution(5, task5Solution);

// Task 6
let enteredDayNumber = parseInt(prompt('Введіть номер дня тижня', 1));
enteredDayNumber = checkNumberValue(
  enteredDayNumber,
  'Номер дня тижня введений неправильно'
);
let weekName;
const WEEKS_NAME = [
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четверг',
  "П'ятниця",
  'Субота',
  'Неділя',
];

for (let index = 0; index < WEEKS_NAME.length; index++) {
  if (enteredDayNumber === index + 1) {
    weekName = WEEKS_NAME[index];
    break;
  } else {
    weekName = 'Номер дня тижня введений неправильно';
  }
}

const task6Solution = `
<div>Введений номер дня тижня : ${enteredDayNumber};</div>
<div>Отриманий результат: ${weekName};</div>
`;

writeTaskSolution(6, task6Solution);

// Task 7

let enteredMonthNumber = parseInt(prompt('Введіть номер місяця', 9));
enteredMonthNumber = checkNumberValue(
  enteredMonthNumber,
  'Номер місяця введений неправильно'
);
const SEASONS = ['Зима', 'Весна', 'Літо', 'Осінь'];
let seasonResult;
if (enteredMonthNumber >= 1 && enteredMonthNumber <= 12) {
  if (enteredMonthNumber <= 2 || enteredMonthNumber === 12) {
    seasonResult = SEASONS[0];
  } else if (enteredMonthNumber >= 3 && enteredMonthNumber <= 5) {
    seasonResult = SEASONS[1];
  } else if (enteredMonthNumber >= 6 && enteredMonthNumber <= 8) {
    seasonResult = SEASONS[2];
  } else if (enteredMonthNumber >= 9 && enteredMonthNumber <= 11) {
    seasonResult = SEASONS[3];
  }
} else {
  seasonResult = 'Номер місяця введений неправильно';
}

const task7Solution = `
<div>Введений номер місяця: ${enteredMonthNumber};</div>
<div>Отриманий результат: ${seasonResult};</div>
`;
writeTaskSolution(7, task7Solution);
