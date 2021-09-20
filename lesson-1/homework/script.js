/* 
    Создать столько переменных сколько типов данных
    Вывести занчение и тип переменной в console.log
*/
let num = 10
console.log(num)
console.log(typeof num);
let str = 'fdgdfgdf'
console.log(str)
console.log(typeof str);
let bool = true
console.log(bool)
console.log(typeof bool);
let big = 10n
console.log(big)
console.log(typeof big);
let nul = null
console.log(nul)
console.log(typeof nul);
let undef = undefined
console.log(undef)
console.log(typeof undef);
let Sym = Symbol ('a')
console.log(Sym)
console.log(typeof Sym);
/*
    Создать переменные a = 22 и b = 7. 
    Найти остаток от деления a на b, вывести в alert или console.log

    * Переменные присваиваются через prompt
*/
let a = prompt('Ввод',22);
let b = prompt('Ввод',7);
console.log (a%b);

/*
    Создать переменные x и y с рандомными числами. 
    Найти остаток от деления x на y
    Если остаток есть в alert или console.log вывести 'Делится без остатка', иначе вывести 'Делится с остатком {остаток}'.

    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
let x = 95;
let y = 45;
let z = x%y;
let result ;
result = (z > 0) ? 'Делится с остатком ' + z : 'Делится без остатка' ;
console.log(result);
/*
    Создать переменную с результатом 10 в степени 10
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
let q = Math.pow(10, 10);
console.log(q);
/*
    Создать переменную которая хранит квадратный корень из 245
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
let v = Math.sqrt(245);
console.log(v);
/*
    Создать переменные e и f. 
    Отнять e от f, результат записать в g
    Сделать так, чтобы g было в любом случае положительным
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
let e = prompt('Ввод','');
let f = prompt('Ввод','');
let g = Math.abs(e - f);
console.log(g);
/*
    Создать переменные c и d. 
    Найти найдите модуль разности c и d
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
let cc = prompt('Ввод','');
let dd = prompt('Ввод','');
console.log(Math.abs(cc - dd));
/*
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут LAST_NAME NAME, мне AGE лет/год'
    Вывести значение этой переменной в alert или console.log
    Изменить значение переменной на любое другое
    Результат снова вывести в alert или console.log
 */

let name1 = prompt('Как тебя зовут?', '');
let lasName1 = prompt('Какая у тебя фамилия?','')
let age1 = prompt('Сколько тебе лет?','')
let form1 = 'Меня зовут '+ lasName1+ ' ' + name1 + ', мне ' + age1 + ' лет/год'
console.log(form1)
/*
    Создать обьект {name: '', lastName: '', age: null}
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут lastName name, мне age лет/год'
*/
let user = {

    name2: prompt('Как тебя зовут?', ''),  
    lastName2: prompt('Какая у тебя фамилия?',''),
    age2: prompt('Сколько тебе лет?','') 

}
let user_1 = 'Меня зовут '+ user.lastName2+ ' ' + user.name2 + ', мне ' + user.age2 + ' лет/год'
console.log(user_1)
/*
    Вывести окно prompt с вопросом о возрасте
    В зависимости от ответа вывести alert с текстом “поздравляем, вам X полных лет”
    Вывести окно alert с утверждением совершеннолетний пользователь или нет
*/
let age3 = prompt('Сколько тебе лет?','');
let result3 = 'поздравляем, вам '+ age3 +' полных лет'
alert(result3)

let age4 = prompt('Сколько тебе лет?','');
let result4 = (age3  <= 18) ? 'Хорошо, вы можете продолжить.' : 'Вы слишком молоды!' ;
alert(result4)
