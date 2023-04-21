export default class Currency{
	constructor(code, name){
		this.code = _code;
		this.name = _name;
	}
	get code(){
		return _code;
	}
	set code(co){
		_code = co;
	}
	get name(){
		return _name;
	}
	set name(na){
		_name = na;
	}
	displayFullCurrency(){
		return '${_name}(${_code})';
	}
}
