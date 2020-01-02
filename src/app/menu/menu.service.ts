import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';


import { MainMenuComponent }   from './main-menu/main-menu.component';
import { NewGameMenuComponent }   from './new-game-menu/new-game-menu.component';
import { MenuItem }            from './menu-item';

export enum MENUS {
  NONE = 'none',
  MAIN = 'main',
  NEW_GAME = 'new_game',
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private activeMenu$: BehaviorSubject<MENUS> = new BehaviorSubject<MENUS>(MENUS.NONE);

  constructor() {
  }

  public get activeMenu():  BehaviorSubject<MENUS>{
    return this.activeMenu$;
  }
  public activateMenu(menu: MENUS): void{
    console.log('menu activated', menu)
    this.activeMenu$.next(menu);
  }
}