
function redirect(page){
    location.href = location.href + page;
}

function validation() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (password.length >= 6 && password.indexOf(/^(.*[A-Z].*)$/) && username.length >= 5){
        return true;
    }
    return false;
}

function addNewTodo(){
    var todo = {"todo":document.getElementById('todo').value};
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8080/add-todo",
    //     data: todo,
    //     success: function(){
    //         location.href = location.href
    //     }
    // })
    
}
