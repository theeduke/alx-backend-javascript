export default class Airprort {
	constructor(name, code) {
		this._name = name;
		this._code = code;
	}

	toString() {
		return '[object ${this._code}]';
	}
}
