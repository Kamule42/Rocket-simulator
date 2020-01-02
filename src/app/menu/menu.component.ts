import { Component, ViewChild, ComponentFactoryResolver, Injector, Output, EventEmitter  } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { MenuDirective} from '../directives/menu.directive';
import { MenuService, MENUS } from './menu.service';
import { MenuComponent as AMenuComponent} from './menu-component';
import {Actions } from './action.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Output()
  actionRequired = new EventEmitter<Actions>();

  currentMenu: MENUS = MENUS.NONE;
  menus = MENUS;

  private menuSub$: Subscription;

  constructor(
    private injector: Injector , 
    private componentFactoryResolver: ComponentFactoryResolver,
    menuService: MenuService
  ) {
    console.log(injector);
    menuService.activeMenu.subscribe(menu => this.currentMenu = menu);
  }
}