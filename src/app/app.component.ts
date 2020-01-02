import { Component, OnInit } from '@angular/core';

import { Game } from './game/game';
import { MenuService, MENUS } from './menu/menu.service';
import { Actions } from './menu/actions.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  private game:Game;

  name = 'Space ride';
  activeMenu;
  constructor(private menu:MenuService){

  }

  ngOnInit(){
    this.game = new Game("canvas");
    this.game.start();

    this.game.actionRequired.subscribe(action => {
      console.log("action required : ", action);
      this.menu.activateMenu(action);
    })
  }

  onActionRequired(action: Actions){
    if(Actions.NEW_GAME === action){
      this.menu.activateMenu(MENUS.NEW_GAME);
    }
  }
}
