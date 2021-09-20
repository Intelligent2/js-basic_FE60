/*
    Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]
    Найти сумму чисел
    Найти произведение чисел
*/

const nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let sum = 0;
let multi = 1;
  for(let i = 0; i <= nums1.length; i++ ){
    sum += i;
    if(i > 0){
      multi *= i;
    }
  }
console.log(sum)
console.log(multi)
// code

/*
    Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]
    Заполнить массив even чётными числами, odd нечётными
*/

const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const even = [];
const odd = [];
for(let i = 0; i < nums1.length; i++ ){
  if(i % 2 === 0) {
    even.push(i)
  }else if(i % 2 === 1) {
    odd.push(i)
  }
}
console.log(even)
console.log(odd)
//code

/*
    Дан массив [578,894,982,78,1223,353,123,544,429,5423,1914,120]
    Найти самое большое и самое маленькое число в массиве
*/

const nums3 = [578, 894, 982, 78, 1223, 353, 123, 544, 429, 5423, 1914, 120];

let max = nums3[0]
let min = nums3[0]

for(let i = 0; i < nums3.length; i++ ){
  if(max < nums3[i]){
    max = nums3[i]
  }if(min > nums3[i]){
    min = nums3[i]
  }
} 
console.log(max)
console.log(min)
  

// code

/*
    Дан обьект users
    В  окно prompt необходимо ввести имя пользователя
    Если совпадения есть - вывести в console.log строку вида user name: USER_NAME, user email: USER_EMAIL

    * Добавить возможность поиска без учёта регистра
*/
let userName = prompt("Ввести имя пользователя");

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
for(let propName in users) {
  if (users[propName].name === userName) {
    console.log('User_name: '+ users[propName].username + ', ' + 'User_email: ' + users[propName].email);
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
const values = [];
const entries = [];
for(let propName2 in obj){
  keys.push(propName2)
  values.push(obj[propName2])
  entries.push([propName2,obj[propName2]])
  //entries.push(`${propName2} ${obj[propName2]}`)
}

console.log(keys)
console.log(values)
console.log(entries)
