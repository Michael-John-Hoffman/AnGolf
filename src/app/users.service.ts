import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class User {
  name: string;
  teeType: string;
}

export class UsersService {
  private users: User[];

  constructor() {
    this.users = new Array<User>();
    let user = new User();
    user.name = 'Batman';
    user.teeType = 'pro';
    this.users.push(user)
   }

   getUsers() {
     return this.users
   }
   addUsers(name, teeType) {
     let user = new User();
     user.name = name;
     user.teeType = teeType;
     this.checkDuplicate(user);
     this.users.push(user);
   }
   checkDuplicate(user:User) {
    for(let u of this.users) {
      if (user.name === u.name) {
        user.name += ' ' + Math.random();
      }
    }
   }
}

