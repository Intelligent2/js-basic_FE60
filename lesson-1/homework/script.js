/* 
    Создать столько переменных сколько типов данных
    Вывести занчение и тип переменной в console.log
*/
let num = 3;
console.log(typeof num);
let bInt = 100000000000000000000042627747242752244n;
console.log(typeof bInt);
let str = "string";
console.log(typeof str);
let tr = true;
console.log(typeof tr);
let nu = null;
console.log(typeof nu);
let und;
console.log(typeof und);
let symb = Symbol([]);
console.log(typeof symb);
let obj = {};
console.log(typeof obj);

/*
    Создать переменные a = 22 и b = 7. 
    Найти остаток от деления a на b, вывести в alert или console.log
*/
    let a =22;
    let b = 7;
    const res = a % b;
    console.log(a);
/*
    * Переменные присваиваются через prompt
/*
    Создать переменные x и y с рандомными числами. 
    Найти остаток от деления x на y
    Если остаток есть в alert или console.log вывести 'Делится без остатка', иначе вывести 'Делится с остатком {остаток}'.

    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
    let x = prompt('Переменная "x"');
    let y = prompt('Переменная "y"');
    const sol = x % y;
    sol == 0 ? alert('Делится без остатка') : alert(`Делится с остатком ${sol}`);
    // Неразобрался как тут использовать Math...

/*
    Создать переменную с результатом 10 в степени 10
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
    let num = Math.pow(10, 10);
    console.log(num);
/*
    Создать переменную которая хранит квадратный корень из 245
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
    let qrt = Math.sqrt(245);
    console.log(qrt);

/*
    Создать переменные e и f. 
    Отнять e от f, результат записать в g
    Сделать так, чтобы g было в любом случае положительным
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
    
    * Переменные присваиваются через prompt
*/
    let e = 5;
    let f = 10;
    let g = e - f;
    console.log(Math.abs(g));
/*
    Создать переменные c и d. 
    Найти найдите модуль разности c и d
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
    let c = prompt('Переменная "с"');
    let d = prompt('Переменная "d"');
    c = Math.abs(c - d)
    alert(`Модуль разности равен ${c}`);
/*
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут LAST_NAME NAME, мне AGE лет/год'
    Вывести значение этой переменной в alert или console.log
    Изменить значение переменной на любое другое
    Результат снова вывести в alert или console.log
 */
    let userName = prompt('What is your name?');
    let lastName = prompt('What is your lastname?');
    let age = prompt('How old are you?');
    alert(`My name is ${lastName} ${userName}, i am ${age} years old`);
    userName = 'Hello, what is your name?'
    alert(`My name is ${lastName} ${userName}, i am ${age} years old`);
/*
    Создать обьект {name: '', lastName: '', age: null}
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут lastName name, мне age лет/год'
*/
    let user = {
        name: '',
        lastName: '',
        age: null
    }
    user.name = prompt('What is your name?');
    user.lastName = prompt('What is your lastname?');
    user.age = prompt('How old are you?');
    alert(`My name is ${user.lastName} ${user.name}, i am ${user.age} years old`);
    // Или надо было создавать так?
    // let str = `Меня зовут ${user.lastName} ${user.name}, мне ${user.age} лет/год`;

/*
    Вывести окно prompt с вопросом о возрасте
    В зависимости от ответа вывести alert с текстом “поздравляем, вам X полных лет”
    Вывести окно alert с утверждением совершеннолетний пользователь или нет
*/
    let age = prompt('How old are you?');
    alert(`Congratulations, you are ${age} full years old`);
    let qst = confirm('Are you 18 years old?');
    alert(qst);