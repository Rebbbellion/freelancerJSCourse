"use strict";
//Задача №0
let a = parseFloat(prompt("Введіть перше число", 0)),
  b = parseFloat(prompt("Введіть друге число", 0)),
  c = parseFloat(prompt("Введіть третє число", 0));

document.write(`
<h2> Задача № 0</h2>

<div class="S1">1) ${(a + 12 + b).toFixed(2)} (при a = ${a}, b = ${b});</div>

<div class = "S2">2) ${Math.sqrt(((a + b) / 2) * a).toFixed(
  2
)} (при a = ${a}, b = ${b});</div>

<div class = "S3">3) ${Math.cbrt((a + b) * c).toFixed(
  2
)} (при a = ${a}, b = ${b}, с = ${c});</div>

<div class = "S4">4) ${Math.sin(a / -b).toFixed(
  2
)} (при a = ${a}, b = ${b});</div>
`);

// Задача №1
let firstNum = a,
  secondNum = b;

document.write(`
	<h2>Задача№1</h2>
	<div class="firstTask" style: "display:flex; flex-direction: column; justify-content: start;">
	<div style="display:flex;flex-basis: 50%;">
		<span style='border: 2px solid gray; padding: 3px;flex-basis: 50%;'>Перше число</span>
		<span style='border: 2px solid gray;padding: 3px;flex-basis: 50%;''>${firstNum}</span>
	</div>
	<div style="display:flex; flex-basis: 50%;">
		<span style='border: 2px solid gray; padding: 3px;flex-basis: 50%;'>Друге число</span>
		<span style='border: 2px solid gray;padding: 3px;flex-basis: 50%;''>${secondNum}</span>
	</div>
	<div style="display:flex; flex-basis: 50%;">
		<span style='border: 2px solid gray; padding: 3px;flex-basis: 50%;'>Сумма</span>
		<span style='border: 2px solid gray;padding: 3px; flex-basis: 50%;''>${
      firstNum + secondNum
    }</span>
	</div>
	<div style="display:flex; flex-basis: 50%;">
		<span style='border: 2px solid gray; padding: 3px; flex-basis: 50%;'>Добуток</span>
		<span style='border: 2px solid gray;padding: 3px; flex-basis: 50%;''>${
      firstNum * secondNum
    }</span>
	</div>
	<div style="display:flex; flex-basis: 50%;">
	<span style='border: 2px solid gray; padding: 3px; flex-basis: 50%;'>Частка</span>
	<span style='border: 2px solid gray;padding: 3px; flex-basis: 50%;''>${(
    firstNum / secondNum
  ).toFixed(2)}</span>
		</div>
	</div>
	`);

// Задача №2
const yearOfBirth = parseInt(prompt("Введіть рік вашого народження", 2002));
let currentYear = 2023;

document.write(`
<h2>Задача№2</h2>
<div class="secondTask">
	Ваш рік народження: ${yearOfBirth};<br>
	Ваш вік: ${currentYear - yearOfBirth};
</div>
`);
// Задача №3
let productPrice = parseFloat(
    prompt("Введіть ціну товару в грн (Задача№3)", 0)
  ).toFixed(2),
  productAmount = parseInt(prompt("Введіть кількість товару (Задача№3)", 0));
const TAX_VALUE = 5;

document.write(`
<h3>Задача№3</h3>
<div class="thirdTask">
	Ціна: ${productPrice + " грн"};<br>
	Кількість:${productAmount + "шт."};<br>
	Загальна вартість: ${(productPrice * productAmount).toFixed(2) + " грн"} ;<br>
	ПДВ: ${(((productPrice * productAmount) / 100) * 5).toFixed(2) + " грн"};
</div>
`);
// Задача №4
let cmLength = parseFloat(prompt("Введіть довжину у см (Задача№4)", 0));

document.write(`
<h3>Задача№4</h3>
<div class="fourthTask">
	Довжина у см: ${cmLength};<br>
	Довжина у м: ${cmLength / 100};<br>
	Довжина у км: ${cmLength / 100000};
</div>
`);
//Задача №5

let passedSeconds = parseInt(
  prompt("Введіть кількість секунд, що пройшли від початку доби", 1000)
);

document.write(`
<h3>Задача№5</h3>
<div class="fifthTask">
	Кількість секунд: ${passedSeconds};<br>
	Кількість хвилин: ${(passedSeconds / 60).toFixed(2)};<br>
	Кількість годин: ${(passedSeconds / 3600).toFixed(2)};
</div>
`);
// Задача №6
let productName1 = prompt("Введіть назву 1-го товару", "Cірники"),
  productName2 = prompt("Введіть назву 2-го товару", "Цукерки"),
  productName3 = prompt("Введіть назву 3-го товару", "Помідори"),
  productPrice1 = parseFloat(
    prompt("Введіть ціну 1-го товару в грн", 0)
  ).toFixed(2),
  productAmount1 = parseInt(prompt("Введіть кількість 1-го товару", 0)),
  productPrice2 = parseFloat(
    prompt("Введіть ціну 2-го товару в грн ", 0)
  ).toFixed(2),
  productAmount2 = parseInt(prompt("Введіть кількість 2-го товару", 0)),
  productPrice3 = parseFloat(
    prompt("Введіть ціну товару 3-го в грн", 0)
  ).toFixed(2),
  productAmount3 = parseInt(prompt("Введіть кількість 3-го товару", 0));

document.write(`
<h3>Задача№6</h3>
<div class="sixthTask" style="display:grid; column-gap: 15px; border: 2px solid gray; padding: 15px 10px; max-width: 300px">
	<h4 style="justify-self: center;">АТБ</h4>
	<p>Товар: ${productName1} x ${productAmount1 + " шт."}</p>
	<p>Ціна за 1 шт: ${productPrice1 + " грн"}</p>
	<p>Товар: ${productName2} x ${productAmount2 + " шт."}</p>
	<p>Ціна за 1 шт: ${productPrice + " грн"}</p>
	<p>Товар: ${productName3} x ${productAmount3 + " шт."}</p>
	<p>Ціна за 1 шт: ${productPrice + " грн"}</p>
	<p>Разом: ${
    productPrice1 * productAmount1 +
    productPrice2 * productAmount2 +
    productPrice3 * productAmount3 +
    " грн"
  }</p>
	<div style="width:100%; height:1px; border-bottom: 2px dashed black"></div>
	<h5 style="justify-self: center;">Фіскальний чек</h5>
</div>
`);
//Задача №7
let firstMinNum = 1,
  firstMaxNum = 12,
  secondMinNum = 0,
  secondMaxNum = 6;
let firstRandomNum = Math.round(
  Math.random() * (firstMaxNum - firstMinNum + 1) + firstMinNum
);
let secondRandomNum = Math.round(
  Math.random() * (secondMaxNum - secondMinNum) + secondMinNum
);

document.write(`
<h3>Задача№7</h3>
<div class="seventhTask">
	Cумма випадкових чисел : ${firstRandomNum + secondRandomNum}
</div>
`);
