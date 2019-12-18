import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';


import { AppRoutingModule }        from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  AppRoutingModule ],
  declarations: [ AppComponent, MainMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
