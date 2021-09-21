/*
    Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]
    Найти сумму чисел
    Найти произведение чисел
*/

const nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let sum;
let multi;
// code
sum = nums1.reduce(function (res,number) {
    return res+number
});
console.log('Сумма', sum);
multi = 1;
for (let i=0; i<nums1.length; i++) {
    if (nums1[i]===0){
        continue
    }
    multi *= nums1[i]
}
console.log('Произведение', multi);
/*
    Дан массив [0,1,2,3,4,5,6,7,8,9,10,11,12]
    Заполнить массив even чётными числами, odd нечётными
*/

const nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const even = [];
const odd = [];
//code
for (let i = 0; i < nums2.length; i++){
    if (nums2[i] === 0){
        continue
    }
    else if (nums2[i] % 2 === 0){
        even.push(nums2[i])
    }
    else {
        odd.push(nums2[i])
    }
}
console.log('Чётные',even);
console.log('Нечётные',odd);
/*
    Дан массив [578,894,982,78,1223,353,123,544,429,5423,1914,120]
    Найти самое большое и самое маленькое число в массиве
*/

const nums3 = [578, 894, 982, 78, 1223, 353, 123, 544, 429, 5423, 1914, 120];

let max;
let min;
// code
max = 0;
min = nums3[0];
for (let i = 0; i < nums3.length; i++){
    if (nums3[i] > max){
        max = nums3[i]
    }
    if (nums3[i] < min){
        min = nums3[i]
    }
}
console.log('Минимальное', min);
console.log('Максимальное', max);
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
let askname = prompt('Введите имя пользователя');
let name = askname.toLowerCase();

let user;
for (let i = 0; i < users.length; i++) {
    let name1 = users[i].username.toLowerCase();
    if (name1 == name) {
        user = users[i]
    }
}
console.log(`user name: ${user.username}, user email: ${user.email}`);
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
// code
for (const propName in obj) {
    keys.push(propName)
}
console.log(keys);
const values = [];
// code
for (const propName in obj) {
    values.push(obj[propName])
}
console.log(values);
const entries = [];
// code
for (const propName in obj) {
    entries.push([propName, obj[propName]])
}
console.log(entries);