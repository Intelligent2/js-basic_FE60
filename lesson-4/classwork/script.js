/*
    Дан объект person

    Создать функцию showPersonInfo, должна возвращать строку вида 'NAME LASTNAME, возраст AGE, проживает по адресу CITY, STREET. Работает ROLE по адресу CITY STREET'
    Создать функцию showPetsInfo, должна возвращать 'Питомцев COUNT, TYPE: NAME, TYPE: NAME'
    Создать функцию showFamilyTree, должна возвращать 'Семья из COUNT человек, ROLE_IN_FAMILY: NAME LAST_NAME AGE, ROLE_IN_FAMILY: NAME LAST_NAME AGE, ROLE_IN_FAMILY: NAME LAST_NAME AGE'

    Обязательно использовать деструктуризацию
    Функции должны принимать два аргумента person и defaultParams
    Если нужного параметра нет в объекте, то он должен быть установлен параметр по умолчанию из объекта defaultParams
*/

const person = {
  name: "Alice",
  lastName: "Taylor",
  age: 25,
  address: {
    city: "Minsk",
    street: "135 Pobediteley Avenue",
  },
  familyTree: {
    father: {
      name: "Nick",
      lastName: "Cooper",
      age: 58,
    },
    mother: {
      name: "Ann",
      lastName: "Cooper",
      age: 50,
    },
    husband: {
      name: "Tom",
      lastName: "Taylor",
    },
  },
  pets: [
    {
      type: "dog",
      name: "Bobik",
    },
    {
      type: "cat",
      name: "Barsik",
    },
  ],
  work: {
    role: "Teacher",
    address: {
      city: "Minsk",
      street: "130 Pobediteley Avenue",
    },
  },
};

// ПРИМЕР: Создать функцию showPersonInfo, должна возвращать строку вида 'Работает ROLE по адресу CITY, STREET'
// const defaultWorkInfoParams = {
//   role: "unknown",
//   address: {
//     city: "London",
//     street: "Somewhere",
//   },
// };

// const showPersonInfo = (user, defaultParams) => {
//   const {
//     work: {
//       role = defaultParams.role,
//       address: {
//         city = defaultParams.address.city,
//         street = defaultParams.address.street,
//       },
//     },
//   } = user;

//   return `Работает ${role}, по адресу ${city}, ${street}`;
// };

// console.log(showPersonInfo(person, defaultWorkInfoParams));

// const showPersonInfo = (person, defaultParams) => {
//   const{
//     name = defaultParams.name,
//     lastName = defaultParams.lastName,
//     age = defaultParams.age,
//     address:{
//       city = defaultParams.city,
//       street = defaultParams.street,
//     },
//     work: {
//       role = defaultParams.role,
//       address: {
//         city: workCity = defaultParams.address.city,
//         street: workStreet = defaultParams.address.street,
//       },
//     },
//   } = person;

//   return `${name} ${lastName}, возраст ${age}, проживает по адресу ${city}, ${street}. Работает ${role} по адресу ${workCity} ${workStreet}`;
// }

// console.log(showPersonInfo(person, defaultWorkInfoParams));

// const showPetsInfo = (person, defaultParams) => {
//   const{
    
//     pets: [
//       { type: type1 = defaultParams.pets.type1,
//         name: name1 = defaultParams.pets.name1 },
//       { type: type2= defaultParams.pets.type2, 
//         name: name2= defaultParams.pets.name2 },
//     ],
    
//   } = person;
  
//   return `Питомцев ${person.pets.length}, ${type1}: ${name1}, ${type2}: ${name2}`;
// }

// console.log(showPetsInfo(person, defaultWorkInfoParams));

const defaultParams = {
  age: 30,
};

const showFamilyTree = (person, defaultParams) => {
  const{
    familyTree: {
      father: {
        name: name1 = defaultParams.name1,
        lastName: lastName1 = defaultParams.lastName1,
        age: age1 = defaultParams.age1,
      },
      mother: {
        name: name2 = defaultParams.name2,
        lastName: lastName2 = defaultParams.lastName2,
        age: age2 = defaultParams.age2,
      },
      husband: {
        name: name3 = defaultParams.name3,
        lastName: lastName3 = defaultParams.lastName3,
      },
    }
  } = person;

  return `Семья из ${Object.keys(person.familyTree).length} человек, ${Object.keys(person.familyTree.father)}: ${name1} ${lastName1} ${age1}, ${Object.keys(person.familyTree.mother)}: ${name2} ${lastName2} ${age2}, ${Object.keys(person.familyTree.husband)}: ${name3} ${lastName3} ${defaultParams.age}`;
}

console.log(showFamilyTree(person, defaultParams));


/*
    Создать объект user вида 
    {
        name: 'SomeName',
        lastName: 'SomeLastName',
        age: 'SomeAge',
        knowledge: [],
        hobbies: [],
    }
    Добавить в него методы
    showInfo() {} показывает информацию о usere
    addKnowledge(newKnowledge) {} добавляет newKnowledge в конец массива knowledge
    addHobby(newHobby) {} добавляет newHobby в начало массива hobies
    clearKnowledge() {} очищает массив hobbies
    clearHobbies() {} очищает массив hobbies

    МЕТОДЫ ДОЛЖНЫ РАБОТАТЬ С this
*/

// const user = {
//   name: 'Maks',
//   lastName: 'Kot',
//   age: '21',
//   knowledge: [],
//   hobbies: [],
//   showInfo() {
//     const info = `${this.name}\n${this.lastName}\n${this.age}`
//     console.log(info)
//   }
// }

// user.showInfo();




const user = {

  name: 'SomeName',
  lastName: 'SomeLastName',
  age: 'SomeAge',
  knowledge: [],
  addKnowledge(newKnowledge){
    let a = "newKnowledge";
    user.knowledge.unshift(a)
    console.log(this.knowledge)
},
clearKnowledge(){
  user.knowledge.length = 0;
  console.log(this.knowledge)
},
hobbies: [],
addHobby(){
  user.hobbies.unshift("newHobby")
  console.log(this.hobbies)
},
clearHobbies(){
  user.hobbies.length = 0;
  console.log(this.hobbies)
},
showInfo(){
  console.log(this)
}
}

user.showInfo()
user.addKnowledge()
user.addHobby()
user.clearKnowledge()
user.clearHobbies()