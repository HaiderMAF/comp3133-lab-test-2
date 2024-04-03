import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';

const routes: Routes = [
  // Redirect to missions component
  { path: '', redirectTo: '/missions', pathMatch: 'full' }, 
  { path: 'missions', component: MissionlistComponent },
   // Route with parameter for flight_number
  { path: 'mission/:flight_number', component: MissiondetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
