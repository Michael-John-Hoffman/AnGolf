import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { UsersService, User } from '../users.service';
@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  private users: Array<User>;


  constructor(private coursesService: CoursesService, private usersService: UsersService) {

    this.users = usersService.getUsers();
    console.log('users', this.users)

  }
 
  
  getHolesForUser(user){
    return this.coursesService.getHolesForUser(user);
  }

  ngOnInit() {
  }

}

