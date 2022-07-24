import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'main/tasklist', component: TasklistComponent },
  { path: 'main/addtask', component: AddTaskComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
