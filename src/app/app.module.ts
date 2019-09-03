import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { CourseSetupComponent } from './course-setup/course-setup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CoursesService } from './courses.service';
import { UsersService } from './users.service';

@NgModule({
  declarations: [
    AppComponent,
    AddUsersComponent,
    ScorecardComponent,
    CourseSetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule, MatToolbarModule,
    MatSidenavModule
  ],
  providers: [CoursesService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
