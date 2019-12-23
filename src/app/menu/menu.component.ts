import { Component, ViewChild, ComponentFactoryResolver, Injector, Output, EventEmitter  } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { MenuDirective} from '../directives/menu.directive';
import { MenuService } from './menu.service';
import { MenuComponent as AMenuComponent} from './menu-component';
import {Actions } from './action.enum';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @ViewChild(MenuDirective, {static: true})
  menuHost: MenuDirective;

  @Output()
  actionRequired = new EventEmitter<Actions>();

  private menuSub$: Subscription;

  constructor(
    private injector: Injector , 
    private componentFactoryResolver: ComponentFactoryResolver,
    menuService: MenuService
  ) {
    console.log(injector);
    menuService.activeMenu.subscribe(menu => this.loadMenu(menu));
  }

  private loadMenu(menu){
      if (!this.menuHost){
        return;
      }
      const viewContainerRef = this.menuHost.viewContainerRef;
      if(viewContainerRef){
        viewContainerRef.clear();
      }
      if(menu === null){
        return;
      }
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(menu.component);
      const componentRef = viewContainerRef.createComponent(componentFactory, 0, this.injector);
      (<AMenuComponent>componentRef.instance).data = menu.data;
      if(this.menuSub$){
        this.menuSub$.unsubscribe();
      }
      this.menuSub$ = (<AMenuComponent>componentRef.instance).actionRequired.subscribe(
        action => this.actionRequired.next(action)
      );
    }
}