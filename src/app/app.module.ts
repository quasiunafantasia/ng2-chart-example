import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { BubleChartComponent } from './buble-chart/buble-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    BubleChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
