// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 'hello', 3, true, 2, 5, 'Lviv', false, 'name', 234];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {title: 'Firestarter', pageCount: 512, genre: 'Fantasy'};
let book2 = {title: 'Dune)', pageCount: 656, genre: 'Fantasy'};
let book3 = {title: 'Harry Potter and The Philosopher\'s Stone', pageCount: 248, genre: 'Fantasy'};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {
    title: 'Firestarter',
    pageCount: 512,
    genre: 'Fantasy',
    authors: [
        {name: 'Stephen Edwin King', age: 76}
    ]
};
let book2 = {
    title: 'Dune)',
    pageCount: 656,
    genre: 'Fantasy',
    authors: [
        {name: 'Frank Herbert', age: 70}
    ]
};
let book3 = {
    title: 'Harry Potter and The Philosopher\'s Stone',
    pageCount: 248,
    genre: 'Fantasy',
    authors: [
        {name: 'Joanne Rowling', age: 57}
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Olia', username: 'homa', password: '12sfd'},
    {name: 'Taras', username: 'duk', password: '324sdf'},
    {name: 'Kolia', username: 'fric', password: 'sdf456'},
    {name: 'Tim', username: 'klumok', password: '32fwsd'},
    {name: 'Oleg', username: 'horik', password: '34dfgdfg'},
    {name: 'Tamara', username: 'kruck', password: 'asdas3243'},
    {name: 'Jack', username: 'liver', password: 'asd343'},
    {name: 'Joanne', username: 'rowling', password: 'w4sdfsdf'},
    {name: 'Frank', username: 'herbert', password: '234erter5'},
    {name: 'Stephen', username: 'king', password: 'sdrf3455'},
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
// Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
// Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperatureForWeek = [
    {
        monday: {
            morning: 8, day: 15, evening: 14
        },
        tuesday: {
            morning: 6, day: 13, evening: 12
        },
        wednesday: {
            morning: 7, day: 16, evening: 15
        },
        thursday: {
            morning: 5, day: 17, evening: 16
        },
        friday: {
            morning: 10, day: 18, evening: 17
        },
        saturday: {
            morning: 11, day: 19, evening: 18
        },
        sunday: {
            morning: 813, day: 23, evening: 21
        },
    }
]

// Логічні розгалуження:
//- Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

let number = prompt('Write number!')
let res =  +number !== 0 ? 'False' : 'True';
console.log(res)

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).

let time = +prompt('Write number from 0 to 59.')
if (time >= 0 && time <= 15) {
    console.log('first quarter')
} else if (time > 15 && time <= 30) {
    console.log('second quarter')
} else if (time > 30 && time <= 45) {
    console.log('third quarter')
} else {
    console.log('fourth quarter')
}

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let number = +prompt('Write number from 1 to 31.')
let res;
if (number >= 1 && number <= 10) {
    res = 'first decade';
} else if (number > 10 && number <= 20) {
    res = 'second decade';
} else {
    res = 'third decade';
}
console.log(res);

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).

let numberDay = +prompt('Write day number from 1 to 7.')
switch (numberDay) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('number is wrong')
}

// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.

let number1 = +prompt('Write number 1.')
let number2 = +prompt('Write number 1.')

if (number1 > number2) {
    console.log(number1);
} else if (number1 < number2) {
    console.log(number2);
} else if (number1 === number2) {
    console.log(number1, number2);
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//  (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let a = '';
let x = !!a === false ? 'default' : true;

console.log(x)

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('супеп')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('супеп')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('супеп')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('супеп')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('супеп')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('супеп')
}