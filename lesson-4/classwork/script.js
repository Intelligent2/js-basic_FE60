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
  name: 'Alice',
  lastName: 'Taylor',
  age: 25,
  address: {
    city: 'Minsk',
    street: '135 Pobediteley Avenue',
  },
  familyTree: {
    father: {
      name: 'Nick',
      lastName: 'Cooper',
      age: 58,
    },
    mother: {
      name: 'Ann',
      lastName: 'Cooper',
      age: 50,
    },
    husband: {
      name: 'Tom',
      lastName: 'Taylor',
    },
  },
  pets: [
    {
      type: 'dog',
      name: 'Bobik',
    },
    {
      type: 'cat',
      name: 'Barsik',
    },
  ],
  work: {
    role: 'Teacher',
    address: {
      city: 'Minsk',
      street: '130 Pobediteley Avenue',
    },
  },
}

const defaultParams = {
  name: 'Joe',
  lastName: 'Black',
  age: 29,
  address: {
    city: 'Barcelona',
    street: 'Calle de Comandante Che Gevara 1',
  },
  familyTree: {
    father: {
      name: 'Barack',
      lastName: 'Obama',
      age: 42,
    },
    mother: {
      name: 'Eva',
      lastName: 'Elfi',
      age: 18,
    },
    husband: {
      name: 'Lyudka',
      lastName: 'Taran',
    },
  },
  pets: [
    {
      type: 'dragon',
      name: 'Clarance',
    },
    {
      type: 'unicorn',
      name: 'Nigel',
    },
  ],
  work: {
    role: 'Whore',
    address: {
      city: 'Bobruisk',
      street: 'Sweet Honey Pea Blvd 69',
    },
  },
}

function showPersonInfo(obj, defaults) {
  const {
    name = defaults.name,
    lastName = defaults.lastName,
    age = defaults.age,
    address: { city = defaults.address.city, street = defaults.address.street },
    work: {
      role = defaults.role,
      address: {
        city: horad = defaults.work.address.city,
        street: vulica = defaults.work.address.street,
      },
    },
  } = obj
  return `${name} ${lastName}, возраст ${age}, проживает по адресу ${city}, ${street}. Работает ${role} по адресу ${
    (horad, vulica)
  }`
}
console.log(showPersonInfo(person, defaultParams))

function showPetsInfo(obj, defaults) {
  const [{ type: type1, name: name1 }, { type: type2, name: name2 }] = obj.pets
  const { pets } = obj
  return `Питомцев ${pets.length}, ${type1}: ${name1}, ${type2}: ${name2}`
}
console.log(showPetsInfo(person, defaultParams))

function showFamilyTree(obj, defaults) {
  const { familyTree } = obj
  const size = Object.keys(familyTree).length
  console.log(`Семья состоит из ${size} человек,`)
}

showFamilyTree(person, defaultParams)

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
  name: 'Joe',
  lastName: 'Black',
  age: '29',
  knowledge: ['HTML', 'CSS', 'JS'],
  hobbies: ['coding', 'reading', 'gaming'],
  showInfo() {
    console.log(`${this.name} ${this.lastName} ${this.age}`)
  },
  addKnowledge(newKnowledge) {
    this.knowledge.push(newKnowledge)
  },
  addHobby(newHobby) {
    this.hobbies.push(newHobby)
  },
  clearKnowledge() {
    this.knowledge = []
  },
  clearHobbies() {
    this.hobbies = []
  },
}
