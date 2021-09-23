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
const defaultWorkInfoParams = {
  role: "unknown",
  address: {
    city: "London",
    street: "Somewhere",
  },
};

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

console.log(showPersonInfo(person, defaultWorkInfoParams));

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
