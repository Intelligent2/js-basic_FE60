/*
   Создать функцию с именем isAnagram
   Написать код функции проверки анаграммы
   isAnagram('xyz','zyx'); // true
   isAnagram('xyz','xyzx'); // false
*/

/*  
    Создать функцию с именем fromStringToObj
    Функция должна примать строку и возвращать объект
    'a.b.c.d.e.f.g.h.i' => { a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } };
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
