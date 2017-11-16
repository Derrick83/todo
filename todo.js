
function c(something){
	console.log(something);
}

var todoList =
{
	//make empty list to keep todo requests
	todos : [],
	//display tools on console
	displayToDos: function(){
		console.log('My Todos: '+this.todos)
	},
	addToDo : function(todo){
		this.todos.push(todo);
		this.displayToDos();
	}
}

c(todoList.addToDo('derrick'))


