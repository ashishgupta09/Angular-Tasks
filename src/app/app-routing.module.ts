import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudOpertionComponent } from './pages/crud-opertion/crud-opertion.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { ChartComponent } from './pages/chart/chart.component';
import { AddCardComponent } from './pages/add-card/add-card.component';
import { UploadDownloadImageComponent } from './pages/upload-download-image/upload-download-image.component';
import { CreatePopupComponent } from './pages/create-popup/create-popup.component';

const routes: Routes = [
  { path: 'crud', component: CrudOpertionComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'drag', component: DragDropComponent },
  { path: 'add', component: AddCardComponent },
  { path: 'image', component: UploadDownloadImageComponent },
  { path: 'pop-up', component:CreatePopupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
