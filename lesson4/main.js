// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRectangle (a, b) {
    return a * b;
}
console.log(areaRectangle(2, 3))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleArea (r) {
    const p = 3.14;
    return r * r * p;
}
console.log(circleArea(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea (h, r) {
    const p = 3.14;
    return 2 * p * r * (r + h);
}
console.log(cylinderArea(5, 5))

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [1, 2, 3, 4, 5]
function arrayItem (array) {
    for (const item of array) {
        console.log(item);
    }
}
arrayItem(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph (text) {
    document.write(`<p>${text}</p>`)
}
createParagraph('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createList (text) {
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `)
}
createList('text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createList (text, number) {
    document.write('<ul>')
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}
createList('text', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createList (array) {
    document.write('<ul>')
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    document.write('</ul>')
}
let arr = [1, 'hello', false]
createList(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28},
// ];
//
function renderUsers (array) {
    for (const item of array) {
        document.write(`
            <div>
                ${item.id} - ${item.name} - ${item.age}
            </div>
        `)
    }
}
renderUsers(users)


// - створити функцію яка повертає найменьше число з масиву

function minNumber (array) {
    let min = array[0];
    for (const number of array) {
        if (number < min) {
            min = number
        }
    }
    return min
}
let numbers = [5, 6, 50, 8, 100];
console.log(minNumber(numbers))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sumNumbers (array) {
    let sum = 0;
    for (const number of array) {
        sum += number
    }
    return sum;
}
let numbers = [1, 2, 17];
console.log(sumNumbers(numbers))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap (array, index1, index2) {
    let target = array[index1]
    let increment = index2 < index1 ? -1 : 1;
    for (let i = index1; i !== index2; i += increment) {
        array[i] = array[i + increment]
    }
    array[index2] = target;
    return array;
}
console.log(swap([11,22,33,44],0,1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let res;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            res = sumUAH / item.value
        }
    }
    return res;
}

console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))