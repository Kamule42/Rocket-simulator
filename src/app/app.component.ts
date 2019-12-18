import { Component, OnInit } from '@angular/core';

import { Game } from './game/main';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular';

  ngOnInit(){
    let game = new Game();

    game.start("canvas");
  }
}
