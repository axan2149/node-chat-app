/**
 * Created by mrozycki on 4/21/2017.
 */
const expect = require('expect');
const {Users} = require('./users');


var users;

describe('Users', () =>{
    "use strict";
    beforeEach(() => {
       users = new Users();
       users.users = [{
           id: '1',
           name: 'Mike',
           room: 'Node Course'
       },
           {
               id: '2',
               name: 'Joe',
               room: 'React Course'
           },
           {
               id: '3',
               name: 'Nancy',
               room: 'Node Course'
           }
       ]
    });
   it('Should add a new user', ()=>{
       var users = new Users();
       var user = {
           id:'1234',
           name:'Martin',
           room:'IT Office'
       };
       var resUser = users.addUser(user.id, user.name, user.room);
       expect(users.users).toEqual([user]);

   });

   it('Should return names for node course', () =>{
       var userList = users.getUserList('Node Course');
       expect(userList.length).toBe(2);
       expect(userList).toEqual(['Mike','Nancy']);
   });
    it('Should return names for React course', () =>{
        var userList = users.getUserList('React Course');
        expect(userList.length).toBe(1);
        expect(userList).toEqual(['Joe']);
    });

    it('Should remove a user', () =>{
        var user = users.removeUser('3');
        expect(user.id).toEqual('3');
        expect(users.users.length).toBe(2);
    });

    it('Should not remove user with invalid id',() =>{
        var user = users.removeUser('99');
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('Should find user - valid id', () =>{
        var user = users.getUser('3');
        expect(user).toEqual(users.users[2]);
    });

    it('Should not find a user - invalid id', () =>{
        var user = users.getUser('4');
        expect(user).toNotExist();
    });
});