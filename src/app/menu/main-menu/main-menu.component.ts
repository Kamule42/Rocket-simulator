import { Component, OnInit, Input } from '@angular/core';
import { MenuComponent } from '../menu-component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit, MenuComponent {


  @Input() data: any;
  
  constructor() { }

  ngOnInit() {
  }

}