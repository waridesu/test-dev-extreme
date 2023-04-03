import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { FilterComponent } from './components/filter/filter.component';
import { DxDataGridModule } from "devextreme-angular";
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HttpClientModule } from "@angular/common/http";
import { IndexPageComponent } from './components/index-page/index-page.component';
import { NgOptimizedImage } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    FilterComponent,
    AboutPageComponent,
    IndexPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDataGridModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
