/*
    Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]
    Найти сумму чисел
    Найти произведение чисел
*/

const nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let sum=0;
let multi=1;
    console.log('длина массива =', nums1.length);
    for (i=1;i<nums1.length;i++) {
      sum =sum+ i;
    }
    console.log('сумма чисел массива =', sum);
    for (i=1;i<nums1.length;i++) {
      multi =multi* i;
    }
    console.log('произведение чисел массива =', multi);


/*
    Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]
    Заполнить массив even чётными числами, odd нечётными
*/

const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const even = [];
const odd = [];
console.log('длина массива =', nums2.length);
    for (i=0;i<nums2.length;i++) {
      if (i%2 !== 0 ){
        continue
      }
      even.push(nums2[i])
    }
    console.log("массив четных чисел -",even);
    for (i=0;i<nums2.length;i++) {
      if (i%2 === 0){
        continue
      }
      odd.push(nums2[i])
    }
    console.log("массив нечетных чисел -",odd);

/*
    Дан массив [578,894,982,78,1223,353,123,544,429,5423,1914,120]
    Найти самое большое и самое маленькое число в массиве
*/

const nums3 = [578, 894, 982, 78, 1223, 353, 123, 544, 429, 5423, 1914, 120];

let max= nums3[0];
let min= nums3[0];
for (i=0;i<nums3.length;i++) {
  if (nums3[i]>max){
    max=nums3[i]} }
  console.log('самое большое число в массиве', max);
  for (i=0;i<nums3.length;i++) {
  if (nums3[i]<min) {
      min=nums3[i]}
  }
  console.log('самое маленькое число в массиве', min);

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
let key=prompt('Введите имя пользователя',"Peter");
for(i = 0; i <users.length; i++){
  if (key===users[i].username) {
    console.log(`Approved! Name: ${users[i].name}, Email: ${users[i].email}.`)
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

const keys = [0];
for (const keys in obj){
  console.log(Object.keys(obj))
  break
};
const values = [0];
for (const values in obj){
  console.log(Object.values(obj))
  break
};
const entries = [0];
for (const entries in obj){
  console.log(Object.entries(obj))
  break
};
15