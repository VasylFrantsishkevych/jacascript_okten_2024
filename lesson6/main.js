// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length)
console.log('lorem ipsum'.length)
console.log('javascript is cool'.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.toUpperCase())
console.log('lorem ipsum'.toUpperCase())
console.log('javascript is cool'.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('HELLO WORLD'.toLowerCase())
console.log('LOREM IPSUM'.toLowerCase())
console.log('JAVASCRIPT IS COOL'.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
console.log(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';

function stringToArray(str) {
    return str.split(' ');
}
console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numbers = [10,8,-7,55,987,-1011,0,1050,0];
let stringArray = numbers.map(number => number.toString())
console.log(stringArray);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
const sortNums = (array, direction) => {
    if (direction === 'ascending') {
        array.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        array.sort((a, b) => b -a)
    }
}
sortNums(nums, 'ascending')
console.log(nums)

// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((curse1, curse2) =>
    curse2.monthDuration - curse1.monthDuration
)
console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter(curse => curse.monthDuration > 5)
console.log(filter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let addId = coursesAndDurationArray.map((curse, i) => ({...curse, id: i+1}))
console.log(addId);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    '6 spade black', '7 spade black', '8 spade black', '9 spade black', '10 spade black', 'J spade black',
    'Q spade black', 'K spade black', 'A spade black', '6 diamond red', '7 diamond red', '8 diamond red',
    '9 diamond red', '10 diamond red', 'J diamond red', 'Q diamond red', 'K diamond red', 'A diamond red',
    '6 heart red', '7 heart red', '8 heart red', '9 heart red', '10 heart red', 'J heart red', 'Q heart red',
    'K heart red', 'A heart red', '6 clubs black', '7 clubs black', '8 clubs black', '9 clubs black',
    '10 clubs black', 'J clubs black', 'Q clubs black', 'K clubs black', 'A clubs black'
]
// - знайти піковий туз

let findCard = cards.find(card => card.includes('A spade'));
console.log(findCard);

// - всі шістки

let filterCards = cards.filter(card => card.includes('6'));
console.log(filterCards);

// - всі червоні карти

let resArr = [];
cards.forEach(card => {
    if (card.includes('red')) {
        resArr.push(card)
    }
})
console.log(resArr);

// - всі буби

let filterCards = cards.reduce((acc, currentValue) => {
    if (currentValue.includes('diamond')) {
        acc.push(currentValue)
    }
    return acc
}, []);
console.log(filterCards);

// - всі трефи від 9 та більше

let filterCards = cards
    .filter(card => card.includes('clubs'))
    .splice(3);
console.log(filterCards);

//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let group = cards.reduce((acc, currentValue) => {
    let cardInfo = currentValue.split(' ');
    acc[cardInfo[1]] = acc[cardInfo[1]] || [];
    acc[cardInfo[1]].push(currentValue)
    return acc;
}, {})
console.log(group);


// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
let res = [];
coursesArray.forEach(curse => {
    if (curse.modules.includes('sass')) {
        res.push(curse)
    }
})
console.log(res);
// --написати пошук всіх об'єктів, в який в modules є docker

let filter = coursesArray.filter(curse => curse.modules.includes('docker'))
console.log(filter);