/* 
    Создать столько переменных сколько типов данных
    Вывести занчение и тип переменной в console.log
*/
// let a = 1;
// console.log(a);
// console.log (typeof(a));
// let b = 'abc';
// console.log(b);
// console.log (typeof(b));
// let c =  true;
// console.log(c);
// console.log (typeof(c));
// let d = null;
// console.log(d);
// console.log (typeof(d));
// let e = undefined;
// console.log(e);
// console.log (typeof(e));
// let f = 1000n;
// console.log(f);
// console.log (typeof(f));
// let g = Symbol('g');
// console.log(g);
// console.log (typeof(g));

/*
    Создать переменные a = 22 и b = 7. 
    Найти остаток от деления a на b, вывести в alert или console.log

    * Переменные присваиваются через prompt
*/
// let a = prompt('Введите число a');
// let b = prompt('Введите число b');
// let res = a%b;
// console.log(res);

/*
    Создать переменные x и y с рандомными числами. 
    Найти остаток от деления x на y
    Если остаток есть в alert или console.log вывести 'Делится без остатка', иначе вывести 'Делится с остатком {остаток}'.

    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
// let x =  Math.floor(Math.random()*1000);
// console.log (x);
// let y =  Math.floor(Math.random()*1000);
// console.log (y);
// let res = x%y;
// res == 0 ? 'Делится без остатка' : alert(res);

/*
    Создать переменную с результатом 10 в степени 10
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
// let x = Math.pow(10,10);
// alert(x);
/*
    Создать переменную которая хранит квадратный корень из 245
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
// let x = Math.sqrt(245);
// alert(x);
/*
    Создать переменные e и f. 
    Отнять e от f, результат записать в g
    Сделать так, чтобы g было в любом случае положительным
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
// let e = prompt('Введите число e');
// let f = prompt('Введите число f');
// let g = Math.abs(e - f);
// alert(g);

/*
    Создать переменные c и d. 
    Найти найдите модуль разности c и d
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
// let c = prompt('Введите число c');
// let d = prompt('Введите число d');
// let res = Math.abs(c-d);
// alert(res);

/*
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут LAST_NAME NAME, мне AGE лет/год'
    Вывести значение этой переменной в alert или console.log
    Изменить значение переменной на любое другое
    Результат снова вывести в alert или console.log
 */
    // let NAME = prompt('Введите ваше Имя');
    // let LAST_NAME = prompt('Введите вашу Фамилию');
    // let AGE = prompt('Введите ваш Возраст');
    // let hello = `Меня зовут ${LAST_NAME} ${NAME}, мне ${AGE} лет/год`;
    // alert(hello);
    // NAME = 'Sasha';
    // hello = `Меня зовут ${LAST_NAME} ${NAME}, мне ${AGE} лет/год`;
    // alert(hello);

/*
    Создать обьект {name: '', lastName: '', age: null}
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут lastName name, мне age лет/год'
*/
// let Obj = {
//     name: '', 
//     lastName: '', 
//     age: null
// }
// Obj.name = prompt('Имя');
// Obj.lastName = prompt('Фамилия');
// Obj.age = prompt('Возраст');
// let hello = `Mеня зовут ${Obj.lastName} ${Obj.name}, мне ${Obj.age} лет/год`
// alert(hello);

/*
    Вывести окно prompt с вопросом о возрасте
    В зависимости от ответа вывести alert с текстом “поздравляем, вам X полных лет”
    Вывести окно alert с утверждением совершеннолетний пользователь или нет
*/
// let age = prompt('Сколько тебе лет?');
// alert (`Поздравляю, тебе ${age} полных лет`);
// alert(age >= 18 ? 'Совершеннолетний' : 'Мало');
