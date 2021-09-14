/* 
    Создать столько переменных сколько типов данных
    Вывести занчение и тип переменной в console.log
*/
 let number = 100;
 console.log(typeof(number));
 let bigInt = 10000000n;
 console.log(typeof(bigInt));
 let textString = "Some text";
 console.log(typeof(textString));
 let trySomething = true;
 console.log(typeof(trySomething));
 let someNull = null;
 console.log(typeof(someNull));
 let undefi;
 console.log(typeof(undefi));
 let symb = Symbol("a");
 console.log(typeof(symb));
 let obg = {
     name: "Dzmitry",
     weight: 100,
 };
 console.log(obg);
/*
    Создать переменные a = 22 и b = 7. 
    Найти остаток от деления a на b, вывести в alert или console.log

    * Переменные присваиваются через prompt
*/
let a = 22;
let b = 7;
let z = a % b;
console.log(z);

let num1 = +prompt('Переменная 1', 100);
let num2 = +prompt('Переменная 2', 7);
let sum = num1 % num2;
console.log(sum);

/*
    Создать переменные x и y с рандомными числами. 
    Найти остаток от деления x на y
    Если остаток есть в alert или console.log вывести 'Делится без остатка', иначе вывести 'Делится с остатком {остаток}'.

    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
let x = +prompt("Число 1", 36);
let y = +prompt("Число 2", 5);
console.log(Math.floor(x % y) ? `Делится с остатком ${Math.floor(x % y)}` : `Делится без остатка`);
/*
    Создать переменную с результатом 10 в степени 10
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
let someResult = Math.pow(10, 10);
console.log(someResult);
/*
    Создать переменную которая хранит квадратный корень из 245
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
let cube = Math.sqrt(245);
console.log(cube);
/*
    Создать переменные e и f. 
    Отнять e от f, результат записать в g
    Сделать так, чтобы g было в любом случае положительным
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
let e = +prompt("Переменная 1", 5);
let f = +prompt("Переменная 2", 10);
let g = Math.abs(e - f);
console.log(g);
/*
    Создать переменные c и d. 
    Найти найдите модуль разности c и d
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
let c = +prompt("Значение 1", 5);
let d = +prompt("Значение 2", 10);
console.log(Math.abs(c - d ));

/*
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут LAST_NAME NAME, мне AGE лет/год'
    Вывести значение этой переменной в alert или console.log
    Изменить значение переменной на любое другое
    Результат снова вывести в alert или console.log
 */
let yourName = prompt("Твое Имя", "Женя");
let yourFamily = prompt("Твоя Фамилия", "Петровский");
let yourAge = prompt("Твой возраст", "25");
let myIntroduce = `Меня зовут ${yourFamily} ${yourName}, мне ${yourAge} лет/год`
console.log(myIntroduce);
/*
    Создать обьект {name: '', lastName: '', age: null}
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут lastName name, мне age лет/год'
*/
let obg1 = {
 name: "",
 lastName: "",
 age: null
};
obg1.name = prompt("Твое Имя", "Денис");
obg1.lastName = prompt("Твоя Фамилия", "Петровский");
obg1.age = +prompt("Твой возраст", "13");
let myObgIntroduce = `Меня зовут ${obg1.lastName} ${obg1.name}, мне ${obg1.age} лет/год`;
console.log(myObgIntroduce);
/*
    Вывести окно prompt с вопросом о возрасте
    В зависимости от ответа вывести alert с текстом “поздравляем, вам X полных лет”
    Вывести окно alert с утверждением совершеннолетний пользователь или нет
*/
let yourAgeName = +prompt("Ваш Возраст", 30);
alert("Поздравляем, вам " + yourAgeName + " полных лет");
alert(yourAgeName >= 18 ? "Вы совершеннолетний" : "Вы несовершеннолетний");
