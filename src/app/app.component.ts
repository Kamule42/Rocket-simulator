import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Game } from './game/game';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular';

  constructor(private router:Router){

  }

  ngOnInit(){
    let game = new Game("canvas");
    game.start();

    game.actionRequired.subscribe(action => {
      console.log(action);
      this.router.navigate([action]);
    })
  }
}
