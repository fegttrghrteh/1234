"use strict";

// Операторы сравнения, логические операторы и условные конструкции.
// Файл можно запускать через: node index.js

function section(title) {
  console.log(`\n--- ${title} ---`);
}

section("1. Операторы сравнения");

const a = 5;
const b = 8;

console.log(a < b);   // true
console.log(a > b);   // false
console.log(a <= 5);  // true
console.log(b >= 10); // false

section("2. Строгое и нестрогое равенство");

console.log(5 == "5");   // true: типы приводятся
console.log(5 === "5");  // false: разные типы
console.log(0 == false);  // true
console.log(0 === false); // false

section("3. Сравнение строк");

console.log("9" < "10");                // false
console.log("09" < "10");               // true
console.log(Number("9") < Number("10")); // true

section("4. NaN");

const brokenNumber = Number("12px");
console.log(brokenNumber);                 // NaN
console.log(typeof brokenNumber);          // number
console.log(brokenNumber === NaN);         // false
console.log(Number.isNaN(brokenNumber));   // true
console.log(NaN === NaN);                  // false

section("5. null и undefined");

let notAssigned;
const emptyValue = null;

console.log(notAssigned);          // undefined
console.log(emptyValue);           // null
console.log(typeof notAssigned);   // undefined
console.log(typeof emptyValue);    // object - историческая особенность JS
console.log(undefined == null);    // true
console.log(undefined === null);   // false

section("6. Truthy и falsy");

console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean(" "));     // true
console.log(Boolean(-5));      // true
console.log(Boolean(NaN));     // false
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true

const text = "JavaScript";
console.log(!!text); // true

section("7. Логические операторы");

const age = 20;
const hasTicket = true;
const isBlocked = false;

console.log(age >= 18 && hasTicket);              // true
console.log(hasTicket || age >= 21);              // true
console.log(!isBlocked);                          // true
console.log(age >= 18 && hasTicket && !isBlocked); // true

// && и || возвращают один из операндов, а не обязательно boolean.
const username = "";
console.log(username || "Гость"); // Гость

section("8. if / else");

const temperature = 16;

if (temperature >= 20) {
  console.log("Тепло");
} else {
  console.log("Прохладно");
}

section("9. if / else if / else");

const score = 82;

if (score >= 90) {
  console.log("Оценка 5");
} else if (score >= 75) {
  console.log("Оценка 4");
} else if (score >= 60) {
  console.log("Оценка 3");
} else {
  console.log("Оценка 2");
}

section("10. Диапазоны");

const value = 7;

console.log(0 < value < 10);        // true, но выражение работает НЕ как математическая цепочка
console.log(value > 0 && value < 10); // корректная проверка диапазона

// Например, для value = 100 первое выражение тоже даст true:
const anotherValue = 100;
console.log(0 < anotherValue < 10);          // true - неожиданно
console.log(anotherValue > 0 && anotherValue < 10); // false - правильно

section("11. Вложенное условие");

const userAge = 20;
const userHasTicket = true;

if (userAge >= 18) {
  if (userHasTicket) {
    console.log("Проходите");
  } else {
    console.log("Нужен билет");
  }
} else {
  console.log("Недостаточный возраст");
}

section("12. Тернарный оператор");

const accessMessage = userAge >= 18 ? "Доступ разрешён" : "Доступ запрещён";
console.log(accessMessage);

const x = 2;
const y = 5;
console.log(x > y ? ">" : x < y ? "<" : "=");

section("13. Nullish coalescing ??");

const firstName = null;
console.log(firstName ?? "Гость"); // Гость
console.log(0 || 100);             // 100
console.log(0 ?? 100);             // 0
console.log("" || "empty");       // empty
console.log("" ?? "empty");       // пустая строка

section("14. switch");

const day = 6;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Рабочий день");
    break;
  case 6:
  case 7:
    console.log("Выходной день");
    break;
  default:
    console.log("Некорректный номер дня");
}

section("15. switch сравнивает строго");

const switchValue = 5;

switch (switchValue) {
  case "5":
    console.log("Строка");
    break;
  case 5:
    console.log("Число");
    break;
}

section("16. switch (true)");

const total = 6500;

switch (true) {
  case total >= 10000:
    console.log("Скидка 10%");
    break;
  case total >= 5000:
    console.log("Скидка 5%");
    break;
  case total >= 1000:
    console.log("Скидка 1%");
    break;
  default:
    console.log("Без скидки");
}
