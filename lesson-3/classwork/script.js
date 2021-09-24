/*
    Создать функцию с именем getBiggest
    Функция должна возвращать самое большое число из переданных параметров
    Функция должна уметь работать с разным количетвом параметров
*/

const getBiggest = (...nums) => {
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
};

/*
    Создать функцию с именем duplicate
    Функция должна принимать массив
    Функция должна возратить удвоенный массив
    Пример: [1,2,3] => [1,2,3,1,2,3] 
*/

const duplicate = (array) => {
  array.push(...array);
  return array;
};

/*
    Создать функцию с именем isPalindrome
    Проверить является ли строка палиндромом
    Пример палиндромов: 'доход', 'шалаш'
*/

const isPalindrome = function (string) {
    for (let i = 0; i <(string.length-1)/2; i++) {
        if (string[i] != string[string.length-1 - i]) {
            return false
        }
    }
    return true
};

/*
    Создайте массив с десятью случайными элементами от 0 до 100;
    Создать функцию с именем replacer, которая будет заменять все “0” на строку “zero”;
    Функция должна возвращать новый массив
    Пример: [1zero2, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1];

    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/


const arrays = [];
while (arrays.length < 10) {
  const randomNum = Math.floor(Math.random() * 100);
  if (arrays.includes(randomNum)) {
    continue;
  }
  arrays.push(randomNum);
}
console.log(arrays);