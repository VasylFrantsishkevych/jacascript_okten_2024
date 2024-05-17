// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];
users.push(new User(4, 'Olia', 'Rats', 'alia@gmail.com', '+380504125639'));
users.push(new User(2, 'Taras', 'Hus', 'taras@gmail.com', '+380504125584'));
users.push(new User(10, 'Tolia', 'Trach', 'tolia@gmail.com', '+380508925584'));
users.push(new User(1, 'Kolia', 'Mars', 'kolia@gmail.com', '+380508985284'));
users.push(new User(9, 'Polina', 'Rich', 'polina@gmail.com', '+380988985284'));
users.push(new User(6, 'Karina', 'Top', 'karina@gmail.com', '+380972585284'));
users.push(new User(7, 'Halia', 'Vip', 'halia@gmail.com', '+380972589658'));
users.push(new User(8, 'Maria', 'Myh', 'maria@gmail.com', '+380977959658'));
users.push(new User(5, 'Volodia', 'Muz', 'volodia@gmail.com', '+380912959658'));
users.push(new User(3, 'Sofia', 'Logo', 'sofia@gmail.com', '+380912967358'));
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUsers = users.filter(user => user.id % 2 === 0)
console.log(filterUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

users.sort((a, b) => a.id - b.id);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [];
clients.push(new Client(4, 'Olia', 'Rats', 'alia@gmail.com', '+380504125639', ['phone', 'TV']));
clients.push(new Client(2, 'Taras', 'Hus', 'taras@gmail.com', '+380504125584', ['fridge', 'Microwave', 'phone']))
clients.push(new Client(10, 'Tolia', 'Trach', 'tolia@gmail.com', '+380508925584', ['TV']));
clients.push(new Client(1, 'Kolia', 'Mars', 'kolia@gmail.com', '+380508985284', ['Washing machine', 'Coffee machine']))
clients.push(new Client(9, 'Polina', 'Rich', 'polina@gmail.com', '+380988985284', ['phone', 'TV', 'Washing machine', 'Coffee machine']))
clients.push(new Client(6, 'Karina', 'Top', 'karina@gmail.com', '+380972585284', ['Vacuum cleaner', 'Microwave', 'phone', 'Washing machine', 'Coffee machine']))
clients.push(new Client(7, 'Halia', 'Vip', 'halia@gmail.com', '+380972589658', ['Screws', 'jigsaw', 'Electric planer']))
clients.push(new Client(8, 'Maria', 'Myh', 'maria@gmail.com', '+380977959658', ['laptop', 'tablet', 'Router', 'Microwave', 'phone', 'Washing machine', 'Coffee machine']))
clients.push(new Client(5, 'Volodia', 'Muz', 'volodia@gmail.com', '+380912959658', ['fridge']))
clients.push(new Client(3, 'Sofia', 'Logo', 'sofia@gmail.com', '+380912967358', ['tablet', 'Router']))
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((a, b) => a.order.length - b.order.length);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, engine, newDriver) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.newDriver = newDriver;

    this.drive = function () {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    };
    this.info = function () {
        if (this.newDriver !== undefined) {
            return `driver name: ${this.newDriver.name}; model: ${this.model}; producer: ${this.producer}; year: ${this.year}; speed: ${this.maxSpeed}; engine: ${this.engine}`
        } else {
            return `model: ${this.model}; producer: ${this.producer}; year: ${this.year}; speed: ${this.maxSpeed}; engine: ${this.engine}`
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        return `Нова максимальна швидкість становить ${this.maxSpeed + newSpeed}`
    };
    this.changeYear = function (newValue) {
        return `Рік змінено з ${this.year} на ${newValue}`
    };
    this.addDriver = function (driver) {
        this.newDriver = driver
    }
}
let car = new Car('Lancer', 'Mitsubishi', 2009, 180, 1.5);
car.addDriver({name: 'Kolia', age: 34})
console.log(car.drive());
console.log(car.info());
console.log(car.increaseMaxSpeed(20));
console.log(car.changeYear(2010))

console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, producer, year, maxSpeed, engine, newDriver) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.newDriver = newDriver;
    }
    drive () {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    };
    info () {
        if (this.newDriver !== undefined) {
            return `driver: ${this.newDriver.name}; model: ${this.model}; producer: ${this.producer}; year: ${this.year}; speed: ${this.maxSpeed}; engine: ${this.engine}`
        } else {
            return `model: ${this.model}; producer: ${this.producer}; year: ${this.year}; speed: ${this.maxSpeed}; engine: ${this.engine}`
        }
    };
    increaseMaxSpeed (newSpeed) {
        return `Нова максимальна швидкість становить ${this.maxSpeed + newSpeed}`
    };
    changeYear (newValue) {
        return `Рік змінено з ${this.year} на ${newValue}`
    };
    addDriver (driver) {
        this.newDriver = driver
    }
}
let car = new Car('Lancer', 'Mitsubishi', 2009, 180, 1.5);
car.addDriver({name: 'Kolia', age: 34})
console.log(car.drive());
console.log(car.info());
console.log(car.increaseMaxSpeed(20));
console.log(car.changeYear(2010))

console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

function Popelushka(name,age,footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let girls = [
    new Popelushka('Vika',21,34),
    new Popelushka('Ola', 33,37),
    new Popelushka('Tania', 25,35),
    new Popelushka('Nina',55,42),
    new Popelushka('Zina',45,41),
    new Popelushka('Masha', 26,36),
    new Popelushka('Katia', 24,44),
    new Popelushka('Greta',30,40),
    new Popelushka('Nadia',19,38),
    new Popelushka('Ania',28,39)
];

function Prince(name, age, findShoeSize){
    this.name = name;
    this.age = age;
    this.findShoeSize = findShoeSize;
}
let prince = new Prince('Kolia',30,40);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const girl of girls) {
    if (girl.footSize === prince.findShoeSize) {
        console.log(girl.name)
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let findGirl = girls.find(girl => girl.footSize === prince.findShoeSize);
console.log(findGirl);

// Через Array.prototype. створити власний foreach, filter, map

Array.prototype.ownForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}
girls.newForEach(el => console.log(el))

Array.prototype.ownFilter = function (callback) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            array.push(this[i]);
        }
    }
    return array
}
console.log(girls.ownFilter(el => el.age < 30))

Array.prototype.ownMap = function (callback) {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i]));
    }
    return array
}
console.log(girls.ownMap(girl => girl.age * 2))