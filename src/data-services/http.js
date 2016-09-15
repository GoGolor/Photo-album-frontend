export default class {
	constructor($http) {
		this.$http = $http;
	}

	post(action, data) {
		return this.$http({
			method: 'POST',
			url: 'http://localhost:3000/' + action,
			data: data,
			withCredentials: true,
			headers: 'application/x-www-form-urlencoded;charset=utf-8'
		})
		.then((msg, status) => {
			return msg.data;
		}, () => {
			console.log('req faild(');
		});
	}

	get(action) {
		return this.$http({
			method: 'GET',
			url: 'http://localhost:3000/' + action,
			withCredentials: true
		})
		.then((msg, status) => {
			return msg.data;
		}, () => {
			console.log('req faild(');
		});
	}
}