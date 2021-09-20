/*
    Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]
    Найти сумму чисел
    Найти произведение чисел
*/

const nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let sum = 0;
// let multi = 1;
// for ( let i = 0; i < nums1.length; i++ ) {
//   sum += nums1[i]
//   if(nums1[i]) {
//     multi *= nums1[i]
//   }
// }

/*
    Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]
    Заполнить массив even чётными числами, odd нечётными
*/

const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const even = [];
const odd = [];
// for (let i = 0; i < nums2.length; i++ ) {
//   if ( nums2[i]%2 ) { //how this part works?
//     odd.push(nums2[i])
//   } else {
//     even.push(nums2[i])
//   }
// }

/*
    Дан массив [578,894,982,78,1223,353,123,544,429,5423,1914,120]
    Найти самое большое и самое маленькое число в массиве
*/

const nums3 = [578, 894, 982, 78, 1223, 353, 123, 544, 429, 5423, 1914, 120];

// let max = Math.max.apply(Math, nums3);
// let min = Math.min.apply(Math, nums3);
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
// let nameInput = prompt("Enter your name", '');
// for (let i = 0; i < users.length; i++){
//   if (nameInput == users[i].username) {
//     console.log(`user name: ${users[i].username}, user email: ${users[i].email}`)
//   }
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

const keys = []
for (const key in obj) {
  keys.push(key)
}

const values = [];
for (const val in obj) {
  values.push(obj[val])
}

const entries = [];
for (const ent in obj) {
  entries.push([ent, obj[ent]])
}
