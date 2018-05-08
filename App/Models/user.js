
class User{
    constructor(id=null,username, name,surname){
        this.id = id;
        this.username = username;
        this.name = name;
        this.surname = surname
    }
}

module.exports.User = User;