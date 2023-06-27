'use strict';
const TASK_CONDITIONS = {
  task1:
    'Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.',
  task2: 'Вивести на екран номери місяців весни і літа (від 3 до 8)',
  task3: 'Вивести на екран 8 кнопок з написом “Hello”',
  task4:
    'Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.',
  task5: 'Створити 10 елементів для введення цін продуктів',
};
let taskNumber = 1;
for (let key in TASK_CONDITIONS) {
  document.write(`
	<h2 style="color:#e4693b">Задача№${taskNumber}</h2>
	<h3>Умова</h3>
	<p style="max-width: 500px;font-size: 1.2rem;font-weight: 600; color: #e7265d;">${TASK_CONDITIONS[key]}</p>
	<h3>Рішення</h3>
	<div class="taskSolution" style= "color:#30af26"></div>
`);
  taskNumber++;
}
