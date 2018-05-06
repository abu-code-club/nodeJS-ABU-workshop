
function redirect(page){
    location.href = location.href + page
};

function validation() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (password.length > 6 && password.indexOf(/^(.*[A-Z].*)$/) && username.length > 5){
        return true;
    }
    return false;
}
