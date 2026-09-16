"use strict";

// Практическая работа №2
// Заполните только участки TODO.
// Названия функций, параметры и module.exports не изменяйте:
// они нужны преподавателю для автоматической проверки.

// 1. Сравнение двух чисел
// Вернуть ">", если a больше b; "<", если a меньше b; "=", если значения равны.
function compareNumbers(a, b) {
  if (a > b) return ">";
  if (a < b) return "<";
  return "=";
}

// 2. Проверка диапазона
// Вернуть true, если value входит в диапазон [min, max] включительно.
// Иначе вернуть false.
function isInRange(value, min, max) {
return value >= min && value <= max;
}

// 3. Проверка доступа
// Доступ разрешён только если возраст >= 18, билет есть и пользователь не заблокирован.
// Вернуть true или false.
function canAccess(age, hasTicket, isBlocked) {
return age >= 18 && hasTicket === true && isBlocked === false;
}

// 4. Оценка по баллам
// 90..100 -> "5"
// 75..89  -> "4"
// 60..74  -> "3"
// 0..59   -> "2"
// Всё остальное -> "Ошибка"
function getGrade(score) {
  if (score >= 90 && score <= 100) return "5";
  if (score >= 75 && score <= 89) return "4";
  if (score >= 60 && score <= 74) return "3";
  if (score >= 0 && score <= 59) return "2";
  return "Ошибка";
}

// 5. Процент скидки
// total >= 10000 -> 10
// total >= 5000  -> 5
// total >= 1000  -> 1
// иначе -> 0
function getDiscountPercent(total) {
  if (total >= 10000) return 10;
  if (total >= 5000) return 5;
  if (total >= 1000) return 1;
  return 0;
}

// 6. Тип дня недели
// 1..5 -> "Рабочий день"
// 6..7 -> "Выходной день"
// остальные значения -> "Ошибка"
// Для этой задачи используйте switch.
function getDayType(day) {
  switch (day) {
    case 1: case 2: case 3: case 4: case 5:
      return "Рабочий день";
    case 6: case 7:
      return "Выходной день";
    default:
      return "Ошибка";
  }
}

module.exports = {
  compareNumbers,
  isInRange,
  canAccess,
  getGrade,
  getDiscountPercent,
  getDayType,
};
