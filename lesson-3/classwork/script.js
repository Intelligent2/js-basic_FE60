/*
    Создать функцию с именем getBiggest
    Функция должна возвращать самое большое число из переданных параметров
    Функция должна уметь работать с разным количетвом параметров
*/

const getBiggest = (...nums)=>{
    let max=0;
    for (i=0;i<nums.length;i++) {
        if (nums[i]>max){
            max=nums[i]
        }
    }
  return max;
}
/*
    Создать функцию с именем duplicate
    Функция должна принимать массив
    Функция должна возратить удвоенный массив
    Пример: [1,2,3] => [1,2,3,1,2,3] 
    
*/

const duplicate = (res)=>{
    res.push(...res);
    return res ;
}

/*
    Создать функцию с именем isPalindrome
    Проверить является ли строка палиндромом
    Пример палиндромов: 'доход', 'шалаш'
*/
const isPalindrome = (string)=> string===string.split('').reverse().join('');
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
