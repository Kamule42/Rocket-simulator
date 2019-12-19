import { Component, OnInit } from '@angular/core';

import { Game } from './game/game';
import { MenuService } from './menu/menu.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular';
  activeMenu;
  constructor(private menu:MenuService){

  }

  ngOnInit(){
    let game = new Game("canvas");
    game.start();

    game.actionRequired.subscribe(action => {
      console.log(action);
      this.menu.activateMenu(action);
    })
  }
}
