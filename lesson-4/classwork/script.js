/*
    Дан объект person

    Создать функцию showPersonInfo, должна возвращать строку вида 'NAME LASTNAME, возраст AGE, проживает по адресу CITY, STREET. Работает ROLE по адресу CITY STREET'
    Создать функцию showPetsInfo, должна возвращать 'Питомцев COUNT, TYPE: NAME, TYPE: NAME'
    Создать функцию showFamilyTree, должна возвращать 'Семья из COUNT человек, ROLE_IN_FAMILY: NAME LAST_NAME AGE, ROLE_IN_FAMILY: NAME LAST_NAME AGE, ROLE_IN_FAMILY: NAME LAST_NAME AGE'

    Обязательно использовать деструктуризацию
    Функции должны принимать два аргумента person и defaultParams
    Если нужного параметра нет в объекте, то он должен быть установлен параметр по умолчанию из объекта defaultParams
*/
const anyperson = {
    name: "Alice",
    lastName: undefined,
    age: 25,
    address: {
        city: undefined,
        street: undefined,
    },
    familyTree: {
        father: {
            name: undefined,
            lastName: "Cooper",
            age: 58,
        },
        mother: {
            name: "Ann",
            lastName: undefined,
            age: 50,
        },
        husband: {
            name: "Tom",
            lastName: undefined,
        },
    },
    pets: [
        {
            type: "dog",
            name: undefined,
        },
        {
            type: "cat",
            name: undefined,
        },
    ],
    work: {
        role: undefined,
        address: {
            city: "Minsk",
            street: undefined,
        },
    },
};
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
      age: 25,
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
const defaultInfoParams = {
    name: "default",
    lastName: "default",
    age: 25,
    address: {
        city: "default",
        street: "default default",
    },
    familyTree: {
        father: {
            name: "default",
            lastName: "default",
            age: 58,
        },
        mother: {
            name: "default",
            lastName: "default",
            age: 50,
        },
        husband: {
            name: "default",
            lastName: "default",
        },
    },
    pets: [
        {
            type: "default",
            name: "default",
        },
        {
            type: "cat",
            name: "Barsik",
        },
    ],
    work: {
        role: "default",
        address: {
            city: "default",
            street: "default default",
        },
    },
};

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
//
//   return `Работает ${role}, по адресу ${city}, ${street}`;
// };

const showPersonInfo = (user, defaultParams) => {
  const {
    name = defaultParams.name,
    lastName = defaultParams.lastName,
    age = defaultParams.age,
    address: {
      city = defaultParams.address.city,
      street = defaultParams.address.street,
    },
    work: {
      role = defaultParams.work.role,
      address: {
        city: workCity = defaultParams.work.address.city,
        street: workStreet = defaultParams.work.address.street,
      }
    }
  } = user;
  return `${name} ${lastName}, возраст ${age}, проживает по адресу ${city}, ${street}. Работает ${role} по адресу ${workCity} ${workStreet}`
};

console.log(showPersonInfo(person, defaultInfoParams));
console.log(showPersonInfo(anyperson, defaultInfoParams));

const showPetsInfo = (user, defaultParams) => {
  const {
    pets: [
        {
          type = defaultParams.pets[0].type,
          name = defaultParams.pets[0].name,
        },
        {
          type: pet2Type = defaultParams.pets[1].type,
          name: pet2Name = defaultParams.pets[1].name,
        }
    ]
  } = user;
  return `Питомцев ${user.pets.length}, ${type}: ${name}, ${pet2Type}: ${pet2Name}`
};

console.log(showPetsInfo(person, defaultInfoParams));
console.log(showPetsInfo(anyperson, defaultInfoParams));

const showFamilyTree = (user, defaultParams) => {
  const {
    familyTree: {
        father: {
            name = defaultParams.familyTree.father.name,
            lastName = defaultParams.familyTree.father.lastName,
            age = defaultParams.familyTree.father.age,
        },
        mother: {
            name: motherName = defaultParams.familyTree.mother.name,
            lastName: motherLastName = defaultParams.familyTree.mother.lastName,
            age: motherAge = defaultParams.familyTree.mother.age,
        },
        husband: {
            name: husbandName = defaultParams.familyTree.husband.name,
            lastName: husbandLastName = defaultParams.familyTree.husband.lastName,
            age: husbandAge = 27,
        },
    }
  } = user;
  return `Семья из ${Object.keys(user.familyTree).length} человек,
   ${Object.keys(user.familyTree)[0]}: ${name} ${lastName} ${age},
   ${Object.keys(user.familyTree)[1]}: ${motherName} ${motherLastName} ${motherAge},
   ${Object.keys(user.familyTree)[2]}: ${husbandName} ${husbandLastName} ${husbandAge}`
};

console.log(showFamilyTree(person, defaultInfoParams));
console.log(showFamilyTree(anyperson, defaultInfoParams));
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
const showInfo = function() {
    console.log(`My name is ${this.name} ${this.lastName}, i am ${this.age} years old, my knowledge: ${this.knowledge}, my hobbies: ${this.hobbies}`)
};
const addKnowledge = function (newKnowledge) {
    this.knowledge.push(newKnowledge)
};
const addHobby = function (newHobby) {
    this.hobbies.push(newHobby)
};
const clearKnowledge = function () {
    this.knowledge = []
};
const clearHobbies = function () {
    this.hobbies = []
};
const user = {
    name: 'Pavel',
    lastName: 'Nedvetsky',
    age: '29',
    knowledge: [],
    hobbies: [],
    showInfo,
    addKnowledge,
    addHobby,
    clearKnowledge,
    clearHobbies,

};
user.showInfo();
user.addKnowledge("HTML");
user.addKnowledge("CSS");
user.addKnowledge("JS");
user.showInfo();
user.addHobby("cars");
user.addHobby("games");
user.showInfo();
user.clearKnowledge();
user.showInfo();
user.clearHobbies();
user.showInfo();


