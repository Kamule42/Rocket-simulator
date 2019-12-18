import {Engine, Color} from 'excalibur';
import { Subject  } from 'rxjs';

import { HomeScene } from './scenes/index';

export class Game extends Engine{

  public actionRequired:Subject <string> = new Subject<string>();

  constructor(canvas: string){
    super({
        canvasElementId: canvas,
        width: 1000,
        height: 1000            
    })
    this.backgroundColor = Color.fromHex("0A0863");

    this.add('main-scene', new HomeScene(this));
    this.goToScene('main-scene');
  }


}