export function taskFirst(){
	const self = this;
	this.task = 'I prefer const when I can.';
	return task;
}

export function getLast(){
	return 'is okay';
}

export function taskNext(){
	let combination = 'but sometimes let'
	combination += getLast();
	return combination;
}
