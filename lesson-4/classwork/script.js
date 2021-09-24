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

const showPersonInfo = (person, defaultParams) => {
  const {
    
      name = defaultParams.name,
      lastName = defaultParams.lastName,
      age = defaultParams.age,
      address: {
        city = defaultParams.address.city,
        street = defaultParams.address.street,
      
    },
    
      work: {
        role = defaultParams.role,
        address: {
          city:city1 = defaultParams.address.city1,
          street:street1 = defaultParams.address.street1,
        },
      }
  } = person;

  return `${name} ${lastName},возраст ${age}, проживает по адресу ${city}, ${street}.Работает ${role}, по адресу ${city1}, ${street1}`
};

console.log(showPersonInfo(person, showPersonInfo));

const showPetsInfo = (person, defaultParams) => {
  defaultParams.count = 2;
  const {
    pets: [
      {
        type:type2 = defaultParams.pets.type2,
        name:name2 = defaultParams.pets.name2,
      },
      {
        type:type3 = defaultParams.pets.type3,
        name:name3 = defaultParams.pets.name3,
      }
    ],
     
  } = person;
  return `Питомцев ${defaultParams.count}, ${type2}: ${name2}, ${type3}: ${name3}`
};
console.log(showPetsInfo(person, showPetsInfo));

const showFamilyTree = (person, defaultParams) => {
  
  const {
    familyTree: {
      father: {
        name:name3 = defaultParams.name3,
        lastName:lastName3 = defaultParams.lastName3,
        age:age3 = defaultParams.age3,
      },
      mother: {
        name:name4 = defaultParams.name4,
        lastName:lastName4 = defaultParams.lastName4,
        age:age4 = defaultParams.age4,
      },
      husband: {
        name:name5 = defaultParams.name5,
        lastName:lastName5 = defaultParams.lastName5,
      },
    },
  } = person;

  defaultParams.count3 = 3;
  defaultParams.father = "father";
  defaultParams.mother = "mother";
  defaultParams.husband = "husband";
  defaultParams.age = 30;

  return `Семья из ${defaultParams.count3} человек, ${defaultParams.father}: ${name3} ${lastName3} ${age3}, ${defaultParams.mother}: ${name4} ${lastName4} ${age4}, ${defaultParams.husband}: ${name5} ${lastName5} ${defaultParams.age} `
}

console.log(showFamilyTree(person, showFamilyTree));
// ПРИМЕР: Создать функцию showPersonInfo, должна возвращать строку вида 'Работает ROLE по адресу CITY, STREET'
/*
const defaultWorkInfoParams = {
  role: "unknown",
  address: {
    city: "London",
    street: "Somewhere",
  },
};

/*
const showPersonInfo = (user, defaultParams) => {
  const {
    work: {
      role = defaultParams.role,
      address: {
        city = defaultParams.address.city,
        street = defaultParams.address.street,
      },
    },
  } = user;

  return `Работает ${role}, по адресу ${city}, ${street}`;
};

console.log(showPersonInfo(person, showPersonInfo));
*/
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

const user = {

  name: 'SomeName',
  lastName: 'SomeLastName',
  age: 'SomeAge',
  knowledge: [],
  addKnowledge(){
    user.knowledge.push("knowledge")
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