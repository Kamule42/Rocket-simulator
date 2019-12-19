import {Engine, Color, DisplayMode} from 'excalibur';
import { Subject  } from 'rxjs';

import { HomeScene } from './scenes/index';
import { Menu } from '../menu/menu.service';

export class Game extends Engine{

  public actionRequired:Subject <Menu> = new Subject<Menu>();

  constructor(canvas: string){
    super({
        canvasElementId: canvas,
        width: 1000,
        height: 1000,
        displayMode: DisplayMode.Container,  
    })
    this.backgroundColor = Color.fromHex("0A0863");

    this.add('main-scene', new HomeScene(this));
    this.goToScene('main-scene');
  }


}
