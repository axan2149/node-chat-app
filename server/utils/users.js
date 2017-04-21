/**
 * Created by mrozycki on 4/21/2017.
 */
// [{
//     id: 'safasfsdfsd',
//     name: 'Martin',
//     room: 'Office Fans'
// }]

//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
    constructor (){
        this.users=[]
    }
    addUser(id,name,room){
        var user ={id,name,room};
        this.users.push(user);
        return user;
    }
    removeUser(id){
        //return user that was removed.
        var user = this.getUser(id);
        if (user){
            this.users = this.users.filter((user) => user.id !== id);
        }
        return user;
    }
    getUser(id){
        //return user with specified id
        var user = this.users.filter((user) => user.id === id);
        return user[0];

    }
    getUserList(room){
        //get user names that are in specified room
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);
        return namesArray;
    }
}

module.exports = {Users};











// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//
//     }
//     getUserDescription () {
//         return `${this.name} is ${this.age} year(s) old`
//     }
// }
//
// var me = new Person('Martin', 25);
// console.log(me);
// console.log(me.getUserDescription());