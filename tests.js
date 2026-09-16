"use strict";

const assert = require("node:assert/strict");
const student = require("./student-template.js");

function test(name, fn) {
  try {
    fn();
    console.log(`✓ ${name}`);
  } catch (error) {
    console.error(`✗ ${name}`);
    console.error(`  ${error.message}`);
    process.exitCode = 1;
  }
}

test("1. Сравнение двух чисел", () => {
  assert.equal(student.compareNumbers(7, 3), ">");
  assert.equal(student.compareNumbers(2, 9), "<");
  assert.equal(student.compareNumbers(5, 5), "=");
  assert.equal(student.compareNumbers(-5, -3), "<");
});

test("2. Проверка диапазона", () => {
  assert.equal(student.isInRange(5, 1, 10), true);
  assert.equal(student.isInRange(1, 1, 10), true);
  assert.equal(student.isInRange(10, 1, 10), true);
  assert.equal(student.isInRange(11, 1, 10), false);
  assert.equal(student.isInRange(-1, 0, 5), false);
});

test("3. Проверка доступа", () => {
  assert.equal(student.canAccess(18, true, false), true);
  assert.equal(student.canAccess(25, true, false), true);
  assert.equal(student.canAccess(17, true, false), false);
  assert.equal(student.canAccess(30, false, false), false);
  assert.equal(student.canAccess(30, true, true), false);
});

test("4. Оценка по баллам", () => {
  assert.equal(student.getGrade(100), "5");
  assert.equal(student.getGrade(90), "5");
  assert.equal(student.getGrade(89), "4");
  assert.equal(student.getGrade(75), "4");
  assert.equal(student.getGrade(74), "3");
  assert.equal(student.getGrade(60), "3");
  assert.equal(student.getGrade(59), "2");
  assert.equal(student.getGrade(0), "2");
  assert.equal(student.getGrade(-1), "Ошибка");
  assert.equal(student.getGrade(101), "Ошибка");
});

test("5. Процент скидки", () => {
  assert.equal(student.getDiscountPercent(15000), 10);
  assert.equal(student.getDiscountPercent(10000), 10);
  assert.equal(student.getDiscountPercent(9999), 5);
  assert.equal(student.getDiscountPercent(5000), 5);
  assert.equal(student.getDiscountPercent(4999), 1);
  assert.equal(student.getDiscountPercent(1000), 1);
  assert.equal(student.getDiscountPercent(999), 0);
});

test("6. Тип дня недели", () => {
  assert.equal(student.getDayType(1), "Рабочий день");
  assert.equal(student.getDayType(5), "Рабочий день");
  assert.equal(student.getDayType(6), "Выходной день");
  assert.equal(student.getDayType(7), "Выходной день");
  assert.equal(student.getDayType(0), "Ошибка");
  assert.equal(student.getDayType(8), "Ошибка");
});

if (!process.exitCode) {
  console.log("\nВсе тесты пройдены.");
}
