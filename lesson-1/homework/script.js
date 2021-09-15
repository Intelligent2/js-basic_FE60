/* 
    Создать столько переменных сколько типов данных
    Вывести занчение и тип переменной в console.log
*/
/*let str="string";
console.log(typeof(str));
let num1=9;
console.log(typeof(num1));
let bul1=true;
console.log(typeof(bul1));
let bigint=9n;
console.log(typeof(bigint));
let nul=null;
console.log(typeof(nul));
let und;
console.log(typeof(und));
let obj= {
    name: 'John',
    age: 13};
console.log(typeof(obj));
let symb=Symbol();
console.log(typeof(symb));



/*
    Создать переменные a = 22 и b = 7. 
    Найти остаток от деления a на b, вывести в alert или console.log

    * Переменные присваиваются через prompt
*/
/*let a=22;
let b=7;
c=a%b;
console.log(c);



/*
    Создать переменные x и y с рандомными числами. 
    Найти остаток от деления x на y
    Если остаток есть в alert или console.log вывести 'Делится без остатка', иначе вывести 'Делится с остатком {остаток}'.

    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

    let x=Math.random();
    let y=Math.random();
    z=x%y;
    str1=`делится с остатком ${z} `;
    str2="делится без остатка";
    console.log (z>0 ? str1:str2);

/*
    Создать переменную с результатом 10 в степени 10
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/*let num=10**10;
console.log(num);



/*
    Создать переменную которая хранит квадратный корень из 245
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/*let num=Math.sqrt(245);
console.log(num);



/*
    Создать переменные e и f. 
    Отнять e от f, результат записать в g
    Сделать так, чтобы g было в любом случае положительным
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/

/*let e=prompt("введи значение для e",1);
let f=prompt("введи значение для f",2);
g=e-f;
alert(Math.abs(g));



/*
    Создать переменные c и d. 
    Найти найдите модуль разности c и d
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
/*let c=prompt("введи значение для c",1);
let d=prompt("введи значение для d",2);
a=c-d;
alert(Math.abs(a));

/*
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут LAST_NAME NAME, мне AGE лет/год'
    Вывести значение этой переменной в alert или console.log
    Изменить значение переменной на любое другое
    Результат снова вывести в alert или console.log
 */

/*let name=prompt('введите ваше имя в','Andy');
let last_name=prompt('введите вашу фамилию','Adams');
let age=prompt('введите ваш возраст',21);
alert(`меня зовут ${name} ${last_name}, мне ${age} лет`);
last_name='Parker';
alert(`меня зовут ${name} ${last_name}, мне ${age} лет`);

/*
    Создать обьект {name: '', lastName: '', age: null}
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут lastName name, мне age лет/год'
*/

/*let object=(name=prompt('Как вас зовут','Andy'),
    last_name=prompt('Ваша фамилия','Adams'),
    age=prompt('Ваш возраст',21))
    alert(`меня зовут ${name} ${last_name}, мне ${age} лет`);
let string=`новая переменная, в которой меня зовут ${name} ${last_name}, мне ${age} лет`;
alert (string);


/*
    Вывести окно prompt с вопросом о возрасте
    В зависимости от ответа вывести alert с текстом “поздравляем, вам X полных лет”
    Вывести окно alert с утверждением совершеннолетний пользователь или нет
*/

let age=prompt('Ваш возраст',18);
str1=`поздравляем, вам полных ${age} лет `;
str2="вы несовершеннолетний";
alert (age<18 ? str2:str1);