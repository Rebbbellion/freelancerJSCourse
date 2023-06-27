'use strict';
const taskSolutions = document.querySelectorAll('.taskSolution');
function writeTaskSolution(taskNumber, taskText) {
  taskSolutions[taskNumber - 1].insertAdjacentHTML('afterbegin', taskText);
}

//Task 1
const monthNumber = parseInt(prompt('Введіть номер місяця', 9));
function getSeasonName() {
  if (monthNumber >= 1 && monthNumber <= 12) {
    if (monthNumber <= 2 || monthNumber === 12) {
      return 'Зима';
    } else if (monthNumber <= 5) {
      return 'Весна';
    } else if (monthNumber <= 8) {
      return 'Літо';
    } else {
      return 'Осінь';
    }
  } else {
    return 'Неправильно введений номер місяця';
  }
}

writeTaskSolution(1, getSeasonName());

//Task 2

const MONTH_NAMES = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
];

function getMonthName() {
  if (monthNumber >= 1 && monthNumber <= 12) {
    return MONTH_NAMES[monthNumber - 1];
  } else {
    return 'Неправильно введений номер місяця';
  }
}

writeTaskSolution(2, getMonthName());

//Task 3
const dayNumber = parseInt(prompt('Введіть номер дня', 3));
function checkDayInfo() {
  if (dayNumber >= 1 && dayNumber <= 7) {
    if (dayNumber <= 5) {
      return 'Робочий день';
    } else {
      return 'Вихідний день';
    }
  } else {
    return 'Неправильно введений номер дня';
  }
}

writeTaskSolution(3, checkDayInfo());

//Task 4
const NUMBERS_AMOUNT = 3;
const numbers = [];
const counter = {
  even: 0,
  plusNumber: 0,
  higherThanHundred: 0,
};
for (let i = 1; i <= NUMBERS_AMOUNT; i++) {
  numbers.push(parseFloat(prompt(`Введіть число№${i}`, 2)));
}

function calculateNumbers() {
  numbers.forEach((el) => {
    if (el % 2 === 0) {
      ++counter.even;
    }
    if (el >= 0) {
      ++counter.plusNumber;
    }
    if (el > 100) {
      ++counter.higherThanHundred;
    }
  });
}
calculateNumbers();

const task4Solution = `
Кількість парних чисел: ${counter.even}; <br>
Кількість додатних чисел: ${counter.plusNumber}; <br>
Кількість чисел більших за 100 : ${counter.higherThanHundred};
`;
writeTaskSolution(4, task4Solution);

//Task 5
let temperatureValues = [];

for (
  let temperatureValue = parseFloat(
    prompt(
      'Введіть температуру (для припинення введення натисніть "Відміна")',
      24
    )
  );
  !isNaN(temperatureValue);

) {
  temperatureValues.push(temperatureValue);
  temperatureValue = parseFloat(
    prompt(
      'Введіть температуру у °C (для припинення введення натисніть "Відміна")',
      24
    )
  );
}
function getAverageTemperature() {
  return (
    temperatureValues.reduce(
      (sum, currentTemperature) => sum + currentTemperature,
      0
    ) / temperatureValues.length
  );
}
writeTaskSolution(5, `Середня температура: ${getAverageTemperature()}°C`);
