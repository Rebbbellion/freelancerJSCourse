'use strict';
const taskSolutions = document.querySelectorAll('.taskSolution');
function writeTaskSolution(taskNumber, taskText) {
  taskSolutions[taskNumber - 1].insertAdjacentHTML('afterbegin', taskText);
}

//Task 1

const MAX = 1000,
  MIN = 1;

let evenCounter = 0,
  oddCounter = 0,
  comparisonResult = null;

for (let i = 0; i < 100; i++) {
  let randomNum = Math.floor(Math.random() * (MAX - MIN) + MIN);
  if (randomNum % 2 === 0) {
    ++evenCounter;
  } else {
    ++oddCounter;
  }
}

if (evenCounter > oddCounter) {
  comparisonResult = 'Парних чисел більше';
} else {
  comparisonResult = 'Непарних чисел більше';
}

const task1Solution = `
Кількість парних чисел : ${evenCounter};<br>
Кількість непарних чисел: ${oddCounter};<br>
Результат: ${comparisonResult};
`;
writeTaskSolution(1, task1Solution);

//Task 2

const START_MONTH_NUMBER = 3,
  END_MONTH_NUMBER = 8;

for (
  let monthNumber = END_MONTH_NUMBER;
  monthNumber >= START_MONTH_NUMBER;
  monthNumber--
) {
  writeTaskSolution(2, `${monthNumber} `);
}

//Task 3

const TASK3_SOLUTION =
    '<button style="background-color: #061c5e; color:#30af26;padding: 10px;">Hello</button>',
  NUMBER_OF_BUTTONS = 8;

for (let i = 0; i < NUMBER_OF_BUTTONS; i++) {
  writeTaskSolution(3, TASK3_SOLUTION);
}

//Task 4

const amountOfRandomNumbers = parseInt(
    prompt('Введіть кількість випадкових символів, що буде згенерована', 4)
  ),
  MIN_NUMBER = 1,
  MAX_NUMBER = 100;

const TASK4_LIST = '<ul></ul>';
writeTaskSolution(4, TASK4_LIST);

for (let i = 0; i < amountOfRandomNumbers; i++) {
  let randomNum = Math.floor(
    Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER
  );
  taskSolutions[3].childNodes[0].insertAdjacentHTML(
    'afterbegin',
    `<li>${randomNum}</li>`
  );
}

//Task 5
const INPUT_AMOUNT = 10;

for (let i = INPUT_AMOUNT; i >= 1; i--) {
  writeTaskSolution(
    5,
    `
		<div style="margin-bottom: 10px">
		<label for="Product#${i}" >Product#${i} </label>
		<input type="text" id='Product#${i}'>
		</div>
	  `
  );
}
