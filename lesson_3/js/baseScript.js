'use strict';
const taskConditions = {
  task1:
    'З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.',
  task2:
    'З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.',
  task3:
    'Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.',
  task4:
    'З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).',
  task5:
    'З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.',
  task6: 'З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.',
  task7:
    'З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься',
};
let i = 1;
for (let key in taskConditions) {
  document.write(`
	<h2>Задача№${i}</h2>
	<h3 style=>Умова</h3>
	<p style="max-width: 500px;font-size: 1.2rem;font-weight: 600;">${taskConditions[key]}</p>
	<h3>Рішення</h3>
	<section class="taskSolution"></section>
`);
  i++;
}