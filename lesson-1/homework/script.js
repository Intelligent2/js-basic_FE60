/* 
    Создать столько переменных сколько типов данных
    Вывести занчение и тип переменной в console.log
*/
    // let number = 99;
    // console.log(number);
    // console.log(typeof number);
    // let BigInt = 996253523523n;
    // console.log(BigInt);
    // console.log(typeof BigInt);
    // let string = "some string";
    // console.log(string);
    // console.log(typeof string);
    // let boolean = false;
    // console.log(boolean);
    // console.log(typeof boolean);
    // let age = null ;
    // console.log(age);
    // console.log(typeof age);
    // let street;
    // console.log(street);
    // console.log(typeof street);
    // let id = Symbol("id");
    // console.log(id);
    // console.log(typeof id);
    // let userInfo = {
    //     name: 'Максим',
    //     age: 21
    // }
    // console.log(userInfo);
    // console.log(typeof userInfo);
/*
    Создать переменные a = 22 и b = 7. 
    Найти остаток от деления a на b, вывести в alert или console.log

    * Переменные присваиваются через prompt
*/
    // let a = 22;
    // let b = 7;
    // let c = a % b;
    // console.log(c)

    // let a = prompt('Первое число?', '');
    // let b = prompt('Второе число?', '')
    // let c = a % b;
    // alert(`Остаток ${c}`);


/*
    Создать переменные x и y с рандомными числами. 
    Найти остаток от деления x на y
    Если остаток есть в alert или console.log вывести 'Делится без остатка', иначе вывести 'Делится с остатком {остаток}'.

    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
    // let x,y,z;
    // x = Math.floor(Math.random() * 10);
    // console.log(x);
    // y = Math.floor(Math.random() * 10);
    // console.log(y);
    // z = x % y;
    // console.log(z);
    // console.log(z < 1 ? 'Делится без остатка' : `Делится с остатком ${z}`);

/*
    Создать переменную с результатом 10 в степени 10
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
    // let degree;
    // degree = Math.pow(10, 10);
    // console.log(degree)

/*
    Создать переменную которая хранит квадратный корень из 245
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
    // let root;
    // root = Math.sqrt(245);;
    // console.log(root)

/*
    Создать переменные e и f. 
    Отнять e от f, результат записать в g
    Сделать так, чтобы g было в любом случае положительным
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
    // let e = 123;
    // let f = 412142;
    // let g = Math.abs(e - f);
    // console.log(g);


/*
    Создать переменные c и d. 
    Найти найдите модуль разности c и d
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
    // let c = 123;
    // let d = 412142;
    // console.log(Math.abs(c - d));


/*
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут LAST_NAME NAME, мне AGE лет/год'
    Вывести значение этой переменной в alert или console.log
    Изменить значение переменной на любое другое
    Результат снова вывести в alert или console.log
 */
    // let nameFirst = prompt(`Ваше имя?`, '');
    // let lastName = prompt(`Ваша фамилия?`, '');
    // let age = prompt (`Ваш возраст?`, '');
    // let infoUser = (`Меня зовут ${lastName } ${nameFirst}, мне ${age} лет/год`);
    // console.log(infoUser);
    // nameFirst = 'Maks';
    // lastName = 'Kot';
    // infoUser = (`Меня зовут ${lastName } ${nameFirst}, мне ${age} лет/год`);
    // console.log(infoUser);

/*
    Создать обьект {name: '', lastName: '', age: null}
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут lastName name, мне age лет/год'
*/
    // let obj = {
    //     name: '',
    //     lastName: '',
    //     age: null
    // }
    // let nameInfo = prompt("Какое имя?", "name");
    // let lastNameInfo = prompt("Какова фамилия?", "lastName");
    // let ageInfo = prompt("Каков возраст?", "age");
    // let info = `Меня зовут ${lastNameInfo} ${nameInfo}, мне ${ageInfo} лет/год`;
    // alert(info);
    


/*
    Вывести окно prompt с вопросом о возрасте
    В зависимости от ответа вывести alert с текстом “поздравляем, вам X полных лет”
    Вывести окно alert с утверждением совершеннолетний пользователь или нет
*/

    // let age = prompt (`Ваш возраст?`, '');
    // alert(`Поздравляем, вам ${age} полных лет`)
    // alert(age >= 18 ? 'Вы совершеннолетний!' : 'Вы Несовершеннолетний!!!');
