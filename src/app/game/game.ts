import {Engine, Color, DisplayMode, Input} from 'excalibur';
import { BehaviorSubject  } from 'rxjs';

import { HomeScene } from './scenes/index';
import { MENUS } from '../menu/menu.service';

export class Game extends Engine{

  public actionRequired: BehaviorSubject<MENUS> = new BehaviorSubject<MENUS>(null);

  constructor(canvas: string){
    super({
        canvasElementId: canvas,
        width: 1000,
        height: 1000,
        displayMode: DisplayMode.Container,
        pointerScope: Input.PointerScope.Canvas,
    })
    this.backgroundColor = Color.fromHex("0A0863");

    this.add('main-scene', new HomeScene(this));
    this.goToScene('main-scene');
  }


}
