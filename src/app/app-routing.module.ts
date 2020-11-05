import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';

const routes: Routes = [
  { path: 'user/leticia', component: PhotoListComponent },
  { path: 'p/add', component: PhotoFormComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
