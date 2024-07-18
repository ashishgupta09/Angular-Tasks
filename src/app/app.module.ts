import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCardComponent } from './pages/add-card/add-card.component';
import { ChartComponent } from './pages/chart/chart.component';
import { CreatePopupComponent } from './pages/create-popup/create-popup.component';
import { CrudOpertionComponent } from './pages/crud-opertion/crud-opertion.component';
import { CustomTabComponent } from './pages/custom-tab/custom-tab.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { FullCelenderComponent } from './pages/full-celender/full-celender.component';
import { MutiSelectDropdownComponent } from './pages/muti-select-dropdown/muti-select-dropdown.component';
import { UploadDownloadImageComponent } from './pages/upload-download-image/upload-download-image.component';
import { AccordionComponent } from './pages/accordion/accordion.component';
import { SideTabsComponent } from './pages/side-tabs/side-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudOpertionComponent,
    DragDropComponent,
    ChartComponent,
    AddCardComponent,
    UploadDownloadImageComponent,
    CreatePopupComponent,
    CustomTabComponent,
    MutiSelectDropdownComponent,
    FullCelenderComponent,
    AccordionComponent,
    SideTabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
