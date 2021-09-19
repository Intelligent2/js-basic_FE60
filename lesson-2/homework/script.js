/*
    Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]
    Найти сумму чисел
    Найти произведение чисел
*/

const nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log('Длина массива =', nums1.length);

let sum=0;
for (i=0; i<nums1.length; i++){
  sum = sum + i;
};
console.log('Сумма чисел =', sum);

let multi=1;
for (i=1; i<nums1.length; i++){
  multi = multi * i;
}
console.log('Произведение чисел =', multi);
// code

/*
    Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]
    Заполнить массив even чётными числами, odd нечётными
*/

const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log('Длина массива =', nums2.length);
const even = [];
const odd = [];
for (i = 0; i < nums2.length; i++) {
  if (nums2[i] % 2 === 0) {
    even.push(nums2[i]);
  } else {
    odd.push(nums2[i]);
  }
}
console.log('Массив чётных чисел =', even);
console.log('Массив нечётных чисел =', odd);
//code

/*
    Дан массив [578,894,982,78,1223,353,123,544,429,5423,1914,120]
    Найти самое большое и самое маленькое число в массиве
*/

const nums3 = [578, 894, 982, 78, 1223, 353, 123, 544, 429, 5423, 1914, 120];

let max=nums3[0];
let min=nums3[0];
for (i=0; i<nums3.length; i++){
  if (nums3[i]>max){
    max=nums3[i]}
}
console.log('Самое большое число в массиве =', max);
for (i=0; i<nums3.length; i++){
  if (nums3[i]<min){
    min=nums3[i]}
}
console.log('Самое маленькое число в массиве =', min);
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
let key=prompt('Введите имя пользователя');
for (i=0; i<users.length; i++){
  if (key.toLowerCase() === users[i].username.toLowerCase()){
    console.log(`Name: ${users[i].name}, Email: ${users[i].email}`);
  }
}