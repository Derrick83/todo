
function c(something){
	console.log(something);
}

//data structure example for todo object.
// {
// 	toDoText : 'item1',
// 	completed : true
// }

var todoList =
{
	//make empty list to keep todo requests
	todos : [],
	//display tools on console
	displayToDos: function(){
		console.log('My Todos: '+this.todos)
	},
	addToDo : function(toDoText){
		this.todos.push({
			todoText : toDoText,
			completed : false
		});
		this.displayToDos();
	},
	changeToDo: function(position,newValue){
		this.todos[position] = newValue;
		this.displayToDos();
	},
	deleteToDo: function(position){
		this.todos.splice(position,1);
		this.displayToDos();
	}
}



var x = todoList.addToDo('code')
console.log(JSON.stringify(x))



