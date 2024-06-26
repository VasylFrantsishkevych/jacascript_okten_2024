// 1. Створити пустий масив та :
// a. заповнити його 50 парними числами за допомоги циклу.

let arrayNumber = [];
for (let i = 2; i <= 100; i+=2) {
    arrayNumber[arrayNumber.length] = i;
}
console.log(arrayNumber);

// b. заповнити його 50 непарними числами за допомоги циклу.


for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
        arrayNumber[arrayNumber.length] = i;
    }
}
console.log(arrayNumber);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arrayNumber = [];
for (let i = 0; i < 20; i++) {
    arrayNumber[arrayNumber.length] = Math.random() * 10;
}
console.log(arrayNumber);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arrayNumber = [];
for (let i = 0; i < 20; i++) {
    arrayNumber[arrayNumber.length] = Math.floor(Math.random() * (732 - 8));
}
console.log(arrayNumber);

// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 0; i < 100; i+=3) {
    console.log(i)
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 0; i < 100; i+=3) {
    if (i % 2 !== 1) {
        console.log(i)
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let arrayNumbers = [];
for (let i = 0; i < 100; i+=3) {
    if (i % 2 !== 1) {
        console.log(i)
        arrayNumbers[arrayNumbers.length] = i
    }
}
console.log(arrayNumbers);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let numbers = [ 1, 2, 3, 5, 7, 9, 56, 8, 67, 4 ]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 ) {
        console.log(numbers[i - 1])
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let prices = [100,250,50,168,120,345,188];
let sum = 0;
for (const price of prices) {
    sum += price
}
let average = sum / prices.length
console.log(average);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let numbers = [100,250,50,168,120,345,188];
let numbers2 = [];

for (const number of numbers) {
    numbers2[numbers2.length] = number * 5
}
console.log(numbers2);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...).
// пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let array = ['hello', true, {}, 3, 5, 'go', false, 90]
let numbers = [];

let i = 0;
while (i < array.length) {
    if (typeof array[i] === 'number') {
        numbers[numbers.length] = array[i]
    }
    i++
}
console.log(numbers);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
let usersWithCities = [];
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id) {
            usersWithCities[usersWithCities.length] = user;
            user.address = city
        }
    }
}
console.log(usersWithCities);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let numbers = [23, 44, 54, 27, 6, 78, 5, 98, 1, 10]
for (const number of numbers) {
    if (number % 2 === 0) {
        console.log(number)
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let numbers = [23, 44, 54, 27, 6, 78, 5, 98, 1, 10]
let copy = [];
for (const number of numbers) {
    copy[copy.length] = number;
}
console.log(copy);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let letters = [ 'a', 'b', 'c'];
let word = '';
for (let i = 0; i < letters.length; i++) {
    word += letters[i]
}
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let letters = [ 'a', 'b', 'c'];
let word = '';
let i = 0;
while (i < letters.length) {
    word += letters[i]
    i++
}
console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let letters = [ 'a', 'b', 'c'];
let word = '';
for (const letter of letters) {
    word += letter
}
console.log(word);