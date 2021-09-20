### Цели:

1. [Условия в JavaScript (if … else, switch, тернарный оператор)](#Conditions)
2. [Циклы (while, do … while, for, for … of, for … in)](#Cycles)
3. [Методы массивов (part 1)](#Arrays)
4. [Методы строк](#Strings)

***

#### <a name="Conditions"></a> Условия в JavaScript

Все, что находится в круглых скобках сначала вычисляется, затем приводится к логическому типу.

Для того, чтобы выполнить действия, при определенных условиях используется оператор **if**. Выглядит как:

```js
if (condition) {
    result
} 
 ```

Если необходимо выполнить условия также условие “иначе” используется **else**:
```js
if (condition) {
    result 1 
} else { 
    result 2
}
 ```

Для нескольких условий следует использовать множество операторов **if**:
```js
if (condition 1) { 
    result 1 
} else if (condition 2) {
    result 2 
} else { 
    result 3 
} 
 ```
Также для простых однострочных условий (присвоения значения к переменной) можно использовать тернарные операторы.

```js
const something = condition ? result 1 : result 2;
 ```

Конструкция **switch** заменяет собой сразу несколько if.
```js
switch (a) {
   case ‘value 1’:
       // Выполняем что-то для/с значением value 1
       break;
   case ‘value 2’:
   case ‘value 3’:
       // Выполняем что-то для/с значением value 2 и value 3
       break;
   case ‘value x’:
       // Выполняем что-то для/с значением value x
       break;
   default:
       // Дефолтная инструкция
       break;
}

default // используется для инструкций по-умолчанию, альтернатива else.
break // необходим для остановки выполнения инструкции.
 ```

***

#### <a name="Cycles"></a> Циклы

Циклы необходимы для многочисленного повторения выполнения одного сценария. По действию похожи на работу счетчика.

- Циклы **for** состоит из ключевого слова **for**, скобок с тремя секциями, и тела 
цикла. 

```js
// for(инициализация; условие; шаг цикла){ тело цикла }
for(let i = 0; i < 10; i++){ 
    // Тело цикла
}
 ```

- Цикл **while**, содержит всего одно условие (без инициализации и шага). 

```js
let i = 0
while (i < 10) {
    // Тело цикла.
    i++
}
 ```

- Если необходимо выполнить сценарий как минимум один раз используем **do while**

```js
let someRes = false
do {
    // Тело цикла.
    // Выполнится один раз
} while (someRes);
 ```


- Оператор **for...of** выполняет цикл обхода итерируемых объектов(изучим в дальнейшем)

```js
const nums = [1,2,3,4,5,6,7]
for (const num of nums) { 
    // Тело цикла. 
}
 ```

Прервать цикл можно с помощью директивы **break**. Переход к следующей итерации с помощью директивы **continue**.

```js
for (let i = 0; i < 10; i++) { 
    if(i  ===  7) {
        break
    }
    // Тело цикла. 
}


for (let i = 0; i < 10; i++) { 
    if(i  ===  7) {
        continue
    } 
    // Тело цикла. 
}
 ```

- Цикл **for...in** проходит через ***перечисляемые*** свойства объекта

```js
const user = {
  name: 'Vlad',
  lastName: 'Tarasov',
  age: 28,
  address: {
    city: 'Minsk',
    index: 220004
  }
}

for (const propName in user) {
  console.log(propName) // name, lastName, age, adress
  console.log(user[propName]) // Vlad, Tarasov, 28 { city: 'Minsk', index: 220004 }
}

// Получить все ключи в обьекте можно с помощью Object.keys(obj)
console.log(Object.keys(user)) // ['name', 'lastName', 'age', 'address']

// Получить все значения в обьекте можно с помощью Object.values(obj)
console.log(Object.values(user)) // ['Vlad', 'Tarasov', '28', '{ city: 'Minsk', index: 220004 }']
 ```

 ***

 #### <a name="Arrays"></a> Методы массивов

 Для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, **Array**.

 ```js
    const nums = [1,2,3,4,5]
    console.log(nums[1]) // 2

    nums[1] = 999
    console.log(nums) // [1,999,3,4,5]

    const nums2 = nums
    nums.push(6)
    nums2.push(7)

    console.log(nums) // [1,999,3,4,5,6,7]
    console.log(nums2) // [1,999,3,4,5,6,7]
  ```

- Свойство **.length** возвращает длинну массива 

```js
    const nums = [1,2,3,4,5]
    console.log(nums.length) // 5

    nums.length = 0 // быстрая очистка массива
    console.log(nums) // []

    nums.length = 100 // теперь длинна нашего массива 100
    console.log(nums) // [undefined, undefined, undefined, undefined, ...]

    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]) // 1, 2, 3, 4, 5
    }

    for (const num of nums) {
        console.log(num) // 1, 2, 3, 4, 5
    }
 ```

 - Метод **.reverse()** разворачивает массив, первый элемент массива становится последним, а последний — первым

```js
    const nums = [1,2,3,4,5]

    const reversedNums = nums.reverse()

    console.log(nums) // [5,4,3,2,1]
    console.log(reversedNums) // [5,4,3,2,1]
 ```

- Методы **.push(elem, ...elemX)/.pop()**. **.push(elem, ...elemX)** добавляет элемент в конец массива, **pop()** удаляет последний элемент

```js
    const nums = [1,2,3,4,5]

    nums.push(6)
    console.log(nums) // [1,2,3,4,5,6]

    nums.pop()
    console.log(nums) // [1,2,3,4,5]

    nums.push(6,7,8,9,10)
    console.log(nums) // [1,2,3,4,5,6,7,8,9,10]

    const ten = nums.pop()
    console.log(ten) // 10
    console.log(nums) // [1,2,3,4,5,6,7,8,9]
 ```

 - Методы **.unshift(elem, ...elemX)/shift()**. **.unshift(elem, ...elemX)** добоавляет элменты в начало массива, **.shift()** удаляет элемент первый элемент

```js
    const nums = [5,6,7,8,9,10]

    nums.unshift(4)
    console.log(nums) // [4,5,6,7,8,9,10]

    nums.shift()
    console.log(nums) // [5,6,7,8,9,10]

    nums.unshift(1,2,3,4)
    console.log(nums) // [1,2,3,4,5,6,7,8,9,10]

    const one = nums.shift()
    console.log(one) // 1
    console.log(nums) // [2,3,4,5,6,7,8,9,10]
 ```

- Методы **.includes(elem)/.indexOf(elem)**. **.includes(elem)** проверяет содержит ли массив элемент, возвращает boolean тип. **.indexOf(elem)** если элемент есть в массиве возвращает индекс элемента, если элемента нету возвращает -1

```js
    const nums = [1,2,3,4,5]

    console.log(nums.includes(1)) // true
    console.log(nums.includes(6)) // false

    console.log(nums.indexOf(3)) // 2
    console.log(nums.indexOf(6)) // -1
 ```

 ***

 #### <a name="Strings"></a> Методы строк

 Строки используются для хранения текстовох данных

 ```js
    const string1 = 'some string'
    const string2 = "some string"
    const string3 = `some string`

    // конкатенация(объединение) строк
    const longString1 = string1 + ' ' + string2 + ' ' + string3 // some string some string some string
    const longString2 = `${string1} ${string2} ${string3}` // some string some string some string

    // ВАЖНО!!! при объединении строки и числа результатом будет строка
    const num = 100
    const fakeNum = '100'
    const result = num + fakeNum
    console.log(result) // '100100'
  ```

- Свойство **.length** возвращет длинну строки

```js
    const string = 'some string'
    console.log(string.length) // 11

    string.length = 0 // строке нельзя изменить длинну через свойство
    console.log(string) // some string

    string[0] = 'S'
    console.log(string) // some string

    for (let i = 0; i < string.length; i++) {
        console.log(string[i]) // s, o, m, e, ....
    }

    for (const letter of string) {
        console.log(letter) // s, o, m, e, ....
    }
 ```

 - Методы **.toLowerCase()/.toUpperCase()** изменяют регистр символов

```js
    const string = 'SoMe StRiNg'
    console.log(string.toLowerCase()) // some string
    console.log(string.toUpperCase()) // SOME STRING
 ```

- Методы **.split(separator)/.join(separator)**. **.split(separator)** преобразует строку в массив, **.join(separator)** преобразует массив в строку

```js
    const string = 'some long string'
    
    const arr1 = string.split('')
    console.log(arr1) // ['s', '0', 'm', 'e', ' ', ....]

    const arr2 = string.split(' ')
    console.log(arr1) // ['some', 'long', 'string']

    const string1 = arr1.join('') // some long string
    const string2 = arr1.join('-') // s-o-m-e- -l-o-n-g- -s-t-r-i-n-g

    const string3 = arr2.join('') // somelongstring
    const string4 = arr2.join(' ') // some long tring
    const string5 = arr2.join('+') // some+long+tring
 ``` 
- Методы **.includes(string)/.indexOf(string)/.startsWith(string)/.endsWith(string)** используются для поиска

```js
    const string = 'some string'

    console.log(string.includes('s')) // true
    console.log(string.includes('some')) // true
    console.log(string.includes('Some')) // false

    console.log(string.indexOf('s')) // 0
    console.log(string.indexOf('s', 4)) // 5
    console.log(string.indexOf('some')) // 0
    console.log(string.indexOf('Some')) // -1

    console.log(string.startsWith('s')) // true
    console.log(string.startsWith('some')) // true
    console.log(string.startsWith('Some')) // false

    console.log(string.endsWith('g')) // true
    console.log(string.endsWith('string')) // true
    console.log(string.endsWith('stRiNg')) // false
 ```

***
  ### ДЗ

1. [Условия if else](https://learn.javascript.ru/ifelse)
2. [Условия switch case](https://learn.javascript.ru/switch)
3. [Циклы (while, do … while, for](https://learn.javascript.ru/while-for)
4. [Подробнее об объетах](https://learn.javascript.ru/object)
5. [Подробнее о строках](https://learn.javascript.ru/string)
6. [Подробнее о массивах](https://learn.javascript.ru/array)


[Практика](homework/script.js)