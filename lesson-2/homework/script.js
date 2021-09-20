/*
    Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]
    Найти сумму чисел
    Найти произведение чисел
*/

// const nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let sum = 0;
// let multi = 0;
// for (let i=0; i<nums1.length-1;i++){
// sum += nums1[i];
// multi *= nums1[i];
// }
// alert(sum);
// alert(multi);
// code

/*
    Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]
    Заполнить массив even чётными числами, odd нечётными
*/

const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const even = [];
const odd = [];

// for (let i=0;i<nums2.length;i++){
//   let g = nums2[i];
//     if (g%2===0) {
//       even.push(i);
//     }else{
//       odd.push(i);
//     }
//   }
//   console.log(odd);
//   console.log(even);
//   console.log(nums2)


// while (nums2.length > 0) {
//   let i = nums2.shift()
//   if (i%2===0) {
//     even.push(i)
//   }else{
//     odd.push(i);
//   }
// }
//   console.log(odd);
//   console.log(even);

//code

/*
    Дан массив [578,894,982,78,1223,353,123,544,429,5423,1914,120]
    Найти самое большое и самое маленькое число в массиве
*/

const nums3 = [578, 894, 982, 78, 1223, 353, 123, 544, 429, 5423, 1914, 120];

// let max = 0;
// let min = 0;

// let max = nums3[0];
// for (let g = 1; g < nums3.length; g++) {
// 	if (max < nums3[g]) {
// 		max = nums3[g];
// 	}
// }
// alert(max);
// let min = nums3[0];
// for (let g = 1; g < nums3.length; g++) {
// 	if (min > nums3[g]) {
// 		min = nums3[g];
// 	}
// }
// alert(min);

// code

/*
    Дан обьект users
    В  окно prompt необходимо ввести имя пользователя
    Если совпадения есть - вывести в console.log строку вида user name: USER_NAME, user email: USER_EMAIL

    * Добавить возможность поиска без учёта регистра
*/

const users = [
	{
		id: 1,
		name: 'Leanne Graham',
		username: 'Bret',
		email: 'Sincere@april.biz',
	},
	{
		id: 2,
		name: 'Ervin Howell',
		username: 'Antonette',
		email: 'Shanna@melissa.tv',
	},
	{
		id: 3,
		name: 'Clementine Bauch',
		username: 'Samantha',
		email: 'Nathan@yesenia.net',
	},
];

// let NAME = prompt('Введите имя');
// NAME = NAME.toLowerCase();

// for (let i = 0; i < users.length; i++) {
// 	if (users[i].name.toLowerCase() === NAME) {
// 		console.log(`user name: ${users[i].username}, user email: ${users[i].email}`);
// 		break;
// 	}
// 	if (i === users.length - 1) {
// 		console.log('Совпадений не найдено');
// 	}
// }

/*
    Дан объект {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
    
    Создать массив с ключами обьекта (должен работать как Object.keys())
    Создать массив со значениями обьекта (должен работать как Object.values())
    
    * Создать массив со формата [[propName1, value1], ...] (должен работать как Object.entries())
*/

const obj = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
};

const keys = [];
const values = [];
const entries = [];
//code
for (const propName in obj){
  keys.push(propName);
}
console.log (keys)

for (const propName in obj){
  values.push(obj[propName]);
}
console.log (values)

for (const propName in obj){
  entries.push([propName,obj[propName]])
}
console.log (entries)

// code
