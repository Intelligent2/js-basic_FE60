/*
   Создать функцию с именем compact
   Функция должна очищать массив от значений: false, undefined, "", 0, null.
*/
// let array = [1, false, 2, '', 3, null, 4, undefined]
// const compact = arr => arr.filter(Boolean)

/*
   Создать функцию с именем isAnagram
   Написать код функции проверки анаграммы
   isAnagram('xyz','zyx'); // true
   isAnagram('xyz','xyzx'); // false
*/

// const isAnagram = (str1, str2) => {
//   const arr1 = str1.toLowerCase().split('').sort().join('')
//   const arr2 = str2.toLowerCase().split('').sort()
//   return arr1.join('') === arr2.join('')
// }

// const isAnagram = (str1, str2) => {
//   const sortLogic = str => str.toLowerCase().split('').sort().join('')
//   return sortLogic(str1) === sortLogic(str2)
// }

/*  
    Создать функцию с именем fromStringToObj
    Функция должна примать строку и возвращать объект
    'a.b.c.d.e.f.g.h.i' => { a: { b: { c: { d: { e: { f: { g: { h: { i: {} } } } } } } } } };
*/
// const fromStringToObj = str => {
//   const obj = string.split('.').reduceRight((acc, cur) => ({ [cur]: acc }), {})

// const fromStringToObj = str => {
//   const obj = str.split('.').reduceRight((acc, cur) => {
//     return {
//       [cur]: acc,
//     }
//   }, {})
//   return obj
// }

// //? acc = {}, cur = i, return {i: {}}
// //? acc = {i: {}}, cur = h, return {i: {h: {}}}
// //? acc = {i: {h: {}}}, cur = g, return {i: {h: {g: {}}}}

// console.log(fromStringToObj('a.b.c.d.e.f.g.h.i'))
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
    { id: 0, name: 'Vlad' },
    { id: 1, name: 'Vova' },
    { id: 2, name: 'Victor' },
    { id: 3, name: 'Kate' },
  ],
  findById(id) {
    return this.list.find(item => item.id === id)
  },
  findByName(name) {
    return this.list.find(item => item.name === name)
  },
  filterById(id) {
    return this.list.filter(item => item.id !== id)
  },
  filterByName(name) {
    return this.list.filter(item => item.name !== name)
  },
  getAllNames() {
    return this.list.map(item => item.name)
  },
  getAllIds() {
    return this.list.map(item => item.id)
  },
}
