import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CabService } from './cab-booking-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { C1Component } from './c1/c1.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    C1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CabService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
