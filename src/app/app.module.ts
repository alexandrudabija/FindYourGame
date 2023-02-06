
 import { AppRoutingModule ,routingComponents} from './app-routing.module';
 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule}  from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
 import{MatButtonModule} from '@angular/material/button';
 import { NgCircleProgressModule } from 'ng-circle-progress';
import { FilterComponent } from './components/filter/filter.component';




@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    NavBarComponent,
    FilterComponent



  ],


  imports: [
    FormsModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,



    NgCircleProgressModule.forRoot({

      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,

    })



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
