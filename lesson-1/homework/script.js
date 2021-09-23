/* 
    Создать столько переменных сколько типов данных
    Вывести занчение и тип переменной в console.log
*/
    let n = 32;
    n = 33;

    const bigInt = 8457289594n;

    let string = "йо";
    console.log("Йо");

    let age = null;

    let isGreater = 2 > 1;
    alert (isGreater);

    let age = 33;
    age = undefined;
    alert (age);


/*
    Создать переменные a = 22 и b = 7. 
    Найти остаток от деления a на b, вывести в alert или console.log

    * Переменные присваиваются через prompt
*/
    let a = 22;
    let b = 7;
    alert( 22 / 7); 
/*
    Создать переменные x и y с рандомными числами. 
    Найти остаток от деления x на y
    Если остаток есть в alert или console.log вывести 'Делится без остатка', иначе вывести 'Делится с остатком {остаток}'.

    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
    let x ;
    let y ;
    Math.floor(Math.random() * max);
    console.log( x / y);
/*
    Создать переменную с результатом 10 в степени 10
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
    Math.pow(10, 10);
/*
    Создать переменную которая хранит квадратный корень из 245
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
    let = 15.6524758425;
    console.log(let);

/*
    Создать переменные e и f. 
    Отнять e от f, результат записать в g
    Сделать так, чтобы g было в любом случае положительным
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/


/*
    Создать переменные c и d. 
    Найти найдите модуль разности c и d
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
 let = c;
 let = d;


/*
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут LAST_NAME NAME, мне AGE лет/год'
    Вывести значение этой переменной в alert или console.log
    Изменить значение переменной на любое другое
    Результат снова вывести в alert или console.log
 */
    let name = prompt("Какое Имя?");
    let lastname = prompt("Фамилия");
    let age = prompt("сколько лет");
    alert(`Меня зовут Ed Kuprianov 21`);
    alert(`нет мне все таки 25`);

    /*
    Создать обьект {name: '', lastName: '', age: null}
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут lastName name, мне age лет/год'
*/
let name = prompt("Какое Имя?");
let lastname = prompt("Фамилия");
let age = prompt("сколько лет");
alert(`Меня зовут Ed Kuprianov 21`);
/*
    Вывести окно prompt с вопросом о возрасте
    В зависимости от ответа вывести alert с текстом “поздравляем, вам X полных лет”
    Вывести окно alert с утверждением совершеннолетний пользователь или нет
*/
 let age = prompt("сколько живешь ? ");
 alert(`Ого ${age} Поздравлем еще живой!`);
