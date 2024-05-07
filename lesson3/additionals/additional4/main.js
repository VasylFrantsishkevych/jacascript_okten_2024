// --створити масив з:
// - з 5 числових значень
let numbers = [3, 5, 54, 41, 0];
console.log(numbers);
// - з 5 стічкових значень
let strings = ['hello', 'world', 'go', 'run', 'by']
console.log(strings);
// - з 5 значень стрічкового, числового та булевого типу
let array = [1, 'hello', true, false, 0]
console.log(array);
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];
array[0] = 5;
array[1] = 'hello';
array[2] = false;
array[3] = 0;
console.log(array);

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let array = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < array.length) {
    console.log(array[i])
    i++
}

// 2. перебрати його циклом for

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let i = 0;
while (i < array.length) {
    if (i % 2 === 1) {
        console.log(array[i])
    }
    i++
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < array.length; i++) {
    i % 2 === 1 &&  console.log(array[i])
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let i = 0;
while (i < array.length) {
    if (array[i] % 2 === 0) {
        console.log(array[i])
    }
    i++
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < array.length; i++) {
    array[i] % 2 === 0 &&  console.log(array[i])
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
        array[i] = 'okten'
    }
}
console.log(array);

// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let i = array.length;
while (i >= 0) {
    console.log(array[i])
    i--
}

for (let i = array.length; i >= 0; i--) {
    console.log(array[i])
}

let i = array.length;
while (i >= 0) {
    if (i % 2 === 1) {
        console.log(array[i])
    }
    i--
}

for (let i = array.length; i >= 0; i--) {
    i % 2 === 1 &&  console.log(array[i])
}

let i = array.length;
while (i >= 0) {
    if (array[i] % 2 === 0) {
        console.log(array[i])
    }
    i--
}

for (let i = array.length; i >= 0; i--) {
    array[i] % 2 === 0 &&  console.log(array[i])
}

for (let i = array.length; i >= 0; i--) {
    if (array[i] % 3 === 0) {
        array[i] = 'okten'
    }
}
console.log(array);

