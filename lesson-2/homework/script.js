/*
    Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]
    Найти сумму чисел
    Найти произведение чисел
*/

const nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let sum = 0;
let multi = 1;
// code
for (let i = 0; i <= 12; i++) {
  sum += i;
  if (i > 0) {
    multi *= i
  }
};
console.log(sum);
console.log(multi);


/*
    Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]
    Заполнить массив even чётными числами, odd нечётными
*/

const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const even = [];
const odd = [];
//code
for (let i = 0; i < 12; i++) {
  if (i % 2 === 0) {
    even.push(i);
  } else {
    odd.push(i);
  }
};
console.log(even);
console.log(odd);


/*
    Дан массив [578,894,982,78,1223,353,123,544,429,5423,1914,120]
    Найти самое большое и самое маленькое число в массиве
*/

const nums3 = [578, 894, 982, 78, 1223, 353, 123, 544, 429, 5423, 1914, 120];

let max;
let min;
// code
min = Infinity;
max = -Infinity;
for (let i = 0; i < nums3.length; i++){
  if(nums3[i] > max){
    max = nums3[i];
  } else if (nums3[i] < min){
    min = nums3[i]
  }
}
console.log(max);
console.log(min);
/*
    Дан обьект users
    В  окно prompt необходимо ввести имя пользователя
    Если совпадения есть - вывести в console.log строку вида user name: USER_NAME, user email: USER_EMAIL

    * Добавить возможность поиска без учёта регистра
*/

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
];
let person = prompt("Enter your name");
person = person.toLowerCase()
for(let i = 0;i < users.length;i++){
  if(users[i].name.toLowerCase() === person){
    console.log(`user name ${users[i].name}, user email: ${users[i].email}`)
    break;
  } else if (users[i].name.toLowerCase() !== person) {
	console.log('name not found');
  }
}

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
const value = [];
// code
for (let key in obj){
  keys.push(key);
  value.push(obj[key]);
};
console.log(keys);
console.log(value);
// code

const entries = [];
// code
for (let key in obj) {
  entries.push(key, obj[key]);
}
console.log(entries);
