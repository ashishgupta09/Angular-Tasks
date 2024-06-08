import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudOpertionComponent } from './pages/crud-opertion/crud-opertion.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { ChartComponent } from './pages/chart/chart.component';
import { AddCardComponent } from './pages/add-card/add-card.component';
import { UploadDownloadImageComponent } from './pages/upload-download-image/upload-download-image.component';
import { CreatePopupComponent } from './pages/create-popup/create-popup.component';
import { CustomTabComponent } from './pages/custom-tab/custom-tab.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
