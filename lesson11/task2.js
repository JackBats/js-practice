
//task2.1 - Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
function getTodo(toDoId){
    return fetch(`https://jsonplaceholder.typicode.com/todos/${toDoId}`)
}

//task2.2 - Функція повинна повертати як результат Promise що повертає об’єкт todo
getTodo(3)
    .then(response => response.json())
    .then(body => console.log('To do info: ', body))
    .catch(error => console.error('Error:', error));


//task2.3 - Напишіть функцію яка буде робити запит до серверу за цим ендпоінтом
function getUser(userId){
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
}

//task2.4 - Функція повинна повертати як результат Promise що повертає об’єкт user
getUser(3)
    .then(response => response.json())
    .then(body => console.log('\nUser info: ', body))
    .catch(error => console.error('Error:', error));


//task2.5 - Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
// Присвойте значення отримані від цих виразів до змінних

let toDoResults;
let firstToDoResult;


const promises = [
        getTodo(1).then(response => response.json()),
        getTodo(2).then(response => response.json()),
        getTodo(3).then(response => response.json()),
    ]
Promise.all(promises)
        .then(data => {
            toDoResults = data;
            console.log('\nAll results: ', toDoResults);
        })
        .catch(error => console.error('Error:', error));

Promise.race(promises)
.then(data => {
    firstToDoResult = data;
    console.log('\nFirst result: ', firstToDoResult);
})
.catch(error => console.error('Error:', error));


let userResults;
let firstUserResult;

const userPromises = [
        getUser(1).then(response => response.json()),
        getUser(2).then(response => response.json()),
        getUser(3).then(response => response.json()),
    ]

Promise.all(userPromises)
.then(data => {
    userResults = data;
    console.log('\nAll user results: ', userResults);
})
.catch(error => console.error('Error:', error));

Promise.race(userPromises)
.then(data => {
    firstUserResult = data;
    console.log('\nFirst user result: ', firstUserResult);
})
.catch(error => console.error('Error:', error));
