import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { MenuDirective} from '../directives/menu.directive';
import { MenuService } from './menu.service';
import { MenuComponent as AMenuComponent} from './menu-component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @ViewChild(MenuDirective, {static: true})
  menuHost: MenuDirective;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    menuService: MenuService
  ) {
    menuService.activeMenu.subscribe(menu => {
      console.log(menu);
      if(menu === null){
        return;
      }
      const componentFactory = componentFactoryResolver.resolveComponentFactory(menu.component);
      const viewContainerRef = this.menuHost.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<AMenuComponent>componentRef.instance).data = menu.data;
    });
  }
}