/*
   Создать функцию с именем compact
   Функция должна очищать массив от значений: false, undefined, "", 0, null.
*/

// const compact = (array) => array.filter(item => !!item)
const compact = (array) => array.filter(Boolean);

/*
   Создать функцию с именем isAnagram
   Написать код функции проверки анаграммы
   isAnagram('xyz','zyx'); // true
   isAnagram('xyz','xyzx'); // false
*/

const isAnagram = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }

  const sortString = (string) => string.toLowerCase().split("").sort().join("");

  return sortString(word1) === sortString(word2);
};

/*  
    Создать функцию с именем fromStringToObj
    Функция должна примать строку и возвращать объект
    'a.b.c.d.e.f.g.h.i' => { a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } };
*/

const fromStringToObj = (string) => {
  const obj = string.split(".").reduceRight((acc, cur) => {
    return {
      [cur]: acc,
    };
  }, {});

  return obj;
};

/*
    1. acc = {}, cur = i, return { i: {} }
    2. acc = { i: {} } cur = h return { h: { i: {} } }
    3. acc = { h: { i: {} } } cur = g return { g: { h: { i: {} } } }
    ...
*/

/*
    Дан объект users
    Реализовать методы:
     findById(id) возвращает элемент по id из массива users.list
     findByName(name) возвращает элемент по name из массива users.list
     filterById(id) удаляет элемент по id из массива users.list
     filterByName(id) удаляет элемент по id из массива users.list
     getAllNames() возвращет массив всех name из массива users.list
     getAllIds() возвращет массив всех id из массива users.list

    Методы должны работать с this.list
*/

const users = {
  list: [
    { id: 0, name: "Vlad" },
    { id: 1, name: "Vova" },
    { id: 2, name: "Victor" },
    { id: 3, name: "Kate" },
  ],
  findById(id) {},
  findByName(name) {},
  filterById(id) {},
  filterByName(name) {},
  getAllNames() {},
  getAllIds() {},
};
const findById = users.list.id.find((item) => item === id);
  console.log(findById); 
const findByName = users.list.name.find((item) => item === name);
  console.log(findByName); 