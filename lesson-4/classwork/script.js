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
};

// ПРИМЕР: Создать функцию showPersonInfo, должна возвращать строку вида 'Работает ROLE по адресу CITY, STREET'
// const defaultParams = {
//   role: "unknown",
//   address: {
//     city: "London",
//     street: "Somewhere",
//   },
// };

// const showPersonInfo = (user, defaultWorkInfoParams) => {
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

// console.log(showPersonInfo(person, showPersonInfo));

// const defaultParams = {
// 	name: "Sasha",
// 	lastName: "Gorskaya",
// 	age: 27,
// 	address: {
// 		city: "Minsk",
// 		street: "Log.trakt",
// 	},
// 	work: {
// 		role: "Accountant",
// 		address: {
// 			workcity: "Minsk",
// 			workstreet: "Tolbuhina",
// 		},
// 	},
// };
// const showPersonInfo = (user, defaultParams) => {
// 	const {
// 		name = defaultParams.name,
// 		lastName = defaultParams.lastName,
// 		age = defaultParams.age,
// 		address: {
// 			city = defaultParams.address.city,
// 			street = defaultParams.address.street,
// 		},
// 		work: {
// 			role = defaultParams.work.role,
// 			address: {
// 				city: workcity = defaultParams.work.workcity,
// 				street: workstreet = defaultParams.work.workstreet,
// 			},
// 		},
// 	} = user;
// 	return `Работает ${name} ${lastName}, возраст ${age}, проживает по адресу ${city}, ${street}. Работает ${role} по адресу ${workcity} ${workstreet}`;
// };
// console.log(showPersonInfo(person, defaultParams));


// const defaultParams = {
//   pets: [
//     {
//       pet1type: "golden retriver",
//       pet1name: "Ogurchik",
//     },
//     {
//       pet2type: "kitty",
//       pet2name: "Lucky",
//     },
//   ]
// };
// const showPetsInfo = (user, defaultParams) => {
// const {
//   pets: [
//     {type: pet1type = defaultParams.pets[0].pet1type, name: pet1name = defaultParams.pets[0].pet1name},
//     {type: pet2type = defaultParams.pets[1].pet2type, name: pet2name = defaultParams.pets[1].pet2name}
//   ]
// }  = user;
// return `Питомцев ${person.pets.length}, ${pet1type}: ${pet1name}, ${pet2type}: ${pet2name}`;
// }
// console.log(showPetsInfo(person,defaultParams));

// const defaultParams = {
//   familyTree: {
// 		father: {
// 			name: 'Val',
// 			lastName: 'Gorsky',
// 			age: 58,
// 		},
// 		mother: {
// 			name: 'Alla',
// 			lastName: 'Gorskaya',
// 			age: 50,
// 		},
// 		husband: {
// 			name: 'Vasya',
// 			lastName: 'Pupkin',
//       age: 99
// 		},
// 	}
//   };
//   let family = Object.keys(person.familyTree);
//   const showFamilyTree = (user, defaultParams) => {
// const {
//   familyTree: {
//     father: {
//       		name:fathername = defaultParams.familyTree.fathername,
//       		lastName: fatherlastName  = defaultParams.familyTree.fatherlastName,
//       		age: fatherage = defaultParams.familyTree.fatherage,
//       	},
//       	mother: {
//       		name:mothername = defaultParams.familyTree.mothername,
//       		lastName:motherlastName = defaultParams.familyTree.motherlastName,
//       		age:motherage = defaultParams.familyTree.motherage,
//       	},
//       	husband: {
//       		name: husbandname = defaultParams.familyTree.husbandname,
//       		lastName: husbandlastName = defaultParams.familyTree.husbandlastName,
//       	},
//       },
// } = user;

// return `Семья из ${family.length} человек, ${family[0]}: ${fathername} ${fatherlastName} ${fatherage}, ${family[1]} ${mothername} ${motherlastName} ${motherage}, ${family[2]} ${husbandname} ${husbandlastName}`;
// };
// console.log(showFamilyTree(person,defaultParams))

/*
    Создать объект user вида +
    {
        name: 'SomeName',
        lastName: 'SomeLastName',
        age: 'SomeAge',
        knowledge: [],
        hobbies: [],
    }
    Добавить в него методы
    showInfo() {} показывает информацию о usere +
    addKnowledge(newKnowledge) {} добавляет newKnowledge в конец массива knowledge
    addHobby(newHobby) {} добавляет newHobby в начало массива hobies
    clearKnowledge() {} очищает массив hobbies
    clearHobbies() {} очищает массив hobbies

    МЕТОДЫ ДОЛЖНЫ РАБОТАТЬ С this
*/
// const user = {
// 	name: 'SomeName',
// 	lastName: 'SomeLastName',
// 	age: 'SomeAge',
// 	knowledge: [],
// 	hobbies: [],
// };


// user.addKnowledge = function (newKnowledge) {
//   this.knowledge.push(newKnowledge);
// };
// user.addKnowledge("HTML")

// user.addHobby = function (newHobby) {
//   this.hobbies.unshift(newHobby);
// };
// user.addHobby("music")

// user.clearKnowledge = function() {
//   this.knowledge = [];
// }
// user.clearKnowledge()

// user.clearHobbies = function() {
//   this.hobbies = [];
// }
// user.clearHobbies()

// user.showInfo = function(){
//   console.log(this)
// }
// user.showInfo()