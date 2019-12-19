import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';


import { MainMenuComponent }   from './main-menu/main-menu.component';
import { MenuItem }            from './menu-item';

export enum MENUS {
  NONE = 'none',
  MAIN = 'main',
};

@Injectable({providedIn: 'root'})
export class MenuService {
  private menus: Map<string, MenuItem> = new Map();
  private activeMenu$: BehaviorSubject<MenuItem> = new BehaviorSubject<MenuItem>(null);

  constructor() {
    this.init();
  }

  public get activeMenu():  BehaviorSubject<MenuItem>{
    return this.activeMenu$;
  }
  public activateMenu(menu: MENUS): void{
    console.log('menu activated', menu)
    this.activeMenu$.next(this.menus.get(menu.toString()));
  }

  private init(){
    this.menus.set(MENUS.NONE.toString(), null);
    this.menus.set(MENUS.MAIN.toString(), new MenuItem(MainMenuComponent, {}));
  }

}