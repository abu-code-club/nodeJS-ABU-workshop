

class Todo{
    constructor(todo){
        this.id = Math.floor((Math.random() * 100) + 1);
        this.todo = todo
    }
}

module.exports.Todo = Todo