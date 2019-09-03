import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsersComponent } from './add-users/add-users.component';
import { ScorecardComponent } from './scorecard/scorecard.component';


const routes: Routes = [
 { path: 'users', component: AddUsersComponent },
 { path: 'scorecard', component: ScorecardComponent},
  //{ path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
