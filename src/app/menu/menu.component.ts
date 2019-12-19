import { Component, OnInit, ViewChild } from '@angular/core';

import { MenuDirective} from '../directives/menu.directive';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild(MenuDirective, {static: true})
  menuHost: MenuDirective;

  constructor() { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    /*this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.menuHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;*/
  }

}