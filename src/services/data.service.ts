export default class DataService {
	setData(todoList) {
		localStorage.setItem('data', JSON.stringify(todoList));
	}

	getData() {
		return JSON.parse(localStorage.getItem('data'));
	}
}
