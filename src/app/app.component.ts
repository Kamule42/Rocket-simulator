import { Component, OnInit } from '@angular/core';

import { Game } from './game/game';
import { MenuService } from './menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular';
  activeMenu;
  constructor(private menu:MenuService){

  }

  ngOnInit(){
    const game = new Game("canvas");
    game.start();

    game.actionRequired.subscribe(action => {
      console.log("action required : ", action);
      this.menu.activateMenu(action);
    })
  }
}
