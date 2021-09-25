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
// const isPalindrome = (str) => str.split("").reverse().join("")===str;
const isPalindrome = function (str) {
    for (let i = 0; i<(str.length-1)/2; i++) {
      if (str[i] != str[str.length-1 -i]) {
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
let arr = [];
for (let i = 0; i < 10; i++){
  arr.push(Math.floor(Math.random() * 100))
}
console.log(arr);
const replacer = function (array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].toString().includes("0")) {
          let str = array[i].toString();
          let newStr = "";
          for (let j = 0; j < str.length; j++) {
              if (str[j] === "0") {
                  newStr += "zero"
              }
              else newStr+= str[j]
          }
          newArr.push(newStr)
      }
      else newArr.push(array[i])

    }
    return newArr
};