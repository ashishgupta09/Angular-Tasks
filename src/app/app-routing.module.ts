import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudOpertionComponent } from './pages/crud-opertion/crud-opertion.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { ChartComponent } from './pages/chart/chart.component';
import { AddCardComponent } from './pages/add-card/add-card.component';
import { UploadDownloadImageComponent } from './pages/upload-download-image/upload-download-image.component';
import { CreatePopupComponent } from './pages/create-popup/create-popup.component';
import { CustomTabComponent } from './pages/custom-tab/custom-tab.component';
import { MutiSelectDropdownComponent } from './pages/muti-select-dropdown/muti-select-dropdown.component';
import { FullCelenderComponent } from './pages/full-celender/full-celender.component';
import { AccordionComponent } from './pages/accordion/accordion.component';
import { SideTabsComponent } from './pages/side-tabs/side-tabs.component';

const routes: Routes = [
  { path: 'crud', component: CrudOpertionComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'drag', component: DragDropComponent },
  { path: 'add', component: AddCardComponent },
  { path: 'image', component: UploadDownloadImageComponent },
  { path: 'pop-up', component: CreatePopupComponent },
  { path: 'custom-tab', component: CustomTabComponent },
  { path: 'multi-dropdown', component: MutiSelectDropdownComponent },
  { path: 'celender', component: FullCelenderComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'tabs', component: SideTabsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
