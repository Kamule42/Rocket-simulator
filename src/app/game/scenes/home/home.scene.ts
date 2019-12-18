import { Scene } from 'excalibur';

import { Game } from '../../game';

export class HomeScene extends Scene{
  
  private game: Game;

  public onInitialize(game?: Game){
    this.game = game;
  }

  public onActivate(){
    console.log("Scene Home activated")
    this.game.actionRequired.next("main-menu");
  }
}