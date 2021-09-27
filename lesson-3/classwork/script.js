/*
    Создать функцию с именем getBiggest
    Функция должна возвращать самое большое число из переданных параметров
    Функция должна уметь работать с разным количетвом параметров
*/
const getBiggest = (...args) => {
  return Math.max(a, b, ...args)
  let max = -Infinity
  for (let i = 0; i < args.length; i++) {
    if (args[i] > max) {
      max = args[i]
    }
  }
}
/*
    Создать функцию с именем duplicate
    Функция должна принимать массив
    Функция должна возратить удвоенный массив
    Пример: [1,2,3] => [1,2,3,1,2,3]
*/

const duplicate = arr => {
  for (let i = 0; i < arr.length; i++) {
    arr.push(i)
  }
}

// const duplicate = (arr) => {
//   arr.push(...arr);
//   return arr;
// }
/*
    Создать функцию с именем isPalindrome
    Проверить является ли строка палиндромом
    Пример палиндромов: 'доход', 'шалаш'
*/
const isPalindrome = str => str === str.split('').reverse().join('')

//use WHILE LOOP
/*
    Создайте массив с десятью случайными элементами от 0 до 100;
    Создать функцию с именем replacer, которая будет заменять все “0” на строку “zero”;
    Функция должна возвращать новый массив
    Пример: [1zero2, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1];

    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/
