function getTodo(toDoId) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${toDoId}`)
}

async function printToDo(toDoId) {
    try{
    const toDoData = await getTodo(toDoId)
    const body = await toDoData.json()
    console.log('To do info: ', body)
    }
    catch(error) {
        console.error('Error:', error)
    }
}
printToDo(3);

function getUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
}

async function printUser(userId) {
    try{
    const userData = await getUser(userId)
    const body = await userData.json()
    console.log('User info: ', body)
    }
    catch(error) {
        console.error('Error:', error)
    }
}
printUser(3);