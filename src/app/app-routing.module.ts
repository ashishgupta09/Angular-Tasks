import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudOpertionComponent } from './pages/crud-opertion/crud-opertion.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { ChartComponent } from './pages/chart/chart.component';

const routes: Routes = [
  { path: 'crud', component: CrudOpertionComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'drag', component: DragDropComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
