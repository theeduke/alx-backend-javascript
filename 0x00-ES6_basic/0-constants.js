export function taskFirst(task){
	this.task = const task
	task = 'I prefer const when I can.';
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
