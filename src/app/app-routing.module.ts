import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudOpertionComponent } from './pages/crud-opertion/crud-opertion.component';

const routes: Routes = [
  { path: 'crud', component: CrudOpertionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
