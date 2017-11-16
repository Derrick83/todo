
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

c(todoList.addToDo('derrick'))
c(todoList.changeToDo(0,'steven'))


