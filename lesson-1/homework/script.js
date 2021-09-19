/* 
    Создать столько переменных сколько типов данных
    Вывести занчение и тип переменной в console.log
*/
// 
let number = 27;
console.log(number, typeof number);

let bigInt = 123456789n;
console.log(bigInt, typeof bigInt);

let string = 'Andrey';
console.log(string, typeof string);

let boolean = 4 > 1;
console.log(boolean, typeof boolean);

let n = null;
console.log(n, typeof n);

let u = undefined;
console.log(u, typeof u);

let symbol = Symbol('symbol');
console.log(symbol, typeof symbol);

let object = {
    country:'Belarus',
    city:'Minsk'
};
console.log(object, typeof object)

/*
    Создать переменные a = 22 и b = 7. 
    Найти остаток от деления a на b, вывести в alert или console.log

    * Переменные присваиваются через prompt
*/

let a = prompt('Введите число', 22);
let b = prompt('Введите число', 7);
alert(a % b);

/*
    Создать переменные x и y с рандомными числами. 
    Найти остаток от деления x на y
    Если остаток есть в alert или console.log вывести 'Делится без остатка', иначе вывести 'Делится с остатком {остаток}'.

    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

let x = Math.floor(Math.random() * 100);
let y = Math.floor(Math.random() * 100);
console.log(x, y, x % y);
console.log(x % y === 0 ? 'Делится без остатка': 'Делится с остатком' + x % y);

/*
    Создать переменную с результатом 10 в степени 10
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

let pow = Math.pow(10, 10);
console.log(pow);

/*
    Создать переменную которая хранит квадратный корень из 245
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

let sqrt = Math.sqrt(245);
console.log(sqrt);

/*
    Создать переменные e и f. 
    Отнять e от f, результат записать в g
    Сделать так, чтобы g было в любом случае положительным
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/

let e = prompt('Введите число');
let f = prompt('Введите число');
let g = Math.abs(e-f);
console.log('Результат', g);

/*
    Создать переменные c и d. 
    Найти найдите модуль разности c и d
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
// 
let c = prompt('Введите число');
let d = prompt('Введите число');
let abs = Math.abs(c-d);
console.log('c-d', abs);

/*
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут LAST_NAME NAME, мне AGE лет/год'
    Вывести значение этой переменной в alert или console.log
    Изменить значение переменной на любое другое
    Результат снова вывести в alert или console.log
 */

let name = prompt('Введите ваше имя:');
let last_name = prompt('Введите вашу фамилию:');
let age = prompt('Введите ваш возраст:');
let info = `Меня зовут ${last_name} ${name}, мне ${age} лет/год`;
alert(info);
info = 'Меня зовут Зигизмунд Альфредович, мне 40 годиков';
alert(info);

/*
    Создать обьект {name: '', lastName: '', age: null}
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут lastName name, мне age лет/год'
*/

let info_object = {
    name: '',
    lastName: '',
    age: ''
};
info_object.name = prompt('Введите ваше имя:');
info_object.last_name = prompt('Введите вашу фамилию:');
info_object.age = prompt('Введите ваш возраст:');
let info_data = `Меня зовут ${info_object.last_name} ${info_object.name}, мне ${info_object.age} лет/год`;
alert(info_data);

/*
    Вывести окно prompt с вопросом о возрасте
    В зависимости от ответа вывести alert с текстом “поздравляем, вам X полных лет”
    Вывести окно alert с утверждением совершеннолетний пользователь или нет
*/

let your_age = prompt('Введите ваш возраст:');
alert(`Поздравляем, вам ${your_age} полных лет`);
alert(your_age >=18 ? 'Вы совершеннолетний' : 'Вы несовершеннолетний');