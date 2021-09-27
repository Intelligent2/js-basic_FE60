### Цели:

1. [Методы массивов (part 2)](#Arrays)

***

#### <a href="Arrays"></a> Методы массивов (part 2)

- Метод `.slice(from, to)` возвращает новый массив, копирую исходных с позиции `from` до `to`

```js
    const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

    const names1 = names.slice()
    console.log(names1) // ["Vlad", "Kate", "Vova", "Victor", "Max"]
    console.log(names1 === names) // false

    const names2 = names.slice(2)
    console.log(names2) // ["Vova", "Victor", "Max"]

    const names3 = names.slice(-2)
    console.log(names3) // ["Victor", "Max"]

    const names4 = names.slice(1, 3)
    console.log(names4) // ["Kate", "Vova"]

    const names5 = names.slice(1,-1)
    console.log(names5) // ["Kate", "Vova", "Victor"]
 ```

 Так же для копирования и объединения массивов можно использовать `...`

 ```js
    const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

    const names1 = [...names];
    console.log(names1); // ["Vlad", "Kate", "Vova", "Victor", "Max"]

    const names2 = [...names1, ...names];
    console.log(names2) // ["Vlad", "Kate", "Vova", "Victor", "Max", "Vlad", "Kate", "Vova", "Victor", "Max"]
  ```

- Метод `.splice(index[, deleteCount, elem1, ..., elemN])` изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.

```js
    const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

    names.splice(1, 2)
    console.log(names) // ["Vlad", "Victor", "Max"]
 ```

```js
    const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

    names.splice(1, 2, 'JAMES', 'DAVID', 'ENDY')
    console.log(names) // ["Vlad", "JAMES", "DAVID", "ENDY", "Victor", "Max"]
 ```
 
```js
    const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

    names.splice(3, 0, 'JAMES', 'DAVID', 'ENDY')
    console.log(names) // ["Vlad", "Kate", "Vova", "JAMES", "DAVID", "ENDY", "Victor", "Max"]
 ```

```js
    const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

    const deletedNames = names.splice(3, 2, 'JAMES', 'DAVID', 'ENDY')
    console.log(names) // ["Vlad", "Kate", "Vova", "JAMES", "DAVID", "ENDY"]
    console.log(deletedNames) // ["Victor", "Max"]
 ```

- Метод `.concat(elem1, ...elemX)` создаёт новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

```js
    const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

    const names1 = names.concat("DAVID", "JOHN");
    console.log(names1); // ["Vlad", "Kate", "Vova", "Victor", "Max", "DAVID", "JOHN"]

    const names2 = names.concat(["DAVID", "JOHN"]);
    console.log(names2); // ["Vlad", "Kate", "Vova", "Victor", "Max", "DAVID", "JOHN"]

    const names3 = names.concat(["DAVID"], ["JOHN"]);
    console.log(names3); // ["Vlad", "Kate", "Vova", "Victor", "Max", "DAVID", "JOHN"]

    // ИСХОДНЫЙ МАССИВ НЕ ИЗМЕНЯЕТСЯ!!!!
    console.log(names); //["Vlad", "Kate", "Vova", "Victor", "Max"]

    const names4 = names.concat([["DAVID"]]);
    console.log(names4); // ["Vlad", "Kate", "Vova", "Victor", "Max", ["DAVID"]];
 ```

- Метод `.forEach(function callback(item, index, array) { // code })` выполняет указанную функцию `callback` один раз для каждого элемента в массиве. `item` - текущий обрабатываемый элемент в массиве, `index` - индекс текущего обрабатываемого элемента в массиве, `array` - массив, по которому осуществляется проход.

```js
    const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

    const showName = (item, index, array) => {
      console.log(
        `элемент ${item} в массиве [${array}] имеет позицию ${index}`
      );
    };

    names.forEach(showName);
    /*
        элемент Vlad в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 0
        элемент Kate в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 1
        элемент Vova в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 2
        элемент Victor в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 3
        элемент Max в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 4
    */

    names.forEach((...args) => showName(...args));
    /*
        элемент Vlad в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 0
        элемент Kate в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 1
        элемент Vova в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 2
        элемент Victor в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 3
        элемент Max в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 4
    */

    names.forEach((item, index, array) => {
      console.log(
        `элемент ${item} в массиве [${array}] имеет позицию ${index}`
      );
    });
    /*
        элемент Vlad в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 0
        элемент Kate в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 1
        элемент Vova в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 2
        элемент Victor в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 3
        элемент Max в массиве [Vlad,Kate,Vova,Victor,Max] имеет позицию 4
    */
 ```

 - Метод `.find((item, index, array) => { // code })` возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в `callback` функции.  В противном случае возвращается `undefined`. `item` - текущий обрабатываемый элемент в массиве, `index` - индекс текущего обрабатываемого элемента в массиве, `array` - массив, по которому осуществляется проход.

```js
    const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

    const david = names.find((item) => item === "David");
    console.log(david); // undefined

    const vlad = names.find((item) => item === "Vlad");
    console.log(vlad) // Vlad

    // findIndex возвращает индекс элемента
    const davidIndex = names.findIndex((item) => item === "David");
    console.log(davidIndex); // -1

    const vladIndex = names.findIndex((item) => item === "Vlad");
    console.log(vladIndex) // 0

    const victorIndex = names.findIndex((item) => item === "Victor");
    console.log(victorIndex) // 3
 ```

- Метод `.filter((item, index, array) => { // code })` создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции. `item` - текущий обрабатываемый элемент в массиве, `index` - индекс текущего обрабатываемого элемента в массиве, `array` - массив, по которому осуществляется проход.

```js
 /*
    Вернётся новый массив с элементами, которые проходят тест, то есть callback вернёт true.
 */

    const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

    const filteredNames = names.filter((item) =>
      item.toLowerCase().includes("v")
    );
    console.log(filteredNames); // ["Vlad", "Vova", "Victor"]

    const users = [
      { id: 0, name: "Vlad", age: 28 },
      { id: 1, name: "Victor", age: 19 },
      { id: 2, name: "Vova", age: 39 },
      { id: 3, name: "Max", age: 43 },
    ];

    const youngUsers = users.filter((user) => user.age >= 18 && user.age < 30);
    console.log(youngUsers);
    /*
        [
            { id: 0, name: "Vlad", age: 28 },
            { id: 1, name: "Victor", age: 19 }
        ]
    */
 ```

- Метод `.map((item, index, array) => { // code })`  создаёт новый массив с результатом вызова указанной функции для каждого элемента массива. `item` - текущий обрабатываемый элемент в массиве, `index` - индекс текущего обрабатываемого элемента в массиве, `array` - массив, по которому осуществляется проход.

```js
    const names = ["Vlad", "Kate", "Vova", "Victor", "Max"];

    const namesInUpperCase = names.map((item) => item.toUpperCase());
    console.log(namesInUpperCase); // ["VLAD", "KATE", "VOVA", "VICTOR", "MAX"]

    const users = [
      { id: 0, name: "Vlad", age: 28 },
      { id: 1, name: "Victor", age: 19 },
      { id: 2, name: "Vova", age: 39 },
      { id: 3, name: "Max", age: 43 },
    ];

    const usersInfo = users.map(
      (user, i) =>
        `Пользователь с именем ${user.name} и возрастом ${user.age} по индексу ${i} в массиве users`
    );
    console.log(usersInfo);
    /*
        [
            "Пользователь с именем Vlad и возрастом 28 по индексу 0 в массиве users", 
            "Пользователь с именем Victor и возрастом 19 по индексу 1 в массиве users", 
            "Пользователь с именем Vova и возрастом 39 по индексу 2 в массиве users", 
            "Пользователь с именем Max и возрастом 43 по индексу 3 в массиве users"
        ]
    */
 ```

- Метод `.sort((a, b) => { // code })` на месте сортирует элементы массива и возвращает отсортированный массив. Сортировка не обязательно устойчива. Порядок сортировки по умолчанию соответствует порядку кодовых точек `Unicode`. Важно, что копия массива не создаётся - массив сортируется на месте

```js
    const fruits = ["арбузы", "бананы", "Вишня"];
    fruits.sort();
    console.log(fruits); // ['Вишня', 'арбузы', 'бананы']

    const scores = [1, 2, 10, 21];
    scores.sort();
    console.log(scores); // [1, 10, 2, 21]

    const things = ["слово", "Слово", "1 Слово", "2 Слова"];
    things.sort();
    console.log(things); // ['1 Слово', '2 Слова', 'Слово', 'слово']
    /* 
        В Unicode, числа находятся перед буквами в верхнем регистре,
        а те, в свою очередь, перед буквами в нижнем регистре.
    */

    const users = [
      { id: 0, name: "Vlad", age: 28 },
      { id: 1, name: "Victor", age: 19 },
      { id: 2, name: "Vova", age: 39 },
      { id: 3, name: "Max", age: 43 },
    ];

    users.sort((a, b) => (a.age > b.age ? 1 : -1));
    console.log(users);
    /*
        [
            { id: 1, name: "Victor", age: 19 },
            { id: 0, name: "Vlad", age: 28 },
            { id: 2, name: "Vova", age: 39 },
            { id: 3, name: "Max", age: 43 },
        ]
    */

    users.sort((a, b) => (a.age > b.age ? -1 : 1));
    console.log(users);
    /*
        [
            { id: 3, name: "Max", age: 43 },
            { id: 2, name: "Vova", age: 39 },
            { id: 0, name: "Vlad", age: 28 },
            { id: 1, name: "Victor", age: 19 },
        ]
    */
 ```

- Метод `.reduce((accumulator, currentValue, index, array) => { //code }, initialValue)` применяет функцию `callback` к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
`accumulator` - аккумулятор, аккумулирующий значение, которое возвращает функция `callback` после посещения очередного элемента, либо значение `initialValue`, если оно предоставлено.
`currentValue` - текущий обрабатываемый элемент массива.
`index` - индекс текущего обрабатываемого элемента массива.
`array` - массив, для которого была вызвана функция reduce.

```js
    const numbers = [10, 11, 12, 13, 14, 15];

    const sumNumbers1 = numbers.reduce((acc, cur) => acc + cur);
    console.log(sumNumbers1); // 75

    const sumNumbers2 = numbers.reduce((acc, cur) => acc + cur, 100);
    console.log(sumNumbers2); // 175

    const multiNumbers1 = numbers.reduce((acc, cur) => acc * cur);
    console.log(multiNumbers1); // 3603600

    const multiNumbers2 = numbers.reduce((acc, cur) => acc * cur, 0);
    console.log(multiNumbers2); // 0

    const users = [
      { id: 0, name: "Vlad", age: 28 },
      { id: 1, name: "Victor", age: 19 },
      { id: 2, name: "Vova", age: 39 },
      { id: 3, name: "Max", age: 43 },
    ];

    const usersMap = users.reduce((acc, cur) => {
      return {
        ...acc,
        [cur.id]: `${cur.name} / ${cur.age}`,
      };
    }, {});
    console.log(usersMap)
    /*
    { 
        0: "Vlad / 28"
        1: "Victor / 19"
        2: "Vova / 39"
        3: "Max / 43"
    }
    */
 ```

***

### ДЗ

1. [Методы массивов](https://learn.javascript.ru/array-methods)