import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { AppearancePageComponent } from './pages/appearance-page/appearance-page.component';
import { RacePageComponent } from './pages/race-page/race-page.component';
import { ClassPageComponent } from './pages/class-page/class-page.component';
import { AlignmentPageComponent } from './pages/alignment-page/alignment-page.component';
import { SummaryPageComponent } from './pages/summary-page/summary-page.component';


@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    AppearancePageComponent,
    RacePageComponent,
    ClassPageComponent,
    AlignmentPageComponent,
    SummaryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
