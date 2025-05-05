export class User {
    getUser(userId) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    }

    async printUser(userId) {
        try {
            const userData = await this.getUser(userId)
            const body = await userData.json()
            console.log('User info: ', body)
        }
        catch (error) {
            console.error('Error:', error)
        }
    }
}