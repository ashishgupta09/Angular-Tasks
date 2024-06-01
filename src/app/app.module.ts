import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudOpertionComponent } from './pages/crud-opertion/crud-opertion.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { ChartComponent } from './pages/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudOpertionComponent,
    DragDropComponent,
    ChartComponent,
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
