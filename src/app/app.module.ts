import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';

import { MenuDirective } from './directives/menu.directive';
import { MenuComponent } from './menu/menu.component';
import { NewGameMenuComponent } from './menu/new-game-menu/new-game-menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ],
  declarations: [
    AppComponent, MainMenuComponent, MenuDirective, MenuComponent, NewGameMenuComponent, ],
  bootstrap:    [ AppComponent ],
  entryComponents: [MainMenuComponent, ],
})
export class AppModule { }
