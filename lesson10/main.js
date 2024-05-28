// // Стоврити форму з трьома полями для name,surname,age та кнопкою.
// // При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// // Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
//
// //=========TASK 1====================
// function render () {
//     document.userInfoForm.onsubmit = function (e) {
//         e.preventDefault()
//     }
//     let nameData = document.userInfoForm.name;
//     let surnameData = document.userInfoForm.surname;
//     let ageData = document.userInfoForm.age;
//     ageData.addEventListener('mousewheel', function (e) {
//         this.blur();
//     })
//     let user = {
//         name: nameData.value,
//         surname: surnameData.value,
//         age: ageData.value,
//     }
//
//     let userCard = document.createElement('div');
//     userCard.className = 'name';
//     userCard.innerText = `${user.name} ${user.surname} - ${user.age}`
//     nameData.value = '';
//     surnameData.value = '';
//     ageData.value = ''
//
//     document.body.appendChild(userCard);
// }
//
//
// // =============TASK 2=============
// // є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код,
// // який при кожному перезавантажені сторінки буде додавати до неї +1
//
// let h1 = document.getElementsByTagName('h1')[0];
//
// function myFunction() {
//     let count = Number(sessionStorage.getItem('count')) || 1;
//     h1.innerText = count.toString();
//     sessionStorage.setItem('count', count + 1);
// }
// myFunction();
//
// // ============TASK 3==============
// // Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// // в масив sessions зберігається інформація про дату та час відвідування сторінки.
// // Є ще сторінка sessions.html (назва довільна),
// // при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// // Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
//
// const now = new Date();
// const date = now.toLocaleDateString();
// const time = now.toLocaleTimeString();
// let dateObj = {date, time};
// localStorage.setItem('sessions', JSON.stringify([]));
//
// const saveLocalStorage = (data) => {
//     let sessions = JSON.parse(localStorage.getItem('sessions'));
//     if (sessions.length === 0) {
//         sessions.push(data);
//         localStorage.setItem('sessions', JSON.stringify(sessions));
//     } else {
//         sessions.splice(0, 1, data)
//         localStorage.setItem('sessions', JSON.stringify(sessions));
//     }
//
// }
// saveLocalStorage(dateObj);
//
// // ==============TASK 4===========
// // зробити масив на 100 об'єктів та дві кнопки prev next
// // при завантажені сторінки з'являються перші 10 об'єктів.
// // При натисканні next виводяться настпні 10 об'єктів
// // При натисканні prev виводяться попередні 10 об'єктів
//
// // let locations = [
// //     {
// //         "title": "м. Київ",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Житомирська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Харківська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Вінницька область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Чернігівська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Дніпропетровська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Черкаська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Волинська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Київська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Миколаївська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Рівненська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Сумська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Тернопільська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Краматорський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Кіровоградська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Хмельницька область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Запорізька область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Одеська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Полтавська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Львівська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "м. Кривий Ріг",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Криворізька територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Івано-Франківська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Чернівецька область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Ізюмський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Бахмутська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Васильків",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Васильківська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Білоцерківська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Біла Церква",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Донецька область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Покровський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Уманська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Бахмутський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Закарпатська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Лубенська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Лубни",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Полтавська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Полтава",
// //         "type": "city"
// //     },
// //     {
// //         "title": "м. Старокостянтинів",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Старокостянтинівська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Миколаїв",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Миколаївська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Торецька територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Кропивницький район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Першотравенська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Нікопольська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Нікополь",
// //         "type": "city"
// //     },
// //     {
// //         "title": "м. Першотравенськ",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Одеський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "м. Черкаси",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Черкаська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Добропільська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Херсонська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "Сумська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Суми",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Первомайська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Краматорська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Макарівська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Краматорськ",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Миргородська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Бориспіль",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Броварська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Миргород",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Бориспільська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Бровари",
// //         "type": "city"
// //     },
// //     {
// //         "title": "м. Вознесенськ",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Коростенський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "м. Первомайськ",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Миронівська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Вознесенський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Синельниківський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Фастівська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Вознесенська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Житомирський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Дружківська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Фастів",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Слов'янська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Запорізький район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "м. Слов'янськ",
// //         "type": "city"
// //     },
// //     {
// //         "title": "м. Кременчук",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Ніжинський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "м. Ватутіне",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Ватутінська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Кременчуцька територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Пологівський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Дніпровська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Дніпро",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Лозівський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Покровська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Обухів",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Узинська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Шепетівський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Пирятинська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Сумський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Харківський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Жашківська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Пирятин",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Павлоградський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Голованівський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Обухівська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Подільський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "м. Охтирка",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Мар'їнська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Мелітополь",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Куп’янський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Святогірська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Рівне",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Бородянська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Роздільнянський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Запорізька територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Шосткинська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Болградський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Прилуцький район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Олешківська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Березівський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Очаківська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Смілянська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Очаків",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Рівненська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Первомайський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Ізмаїльський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Сквирська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Шостка",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Мелітопольська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Маріупольський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Охтирська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Білгород-Дністровський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "м. Запоріжжя",
// //         "type": "city"
// //     },
// //     {
// //         "title": "м. Коростень",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Луганська область",
// //         "type": "oblast"
// //     },
// //     {
// //         "title": "м. Житомир",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Курахівська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Черкаський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Новоград-Волинський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Костянтинівська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Переяславська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Новоукраїнський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Уманський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Коростенська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Переяслав",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Шосткинський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Великоновосілківська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Чернігівський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Радомишльська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Вугледарська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Звенигородський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "м. Конотоп",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Вишгородська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Гребінківська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Сарненський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Бердянський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Миколаївський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Гостомелська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Дубровицька територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Українська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Сарненська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Воскресенська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Маріуполь",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Чугуївський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Охтирський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Житомирська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "м. Сарни",
// //         "type": "city"
// //     },
// //     {
// //         "title": "Широківська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Славутицька територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Золотоніський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Конотопська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Волноваський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Донецький район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "Маріупольська територіальна громада",
// //         "type": "hromada"
// //     },
// //     {
// //         "title": "Вараський район",
// //         "type": "raion"
// //     },
// //     {
// //         "title": "м. Славутич",
// //         "type": "city"
// //     }
// // ];
// //
// let wrapDiv = document.getElementsByClassName('wrap')[0];
// let buttonPrev = document.getElementById('prev');
// let buttonNext = document.getElementById('next');
//
// let startIndex = 0;
// let endIndex = 10;
// let pageNUmber = 0;
//
//
// const render = () => {
//     endIndex > locations.length ? buttonNext.disabled = true : buttonNext.disabled = false;
//     endIndex === 10 ? buttonPrev.disabled = true : buttonPrev.disabled = false;
//     const slicedData = locations.slice(startIndex, endIndex);
//     slicedData.forEach(({title, type}) => {
//         let card = document.createElement('div');
//         card.className = 'card';
//         card.innerText = `${title} - ${type}`
//
//         wrapDiv.appendChild(card)
//     })
// }
//
// render();
//
// buttonNext.addEventListener('click', function () {
//     if (endIndex < locations.length) {
//         wrapDiv.innerHTML = '';
//         startIndex += 10;
//         endIndex += 10;
//     }
//
//     render();
// })
//
// buttonPrev.addEventListener('click', function () {
//     if (endIndex < 20) {
//         startIndex = 0;
//         endIndex = 10;
//     } else {
//         wrapDiv.innerHTML = '';
//         startIndex -= 10;
//         endIndex -= 10;
//     }
//     render()
// })
//
// // ============TASK 5==========
// // - Створити довільний елемент з id = text та створити кнопку.
// // Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
// let block = document.getElementById('text');
// let button = document.createElement('button');
// button.innerText = 'Disappearance'
// button.onclick = function () {
//     block.classList.toggle('hide');
// }
// document.body.appendChild(button);
//
// //============TASK 6==========
// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// // При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let input = document.getElementsByTagName('input')[0];
// let button = document.getElementsByTagName('button')[0];
// button.onclick = function () {
//     let age = +input.value;
//     if (age < 18) {
//         alert('Less than 18 years old. Access is denied.')
//     } else {
//         alert('Congratulations, you are already an adult.')
//     }
//     input.value = ''
// }
//
// //==============TASK 7==============
// // *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
//
// let inputs = document.getElementsByTagName('input');
// let button = document.getElementsByTagName('button')[0];
// let rows,
//     columns,
//     content
// for (const input of inputs) {
//     let nameValue = input.attributes['name'].value;
//     if (nameValue === 'rows') {
//         rows = input
//     } else if (nameValue === 'columns') {
//         columns = input
//     } else if (nameValue === 'content') {
//         content = input
//     }
// }
//
// function createTable(tr, td, text, table){
//        for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//                 tr.style.border = '1px solid grey';
//            for (let j = 0; j < td; j++) {
//                let td = document.createElement('td');
//                     td.innerText = `${text}`;
//                     td.style.border = '1px solid grey';
//                     table.appendChild(tr);
//                     tr.appendChild(td);
//            }
//        }
//    }
//
// button.addEventListener('click', function () {
//     let table = document.createElement('table');
//     table.style.border = '1px solid black';
//
//     createTable(rows.value, columns.value, content.value, table)
//     rows.value = '';
//     columns.value = '';
//     content.value = '';
//
//     document.body.appendChild(table);
// })
//
//
// //============TASK 8================
// // *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// // в середині якого є значення "100грн" при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// // зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// // При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
// let h1 = document.getElementsByTagName('h1')[0];
// let count = Number(sessionStorage.getItem('count')) || 100;
// h1.innerText = `${count.toString()} грн.`;
//
// let startTime = new Date().getTime()
//
// window.addEventListener("beforeunload", function() {
//     const endTime = new Date().getTime();
//     const totalTime = (endTime - startTime) / 1000
//     if (totalTime > 10) {
//         sessionStorage.setItem('count', count + 10);
//     }
// });