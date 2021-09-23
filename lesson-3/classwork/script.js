
/*

    Создать функцию с именем getBiggest
    Функция должна возвращать самое большое число из переданных параметров
    Функция должна уметь работать с разным количетвом параметров
*/
 /* const getBiggest = (...nums)=>{
     let max=Infinity;
             for (let i = 0; i < nums.length; i++){
           (max=nums[i] > max) {    
        max = nums[i];
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
    const duplicate = (array) =>{
        array.push(...array);
        return array;
    }


/*
    Создать функцию с именем isPalindrome
    Проверить является ли строка палиндромом
    Пример палиндромов: 'доход', 'шалаш'
*/
function isPalindrome(s,i) {
    return(i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
   }
   console.log(isPalindrome('test'));
   console.log(isPalindrome('racecar'));

/*
    Создайте массив с десятью случайными элементами от 0 до 100;
    Создать функцию с именем replacer, которая будет заменять все “0” на строку “zero”;
    Функция должна возвращать новый массив
    Пример: [1zero2, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1];

    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/
function randomArray(count, min, max) {
    if (count > (max - min)) return;
    var arr = [], t;
  
    while (count) {
      t = Math.floor(Math.random() * (max - min) + min);
      if (arr.indexOf(t) === -1) {
        arr.push(t);
        count--;
      }
    }
    return arr;
  }
  console.log(randomArray(10, 1, 20));

  
