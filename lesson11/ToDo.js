export class ToDo {
	getTodo(toDoId) {
		return fetch(`https://jsonplaceholder.typicode.com/todos/${toDoId}`);
	}

	async printToDo(toDoId) {
		try {
			const toDoData = await this.getTodo(toDoId);
			const body = await toDoData.json();
			console.log('To do info: ', body);
		} catch (error) {
			console.error('Error:', error);
		}
	}
}
