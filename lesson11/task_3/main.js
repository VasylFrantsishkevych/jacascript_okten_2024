// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

let userContainer = document.getElementsByClassName('users-container')[0];

let baseURL = 'http://jsonplaceholder.typicode.com';
let getUsers = `${baseURL}/users`;

let url = new URL(getUsers)

fetch(url)
    .then(res => res.json())
    .then(users => {
        users.forEach(({id, name}) => {
            let nameBlock = document.createElement('div')
            let a = document.createElement('a');
            a.href = `user-details.html?id=${+id}`
            a.innerText = `${id} - ${name}`

            nameBlock.appendChild(a);
            userContainer.appendChild(nameBlock);
        })
    })