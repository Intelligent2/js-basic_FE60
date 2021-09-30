### Цели:

1. [Рекурсия и стек](#Recursion)
2. [Замыкание](#Closure)
3. [Преобразование объектов в примитивы](#Toprim)

***

#### <a href="Recursion"></a> Рекурсия и стек

**Рекурсия** – это приём программирования, полезный в ситуациях, когда задача может быть естественно разделена на несколько аналогичных, но более простых задач.
В процессе выполнения задачи в теле функции могут быть вызваны другие функции для выполнения подзадач. Частный случай подвызова – когда **функция вызывает сама себя**. Это как раз и называется **рекурсией**.

```js
    // напишем функцию обратного отсчёта

    function countdown(from, delay) {
      setTimeout(() => {
        console.log(from);

        countdown(from - 1, delay);
      }, delay);
    }

    countdown(10, 1000);
 ```

Необходимо принять во внимание при написании рекурсивной функции – это бесконечный цикл, т.е. когда функция вызывает саму себя… и никогда не может остановиться.
**Рекурсивная функция** всегда должна знать, когда ей нужно остановиться. В рекурсивной функции всегда есть два случая: **рекурсивный** и **граничный случаи**. 

- **Рекурсивный случай** – когда функция вызывает саму себя.
- **Граничный случай** – когда функция перестает себя вызывать. 
    
Наличие граничного случая и предотвращает зацикливание.

```js
    function countdown(from, delay) {
      if (from < 0) {
        console.log("Граничный случай");
        return;
      }

      setTimeout(() => {
        console.log("Рекурсивный случай");
        console.log(from);

        countdown(from - 1, delay);
      }, delay);
    }

    countdown(10, 1000);
 ```

Рекурсивные функции используют так называемый **«Стек вызовов»**. Когда программа вызывает функцию, функция отправляется на верх стека вызовов. Это похоже на стопку книг, вы добавляете одну вещь за одни раз. Затем, когда вы готовы снять что-то обратно, вы всегда снимаете верхний элемент.

```js
    // факториал через рекурсию
    function factorial(num) {
      return num === 1 ? 1 : num * factorial(num - 1);
    }

    console.log(factorial(5)); // 120

    /*
        factorial(5) num = 5 ->
        return num * factorial(num - 1); -> 
        factorial(4) num = 4 ->
        return num * factorial(num - 1); -> 
        factorial(3) num = 3 ->
        return num * factorial(num - 1); -> 
        factorial(2) num = 2 ->
        return num * factorial(num - 1); -> 
        factorial(1) num = 1 ->
        return 1

        1 * 2 * 3 * 4 * 5 = 120
    */
 ```

 ```js
    // факториал через цикл
    function factorial(num) {
      let res = 1;

      for (let i = 1; i <= 5; i++) {
        res *= i;
      }

      return res;
    }

    console.log(factorial(5)); // 120
  ```

Другим отличным применением рекурсии является рекурсивный обход.

```js
    const obj = {
      number: 1,
      nextObj: {
        number: 2,
        nextObj: {
          number: 3,
          nextObj: {
            number: 4,
            nextObj: {
              number: 5,
              nextObj: null,
            },
          },
        },
      },
    };

    function showNumberRecursion(obj) {
      const next = obj.nextObj;

      console.log(obj.number);
      if (next) {
        showNumberRecursion(next);
      }
    }

    showNumberRecursion(obj);

    console.log("-----");

    function showNumberCycles(obj) {
      let next = obj;

      while (next) {
        console.log(next.number);
        next = next.nextObj;
      }
    }

    showNumberCycles(obj);
 ```

```js
    // задача на собесах на рекурсию

    const array = [1, [2, [3, [4, [5, [6], 7], 8], 9], 10], 11];

    const toFlat = (array) => {
      const resultArray = array.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
          return acc.concat(toFlat(cur));
        }

        return acc.concat(cur);
      }, []);

      return resultArray;
    };

    console.log(toFlat(array)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
 ```

***

#### <a href="Closure"></a> Замыкание

Функция может получить доступ к переменным из внешнего окружения.

Что произойдёт, когда внешние переменные изменятся? Функция получит последнее значение или то, которое существовало на момент создания функции?

Что произойдёт, когда функция переместится в другое место в коде и будет вызвана оттуда – получит ли она доступ к внешним переменным своего нового местоположения?

```js
    const num = 10;

    const showNum = () => {
      console.log(num);
    };

    showNum(); // ??

    if (true) {
      const num = 20;
      showNum(); // ??
    }

    function doSomething(num) {
      showNum(); // ??
    }

    doSomething(30);
 ```

**Замыкания** - это комбинация функции и лексического окружения, в котором эта функция была объявлена. Это окружение состоит из произвольного количества локальных переменных, которые были в области действия функции во время создания замыкания. В `JavaScript` замыкания создаются каждый раз при создании функции, во время её создания.

```js
    const num = 10;

    const showNum = () => {
      console.log(num);
    };

    showNum(); // 10

    if (true) {
      const num = 20;
      showNum(); // 10
    }

    function doSomething(num) {
      showNum(); // 10
    }

    doSomething(30);
 ```

Рассмотрим пример с функцией `createCounter`. В ней мы создаём единое окружение для трёх функций: `increment`, `decrement`, и `getValue`.

Единое окружение создаётся в теле функции `createCounter`. Это окружение содержит приватный элемент: переменную `privateValue`. `privateValue` не доступен напрямую, за пределами этой самой анонимной функции. 

 ```js
    const createCounter = (initialValue = 0) => {
      let privateValue = initialValue;

      const increment = () => {
        privateValue++;
      };

      const decrement = () => {
        privateValue--;
      };

      const getValue = () => {
        return privateValue;
      };

      return {
        increment,
        decrement,
        getValue,
      };
    };

    const counter = createCounter();

    counter.increment();
    console.log(counter.getValue()); // 1
    counter.decrement();
    console.log(counter.getValue()); // 0

    console.log(privateValue) // ReferenceError: privateValue is not defined
  ```

**Каррирование** – продвинутая техника для работы с функциями. Она используется не только в `JavaScript`, но и в других языках.

Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как `sum(a, b, c)`, а как `sum(a)(b)(c)`.

 ```js
    function sum(a) {
      return function (b) {
        return function (c) {
          const result = a + b + c;
          return result;
        };
      };
    }

    console.log(sum(5)(10)(15)); // 30
  ```

или более короткая запись

```js
    const sum = (a) => (b) => (c) => a + b + c;
    console.log(sum(5)(10)(15));
 ```

***

#### <a href="Toprim"></a> Преобразование объектов в примитивы

```js
    const obj = {
      name: "Vlad",
      lastName: "Tarasov",
      age: 22,
    };

    console.log(`${obj}`); // [object Object]

    obj.toString = function () {
      return this.name + " " + this.lastName;
    };

    console.log(`${obj}`); // Vlad Tarasov

    console.log(Number(obj)); // NaN

    obj.valueOf = function () {
      return this.age;
    };

    console.log(Number(obj)); // 22
 ```

***

  ### ДЗ

1. [Рекурсия и стек](https://learn.javascript.ru/recursion#rekursivnye-struktury)
2. [Замыкание](https://learn.javascript.ru/closure)
3. [Ещё про замыкание и лексическое окружение](https://habr.com/ru/post/474852/)
4. [Контекст выполнения и стек вызовов в JavaScript](https://habr.com/ru/company/ruvds/blog/422089/)
5. [setTimeout и setInterval](https://learn.javascript.ru/settimeout-setinterval)
6. [Объект функции, NFE](https://learn.javascript.ru/function-object)
7. [Преобразование объектов в примитивы](https://learn.javascript.ru/object-toprimitive)