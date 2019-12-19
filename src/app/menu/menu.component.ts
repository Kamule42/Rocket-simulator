import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { MenuDirective} from '../directives/menu.directive';
import { MenuService } from './menu.service';
import { MenuComponent as AMenuComponent} from './menu-component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @ViewChild(MenuDirective, {static: true}) menuHost: MenuDirective;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    menuService: MenuService
  ) {
    menuService.activeMenu.subscribe(menu => {
      if (!this.menuHost){
        console.log("menu host empty");
        return;
      }
      console.log("menu to display", menu);
      const viewContainerRef = this.menuHost.viewContainerRef;
      if(viewContainerRef){
        viewContainerRef.clear();
      }
      if(menu === null){
        return;
      }
      const componentFactory = componentFactoryResolver.resolveComponentFactory(menu.component);

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<AMenuComponent>componentRef.instance).data = menu.data;
    });
  }
}