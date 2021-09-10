/*
    Создать столько переменных сколько типов данных
    Вывести занчение и тип переменной в console.log
*/
const num = 42
const str = 'foo'
const bool = true
const nl = null
const undfd = undefined
const bigInt = 92233720368547n
const symbol = Symbol('foo')

console.log(num, typeof num)
console.log(str, typeof str)
console.log(bool, typeof bool)
console.log(nl, typeof nl)
console.log(undfd, typeof undfd)
console.log(bigInt, typeof bigInt)
console.log(symbol, typeof symbol)
/*
    Создать переменные a = 22 и b = 7.
    Найти остаток от деления a на b, вывести в alert или console.log

    * Переменные присваиваются через prompt
*/
let a = prompt('Enter 22');
let b = prompt('Enter 7');
console.log(a % b);

/*
    Создать переменные x и y с рандомными числами.
    Найти остаток от деления x на y
    Если остаток есть в alert или console.log вывести 'Делится без остатка', иначе вывести 'Делится с остатком {остаток}'.

    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
let x = Math.floor(Math.random() * 5);
let y = Math.floor(Math.random() * 7);
let z = x % y;
let answer = z === 0 ? "Делится без остатка" : `Делится с остатком ${z}`
console.log(answer)

/*
    Создать переменную с результатом 10 в степени 10
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
let log = Math.pow(10, 10);
/*
    Создать переменную которая хранит квадратный корень из 245
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
let root = Math.sqrt(245);
console.log(root)
/*
    Создать переменные e и f.
    Отнять e от f, результат записать в g
    Сделать так, чтобы g было в любом случае положительным
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
let e = prompt('Enter number 1')
let f = prompt('Enter number 2')
let g = Math.abs(e - f)
console.log(g)
/*
    Создать переменные c и d.
    Найти найдите модуль разности c и d
    - использовать Math https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math

    * Переменные присваиваются через prompt
*/
let c = prompt('Enter number 1');
let d = prompt('Enter number 2');
let result = Math.abs(c - d)
/*
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут LAST_NAME NAME, мне AGE лет/год'
    Вывести значение этой переменной в alert или console.log
    Изменить значение переменной на любое другое
    Результат снова вывести в alert или console.log
 */
let name = prompt('Enter your name', '')
let lastName = prompt('Enter your last name', '')
let age = prompt('Enter your age', '')
let person = `My name is ${lastName} ${name}, and I'm ${age} years old`
console.log(person)
person = 'foo'
console.log(person)
/*
    Создать обьект {name: '', lastName: '', age: null}
    Вывести окно prompt с вопросом о имени
    Вывести окно prompt с вопросом о фамилии
    Вывести окно prompt с вопросом о возрасте
    Создать переменную, которая содержит строку вида 'Меня зовут lastName name, мне age лет/год'
*/
let person = {
  name: '',
  lastName: '',
  age: null
}
person.name = prompt('Enter your name')
person.lastName = prompt('Enter your last name')
person.age = prompt('Enter your age')

let completePerson = `My name is ${person.name} ${person.lastName}, and I'm ${person.age} years old`

/*
    Вывести окно prompt с вопросом о возрасте
    В зависимости от ответа вывести alert с текстом “поздравляем, вам X полных лет”
    Вывести окно alert с утверждением совершеннолетний пользователь или нет
*/
let ageCheck = prompt('How old are you?')
alert(`Congrats, your are ${ageCheck} years old`)
ageCheck >= 18 ? alert('You are an adult') : alert('You are underage')