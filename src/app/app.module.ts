import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { EmptyMenuComponent } from './menu/empty-menu/empty-menu.component';


import { AppRoutingModule }        from './app-routing.module';
import { MenuDirective } from './directives/menu.directive';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  AppRoutingModule ],
  declarations: [
    AppComponent, MainMenuComponent, EmptyMenuComponent, MenuDirective, MenuComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
