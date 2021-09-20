/*
    1)
    Создайте цикл от 0 до 10
    Выведите к console.log только чётные

    2)
    Создайте цикл от 0 до 10
    Найдите сумму между этими итерируемыми числами
    Найдите произведение между итерируемыми числами
*/

<<<<<<< HEAD
//// 1
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }

  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

//// 2
let sum = 0;
let multi = 1;

for (let i = 0; i <= 10; i++) {
  sum += i;

  if (i > 0) {
    multi *= i;
  }
}

console.log(sum);
console.log(multi);
=======
// for(let i = 0; i <= 10; i += 2){  
//     console.log(i)
// }

// for(let i = 2; i <= 10; i++){ 
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }

// for(let i = 2; i <= 10; i++){ 
//     if (i % 2 !== 0){
//         continue;
//     }
//     console.log(i)
// }

// let sum = 0;
// let multi = 1;
// for(let i = 0; i <= 10; i++){ 
//     sum += i;
//     if (i > 0){
//     multi *=i;
//     }
// }
// console.log(sum);
// console.log(multi);
>>>>>>> 9e1e4a21b77b537d9ff5e5926646fec713d3ad6c

/*
    1)
    Создайте массив с 10 уникальными числами

    2)
    Дана строка 'sOMe sTrING in lOWERcaSE'
    Создать строку вида 'SoMe sTrInG In lOwErCaSe'

    3)
    Дан массив [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1]
    Создать массив из элементов которые встречаются только один раз
*/
<<<<<<< HEAD

//// 1
const arr = [];

while (arr.length < 10) {
  const randomNum = Math.floor(Math.random() * 100);

  if (arr.includes(randomNum)) {
    continue;
  }

  arr.push(randomNum);
}

console.log(arr);

//// 2
const string = "sOMe sTrING in lOWERcaSE";
let string1 = "";

for (let i = 0; i < string.length; i++) {
  //   string1 += i % 2 === 0 ? string[i].toUpperCase() : string[i].toLowerCase();
  if (i % 2 === 0) {
    string1 += string[i].toUpperCase();
  } else {
    string1 += string[i].toLowerCase();
  }
}

console.log(string1);

//// 3
const someArr = [
  1, 2, 3, 1, 2, 3, 5, 4, 6, 7, 3, 2, 1, 2, 3, 5, 3, 3, 1, 2, 3, 4, 1,
];
const uniqNumbers = [];

for (let i = 0; i < someArr.length; i++) {
  if (
    someArr.indexOf(someArr[i]) === i &&
    someArr.indexOf(someArr[i], i + 1) === -1
  ) {
    uniqNumbers.push(someArr[i]);
  }
}

console.log(uniqNumbers);
=======
    // const arr = [];
    // while(arr.length < 10) {
    //     const a = Math.floor(Math.random() * 100);

    //     if(arr.includes(a)){
    //         continue;
    //     }
    //     arr.push(a);
    // }
    // console.log(arr);
    

//     const string = 'sOMe sTrING in lOWERcaSE';
//     let string1 = '';    // SoMe sTrInG In lOwErCaSe

//     for (let i = 0; i < string.length; i++){
        // string += i % 2 === 0 ? string.toUpperCase() : string[i].toLowerCase;
//         if (i % 2 === 0){
//             string1 += string[i].toUpperCase();
//         } else{
//             string1 += string[i].toLowerCase();
//         }
//     }

// console.log(string1);

const arr = [1,2,3,1,2,3,5,4,6,7,3,2,1,2,3,5,3,3,1,2,3,4,1];
>>>>>>> 9e1e4a21b77b537d9ff5e5926646fec713d3ad6c
