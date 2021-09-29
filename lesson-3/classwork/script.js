/*
    Создать функцию с именем getBiggest
    Функция должна возвращать самое большое число из переданных параметров
    Функция должна уметь работать с разным количетвом параметров
*/
const getBiggest = function (...args) {
	let max = args[0];
	for (let i = 0; i < args.length; i++) {
		if (max < args[i]) {
			max = args[i];
		}
	}
	return max;
};

// const getBiggest = (...nums) => {
//   let max = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//     }
//   }

//   return max;
// };

/*
    Создать функцию с именем duplicate
    Функция должна принимать массив
    Функция должна возратить удвоенный массив
    Пример: [1,2,3] => [1,2,3,1,2,3] 
*/
const duplicate = function (args) {
	args.push(...args);
	return args;
};

// const duplicate = (array) => {
//   array.push(...array);
//   return array;
// };

/*
    Создать функцию с именем isPalindrome
    Проверить является ли строка палиндромом
    Пример палиндромов: 'доход', 'шалаш'
*/
const isPalindrome = function (word) {
	let arr = word.split('').reverse().join('');
	if (arr === word) {
		return true;
	} else {
		return false;
	}
};

/*
    Создайте массив с десятью случайными элементами от 0 до 100;
    Создать функцию с именем replacer, которая будет заменять все “0” на строку “zero”;
    Функция должна возвращать новый массив
    Пример: [1zero2, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1];

    * для рандомного числа используйте Math.floor(Math.random() * 100)
*/
let arr = [];
for (i = 0; i < 10; i++) {
	let a = Math.floor(Math.random() * 100);
	arr.push(a);
}

function replacer(arr) {
	for (let g = 0; g < 10; g++) {
		if (arr[g] === 100) {
			arr[g] /= 100;
			arr[g] += 'zerozero';
		}
		if (arr[g] === 0) {
			arr[g] = 'zero';
		}
		if (arr[g] % 10 === 0) {
			arr[g] /= 10;
			arr[g] += 'zero';
		}
	}
	console.log(arr);
}
replacer(arr);
