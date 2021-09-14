/* 
    Создать столько переменных сколько типов данных
    Вывести занчение и тип переменной в console.log
*/

    let number = 12456789;
    console.log(typeof number + " " + number)
    let bigInt = 123456789n;
    console.log(typeof bigInt + " " + bigInt);
    let string = "Hello JS";
    console.log(typeof string + " " + string);
    let boolean = true;
    console.log(typeof boolean + " " + boolean);
    let nul = null;
    console.log(typeof null + " " + nul);
    let und = undefined;
    console.log(typeof undefined + " " + und);
    let sym = Symbol('sym');
    console.log(sym);
    console.log(typeof(sym));
    let obj = {
        j : 7,
        l : 12
    }
    console.log(obj)





/*
    Создать переменные a = 22 и b = 7. 
    Найти остаток от деления a на b, вывести в alert или console.log

    * Переменные присваиваются через prompt
*/

    let a = 22;
    let b = 7;
    console.log(a % b);
        a = prompt("Введите число");
        b = prompt('Введите число');
        alert("Остаток от деления " +  a % b);
/*
    Создать переменные x и y с рандомными числами. 
    Найти остаток от деления x на y
    Если остаток есть в alert или console.log вывести 'Делится без остатка', иначе вывести 'Делится с остатком {остаток}'.

    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

    let x = Math.random();
    let y = Math.random();
    console.log(x % y == 0  ? 'Делится без остатка' : 'делится с остатком ' + "" + x % y);

/*
    Создать переменную с результатом 10 в степени 10
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

    let root= Math.pow(10, 10);
    console.log(root);

/*
    Создать переменную которая хранит квадратный корень из 245
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

    let rootSquare = Math.sqrt(245);
    console.log(rootSquare);
/*
    Создать переменные e и f. 
    Отнять e от f, результат записать в g
    Сделать так, чтобы g было в любом случае положительным
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/

    let e = 12;
    let f = 22;
    let g = e - f;
        console.log(Math.abs(g));
        e = prompt("Введите число");
        f = prompt("Введите число");
        g = e - f
        alert(Math.abs(g))
        


/*
    Создать переменные c и d. 
    Найти найдите модуль разности c и d
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/

    let c = 10;
    let d = 15;
    console.log(Math.abs(c - d));
        c = prompt("Введите число");
        d = prompt("Введите число");
        alert("Модуль разницы c и d равна "  +    Math.abs(c - d));
   




/*
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут LAST_NAME NAME, мне AGE лет/год'
    Вывести значение этой переменной в alert или console.log
    Изменить значение переменной на любое другое
    Результат снова вывести в alert или console.log
 */

    let Name = prompt("Ваше имя?");
    let lastName = prompt("Ваша фамилия?");
    let age = prompt("Ваш возраст?");
    let str = "Меня зовут " + lastName + " " + Name + ", мне " + age + (age > 20 ? " год" : " лет");
    alert(str)

/*
    Создать обьект {name: '', lastName: '', age: null}
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут lastName name, мне age лет/год'
*/

    let name = {
        Name: prompt("Ваше имя?"),
        lastName: prompt("Ваша Фамилия?"),
        age: prompt("Ваш возраст?"),
        str: "Меня зовут " + lastName + " " + Name + ", мне" + age + (age > 20 ? " год" : " лет")
    }
    

/*
    Вывести окно prompt с вопросом о возрасте
    В зависимости от ответа вывести alert с текстом “поздравляем, вам X полных лет”
    Вывести окно alert с утверждением совершеннолетний пользователь или нет
*/

    let Age = prompt("Ваш возраст?");
    let Str = "поздравляем, вам " + age + " полных лет";
    alert(Str)
    Str = age > 18 ? "Вы совершеннолетний пользователь" : "Вы не совершеннолетний пользователь"
    alert(Str)


