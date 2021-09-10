/*
    Создать столько переменных сколько типов данных
    Вывести занчение и тип переменной в console.log
*/
let str = 'string';
let num = 100;
let bigInt = 1000000n;
let bool = true;
let n = null;
let u = undefined;
let symv = Symbol('P');
let obj = {
    name:'Pavel',
    last_name:'Nedvetsky'
};
console.log(typeof str, str, typeof  num, num, typeof bigInt, bigInt, typeof bool, bool, typeof  n, n,
    typeof u, u, typeof symv, symv, typeof  obj, obj);
/*
    Создать переменные a = 22 и b = 7.
    Найти остаток от деления a на b, вывести в alert или console.log

    * Переменные присваиваются через prompt
*/
// let a = prompt('Number a');
// let b = prompt('Number b');
// console.log(a%b);
/*
    Создать переменные x и y с рандомными числами.
    Найти остаток от деления x на y
    Если остаток есть в alert или console.log вывести 'Делится без остатка', иначе вывести 'Делится с остатком {остаток}'.

    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
let x = Math.floor(Math.random()*100);
let y = Math.floor(Math.random()*100);
console.log(x,y,x%y);
console.log(x % y === 0 ? 'Делится без остатка': 'Делится с остатком '+ x%y);
/*
    Создать переменную с результатом 10 в степени 10
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
let pow = Math.pow(10,10);
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
// let e = prompt('Number e');
// let f = prompt('Number f');
// let g = Math.abs(e-f);
// console.log('Number g', g);
/*
    Создать переменные c и d.
    Найти найдите модуль разности c и d
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
// let c = prompt('Number c');
// let d = prompt('Number d');
// console.log('c-d',Math.abs(c-d));
/*
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут LAST_NAME NAME, мне AGE лет/год'
    Вывести значение этой переменной в alert или console.log
    Изменить значение переменной на любое другое
    Результат снова вывести в alert или console.log
 */
// let name = prompt('Введите ваше имя:');
// let last_name = prompt('Введите вашу фамилию:');
// let age = prompt('Введите ваш возраст:');
// let human = `Меня зовут ${last_name} ${name}, мне ${age} лет/год`;
// alert(human);
// human = 'Другое значение';
// alert(human);
/*
    Создать обьект {name: '', lastName: '', age: null}
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут lastName name, мне age лет/год'
*/
// let human_obj = {
//     name: '',
//     lastname: '',
//     age: null
// };
// human_obj.name = prompt('Ваше имя:');
// human_obj.lastname = prompt('Ваша фамилия:');
// human_obj.age = prompt('Ваш возраст:');
// let human_data = `Меня зовут ${human_obj.lastname} ${human_obj.name}, мне ${human_obj.age} лет/год`;
// alert(human_data);
/*
    Вывести окно prompt с вопросом о возрасте
    В зависимости от ответа вывести alert с текстом “поздравляем, вам X полных лет”
    Вывести окно alert с утверждением совершеннолетний пользователь или нет
*/
let your_age = prompt('Ваш возраст');
alert(`поздравляем, вам ${your_age} полных лет`);
alert(your_age >= 18 ? 'Вы совершеннолетний' : 'Вы несовершеннолетний');