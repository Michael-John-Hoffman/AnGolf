import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../users.service';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  private users: Array<User>;
  private teeTypes: Array<any>;
  private teeType = 'men';

  constructor(private usersService: UsersService, private coursesService: CoursesService ) { 
    this.teeTypes = coursesService.getTeeTypes();
    this.users = usersService.getUsers();
  }

  addUser(name, teeType){
    this.usersService.addUsers(name, teeType);
  }

  ngOnInit() {
  }

}
